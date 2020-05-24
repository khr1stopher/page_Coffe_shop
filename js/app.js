nav = document.getElementsByTagName('nav')[0];
header = document.getElementsByTagName('header')[0];
circle = document.getElementsByClassName('circulo')[0];
img_1 = document.getElementsByClassName('img')[0];
img_2 = document.getElementsByClassName('img')[1];
img_3 = document.getElementsByClassName('img')[2];

container_1 = $('.galery > .container')[0]
img_3.style.width = `calc((${img_1.offsetWidth}px + ${img_2.offsetWidth}px) / 2)`;
img_3.style.left = `calc(50% - (${img_3.offsetWidth}px / 2))`;
header.style.height = `calc(100vh - ${nav.offsetHeight}px*5)`;
window.onload = (event) => {
  circle.style.display = 'inherit'
};

window.addEventListener('resize', () => { 
	circle.style.top = `calc(${header.offsetHeight}px - 25px)`
});

circle.style.top = `calc(${header.offsetHeight}px - 25px)`;
img_3.style.top = `calc(${container_1.offsetTop}px + 7.5em)`;

// circle.addEventListener('click', () => {
// 	circle.getElementsByTagName('svg')[0].style.transform = 'rotate(180deg)'
// });