import $ from 'jquery';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import './responsive.css'

import 'animate.css';


let menuBtn = document.getElementById('gamburger-menu-icon');
let bottomMenuLine = document.querySelector('.bottom-line-nav');
let nav =  document.querySelector('nav');
menuBtn.addEventListener('click', () =>{
  if(bottomMenuLine.style.display === 'flex'){
    bottomMenuLine.style.display = 'none';
    nav.classList.add('animate__fadeOutLeft');
    setTimeout(() => {
     nav.classList.remove('active');
     nav.classList.remove('animate__fadeOutLeft');
    }, 500);
    nav.classList.remove('animate__fadeInLeft');
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`
  }else{
    bottomMenuLine.style.display = 'flex';
    nav.classList.add('active');
    nav.classList.add('animate__fadeInLeft');
    menuBtn.innerHTML = '<ion-icon name="close-outline" class="close-nav"></ion-icon>'
  }
})

let closePopup = document.getElementById('close-pop-up__btn');
let popup = document.querySelector('.pop-up')
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
})
