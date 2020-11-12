var apiUrl = {
    "dki-jakarta": "https://run.mocky.io/v3/684a85ba-ff4e-491e-a315-dc0f005e31e8",
    "tangerang": "https://run.mocky.io/v3/a77419fd-728f-4dd7-acdb-4da74f3a4d32",
}

document.getElementById('province').addEventListener('change', function(e) {
    updateDistrict(e.target.value)
})

// functioon to update district
function updateDistrict(province) {
    // get district DOM
    var district = document.getElementById('district');

    // initiate http client request
    const http = new XMLHttpRequest();

    // specify request configuration
    http.open("GET", apiUrl[province]);

    // handle event when load ends
    http.onloadend = (e) => {
        // parse response body to json format
        var response = JSON.parse(e.currentTarget.response);
        
        // cleanup html
        district.innerHTML = ''

        // appending district to innerHTML
        district.innerHTML += response.districts.map(function(district){
            return '<option>' + district + '</option>'
        })
    }

    // send the request 
    http.send();
}
