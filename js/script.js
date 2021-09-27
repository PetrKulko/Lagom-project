$(function(){

    // === SLIDER ===

        $('.test__slider').slick({
            dots: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<div class="prev"><svg width="40" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0V4.5Z"/></svg> Назад</div>',
            nextArrow: '<div class="next">Вперёд <svg width="40" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0V4.5Z"/></svg></div>',
        });
    // === / SLIDER ===

    // === SKROLL UP ===

        let button = $('#button-up');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                button.fadeIn();
            } else {
                button.fadeOut();
            }
        });
        button.on('click', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    // === / SKROLL UP ===

    // === PROGRESS BAR ===

        const progress = document.querySelector('.progress');
        window.addEventListener('scroll', progressBar);
        function progressBar(e) {
            let = windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let = windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let per = windowScroll / windowHeight * 100;
            progress.style.width = per + '%';
        }

    // === / PROGRESS BAR ===

    // === SMOOTH SCROLL ===

        $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
            e.preventDefault();
            let t = 800;
            let d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
            $('html,body').stop().animate({ scrollTop: $(d).offset().top -50 }, t);
        });

    // === / SMOOTH SCROLL ===

    // === PHONE MASK ===

    $('#phone').usPhoneFormat({
        format:'(xxx) xxx-xxxx'
    });

    // === / PHONE MASK ===

    // === BURGER MENU ===

        $('.menu-wrapper').on('click', function() {
            $('.burger-menu').toggleClass('animate');
            $('.burger-menu, .header__nav-lists').toggleClass('active');
        })

        $('.header__burger').click(function(event) {
            $('.header__burger, .header__navigation').toggleClass('active');
        });
    // === / BURGER MENU ===
});