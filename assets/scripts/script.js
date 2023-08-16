// Header Search 
if ($("#mob-header-search").length > 0) {
    $("#mob-header-search").on("focus", function () {
        $(".search-result-container").addClass("active")
    })
}
if ($("#header-search").length > 0) {
    $("#header-search").on("focus", function () {
        $(".search-result-container").addClass("active")
    })
}
if ($(".close-search-res").length > 0) {
    $(".close-search-res").on("click", function () {
        $(".search-result-container").removeClass("active")
    })
}
// =================================================
// Testimonial Carousel  ==> Home Page
if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        pagination: {
            el: ".testimonials-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}
// =================================================

// Partners Carousel
if ($(".slider-partners").length > 0) {
    let swiper = new Swiper(".slider-partners", {
        spaceBetween: 40,
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
            },
            680: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        pagination: {
            el: ".partners-pagination",
            clickable: true,
        },
    });
}
// =================================================

// ((Home page)) certificate Carousel
if ($(".slider-certificate").length > 0) {
    let swiper = new Swiper(".slider-certificate", {
        autoplay: true,
        speed: 7000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        centeredSlides: true,
        slidesPerView: "auto",
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            680: {
                spaceBetween: 30,
            },
            1024: {
                spaceBetween: 48,
            },
        },
    });
}
// =================================================


// ((Home page)) professional-licence Carousel
if ($(".slider-professional-licence").length > 0) {
    let swiper = new Swiper(".slider-professional-licence", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 1.5,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".professional-licence-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Home page)) professional-qualifications Carousel
if ($(".slider-professional-qualifications").length > 0) {
    let swiper = new Swiper(".slider-professional-qualifications", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 1.5,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".professional-qualifications-pagination",
            clickable: true,
        }
    });

    $(".professional-qualifications .iso-nav .filter-item").on("click", function () {
        swiper.destroy();
        $(".professional-qualifications .iso-nav .filter-item").removeClass("active")
        $(this).addClass("active");

        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".slider-professional-qualifications .swiper-slide").removeClass("hidden");
            swiper = new Swiper(".slider-professional-qualifications", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 1.5,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                    },
                },
                pagination: {
                    el: ".professional-qualifications-pagination",
                    clickable: true,
                }
            });
        }
        else {
            $(".slider-professional-qualifications .swiper-slide").removeClass("hidden");
            $(`.slider-professional-qualifications .swiper-slide:not(${filt})`).addClass("hidden");
            swiper = new Swiper(".slider-professional-qualifications", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 1.5,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                    },
                },
                pagination: {
                    el: ".professional-qualifications-pagination",
                    clickable: true,
                }
            });
        }

        if ($(".professional-qualifications-pagination").children().length == 1) {
            $(".professional-qualifications-pagination").addClass("hidden");
        } else {
            $(".professional-qualifications-pagination").removeClass("hidden");
        }
    })
}
// =================================================

