var currentIndex = 0,
      navItems = $('.navi li');

  function setSlide(index) {
    navItems.removeClass('selected');
    navItems.eq(index).addClass('selected');
    $('.slide').css('display', 'none');
    $('.slide').eq(index).css('display', 'block');
  }

  $('.navi li').click(function () {
    var index = $('.navi li').index($(this));
    currentIndex = index;
    setSlide(currentIndex);
  });

  function next() {
    if (currentIndex < navItems.length - 1) {
      currentIndex++;
      setSlide(currentIndex);
    }
  }

  $('.next').click(function () {
    next();
  });

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      setSlide(currentIndex);
    }
  }

  $('.prev').click(function () {
    prev();
  });

  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
      next();
    } else if (event.keyCode == 37) {
      prev();
    }
  }, true);

  function slide() {
    if (currentIndex < navItems.length - 1) {
      currentIndex++;
      setSlide(currentIndex);
    } else {
      currentIndex = 0;
      setSlide(currentIndex);
    }
  }

  var interval = setInterval(slide, 30000);