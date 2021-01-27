// ------------------------------HERO-IMAGE  ---------------------------------

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function () {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;

  TweenMax.set(follower, {
    css: {
      left: posX - 20,
      top: posY - 20
    }
  });

  TweenMax.set(cursor, {
    css: {
      left: mouseX,
      top: mouseY
    }
  });
}
});

$(document).on("mousemove", function (e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function () {
cursor.addClass("active");
follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function () {
cursor.removeClass("active");
follower.removeClass("active");
});








// ------------------------------HERO TEXT ---------------------------------


          const text = baffle(".data");
          text.set({
            characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
            speed: 120
          });
          text.start();
          text.reveal(4000);










// ------------------------------LAST BASIC ---------------------------------
          new WOW().init();
    var textWrapper = document.querySelector(".hero-title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    $(document).ready(function () {
      anime.timeline({
        loop: false
      }).add({
        targets: ".hero-title .letter",
        translateY: [120, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 2000 + 40 * i
      });
    });

    var t1 = new TimelineMax({
      paused: true
    });

    TweenMax.from(".hero-logo", 2, {
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1
    });

    TweenMax.from(".menu-toggle", 2, {
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1.2
    });

    TweenMax.from(".view-resume", 2, {
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1.4
    });

    TweenMax.staggerFrom(
      ".media ul li",
      2, {
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 1.6
      },
      0.1
    );



    t1.to(".overlay", 1, {
      opacity: 1,
      ease: Expo.easeInOut
    });

    t1.to(".view-resume, .media", 1, {
      opacity: 0,
      ease: Expo.easeInOut
    });

    t1.staggerFrom(
      ".menu ul li",
      1, {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut
      },
      0.1
    );

    

    var image = document.getElementsByClassName("hero-img-parallax");
    new simpleParallax(image, {
      scale: 1.8
    });


// -------------progressbar
    $(window).scroll(function () {
      var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
      scrollPercent = (scroll / (dh - wh)) * 100;
      $(".progressbar").css("height", scrollPercent + "%");
    });
      
// ---------------hamburger
    function myFunction(x) {
      x.classList.toggle("change");
    }
    
    const btn = document.getElementById('btn')
    const nav = document.getElementById('nav')
    
    btn.addEventListener('click',()=>{
      nav.classList.toggle("active");
      btn.classList.toggle("active");
    
    });


    // --------------progress percent

    //Remove lines 437-451 for 2
    // var counter = document.querySelector(".percent");

    // TweenLite.set(counter, {
    //     xPercent: -5,
    //     yPercent: -5,
    // });

    // window.addEventListener("mousemove", moveCounter);

    // function moveCounter(e) {
    //     TweenLite.to(counter, 0.5, {
    //         x: e.clientX,
    //         y: e.clientY,
    //     });
    // }

    function progress() {
      var windowScrollTop = $(window).scrollTop();
      var docHeight = $(document).height();
      var windowHeight = $(window).height();
      var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

      var $bgColor = progress > 99 ? "#fff" : "#fff";
      var $textColor = progress > 99 ? "#fff" : "#333";

      $("h2")
          .text(Math.round(progress) + "%")
          .css({ color: $textColor });

      $(".fill")
          .height(progress + "%")
          .css({ backgroundColor: $bgColor });
  }
  progress();
  $(document).on("scroll", progress);