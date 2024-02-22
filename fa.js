function toggleAnswer(index) {
    var answer = document.querySelectorAll('.faq-answer')[index - 1];
    answer.classList.toggle('show');
  }