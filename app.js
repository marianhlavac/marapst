/**
 * App global state.
 */
var store = {
  displayedQuestion: 0,
}

/**
 * Updates the UI, propagating all state variables to the DOM.
 */
function updateUI() {
  question = store.questions[store.displayedQuestion]

  // Update single-value always displayed fields
  $('#question-id').html(store.displayedQuestion + 1)
  $('#question-page').html(store.displayedQuestion + 1 + '/' + store.totalQuestions)
  $('#question-content').html(question.question.replace(/\n/g,'<br>'))
  $('#question-solution').html(question.solution.replace(/\n/g,'<br>'))

  // Update tags
  $('#question-tags').html('')
  if ('tags' in question) {
    question.tags.map(function(tag) {
      $('#question-tags').append(`<span class='uk-badge'>${tag}</span> `)
    })
  }

  // Update steps section or hide it
  if ('steps' in question) {
    $('#question-steps').html(question.steps.replace(/\n/g,'<br>'))
    $('#question-steps-tab').show()
  } else {
    $('#question-steps-tab').hide()
  }

  // Update source section or hide it
  if ('source' in question) {
    $('#question-source a').text(question.source[0]).attr('href', question.source[1])
  }

  // Update progress bars
  updateProgressBars()

  // Determine and update question status
  if (store.userData.knownQuestions.indexOf(store.displayedQuestion.toString()) != -1) {
    $('#question-status').html('<span class="uk-label uk-label-success">umíš</span>')
    $('#known-toggle input').prop('checked', true)
  } else if (store.userData.displayedQuestions.indexOf(store.displayedQuestion.toString()) != -1) {
    $('#question-status').html('<span class="uk-label">zobrazeno</span>')
    $('#known-toggle input').prop('checked', false)
  } else {
    $('#question-status').html(' ')
    $('#known-toggle input').prop('checked', false)
  }

  // Set this question as displayed
  setDisplayedQuestion(store.displayedQuestion)

  // Queue MathJax re-rendering
  MathJax.Hub.Queue(['Typeset', MathJax.Hub])
}

/**
 * Hides all solution and steps sections.
 */
function hideSolution() {
  $('#question-solution-tab').removeClass('uk-open')
  $('#question-solution').attr('aria-hidden', 'true').attr('hidden', 'hidden')
  $('#question-steps-tab').removeClass('uk-open')
  $('#question-steps').attr('aria-hidden', 'true').attr('hidden', 'hidden')
}

function readUserData() {
  store.userData = {
    displayedQuestions: localStorage.displayed.split(','),
    knownQuestions: localStorage.known.split(','),
    lastDisplayed: localStorage.lastDisplayed,
  }
}

function setDisplayedQuestion(id) {
  localStorage.lastDisplayed = id
  if (store.userData.displayedQuestions.indexOf(id.toString()) == -1) {
    store.userData.displayedQuestions.push(id.toString())
    localStorage.displayed = store.userData.displayedQuestions.join(',')
  }
}

function setKnownQuestion(id, isKnown) {
  if (isKnown && store.userData.knownQuestions.indexOf(id.toString()) == -1) {
    store.userData.knownQuestions.push(id.toString())
  } else {
    store.userData.knownQuestions.splice(store.userData.knownQuestions.indexOf(id.toString()), 1)
  }
  localStorage.known = store.userData.knownQuestions.join(',')
}

function updateProgressBars() {
  $('.total-questions').text(store.totalQuestions)

  $('#shown-progress').attr('value', store.userData.displayedQuestions.length - 1)
    .attr('max', store.totalQuestions)
  $('#shown-questions').text(store.userData.displayedQuestions.length - 1)

  $('#know-progress').attr('value', store.userData.knownQuestions.length - 1)
    .attr('max', store.totalQuestions)
  $('#know-questions').text(store.userData.knownQuestions.length - 1)
}

// ---

/**
 * Initialization after page load.
 */
$(document).ready(setTimeout(function() {
  // Fill in local storage data if they are not present.
  if (!localStorage.isSet) {
    localStorage.isSet = 'true'
    localStorage.displayed = ' '
    localStorage.known = ' '
    localStorage.lastDisplayed = '0'
  }

  // Read user data.
  readUserData()

  // Set displayed question to the last displayed.
  store.displayedQuestion = parseInt(store.userData.lastDisplayed)

  // Update the UI on start.
  updateUI()

  // Display contributors in footer.
  store.contributors.map(function(contributor) {
    $('#contributors').append(`<a href="mailto:${contributor[1]}">${contributor[0]}</a> `)
  })
}, 500))

/**
 * Prev button click handling.
 */
$('#prev-question-top, #prev-question-bot').click(function () {
  if (store.displayedQuestion <= 0) return
  store.displayedQuestion--
  hideSolution()
  updateUI()
})

/**
 * Next button click handling.
 */
$('#next-question-top, #next-question-bot').click(function () {
  if (store.displayedQuestion >= store.totalQuestions - 1) return
  store.displayedQuestion++
  hideSolution()
  updateUI()
})

/**
 * Random button click handling.
 */
$('#rand-question').click(function () {
  store.displayedQuestion = Math.floor(Math.random() * store.totalQuestions)
  hideSolution()
  updateUI()
})

/**
 * Random button click handling.
 */
$('#reset').click(function () {
  localStorage.isSet = ''
  location.reload()
})

/**
 * Known toggle click handling.
 */
$('#known-toggle input').change(function () {
  setKnownQuestion(store.displayedQuestion, $(this).is(':checked'))
  updateProgressBars()
})
