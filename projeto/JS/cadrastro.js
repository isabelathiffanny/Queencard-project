document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = form.elements.nome.value;
        const dataNascimento = form.elements.dataNascimento.value;
        const email = form.elements.email.value;
        const rgCpf = form.elements.rgCpf.value;
        const celular = form.elements.celular.value;
        const senha = form.elements.senha.value;
        const genero = form.elements.genero.value;

        // Verificar se o nome de usuário já existe (opcional)
        if (localStorage.getItem(email)) {
            alert('Este email já está cadastrado. Por favor, utilize outro.');
            return; // Sai da função se o email já estiver cadastrado
        }

        // Salvar dados no localStorage
        const usuario = {
            nome: nome,
            dataNascimento: dataNascimento,
            email: email,
            rgCpf: rgCpf,
            celular: celular,
            senha: senha,
            genero: genero
        };
        localStorage.setItem(email, JSON.stringify(usuario));

        // Redirecionar para a próxima página (opcional)
        window.location.href = "/views/login.html";
    });
});
