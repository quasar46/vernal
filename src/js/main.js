$(document).ready(function () {
    $('.life__slick').slick({
        slidesToShow: 3,
        prevArrow: "<img src='images/svg/arrow-prev.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-next.svg' class='next' alt='next'>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.cart__slick').slick({
        slidesToShow: 4,
        prevArrow: "<img src='images/svg/arrow-prev.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-next.svg' class='next' alt='next'>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    $('.article__slide').slick({
        slidesToShow: 4,
        prevArrow: "<img src='images/svg/arrow-prev.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='images/svg/arrow-next.svg' class='next' alt='next'>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
})

$(document).ready(function () {
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle();
    })
})

// tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();