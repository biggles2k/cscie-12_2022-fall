
document.addEventListener("DOMContentLoaded", function() {
    console.log("Ready for maps.");

    var map = L.map('map').setView([42.35908295, -71.06764181], 13);

    // Add the attribution tile
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([42.35908295, -71.06764181]).addTo(map);

    //Add a pop-up to the marker
    marker.bindPopup("Boston African American National Historic Site");

    // For gits and shiggles... let's parse through the parks data
    for (const park in parksData.parks) {
        if (Object.hasOwnProperty.call(parksData.parks, park)) {
            const parkObj = parksData.parks[park];
            console.log (park + ":= " + parkObj);
            console.log (parkObj.fullName);

            // Use the parkObj data to create a marker and a pop-up for the marker
            
        }
    }
});

/*
    {
      "fullName": "Boston African American National Historic Site",
      "description": "Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in the Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education.",
      "latitude": "42.35908295",
      "longitude": "-71.06764181"
    },
*/

/*

    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add the attribution tile
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([51.5, -0.09]).addTo(map);

    //Add a pop-up to the marker
    marker.bindPopup("<strong>Hello world!</strong><br>I am a popup.");

    // Add a second marker
    var marker_02 = L.marker([52.5, -0.09]).addTo(map);

    //Add a pop-up to the second marker
    marker_02.bindPopup("This is my second marker.");
*/