// ((Home page)) Free Courses Carousel
if ($(".slider-free-courses").length > 0) {
    let swiper = new Swiper(".slider-free-courses", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".free-courses-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Home page)) society Carousel
if ($(".slider-society").length > 0) {
    let swiper = new Swiper(".slider-society", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".society-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Home page)) Blog Carousel
if ($(".slider-blog").length > 0) {
    let swiper = new Swiper(".slider-blog", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2.5,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        },
        pagination: {
            el: ".blog-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Qualifications page)) qualifications partenrs Carousel
if ($(".slider-qualifications-partenrs").length > 0) {
    let swiper = new Swiper(".slider-qualifications-partenrs", {
        spaceBetween: 16,
        breakpoints: {
            0: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 1,
            },
            680: {
                slidesPerView: 3,
                centeredSlides: false,
                loop: false,
            },
            1024: {
                slidesPerView: 4,
                centeredSlides: false,
                loop: false,
            },
        },
        pagination: {
            el: ".qualifications-partenrs-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Qualifications page)) qualifications advantages Carousel
if ($(".slider-qualifications-advantages").length > 0) {
    let swiper = new Swiper(".slider-qualifications-advantages", {
        breakpoints: {
            0: {
                spaceBetween: 24,
                slidesPerView: 1,
            },
            680: {
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".qualifications-advantages-pagination",
            clickable: true,
        }
    });
}
// =================================================
// ((Events page))  Events Slider
if ($(".slider-events").length > 0) {
    let swiper = new Swiper(".slider-events", {
        slidesPerView: 1,
        pagination: {
            el: ".events-pagination",
            clickable: true,
        }
    });
}
// =================================================

// Drop Down In Header
if ($(".menu-dropdown").length) {
    $(".menu-dropdown")
        .on("mouseenter", function () {
            if ($(window).width() > 1024) {
                $(this).find(".menu-dropdown-list").addClass("active");
                $(this).find(".chevron").addClass("rotat");
            }
        })
        .on("mouseleave", function () {
            if ($(window).width() > 1024) {
                $(this).find(".chevron").removeClass("rotat");
                $(this).find(".menu-dropdown-list").removeClass("active");
            }
        })
        .on("click", function () {
            if ($(window).width() < 1023) {
                $(this).find(".menu-dropdown-list").slideToggle(500);
                $(this).find(".chevron").toggleClass("rotat");
            }
        });
}
// =================================================

// Change the shadow of Img ==> Home Page
if ($(".hero-img").length) {
    $(window).on("scroll", function () {
        let pos = $(".hero-img").position().top + 100;
        if (window.scrollY > pos) {
            $(".hero-img").addClass("active");
        } else {
            $(".hero-img").removeClass("active");
        }
    });
}
// =================================================

// Annab Accordion Component
if ($(".anb-accordion").length) {
    $(".anb-accordion .anb-accordion-title").on("click", function (e) {
        $(this).parent().toggleClass("active");
        $(this).parent().find(".anb-accordion-content").slideToggle(300);
        $(this).parent().find(".icon img").toggleClass("hidden");
    });
}
// =================================================

// mobile menu
$(".mob-menu-btn").on("click", function () {
    $(".mob-menu").addClass("active");
});
$(".mob-menu-closbtn").on("click", function () {
    $(".mob-menu").removeClass("active");
});

// =================================================


//  Filtering slider-training-courses
//  slider-training-courses Carousel
if ($(".slider-training-courses").length > 0) {
    let swiper = new Swiper(".slider-training-courses", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".training-courses-pagination",
            clickable: true,
        }
    });

    $(".training-courses .iso-nav .filter-item").on("click", function () {
        swiper.destroy();
        $(".training-courses .iso-nav .filter-item").removeClass("active")
        $(this).addClass("active");

        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".slider-training-courses .swiper-slide").removeClass("hidden");
            swiper = new Swiper(".slider-training-courses", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".training-courses-pagination",
                    clickable: true,
                }
            });
        }
        else {
            $(".slider-training-courses .swiper-slide").removeClass("hidden");
            $(`.slider-training-courses .swiper-slide:not(${filt})`).addClass("hidden");
            swiper = new Swiper(".slider-training-courses", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".training-courses-pagination",
                    clickable: true,
                }
            });
        }

        if ($(".training-courses-pagination").children().length == 1) {
            $(".training-courses-pagination").addClass("hidden");
        } else {
            $(".training-courses-pagination").removeClass("hidden");
        }
    })
}

// =================================================
//  Filtering slider-training-courses


// slider-book-store Carousel
if ($(".slider-book-store").length > 0) {
    let swiper = new Swiper(".slider-book-store", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".book-store-pagination",
            clickable: true,
        }
    });

    $(".book-store .iso-nav .filter-item").on("click", function () {
        swiper.destroy();
        $(".book-store .iso-nav .filter-item").removeClass("active")
        $(this).addClass("active");

        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".slider-book-store .swiper-slide").removeClass("hidden");
            swiper = new Swiper(".slider-book-store", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".book-store-pagination",
                    clickable: true,
                }
            });
        }
        else {
            $(".slider-book-store .swiper-slide").removeClass("hidden");
            $(`.slider-book-store .swiper-slide:not(${filt})`).addClass("hidden");
            swiper = new Swiper(".slider-book-store", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".book-store-pagination",
                    clickable: true,
                }
            });
        }

        if ($(".book-store-pagination").children().length == 1) {
            $(".book-store-pagination").addClass("hidden");
        } else {
            $(".book-store-pagination").removeClass("hidden");
        }
    })
}
// =================================================

//  Filtering slider-jobs
if ($(".jobs").length > 0) {
    $(".jobs .iso-nav .filter-item").on("click", function () {
        $(".jobs .iso-nav .filter-item").removeClass("active");
        $(this).addClass("active");
        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".jobs .filter-card").removeClass("hidden");
        }
        else {
            $(".jobs .filter-card").removeClass("hidden");
            $(`.jobs .filter-card:not(${filt})`).addClass("hidden");
        }
    })
}

