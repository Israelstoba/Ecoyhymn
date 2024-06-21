var mainCon = document.querySelector('#main-con');
var appCon = document.querySelector('#app-con');
var homeIcon = document.querySelector('#home-icon');

mainCon.addEventListener('click', function () {
  appCon.style.left = '0';
});
homeIcon.addEventListener('click', function () {
  appCon.style.left = '100%';
});

////search element//////////
var searchBtn = document.querySelector('#search-btn');
var searchCloseBtn = document.querySelector('#search-el-close');
var searchWrapper = document.querySelector('#search-wrapper');
var searchEl = document.querySelector('#search-el');

searchBtn.addEventListener('click', function () {
  searchWrapper.style.left = '0';
  setTimeout(() => {
    searchEl.focus();
  }, 400);
});

searchCloseBtn.addEventListener('click', function () {
  searchWrapper.style.left = '100%';
  searchEl.value = '';
});
