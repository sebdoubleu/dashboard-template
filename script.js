const favoriteProject = document.querySelectorAll('.card-icons > img:first-of-type');

favoriteProject.forEach((e) => {
    e.addEventListener('click', () => {
      if (e.src.includes('/images/star-plus-outline.png')) {
        e.src = './images/star-check.png'
      } else {
        e.src = './images/star-plus-outline.png'
      }
  });
});