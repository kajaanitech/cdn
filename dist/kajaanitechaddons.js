document.addEventListener('DOMContentLoaded', function () {
    function kti() {
        console.clear();
        console.log(`
    
    
██╗  ██╗ █████╗      ██╗ █████╗  █████╗ ███╗   ██╗██╗████████╗███████╗ ██████╗██╗  ██╗   ███████╗██╗
██║ ██╔╝██╔══██╗     ██║██╔══██╗██╔══██╗████╗  ██║██║╚══██╔══╝██╔════╝██╔════╝██║  ██║   ██╔════╝██║
█████╔╝ ███████║     ██║███████║███████║██╔██╗ ██║██║   ██║   █████╗  ██║     ███████║   █████╗  ██║
██╔═██╗ ██╔══██║██   ██║██╔══██║██╔══██║██║╚██╗██║██║   ██║   ██╔══╝  ██║     ██╔══██║   ██╔══╝  ██║
██║  ██╗██║  ██║╚█████╔╝██║  ██║██║  ██║██║ ╚████║██║   ██║   ███████╗╚██████╗██║  ██║██╗██║     ██║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝


[INFO]: Hei! Tämän nettisivun toteutuksesta on vastannut osittain tai kokonaan Kajaanitech.fi, kotoisin Kajaanista. Kajaanitech.fi on kevyt yritys.
[INFO]: Mikäli juuri sinä olet kiinnostunut verkkosivuista tai muista IT / ATK Alan palveluista menethän osoitteeseen : https://www.kajaanitech.fi/?utm_source=kajaanitechcdn
    `)
    }

    kti();
});

document.querySelectorAll('a[href*="#"]').forEach(function (e) { "#" !== e.getAttribute("href") && "#0" !== e.getAttribute("href") && e.addEventListener("click", function (e) { if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) { var t = document.querySelector(this.hash); if (t = t || document.querySelector("[name=" + this.hash.slice(1) + "]")) { e.preventDefault(); var a = t.getBoundingClientRect().top + window.pageYOffset, r = window.pageYOffset, n = a - r, i = null; function h(e) { i || (i = e); var a, c = e - i, f = (a = Math.min(c / 1e3, 1)) < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1; window.scrollTo(0, r + n * f), c < 1e3 ? requestAnimationFrame(h) : (t.setAttribute("tabindex", "-1"), t.focus()) } requestAnimationFrame(h) } } }) });