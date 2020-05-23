nav = document.getElementsByTagName('nav')[0];
header = document.getElementsByTagName('header')[0];
circle = document.getElementsByClassName('circulo')[0];

header.style.height = `calc(100vh - ${nav.offsetHeight}px*5)`;
circle.style.top = `calc(${header.offsetHeight}px - 25px)`;

window.onload = (event) => {
  circle.style.display = 'inherit'
};

window.addEventListener('resize', () => { 
	circle.style.top = `calc(${header.offsetHeight}px - 25px)`
});

// circle.addEventListener('click', () => {
// 	circle.getElementsByTagName('svg')[0].style.transform = 'rotate(180deg)'
// });