(function initMap () {
    var google = window.google;
    var location = {
        lat: 54.751030,
        lng: 56.002270
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: [{
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{
                        saturation: 36
                    },
                    {
                        color: "#333333"
                    },
                    {
                        lightness: 40
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                        visibility: "on"
                    },
                    {
                        color: "#ffffff"
                    },
                    {
                        lightness: 16
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            },
            {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                        color: "#fefefe"
                    },
                    {
                        lightness: 20
                    }
                ]
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                        color: "#fefefe"
                    },
                    {
                        lightness: 17
                    },
                    {
                        weight: 1.2
                    }
                ]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                        color: "#f5f5f5"
                    },
                    {
                        lightness: 20
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                        color: "#f5f5f5"
                    },
                    {
                        lightness: 21
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                        color: "#dedede"
                    },
                    {
                        lightness: 21
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                        color: "#ffffff"
                    },
                    {
                        lightness: 17
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                        color: "#ffffff"
                    },
                    {
                        lightness: 29
                    },
                    {
                        weight: 0.2
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                        color: "#8be5d9"
                    },
                    {
                        lightness: 18
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                        color: "#8be5d9"
                    },
                    {
                        lightness: 16
                    }
                ]
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                        color: "#f2f2f2"
                    },
                    {
                        lightness: 19
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#37c670'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#37c670'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ffffff'
                }]
            }
        ],
        map: map
    });
})();
    