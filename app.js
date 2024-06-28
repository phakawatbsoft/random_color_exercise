const randomColor = ()=>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}

const btns = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')

for(let btn of btns){
    btn.addEventListener('click',colorize)
}

for(let h1 of h1s){
    h1.addEventListener('click',colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}

window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log('UP!')
            break
        case 'ArrowDown':
            console.log('DOWN!')
            break
        case 'ArrowLeft':
            console.log('LEFT!')
            break
        case 'ArrowRight':
            console.log('RIGHT!')
            break
        default:
            console.log('IGNORE!')
    }
})

