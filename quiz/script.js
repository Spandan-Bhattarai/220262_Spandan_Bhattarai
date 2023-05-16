const form = document.getElementById('quiz-form');
const results = document.getElementById('results');

function func(event) {
    event.preventDefault();

    let score = 0;

    const answers = ['b', 'b', 'a'];

    for (let i = 1; i <= 3; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (!answer) {
            alert('Please answer all questions');
            return;
        }

        if (answer.value === answers[i - 1]) {
            score++;
        }
    }
    results.innerHTML = `You scored ${score} out of ${answers.length}`;
};

