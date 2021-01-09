'use strict';

{
  const images = [
    'img/amiyamanouchi.png',
    'img/tabitabi.png',
    'img/cuisinebo.png',
    'img/saltpepper.png',
    'img/pizza.png',
    'img/jadeandy.png',
  ];

  const titles = [
    'Ami Yamanouchi',
    'tabi tabi',
    'CUISINEBO',
    'SALT & PEPPER',
    'PIZZA SHOP',
    'JADE & ANDY',
  ];

  let currentIndex = 0;

  const activeImage = document.getElementById('active');
  activeImage.src = images[currentIndex];

  // images.forEach((image, index) => {
  //   const img = document.createElement('img');
  //   img.src = image;

  //   const li = document.createElement('li');
  //   if (index === currentIndex) {
  //     li.classList.add('current')
  //   }

  //   li.addEventListener('click', () => {
  //     activeImage.src = image;
  //     const cards = document.querySelectorAll('.portfolio_cards > li');
  //     cards[currentIndex].classList.remove('curret');
  //     currentIndex = index;
  //     cards[currentIndex].classList.add('curret');
  //   })

  //   li.appendChild(img);
  //     document.querySelector('.portfolio_cards').appendChild(li);
  // });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.portfolio_cards > li')[target].click();
  });

  const activeTitle = document.getElementById('title');
  activeTitle.textContent = titles[currentIndex];


  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mobile = document.querySelector('.sp-menu')

  open.addEventListener('click', () => {
    mobile.classList.add('show');
    open.classList.add('hide');
  })
 
}