const favoriteProject = document.querySelectorAll('.card-icons > img:first-of-type');
const bell = document.querySelector('#bell');

favoriteProject.forEach((e) => {
    e.addEventListener('click', () => {
      if (e.src.includes('/images/star-plus-outline.png')) {
        e.src = './images/star-check.png'
      } else {
        e.src = './images/star-plus-outline.png'
      }
  });
});

bell.addEventListener('click', () => {
  if (bell.src.includes('/images/bell-clicked.png')) {
    bell.src = './images/bell.png'
  } else {
    bell.src = './images/bell-clicked.png'
  }
});