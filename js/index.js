// window.addEventListener('DOMContentLoaded', function () {
//     window.addEventListener('scroll', function () {
//         const header = document.querySelector('header');
//         header.classList.toggle('stiky', window.scrollY > 0)
//     })

//     const menuBtn = document.querySelector('.hamburger-menu')
//     const nivigation = document.querySelector('.header-center')

//     menuBtn.addEventListener('click', () => {
//         menuBtn.classList.toggle('active')
//         nivigation.classList.toggle('active')
//     })
// })

let btn = document.querySelector('.hamburger-menu')
let mobile = document.querySelector('.mobile')
let closeBtn = document.querySelector('.close-svg')
let link1 = document.querySelector('.m1')
let link2 = document.querySelector('.m2')
let link3 = document.querySelector('.m3')
let link4 = document.querySelector('.m4')
let link5 = document.querySelector('.m5')
let link6 = document.querySelector('.m6')
let link7 = document.querySelector('.m7')

btn.addEventListener('click', () => {
    mobile.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    mobile.style.display = 'none'
})

link1.addEventListener('click', () => {
    mobile.style.display = 'none'
})
link2.addEventListener('click', () => {
    mobile.style.display = 'none'
})
link3.addEventListener('click', () => {
    mobile.style.display = 'none'
})
link4.addEventListener('click', () => {
    mobile.style.display = 'none'
})
link5.addEventListener('click', () => {
    mobile.style.display = 'none'
})

siteContainer.addEventListener('click', () => {
    mobile.style.display = 'none'
})
