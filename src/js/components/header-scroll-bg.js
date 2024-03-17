const mainHeader = document.querySelector('.header');

if (mainHeader) {
  function onScroll() {
    if (mainHeader) {
      window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollPosition);
        if (scrollPosition > 1) {
          mainHeader.classList.add('active');
        } else {
          mainHeader.classList.remove('active')
        }
      });
    }
  }
  onScroll()
}
