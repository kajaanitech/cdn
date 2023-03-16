$(document).ready(async function () {
    await $.getJSON("kuvakaruselli.json", function (data) {
        $.each(data, function (key, value) {
            $("#picture_carousel").append(
                '<div class="hidden duration-700 ease-in-out" data-carousel-item><img src="' +
                value + '" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></div>'
            );
        });
    });
});

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { event.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () { var $target = $(target); $target.focus(); if ($target.is(":focus")) { return false; } else { $target.attr('tabindex', '-1'); $target.focus(); }; }); } } });/*  */