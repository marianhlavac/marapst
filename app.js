var store = {
  displayedQuestion: 0
};

function updateUI() {
  question = store.questions[store.displayedQuestion]

  $('#question-id').html(store.displayedQuestion + 1)
  $('#question-content').html(question.question.replace(/\n/g,'<br>'))
  $('#question-solution').html(question.solution.replace(/\n/g,'<br>'))

  $('#question-tags').html('')
  question.tags.map(function(tag) {
    $('#question-tags').append(`<span class="uk-badge">${tag}</span> `)
  })

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
  updateUI()
})
