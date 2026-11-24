const btnTema = document.getElementById('btn-tema');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let tamanhoFonte =16;


btnTema.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = 'Modo Claro';
    } else {
        btnTema.textContent = 'Modo Escuro';
    }
});


btnAumentar.addEventListener('click', () => {
    tamanhoFonte +=2;
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte >12) {
        tamanhoFonte-=2;
        document.documentElement.style.fontSize = tamanhoFonte + 'px';
    }
});
