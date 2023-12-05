
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