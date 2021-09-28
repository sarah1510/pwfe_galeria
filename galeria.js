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

const limparId = (urlImagem) => urlImagem.split("/")[2].split(".")[0]

// se tiver espaço, usar o: .replace(" ", "-")
//se tiver que colocar em letra maiúscula usar: .toLowerCase()

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
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}
const carregarImagens = () => imagens.forEach(criarItem)



const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)

    // 1° maneira
    const indice = indice > 0 ? indice - 1 : arr.length -1

    // 2º maneira

    // let indiceAnterior
    // if(indice > 0){
    //     indiceAnterior = indice - 1 
    // }else{
    //     indiceAnterior = arr.length - 1
    // }
    // const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1? indice +1 :0
    const idProximo = limparId(arr[indiceProximo])

    

    slide.innerHTML = `
        <div class="image-container">
        <a href="" class="fechar">&#10006;</a>
        <a href="${idAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="${idProximo}" class="navegacao proximo">&#187;</a>
        </div>
    `
}
const carregarSlides = () => imagens.forEach(criarSlide)

carregarImagens()
carregarSlides()