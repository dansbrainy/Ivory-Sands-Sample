// $("input").intlTelInput({
//   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
// });


// window.onload = function () { 
//     var input = document.querySelector("tel");
//     window.intlTelInput(input);
//   }

// window.onload = function() {

//     // Vanilla Javascript
//     var input = document.querySelector("#telephone");
//     window.intlTelInput(input,({
//     // options here
    // allowDropdown:true,
    // autoPlaceholder:"polite",
    // formatOnDisplay:true,
    // geoIpLookup:null,
    // preferredCountries: ["us","gb" ],
    // utilsScript:"/app/build/js/utils.js"

//     }));
    
// }

// jq = jQuery.noConflict();
// jq("#telephone").intlTelInput();
      

// var input = document.getElementById("tel");
// var iti = window.intlTelInput(input, {
//   // separateDialCode:true,
//   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
// });

// // store the instance variable so we can access it in the console e.g. window.iti.getNumber()
// window.iti = iti;

var input = document.getElementById("tel");
var iti = window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
    allowDropdown:true,
    autoPlaceholder:"polite",
    formatOnDisplay:true,
    geoIpLookup:null,
    preferredCountries: ["za","us", "gb" ],
    utilsScript:"/app/build/js/utils.js"
});

window.iti = iti;