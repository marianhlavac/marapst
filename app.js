/**
 * App global state.
 */
var store = {
  displayedQuestion: 0
};

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

  // Queue MathJax re-rendering
  MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
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

// ---

/**
 * Initialization after page load.
 */
$(document).ready(setTimeout(function() {
  updateUI()

  store.contributors.map(function(contributor) {
    $('#contributors').append(`<a href="mailto:${contributor[1]}">${contributor[0]}</a> `)
  })
}, 500))

/**
 * Prev button click handling.
 */
$('#prev-question-top, #prev-question-bot').click(function () {
  if (store.displayedQuestion <= 0) return;
  store.displayedQuestion--
  hideSolution()
  updateUI()
})

/**
 * Next button click handling.
 */
$('#next-question-top, #next-question-bot').click(function () {
  if (store.displayedQuestion >= store.totalQuestions - 1) return;
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
