
$(document).ready(function(){
  $('.feedback-slider').slick({
  });
  $('.header-btn').click(function() {
    $('.modalDialog').toggleClass('modal-active');
  });
  $('.closeModal').click(function() {
      $('body').removeClass('lock-scroll');   
      $('.modalDialog').removeClass('modal-active');
  });
    $('.open-btn').click(function() {
    $('.modalDialog').toggleClass('modal-active');
  });
  // открытие модального окна
  
  width = $(window).width();
    if (width <= 991) {
        // смена блоков в секции features
        
        // лок экрана на смартфонах при нажатии на кнопку хедера
        $(".header-btn").click(function() {
          lockScroll();
        });
      } else if (width >991) {
        $(".features-block").removeClass("wow fadeIn");
        $(".features-block").removeClass("wow fadeIn");
      }
  
});

// лок на экран во время модалки

function lockScroll() {
            if ($('body').hasClass('lock-scroll')) {
                $('body').removeClass('lock-scroll');
            }
            else {
                $('body').addClass('lock-scroll');
            }
      }



/* Функция для смены блоков в секции features */

var newsIndex = 1;
function swap() {
  $(".features-block__block").hide();
  $(".features-block__block" + newsIndex).show();
  
  var newsCount = 2;
  newsIndex++;
  if(newsIndex > newsCount) {
    newsIndex = 1;
  }
}

