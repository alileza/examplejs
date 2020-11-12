var root = document.getElementById('root');
var districtUrl = "https://run.mocky.io/v3/a77419fd-728f-4dd7-acdb-4da74f3a4d32"

// initiate http client request
const http = new XMLHttpRequest();

// specify request configuration
http.open("GET", districtUrl);

// handle event when load ends
http.onloadend = (e) => {
    // parse response body to json format
    var response = JSON.parse(e.currentTarget.response);
    
    // appending district to innerHTML
    root.innerHTML += response.districts.map(function(district){
        return '<option>' + district + '</option>'
    })
}

// send the request 
http.send();