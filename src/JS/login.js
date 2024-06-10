document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = loginForm.elements['email'].value;
        const senha = loginForm.elements['senha'].value;

       
        const usuario = JSON.parse(localStorage.getItem(email));

        if (usuario && usuario.senha === senha) {
            
            localStorage.setItem('loggedInUser', JSON.stringify({ email: usuario.email, nome: usuario.nome }));
            
            window.location.href = "/views/acompanhamento.html";
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    });
});
