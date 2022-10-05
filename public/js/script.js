window.onload = function () {
  //Javacript of responsive navigation menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  w =
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    window.innerWidth;
  var targetWidth = 1024;
  if (w >= targetWidth) {

    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function (manual) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

    //Javascript for automatic video slider navigation
    var repeat = function (activeClass) {
      let active = document.getElementsByClassName("active");
      let i = 1;

      var repeater = () => {
        setTimeout(function () {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove("active");
          });

          slides[i].classList.add("active");
          btns[i].classList.add("active");
          contents[i].classList.add("active");
          i++;

          if (slides.length == i) {
            i = 0;
          }
          if (i >= slides.length) {
            return;
          }
          repeater();
        }, 10000);
      };
      repeater();
    };
    repeat();
  } else {
    
  }

  
};



