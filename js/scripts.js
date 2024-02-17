function contador(a,t){let e=0,o=setInterval(()=>{e+=3,$("#"+a).html(e),e===t&&clearInterval(o)},80)}!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=a(this.hash);if((t=t.length?t:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:t.offset().top-72},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:75});var t=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-scrolled"):a("#mainNav").removeClass("navbar-scrolled")};t(),a(window).scroll(t)}(jQuery),contador("counter_back",99),contador("counter_front",60);



//* *//
/.../

//