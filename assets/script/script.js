// Lógica de login no index.html
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const responseMessage = document.getElementById('response-message');

    emailError.textContent = '';
    passwordError.textContent = '';
    responseMessage.textContent = '';
    responseMessage.style.color = 'green';

    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    if (!password || password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        isValid = false;
    }

    if (isValid) {
        responseMessage.textContent = 'Login realizado com sucesso!';
        setTimeout(() => {
            window.location.href = './assets/pages/dashboard.html'; 
        }, 2000);
    } else {
        responseMessage.textContent = 'Preencha os campos corretamente.';
        responseMessage.style.color = 'red';
    }
});
