const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

// Menu burger

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')        
        })
    })
}

// Animation écriture - https://github.com/tameemsafi/typewriterjs

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Bonjour à tous, je suis Franck Cario')
.pauseFor(300)
.typeString(', <strong>Développeur Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #27ae60;">HTML / CSS</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #ea39ff;">JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #27ae60;">WordPress</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #ff6910;">ExpressJS</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #midnightblue;">ReactJS</span> !')
.start()