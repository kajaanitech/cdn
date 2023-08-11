$(document).ready(async function () {
    let failed = 0;
    axios.get('./auth/api/?action=etusivu')
        .then(async function (response) {
            var Holder = $("#Palvelut");
            var temp = ``;

            response.data.tuotteet.forEach(element => {
                if (Array.isArray(element?.kuva)) {
                } else {
                    var desc = ``;
                    if (element?.description) {
                        desc = element?.description;
                    }

                    var type = ``;
                    if (element?.type === "Tuntityö") {
                        type = `<div class="flex flex-col absolute top-0 left-0"> <div class="w-64 py-8 pr-32"> <span class="text-sm font-medium mr-2 px-3 py-1 rounded-full bg-white text-black border-2 border-[#DC1A21]">Tuntityö</span> </div></div>`;
                    } else if (element?.type === "KM") {
                        type = `<div class="flex flex-col absolute top-0 left-0"> <div class="w-64 py-8 pr-32"> <span class="text-sm font-medium mr-2 px-3 py-1 rounded-full bg-white text-black border-2 border-[#DC1A21]">KM</span> </div></div>`;
                    } else if (element?.type === "Alkaen") {
                        type = `<div class="flex flex-col absolute top-0 left-0"> <div class="w-64 py-8 pr-32"> <span class="text-sm font-medium mr-2 px-3 py-1 rounded-full bg-white text-black border-2 border-[#DC1A21]">Alkaen</span> </div></div>`;
                    }

                    temp += ` 
            
                        <div class="relative max-w-max mx-auto overflow-hidden rounded-3xl border">
                            <div class="relative max-w-max mx-auto overflow-hidden rounded-t-3xl">
                                ${type}

                                <img src="${element?.kuva}" loading="lazy" alt="Palvelun kuva">
                                <div
                                    class="flex flex-col justify-end bg-gradient-to-t from-black/70 to-50% transition-all duration-500 absolute bottom-0 right-0 place-items-end w-full h-full hover:backdrop-bl-ur-sm">
                                    <div class="w-64 py-8 pl-32">
                                        <span
                                            class="text-sm font-semibold mr-2 px-3 py-1 rounded bg-black/50 text-white border border-white">${element?.hinta}
                                            €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid place-items-center font-semibold mb-4">
                                <div class="ml-2 mr-2">
                                    <h3 class="text-xl font-semibold tracking-tight text-gray-900">
                                        ${element?.nimi}
                                    </h3>
                                    <span>
                                        <p class="mt-2 text-sm font-medium text-gray-500">
                                            ${desc}
                                        </p>
                                    </span>
                                </div>
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

        axios.get('./auth/api/?action=banneri')
            .then(async function (response) {
                if (response["data"]["IlmoitusBanneri"]["enabled"] == true) {
                    var message = response["data"]["IlmoitusBanneri"]["text"];
                    $("#IlmoitusBanneri").attr("tabindex", "-1");
                    $("#IlmoitusBanneri").html(`<div id="banneri" tabindex="-1" class="flex z-50 justify-between py-3 w-full bg-gray-50 border border-b"> <div class="flex items-center mx-auto"><p class="text-sm font-medium text-gray-900 md:my-0">${message}</p></div><button data-collapse-toggle="banneri" type="button" class="inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>`)
                }
            });
    }


});

AOS.init();


$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { event.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () { var $target = $(target); $target.focus(); if ($target.is(":focus")) { return false; } else { $target.attr('tabindex', '-1'); $target.focus(); }; }); } } });


