// INTERNATIONAL DIALING CODES AND FLAGS

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


// COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


// Initialize and add the map
function initMap() {
  // The location of Black Elegance
  const elegance = { lat: -33.91992, lng: 18.42196 };
  // The map, centered at Black Elegance
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: elegance,
  });
  // The marker, positioned at Black Elegance
  const marker = new google.maps.Marker({
    position: elegance,
    map: map,
  });
}

$( function() {
  $( "#arrival_date" ).datepicker();
  $( "#departure_date" ).datepicker();
} );


// FORM POST
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/f/xpzoowrr"})

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  // var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    // status.innerHTML = "Thanks!";
  }

  function error() {
    // status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
