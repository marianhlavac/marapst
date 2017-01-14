var store = {
  displayedQuestion: 0
};

function updateUI() {
  question = store.questions[store.displayedQuestion]

  $("#question-id").html(store.displayedQuestion + 1)
  $("#question-content").html(question.question)
  $("#question-solution").html(question.solution)
}

// ---

$(document).ready(function() {
  updateUI()
})
