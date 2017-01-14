var store = {
  displayedQuestion: 0
};

function updateUI() {
  question = store.questions[store.displayedQuestion]

  $('#question-id').html(store.displayedQuestion + 1)
  $('#question-page').html(store.displayedQuestion + 1 + '/' + store.totalQuestions)
  $('#question-content').html(question.question.replace(/\n/g,'<br>'))
  $('#question-solution').html(question.solution.replace(/\n/g,'<br>'))

  $('#question-tags').html('')

  if ('tags' in question) {
    question.tags.map(function(tag) {
      $('#question-tags').append(`<span class="uk-badge">${tag}</span> `)
    })
  }

  if ('steps' in question) {
    $('#question-steps').html(question.steps.replace(/\n/g,'<br>'))
    $('#question-steps-tab').show()
  } else {
    $('#question-steps-tab').hide()
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

// ---

$(document).ready(function() {
  updateUI()
})

$('#prev-question-top, #prev-question-bot').click(function () {
  store.displayedQuestion--
  updateUI()
})

$('#next-question-top, #next-question-bot').click(function () {
  store.displayedQuestion++
$('#rand-question').click(function () {
  store.displayedQuestion = Math.floor(Math.random() * store.totalQuestions)
  hideSolution()
  updateUI()
})
