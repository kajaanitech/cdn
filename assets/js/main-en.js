$(document).ready(async function () {


    let failed = 0;
    axios.get('../auth/api/?action=etusivu&lang=en')
        .then(async function (response) {
            var Holder = $("#Palvelut");
            var temp = ``;

            response.data.tuotteet.forEach(element => {
                var kuvat = ``;

                if (Array.isArray(element?.kuva)) {
                    element.images.forEach(kuva => {
                        kuvat += `<div class="hidden duration-700 ease-in-out" data-carousel-item><img src="${kuva}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Service Image"></div>`
                    });

                } else {
                    kuvat = `<img class="p-8 rounded-lg" src="${element?.kuva}" alt="Service Image">`;
                }

                if (Array.isArray(element?.kuva)) {
                } else {

                    var desc = ``;
                    if (element?.description_en) {
                        desc = `<div class="mt-2 mb-2 text-sm font-medium text-gray-500">${element?.description_en ?? element.description}</div>`;
                    }

                    var type = ``;

                    if (element?.type === "Tuntityö") {
                        type = `/ hour`;
                    } else if (element?.type === "KM") {
                        type = `/ km`;
                    } else if (element?.type === "Alkaen") {
                        type = `/ starting`;
                    }

                    temp += `
                    
                    <div class="w-full max-w-sm bg-white rounded-lg shadow-md">
                        <div class="grid place-items-center my-6">
                            <img src="${element?.kuva}" class="p-12 w-32 h-32 rounded-lg" alt="Service Image">
                        </div>
                        <div class="px-5 pb-5 my-2">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                                ${element?.nimi_en ?? element?.nimi}
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
            failed = 1;
        });

    if (failed === 1) {

        axios.get('../auth/api/?action=banneri')
            .then(async function (response) {
                if (response["data"]["IlmoitusBanneri"]["enabled"] == true) {
                    var message = response["data"]["IlmoitusBanneri"]["text-en"];
                    $("#IlmoitusBanneri").attr("tabindex", "-1");
                    $("#IlmoitusBanneri").html(`<div id="banneri" tabindex="-1" class="flex z-50 justify-between py-3 w-full bg-gray-50 border border-b"> <div class="flex items-center mx-auto"><p class="text-sm font-medium text-gray-900 md:my-0">${message}</p></div><button data-collapse-toggle="banneri" type="button" class="inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>`)
                }
            });
    }


});

AOS.init();


$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { event.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () { var $target = $(target); $target.focus(); if ($target.is(":focus")) { return false; } else { $target.attr('tabindex', '-1'); $target.focus(); }; }); } } });