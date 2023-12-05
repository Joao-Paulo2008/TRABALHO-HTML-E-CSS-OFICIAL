const butoes = document.querySelectorAll('.btn')
const imgs = document.querySelectorAll('.img')
let passador = 0;
const maxItems = imgs.length

butoes.forEach((button)  => {
    button.addEventListener('click', (e) => {
        const left = e.target.classList.contains("esquerda");       

        if (left) {
            passador -= 1;
        } else {
            passador += 1;;
        }

        if(passador >= maxItems) {
            passador = 0;
        } 
        if (passador < 0) {
            passador = maxItems - 1;
        }

        console.log("imgs", passador, left)

        imgs.forEach(img => 
            img.classList.remove('partida'));
            imgs[passador].scrollIntoView({
            inline: "center",
            behavior: "smooth",

        })

        imgs[passador].classList.add("partida");
    })

})


const butoes2 = document.querySelectorAll('.btn')
const cards = document.querySelectorAll('.card')
let passador2 = 0;
const maxItem = cards.length

butoes2.forEach((button)  => {
    button.addEventListener('click', (e) => {
        const left = e.target.classList.contains("esquerda");       

        if (left) {
            passador2 -= 1;
        } else {
            passador2 += 1;;
        }

        if(passador2 >= maxItem) {
            passador2 = 0;
        } 
        if (passador2 < 0) {
            passador2 = maxItem - 1;
        }

        console.log("cards", passador2, left)

        cards.forEach(img => 
            img.classList.remove('atual'));
            cards[passador2].scrollIntoView({
            inline: "center",
            behavior: "smooth",

        })

        cards[passador2].classList.add("atual");
    })

})

