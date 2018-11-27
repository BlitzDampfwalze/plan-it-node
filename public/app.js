checkLoggedin();

$(() => {
  const readmore = document.getElementsByClassName('accordion');

  let i = null;

  for (i = 0; i < readmore.length; i++) {
    readmore[i].addEventListener('click', function () {
      this.classList.toggle('active');

      if (this.classList.contains('active')) {
        $('.accordion').text('show less...')
      } else {
        $('.accordion').text('read more...')
      }

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})