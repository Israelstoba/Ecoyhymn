var mainCon = document.querySelector('#main-con');
var appCon = document.querySelector('#app-con');
var homeIcon = document.querySelector('#home-icon');

mainCon.addEventListener('click', function () {
  appCon.style.left = '0';
});
homeIcon.addEventListener('click', function () {
  appCon.style.left = '100%';
});
