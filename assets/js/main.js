$(document).ready(async function () {

    axios.get('./auth/api/?action=etusivu')
        .then(async function (response) {
            var Holder = $("#Palvelut");
            var temp = ``;

            response.data.tuotteet.forEach(element => {
                var kuvat = ``;

                if (Array.isArray(element?.kuva)) {
                    element.images.forEach(kuva => {
                        kuvat += `<div class="hidden duration-700 ease-in-out" data-carousel-item><img src="${kuva}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Palvelun Kuva"></div>`
                    });

                } else {
                    kuvat = `<img class="p-8 rounded-lg" src="${element?.kuva}" alt="Palvelu tuote">`;
                }

                if (Array.isArray(element?.kuva)) {
                } else {

                    var desc = ``;
                    if (element?.description) {
                        desc = `<div class="my-2 text-sm font-medium text-gray-500">${element?.description}</div>`;
                    }

                    var type = ``;

                    if (element?.type === "Tuntityö") {
                        type = `/ tunti`;
                    } else if (element?.type === "KM") {
                        type = `/ km`;
                    } else if (element?.type === "Alkaen") {
                        type = `Alkaen`;
                    }

                    temp += `
                    
                    <div class="w-full max-w-sm bg-white rounded-lg shadow-md">
            <div>
                <img src="${element?.kuva}" class="p-12 rounded-lg grid place-items-center" alt="Palvelun Kuva">
            </div>
            <div class="px-5 pb-5 my-2">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                    ${element?.nimi}
                </h5>
                <div class="flex items-center mt-2.5 mb-5"></div>
                <div class="justify-between items-center">
                    <span class="text-3xl font-bold text-gray-900">${element?.hinta}€</span> ${type}
                </div>
                ${desc}
            </div>
        </div>`;
                }
            });

            Holder.html(temp);
        })
        .catch(function (error) {
        });


});

AOS.init();


$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { event.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () { var $target = $(target); $target.focus(); if ($target.is(":focus")) { return false; } else { $target.attr('tabindex', '-1'); $target.focus(); }; }); } } });