window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    // const homeNavbar = document.querySelector('.main_navBar');

      document.querySelector('.main_navBar').classList.add('fixed-top', 'shadow-sm');
      document.querySelector('.goToTop').style.display = "flex";

      // document.querySelector('.defaultNavbar').classList.add('fixed-top', 'shadow-sm');
    }
    // const homeNavbar = document.querySelector('.homeNavbar');
    // if (homeNavbar) {
      // document.querySelector('.homeNavbar').classList.remove('fixed-top', 'shadow-sm');
      // document.querySelector('.homeNavbar').classList.add('position-absolute');
    else{
      document.querySelector('.main_navBar').classList.remove('fixed-top', 'shadow-sm');
      document.querySelector('.goToTop').style.display = "none";
    }

});
