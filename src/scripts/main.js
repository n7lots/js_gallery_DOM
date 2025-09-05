'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  thumbs.addEventListener('click', (ev) => {
    ev.preventDefault();

    let link;
    const tName = ev.target.tagName;

    if (tName === 'IMG') {
      link = ev.target.parentNode;
    } else if (tName === 'A') {
      link = ev.target;
    }

    if (!link) {
      return;
    }

    largeImg.src = link.href;
  });
});
