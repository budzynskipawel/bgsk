document.addEventListener("DOMContentLoaded", function() {
  // alert("DOMContentLoaded");
  var hamburger = document.getElementById('hamburger');
  var navList = document.getElementById('nav-list');
  var listItems = navList.querySelectorAll('li');
  var menu = document.getElementById('menu');
  var sticky = menu.offsetTop;
  var about = document.getElementById('about');

  // hamburger menu
  hamburger.addEventListener("click", function onClick(event) {
    hamburger.classList.toggle('hamburger-active');
    navList.classList.toggle('nav-list-block');
  });

  for(var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function onClick(event) {
      hamburger.classList.remove('hamburger-active');
      navList.classList.remove('nav-list-block');
    })
  }
  //eo hamburger MENU
  //sticky menu:
  function stickyMenu() {
    var pageTop = window.pageYOffset;
    console.log('page: ', pageTop, "menu: ", sticky);
    if(pageTop >= sticky) {
      menu.classList.add('sticky');
      about.style.paddingTop = "100px";
    } else {
      menu.classList.remove('sticky');
      about.style.paddingTop = "0";
    }
  };
  window.addEventListener('resize', function onResize(e) {
    console.log('resize');
    sticky = menu.offsetTop;
  });

  window.addEventListener('scroll', function onScroll(e) {
    stickyMenu();
  });


})
