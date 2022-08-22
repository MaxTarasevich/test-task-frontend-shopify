/*Получаю необходимые элементы*/ 
const content = document.querySelector(`.collapsible__content`)
const button = document.querySelector(`.collapsible__button`)
const visible = document.querySelector(`.collapsible__action--visible`)
const hidden = document.querySelector(`.collapsible__action--hidden`)

let buttonState = true // Это состояние кнопки, в зависимости от него будет скрываться/показываться коллапс

/*Определяю ключевые кадры и опции для анимации коллапса*/
const keyFramesContent = [
    {minHeight:'50px',opacity:'1',overflow:'visible'},
    {minHeight:'0px',opacity:'0',overflow:'hidden'}
]

const options = {
    duration:1000,
    fill:'forwards',
    iteration:1
}

/* Для удобства и краткости записи инициирую анимацию, сохраняю в переменную, ставлю на паузу*/
let collaps = content.animate(keyFramesContent,options)
    collaps.pause()

    hidden.style.fontSize = '0px' // Скрываю лишний спан выставив размер шривта на 0

    /*Вешаю обработчик события на кнопку */
button.addEventListener('click',()=>{

   if(buttonState){
        collaps.playbackRate = 1 //при положительном  значении свойства анимация идет в обычном порядке, при отрицательном  - в обратном, при 0 - пауза
        collaps.play()
        hidden.style.fontSize = '13px'
        visible.style.fontSize = '0px'

        buttonState = false
        
   }else{
        collaps.playbackRate = -1
        collaps.play()
        visible.style.fontSize = '13px'
        hidden.style.fontSize = '0px'

        buttonState = true
   }
    
})