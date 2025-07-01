// Alternar modo escuro/claro
const botaoModo = document.getElementById("botaoModo");
const body = document.body;

botaoModo.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    body.classList.toggle("modo-claro");
    botaoModo.textContent = body.classList.contains("modo-escuro") ? "☀️" : "🌙";
});

// Modal da imagem
const fotoPerfil = document.getElementById("fotoPerfil");
const modal = document.getElementById("modalImagem");
const modalImg = document.getElementById("imagemAmpliada");
const fecharModal = document.getElementsByClassName("fechar")[0];

fotoPerfil.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

fecharModal.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// Clique no botão E-mail
document.getElementById("emailBtn").addEventListener("click", () => {
    alert("Você pode me contatar pelo e-mail: cruzfelipe941@gmail.com");
});

