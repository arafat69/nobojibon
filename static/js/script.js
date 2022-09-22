window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    const homeNavbar = document.querySelector('.homeNavbar');
    if (homeNavbar) {
      document.querySelector('.homeNavbar').classList.remove('position-absolute');
      document.querySelector('.homeNavbar').classList.add('fixed-top', 'shadow-sm','navbgcolor');
    }else{
      document.querySelector('.defaultNavbar').classList.add('fixed-top', 'shadow-sm');
    }

  } else {
    const homeNavbar = document.querySelector('.homeNavbar');
    if (homeNavbar) {
      document.querySelector('.homeNavbar').classList.remove('fixed-top', 'shadow-sm', 'navbgcolor');
      document.querySelector('.homeNavbar').classList.add('position-absolute');
    }else{
      document.querySelector('.defaultNavbar').classList.remove('fixed-top', 'shadow-sm');
    }
  }
});
