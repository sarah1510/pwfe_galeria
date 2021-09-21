"use strict"
//array: quem vai trazer essas informações é o back-end
const imagens = [
    "./img/coliseu.jpg",
    "./img/cristo.jpg",
    "./img/estatua-liberdade.jpg",
    "./img/golden-gate-bridge.jpg",
    "./img/macchu-picchu.jpg",
    "./img/muralha-china.jpg",
    "./img/taj-mahal.jpg",
    "./img/torre-eifel.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    
    //MANEIRA INCORRETA: 
        // container.innerHTML += `
        //     <a href="${urlImagem}" class="galeria-itens">
        //         <img src="${urlImagem}" alt="">
        //     </a>
        // `

    //MANEIRA CORRETA:
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()