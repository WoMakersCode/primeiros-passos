let items = document.querySelectorAll('ul > li');

items.forEach((item) => {
  item.onclick = function () {
    document.querySelector('ul > li.active').classList.remove('active');
    item.classList.add('active');
  };
});
