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
    appState.totalQuestions = meta.q.length

    loadQuestion(appState.displayedQuestionId, function(content) {
      var meta = appState.questionsMeta.q[appState.displayedQuestionId]
      meta.id = appState.displayedQuestionId

      displayQuestion(meta, content, appState.totalQuestions)
    })
  })
})

$(window).on('hashchange', function() {
  appState.displayedQuestionId = parseInt(window.location.hash.substr(1) - 1)

  loadQuestion(appState.displayedQuestionId, function(content) {
    var meta = appState.questionsMeta.q[appState.displayedQuestionId]
    meta.id = appState.displayedQuestionId

    displayQuestion(meta, content, appState.totalQuestions)
  })
})

$("#reset").on('click', function() {
  resetUserData(localStorage)
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
    callback(content)
  }).fail(function(err) {
    alert('kek:' + err) // TODO: fix this
  })
}

function displayQuestion(meta, content, total) {
  // Parse the frontmatter meta from the content
  parsedQuestion = parseFrontmatter(content)
  parsedQuestion.meta.id = meta.id

  // Display the meta section
  displayQuestionMeta(parsedQuestion.meta, total)

  // Put the markdown content in there
  markjax(parsedQuestion.markdown, document.getElementById('q-content'))

  // Update UI
  updateButtons(meta.id, total)

  // Save this question as displayed
  appState.userData.lastDisplayed = meta.id
  appState.userData.displayed.push(meta.id)
  window.location.hash = meta.id + 1
  synchronizeUserData(localStorage, appState.userData)
}

function displayQuestionMeta(meta, total) {
  $('#q-title').text(`Příklad ${meta.id+1}`)
  $('#q-tags').html('')
  
  meta.tags.map(function(tag) {
    $('#q-tags').append(`<span class="uk-badge">${tag}</span>`)
  })

  var srcUrlParts = meta.source.split('/')
  var srcUrlDomain = srcUrlParts[2].startsWith('www') ? srcUrlParts[2].substring(4) : srcUrlParts[2]
  var srcShortUrl = `${srcUrlDomain}/.../${srcUrlParts[srcUrlParts.length - 1]}`

  $('#q-meta').html(`${meta.id+1}/${total} | <a href="${meta.source}">${srcShortUrl}</a>`)
}

function updateButtons(id, total) {
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
  if (!storage.isSet && storage.version != '110') {
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
