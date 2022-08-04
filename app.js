
let botonMenuOpen = document.querySelector(".menubars")
let botonMenuClose = document.querySelector(".cerrar")
let menuCont = document.querySelector('.menu-responsive')
let menuLista = document.querySelector('.menu-desplegable')
let menuHover = document.querySelectorAll('.menu a')

let btnModoOscuro = document.querySelector('#darkmode')


let FondoAmarillo = document.querySelectorAll('.fondo-amarillo') 
let FondoBlanco = document.querySelectorAll('.fondo-blanco')
let navBar = document.querySelector('header')



botonMenuOpen.addEventListener('click', () =>{
    menuCont.style.display = 'block'
    botonMenuOpen.style.display = 'none'
    botonMenuClose.style.display = 'block'
    menuLista.style.display = 'flex'
})

botonMenuClose.addEventListener('click', () =>{
    botonMenuOpen.style.display = 'block'
    menuCont.style.display = 'none'
    botonMenuClose.style.display = 'none'
})



btnModoOscuro.addEventListener('click', ()=>{

    navBar.classList.toggle('header-osc');
    FondoBlanco.forEach((item)=>{
    item.classList.toggle('fondo-negro');
       
      
    })
    menuHover.forEach((item)=>{
        item.classList.toggle('menu-osc');
    })
   

   
  

  
})