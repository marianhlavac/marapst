var appState = {
  displayedQuestionId: 0,
  totalQuestions: 0,
  questionsMeta: {},
  userData: {}
}

$(document).ready(function () {
  appState.userData = readUserData(localStorage)

  if (window.location.hash) {
    appState.displayedQuestionId = parseInt(window.location.hash.substr(1) - 1)
  } else {
    appState.displayedQuestionId = appState.userData.lastDisplayed
  }

  loadQuestionsMeta(function (meta) {
    appState.questionsMeta = meta
    appState.totalQuestions = meta.c

    loadQuestion(appState.displayedQuestionId, function(meta, content) {
      displayQuestion(meta, content)
    })
  })
})

$(window).on('hashchange', function() {
  appState.displayedQuestionId = parseInt(window.location.hash.substr(1) - 1)

  loadQuestion(appState.displayedQuestionId, function(meta, content) {
    displayQuestion(meta, content)
  })
})

$("#reset").on('click', function() {
  resetUserData(localStorage)
})

$("#known-toggle").on('click', function() {
  toggleKnownQuestion(appState.displayedQuestionId)
})

// ---

function loadQuestionsMeta(callback) {
  $.get('questions/meta.json').done(function(meta) {
    callback(JSON.parse(meta))
  }).fail(function(err) {
    alert('lel:' + err) // TODO: fix this
  })
}

function loadQuestion(id, callback) {
  $.get('questions/' + id + '.md').done(function(content) {
    // Parse the frontmatter meta from the content
    parsedQuestion = parseFrontmatter(content)
    parsedQuestion.meta.id = id

    callback(parsedQuestion.meta, parsedQuestion.content)
  }).fail(function(err) {
    alert('kek:' + err) // TODO: fix this
  })
}

function displayQuestion(meta, content) {
  // Display the meta section
  displayQuestionMeta(parsedQuestion.meta, appState.totalQuestions)

  // Put the markdown content in there
  markjax(parsedQuestion.markdown, document.getElementById('q-content'))

  // Save this question as displayed
  appState.userData.lastDisplayed = meta.id
  if (appState.userData.displayed.indexOf(meta.id) === -1) {
    appState.userData.displayed.push(meta.id)
  }

  // Update UI
  var isKnown = appState.userData.known.indexOf(meta.id) !== -1
  var displayedCount = appState.userData.displayed.length
  var knownCount = appState.userData.known.length
  updateButtons(meta.id, appState.totalQuestions, isKnown)
  updateProgressBars(displayedCount, knownCount, appState.totalQuestions)

  window.location.hash = meta.id + 1
  synchronizeUserData(localStorage, appState.userData)
}

function displayQuestionMeta(meta, total) {
  $('#q-title').text(`Příklad ${meta.id+1}`)
  $('#q-tags').html('')

  meta.tags.map(function(tag) {
    $('#q-tags').append(`<span class="uk-badge">${tag}</span>`)
  })

  if (meta.verified) {
    $('#q-title').append(`<span class="uk-badge verified-badge"
                          title="Ověřil <strong>${meta.verified}</strong>" uk-tooltip></span>`)
  }

  if (appState.userData.known.indexOf(meta.id) !== -1) {
    $('#q-title').append(`<span class="uk-label uk-label-success">Umíš</span>`)
  } else if (appState.userData.displayed.indexOf(meta.id) !== -1) {
    $('#q-title').append(`<span class="uk-label">Zobrazeno</span>`)
  }

  var srcUrlParts = meta.source.split('/')
  var srcUrlDomain = srcUrlParts[2].startsWith('www') ? srcUrlParts[2].substring(4) : srcUrlParts[2]
  var srcShortUrl = `${srcUrlDomain}/.../${srcUrlParts[srcUrlParts.length - 1]}`

  $('#q-meta').html(`${meta.id+1}/${total} | Přidal(a) ${meta.author} |
                    <a href="${meta.source}">${srcShortUrl}</a>`)
}

function toggleKnownQuestion(id) {
  var isKnown = appState.userData.known.indexOf(id) !== -1

  if (isKnown) {
    appState.userData.known.splice(appState.userData.displayed.indexOf(id), 1)
  } else {
    appState.userData.known.push(id)
  }

  // Update UI
  isKnown = !isKnown
  var displayedCount = appState.userData.displayed.length
  var knownCount = appState.userData.known.length
  updateButtons(id, appState.totalQuestions, isKnown)
  updateProgressBars(displayedCount, knownCount, appState.totalQuestions)

  synchronizeUserData(localStorage, appState.userData)
}

function updateButtons(id, total, isKnown) {
  if (id > 0) {
    $('.q-button-prev').attr('href', '#' + id)
  } else {
    $('.q-button-prev').removeAttr('href')
  }

  if (id < total - 1) {
    $('.q-button-next').attr('href', '#' + (id + 2))
  } else {
    $('.q-button-next').removeAttr('href')
  }

  var next = appState.displayedQuestionId
  while (next == appState.displayedQuestionId) {
    next = Math.floor(Math.random() * total)
  }

  $('.q-button-rand').attr('href', '#' + (next + 1))
  $('.question-known').prop('checked', isKnown)
}

function updateProgressBars(displayed, known, total) {
  $('.total-questions').text(total)

  $('#shown-progress').attr('value', displayed).attr('max', total)
  $('#shown-questions').text(displayed)

  $('#know-progress').attr('value', known).attr('max', total)
  $('#know-questions').text(known)
}

function resetUserData(storage) {
  storage.isSet = ''
  location.reload()
}

function readUserData(storage) {
  // Init local storage if it's app first run
  if (!storage.isSet || storage.version != '110') {
    storage.isSet = 'true'
    storage.version = '110'
    storage.displayed = '[]'
    storage.known = '[]'
    storage.lastDisplayed = '0'
  }

  return {
    lastDisplayed: parseInt(storage.lastDisplayed),
    displayed: JSON.parse(storage.displayed),
    known: JSON.parse(storage.known)
  }
}

function synchronizeUserData(storage, userData) {
  storage.isSet = true
  storage.displayed = JSON.stringify(userData.displayed)
  storage.known = JSON.stringify(userData.known)
  storage.lastDisplayed = userData.lastDisplayed
}

function parseFrontmatter(content) {
  var r = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/g.exec(content)

  return {
    meta: jsyaml.load(r[2]),
    markdown: r[3]
  }
}