if ($(".filt-items-container").length > 0) {
    $(".iso-nav .filter-item").on("click", function () {
        $(".iso-nav .filter-item").removeClass("active");
        $(this).addClass("active");
        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".filt-items-container .filter-card").removeClass("hidden");
        }
        else {
            $(".filt-items-container .filter-card").removeClass("hidden");
            $(`.filt-items-container .filter-card:not(${filt})`).addClass("hidden");
        }
    })
}

if ($(".search-res-filters").length > 0) {
    $(".filter-srch").on("click", function () {
        $(".iso-nav .filter-srch").removeClass("active");
        $(this).addClass("active");
        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".search-res-filters .srch-filter-card").removeClass("hidden");
        }
        else {
            $(".search-res-filters .srch-filter-card").removeClass("hidden");
            $(`.search-res-filters .srch-filter-card:not(${filt})`).addClass("hidden");
        }
    })
}


//  Filtering slider-jobs
if ($(".blog-container").length > 0) {
    $(".blog-filter .filter-tw").on("click", function () {
        $(".blog-filter .filter-tw").removeClass("active");
        $(this).addClass("active");
        let filt = $(this).attr("data-filter");
        console.log($(`.blog-container .blog-item:not(${filt})`));

        if (filt === "*") {
            $(".blog-container .blog-item").removeClass("hidden");
        }
        else {
            $(".blog-container .blog-item").removeClass("hidden");
            $(`.blog-container .blog-item:not(${filt})`).addClass("hidden");
        }
    })
}

// =================================================


// paly video 
if ($(".play-vid").length > 0) {
    $(".play-vid").on("click", function () {
        let vid = $(this).siblings("video");
        $("video").trigger('pause');
        vid.trigger('play');
        vid.attr('controls', "true");
        $(this).addClass("hidden");
    })
}


// read more button 

if ($(".read-more-btn").length > 0) {
    $(".read-more-btn").on("click", function () {
        $(this).siblings(".collapsed-txt").toggleClass("open");
    })
}



//  Filtering professional Licenses

if ($(".license-cards-container").length > 0) {
    $(".mob-cards-filter-container").html($(".cards-filter-container").clone())
    $(".selected-filter").html($(".license-cards-container .licence-filt-item.active").html())

    $(".selected-filter-container").on("click", function () {
        $(this).find(".mob-cards-filter-container").slideToggle(300)
    });


    $(".license-cards-container .licence-filt-item").on("click", function () {
        $(".license-cards-container .licence-filt-item").removeClass("active");
        $(this).addClass("active");
        $(".selected-filter").html($(this).html())
        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".license-cards-container .professional-licence-card").removeClass("hidden");
        }
        else {
            $(".license-cards-container .professional-licence-card").removeClass("hidden");
            $(`.license-cards-container .professional-licence-card:not(${filt})`).addClass("hidden");
        }
    })
}

// =================================================


//  Search Results

if ($("#search-courses").length > 0) {

    $("#search-courses").on("focus", function () {
        $(".search-result-container").addClass("active")
    })
}

// =================================================

// payment accordion
if ($(".payment-item").length > 0) {
    $('.payment-item input[type="radio"]').change(function () {
        $('.payment-item .payment-content').slideUp(400);
        $(".payment-item").removeClass("border-[#8447FF]").addClass("border-[#E9E8E8]")


        $(this).closest(".payment-item").find(".payment-content").slideDown(400);
        $(this).closest(".payment-item").addClass("border-[#8447FF]").removeClass("border-[#E9E8E8]")
    });
}


// filter in course listing 
if ($(".filter-courses-listing").length > 0) {
    $('.show-filter-btn').on("click", function () {
        $('.course-container').toggleClass("active");
    });
    $('.close-filter-courses-listing').on("click", function () {
        $('.course-container').removeClass("active");
    });
}

if ($("#countdown").length > 0) {
    // Set the date we're counting down to
    let date = $("#countdown").attr("data-date");
    let countDownDate = new Date(date).getTime();
    // Update the count down every 1 second
    let x = setInterval(function () {
        // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        document.getElementById("countdown").innerHTML = (days > 0 ? days + ":" : "")
            + (hours > 0 ? hours + ":" : "")
            + (minutes > 0 ? minutes + ":" : "")
            + (seconds > 0 ? seconds : "");
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

}