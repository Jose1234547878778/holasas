document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'alumno' && password === '2024') {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('course').classList.remove('hidden');
    } else {
        document.getElementById('error').classList.remove('hidden');
    }
});

document.getElementById('startQuiz').addEventListener('click', function () {
    document.getElementById('course').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
});

document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let score = 0;

    // Pregunta 1
    if (document.querySelector('input[name="q1"]:checked')?.value === 'correct') score++;
    // Pregunta 2
    if (document.querySelector('select[name="q2"]')?.value === 'correct') score++;
    // Pregunta 3
    document.querySelectorAll('input[name="q3"]:checked').forEach(input => {
        if (input.value === 'correct') score++;
    });
    // Pregunta 4
    if (document.querySelector('input[name="q4"]:checked')?.value === 'correct') score++;
    // Pregunta 5
    if (document.querySelector('input[name="q5"]:checked')?.value === 'correct') score++;

    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = `Tu calificación es: ${score}/5`;
});
