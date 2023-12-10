import $, { contains } from 'jquery';

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


let productsList = document.getElementById('products-listing-container');
let categoryFilter = document.getElementById('Category');
let ProductTypeFilter = document.getElementById('ProductType');
let PriceFilter = document.getElementById('Price');
let BrandFilter = document.getElementById('Brand');
let sorting = document.getElementById('sorting');
let loadMoreBtn = document.getElementById('load-more-btn');

for(let i = 0; i < productsList.children.length; i++){
  if(i > 7){ 
    productsList.children[i].style.display = 'none';
  }
  loadMoreBtn.addEventListener('click', function(){
    productsList.children[i].style.display = 'block';
    loadMoreBtn.style.display = 'none';  
  })
}

  categoryFilter.addEventListener('submit', function(e){
    e.preventDefault();
    for (let i = 0; i < categoryFilter.length - 1; i++){
      console.log(categoryFilter[i].checked)
    do{
      if(categoryFilter[i].checked === true){
        for(let j = 0; j < productsList.children.length; j++) {
        let productCategory = productsList.children[j].getAttribute('data-category');
        if(categoryFilter[i].getAttribute('data-category') === productCategory){
          productsList.children[j].style.display = 'block';
        }else{
          productsList.children[j].style.display = 'none';
        }
      }
      }
    }while(categoryFilter[i].checked === 'true')
  }
  })

let showFiltersBtn = document.getElementById('showFiltersBtn');
let showSortingBtn = document.getElementById('showSortingBtn');
let filtersContainer = document.querySelector('.filters-container');
let SortingContainer = document.querySelector('.sorting-container');

showFiltersBtn.addEventListener('click', function(){
  if(filtersContainer.style.display == 'flex'){
    filtersContainer.style.display = 'none';
    showFiltersBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
    showFiltersBtn.querySelector('svg').style.display = 'inline-block';
    showFiltersBtn.querySelector('ion-icon').style.display = 'none';
    SortingContainer.style.display = 'none';
  }else{
  filtersContainer.style.display = 'flex';
  showFiltersBtn.style.background = '#e3e6e9';
  showFiltersBtn.querySelector('svg').style.display = 'none';
  showFiltersBtn.querySelector('ion-icon').style.display = 'inline-block';
  showSortingBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
  SortingContainer.style.display = 'none';
  showSortingBtn.querySelector('svg').style.display = 'inline-block';
  showSortingBtn.querySelector('ion-icon').style.display = 'none';
  }
})
showSortingBtn.addEventListener('click', function(){
  if(SortingContainer.style.display == 'flex'){
    SortingContainer.style.display = 'none';
    showSortingBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
    showSortingBtn.querySelector('svg').style.display = 'inline-block';
    showSortingBtn.querySelector('ion-icon').style.display = 'none';
  }else{
    SortingContainer.style.display = 'flex';
    showSortingBtn.style.background = '#e3e6e9';
    showFiltersBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
    filtersContainer.style.display = 'none';    
    showSortingBtn.querySelector('svg').style.display = 'none';
    showSortingBtn.querySelector('ion-icon').style.display = 'inline-block';
    showFiltersBtn.querySelector('svg').style.display = 'inline-block';
    showFiltersBtn.querySelector('ion-icon').style.display = 'none';
  }
})

let dropbtn = document.querySelectorAll('.dropbtn');
let dropdownContent = document.querySelectorAll('.dropdown-content');

for(let i = 0; i < dropbtn.length; i++){
  dropbtn[i].addEventListener('click', function(){
      if(dropdownContent[i].style.display == 'none'){
      for(let j = 0; j < dropbtn.length; j++){
        if((j!= i &&(dropdownContent[j].style.display = 'block'))){
        dropdownContent[j].style.display = 'none';
        dropbtn[j].querySelector('svg').style.display = 'inline-block';
        dropbtn[j].querySelector('ion-icon').style.display = 'none';
      }}
      dropdownContent[i].style.display = 'block';
      dropbtn[i].querySelector('svg').style.display = 'none';
      dropbtn[i].querySelector('ion-icon').style.display = 'inline-block';
    }else{
      dropdownContent[i].style.display = 'none';
      dropbtn[i].querySelector('svg').style.display = 'inline-block';
      dropbtn[i].querySelector('ion-icon').style.display = 'none';
    }
  })
}
