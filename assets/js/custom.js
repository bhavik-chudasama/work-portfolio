! function(e) {
    "use strict";

    var iconFilterClick = function() {
        $('.projects-filter-toggler').on('click', function() { 
            if ($('.controlnav-folio').hasClass("show")  ) {
                $('.controlnav-folio').removeClass("show");
            } else {
                $('.controlnav-folio').addClass('show');
            }
        });
    }
    var projectIsotope = function() {
        if ( $().isotope ) {
            var $container = $('.project-wrap');

            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.project-item',
                    transitionDuration: '1s'
                });
            });

            $('.project-filter li').on('click',function() {
                var selector = $(this).find("a").attr('data-filter');
                $('.project-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    };
    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').on('click', function() {           
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };
    if (e("body, html").addClass("overflow-hidden"), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? e("#parallax").css({
            "background-attachment": "scroll"
        }) : e("#parallax").parallax("100%", .05), e("#parallax").length > 0) {
        var o = e("#parallax img").attr("src");
        e("#parallax").css({
            "background-image": "url(" + o + ")"
        })
    }
    e(window).scroll(function() {
        e(window).scrollTop() + e(window).height() > e(document).height() - 100 && e(".viewMore").addClass("visible")
    }), e(".navbar-toggler").on("click", function() {
        e(".navbar-toggler").toggleClass("active"), e(".navbar-collapse").toggleClass("collapse-open"), e("body, html").toggleClass("overflow-hidden")
    }), e(".navbar-toggler").on("click", function(e) {
        document.getElementById("ham-tick").play()
    });
    var a = e(".list-items-container");
    e("#filter li").on("click", function(o) {
        o.preventDefault(), e("#filter li").removeClass("active"), e(this).addClass("active");
        e(this).attr("data-group");
        var t = e(this).attr("data-group");
        a.shuffle("shuffle", t)
    }), e(window).on("load", function() {
        setTimeout(function() {
            e(".loader").addClass("is-done"), e("body, html").removeClass("overflow-hidden")
        }, 1500)
    }), e("a, button").mouseenter(function() {
        e("#follower").addClass("active")
    }), e("a, button").mouseleave(function() {
        e("#follower").removeClass("active")
    }), e(document).on("mousemove", function(o) {
        var a = e(document).width(),
            t = e(document).height();
        a > 991 && (e("#follower").css({
            display: "block",
            left: Number(o.pageX - 10),
            top: Number(o.pageY - 10),
            "z-index": "9999999"
        }), Number(o.pageX + 24) > a && e("#follower").css({
            display: "none"
        }), Number(o.pageX) < 10 && e("#follower").css({
            display: "none"
        }), Number(o.pageY + 24) > t && e("#follower").css({
            display: "none"
        }), Number(o.pageY) < 10 && e("#follower").css({
            display: "none"
        }), e("a, button").hover(function() {
            e("#follower").css({
                transform: "scale(3)",
                border: "none",
                background: "rgba(0,0,255,0.1)"
            })
        }, function() {
            e("#follower").css({
                transform: "scale(1)",
                border: "2px #6C63FF solid",
                background: "none"
            })
        }))
    });
    e(".navbar-toggler").each(function() {
        var o = e(this),
            a = !1,
            t = o.attr("offset-hover-max") || .7,
            n = o.attr("offset-hover-min") || .5,
            l = function(e, a) {
                /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? TweenMax.to(o, .4, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0
                }) : TweenMax.to(o, .4, {
                    x: .8 * e,
                    y: .8 * a,
                    rotation: .05 * e,
                    ease: Power2.easeOut
                })
            },
            r = function() {
                TweenMax.to(o, .7, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    ease: Elastic.easeOut.config(1.2, .4)
                })
            };
        e(window).on("mousemove", function(s) {
            var i = a ? t : n,
                c = s.clientX,
                d = s.clientY - e(window).scrollTop(),
                u = o.outerWidth(),
                f = o.outerHeight(),
                g = o.offset(),
                m = c - (g.left + u / 2),
                v = d - (g.top + f / 2),
                w = !1;
            Math.sqrt(m * m + v * v) < u * i && (w = !0, a || (a = !0), l(m, v)), !w && a && (r(), a = !1)
        })
    })

    iconFilterClick();
    projectIsotope();
    goTop();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            $('.navbar-collapse').collapse('hide');
            $(".navbar-toggler").toggleClass("active");
            $(".navbar-collapse").toggleClass("collapse-open");
            $("body, html").toggleClass("overflow-hidden");
        });
    });
}(jQuery);

