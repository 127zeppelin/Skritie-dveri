jQuery(function ($) {

    // Do stuff here

}); // jQuery End

    const togButton = document.querySelector('.js-toggleMainNav');
	  const menuTog = document.getElementById('spacenav');
    const burgerTop = document.querySelector('.hamburger-icon.top');
    const burgerMid = document.querySelector('.hamburger-icon.middle');
    const burgerBot = document.querySelector('.hamburger-icon.bottom');
    const mainMarg = document.querySelector('.site-main');
	togButton.addEventListener('click', function() {
    menuTog.classList.toggle('open');
    burgerTop.classList.toggle('active');
    burgerMid.classList.toggle('active');
    burgerBot.classList.toggle('active');
	if(menuTog.classList.contains('open')){
		mainMarg.classList.add('openactive');
	}else{
		mainMarg.classList.remove('openactive');
	}
});
	
const canvasMenu = document.getElementById('menubg');
canvasMenu.style.width = '100%';
canvasMenu.style.height = '100%';
canvasMenu.width = canvasMenu.offsetWidth;
canvasMenu.height = canvasMenu.offsetHeight;
console.log(canvasMenu.width, canvasMenu.height);
const ctx = canvasMenu.getContext('2d');
ctx.textAlign = 'right'; // выравниваем по правому краю
// Создаем элемент <img> и задаем ему SVG-изображение в качестве источника
const img = new Image();
img.src = './wp-content/uploads/2023/03/kvadro.svg';

// Ждем, пока изображение будет загружено, затем рисуем его на холсте canvas
img.onload = function() {
  if (img.complete) {
    const aspectRatio = img.width / img.height; // соотношение сторон исходного изображения
    const newHeight = canvasMenu.height; // новая высота будет равна высоте canvas
    const newWidth = newHeight * aspectRatio; // новая ширина вычисляется по соотношению сторон
    ctx.drawImage(img, canvasMenu.width - newWidth, 0, newWidth, newHeight); // рисуем изображение с новой шириной и высотой и сдвигаем его на нужное расстояние вправо
  } else {
    console.log('Ошибка загрузки SVG');
  }
};

