
var app = angular.module('myapp', []);
var data_map =
[
    { "name": "Tanger-Tétouan-Al Hoceïma", "level":1,"lat":35.737808,"lng":-5.854294},
    { "name": "Oriental", "level":2,"lat":34.68333333,"lng":-1.9},
    { "name": "Fès-Meknès", "level":3,lat:34.03333333,lng:-5},
    { "name": "Rabat-Salé-Kénitra", "level":1,lat:34.03333333,lng:-6.83333333},
    { "name": "Béni Mellal-Khénifra", "level":1,lat:32.3684,lng:-6.3693},
    { "name": "Casablanca-Settat", "level":1,lat:33.53333333,lng:-7.58333333},
    { "name": "Marrakech-Safi", "level":1,lat:31.61666667,lng:-8},
    { "name": "Drâa-Tafilalet", "level":1,lat:30.9,lng:-5.6},
    { "name": "Souss-Massa", "level":1,lat:30.08,lng:-8.48},
    { "name": "Guelmim-Oued Noun", "level":1,lat:28.45,lng:-10.11},
    { "name": "Laâyoune-Sakia El Hamra", "level":1,lat:26.133,lng:-14.5},
    { "name": "Dakhla-Oued Ed-Dahab", "level":1,lat:23,lng:-15},
]
app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.logged = true
    $scope.modal1 = true;
    $scope.nbDays = 7

    $scope.nb_cas = 48000
    $scope.nb_cas_real = 28
    $scope.nb_mort = 1
    $scope.nb_lit_dispo = 10000
    $scope.actions = [
        "contrôle des frontières",
        "Fermeture des vols",
        "Interdiction des navires de croisière",
        "Amende pour les personnes enfreignant la règle de la quarantaine",
        "Les professionnels de la santé interdits de voyage à l'étranger",
        "production de masques",
        "Fermeture des écoles",
        "Arrêt de travail des employés",
        "Télétravail imposé pour les employés",
        "quarantaines pour certaines parties du pays",
        "Les rassemblements Annulés",
        "Les restaurants, bars et cinémas, commerces non essentiels",
        "annulation des événements",
        "Les restaurants, bars et cinémas, commerces non essentiels",
        "Guichets communaux préférablement par téléphone"

    ]
    $scope.data = [
        { "niveau": 1, "date": "12/03/2020", region: "Tanger-Tétouan-Al Hoceïma", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 2, "date": "13/03/2020", region: "Oriental", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 1, "date": "14/03/2020", region: "Fès-Meknès", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 1, "date": "15/03/2020", region: "Casablanca-Settat", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 1, "date": "12/03/2020", region: "Tanger-Tétouan-Al Hoceïma", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 2, "date": "13/03/2020", region: "Oriental", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 1, "date": "14/03/2020", region: "Fès-Meknès", "sujet": "Mm X", "action": "actions", "canal": "Hopital" },
        { "niveau": 1, "date": "15/03/2020", region: "Casablanca-Settat", "sujet": "Mm X", "action": "actions", "canal": "Hopital" }
    ]



    $scope.regional_updates =
        [
            { "name": "Tanger-Tétouan-Al Hoceïma", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Oriental", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Fès-Meknès", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Rabat-Salé-Kénitra", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Béni Mellal-Khénifra", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Casablanca-Settat", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Marrakech-Safi", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Drâa-Tafilalet", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Souss-Massa", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Guelmim-Oued Noun", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Laâyoune-Sakia El Hamra", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
            { "name": "Dakhla-Oued Ed-Dahab", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1000, "nb_mort": 1 },
        ]
    $scope.actions_updates =
        [

        ]
    $scope.add_action = function () {
        date = new Date()
        action = ""
        $scope.actions_updates.push({ date: date, action: action })
    }
    $scope.model = function (val) {
        $scope.modal1 = val;//true/false
        $window.location = "#popup1"
    }
    $scope.setNbDays = function (val) {

        $scope.nbDays = val;

    }
}]);

function ready() {
    
    $(document).ready(function () {
        // fill_all()
        $('.spinner-grow').fadeOut(() => {
            $('#preloader').fadeOut(() => {
                $('#preloader').toggleClass('d-flex');
                $('html').toggleClass('overflow-hidden');
            });
        })

        $('select[name=survey]').change(function () {

        });

        $('#opinion_frequence_chb').change(function () {
            // var scope = angular.element(document.getElementById('body')).scope()
            // let disk = scope.disk
            // scope.$apply()

        });
    });
    setTimeout(function(){ setGraphbox1(); }, 1000);
    

}


// function getTemplates() {
//     // Form Data
//     var fd = new FormData();
//     fd.append('date', "");
//     //fd.append('user', GoogleAuth.currentUser);
//     var info = { user: "zakarya" }


//     //send it to back-end
//     $.ajax({
//         type: "POST",
//         contentType: "application/json",
//         url: 'http://localhost:3000/getTemplates',
//         data: JSON.stringify(info),
//     })
//         .done(function (data) {

//             let dataJSON = JSON.parse(data)

//             var scope = angular.element(document.getElementById("body")).scope();
//             scope.survey = []
//             for (let i = 0; i < dataJSON.hits.hits.length; i++) {
//                 let survey_elk = dataJSON.hits.hits[i]
//                 let elk = survey_elk["_id"]
//                 let nom_enquet = survey_elk["_source"]["template_name"]
//                 let survey = { index: i, nom_enquet: nom_enquet, elk: elk, selected: false }
//                 scope.survey.push(survey)
//             }
//             try {
//                 scope.survey[0].selected = true
//                 scope.template_value = scope.survey[0].elk
//             }
//             catch (e) {}
//             scope.$apply();
//             ready()
//         })
//         .fail(function () {
//             // alert("error");
//         });

// }


ready();

function login() {
    var scope = angular.element(document.getElementById("body")).scope();
    scope.logged = true;
    scope.$apply()
}

function setGraphbox1() {

    prediction = { "names": ["20/03/20", "21/03/20"], "values": [50, 60] }
    dates = { "names": ["14/03/20", "15/03/20", "16/03/20", "17/03/20", "18/03/20", "19/03/20"], "values": [50, 60, 50, 60, 50, 60] }

    prediction2 = { "names": ["20/03/20", "21/03/20"], "values": [500, 600] }
    dates2 = { "names": ["14/03/20", "15/03/20", "16/03/20", "17/03/20", "18/03/20", "19/03/20"], "values": [500, 600, 500, 600, 500, 600] }

    labels = []
    values = [] //6 valeur
    for (let i = 2; i < 6; i++) {
        values.push(dates.values[i])
        labels.push(dates.names[i])
    }
    for (let i = 0; i < 2; i++) {
        values.push(prediction.values[i])
        labels.push(prediction.names[i])
    }

    labels2 = []
    values2 = [] //6 valeur
    for (let i = 2; i < 6; i++) {
        values2.push(dates2.values[i])
        labels2.push(dates2.names[i])
    }
    for (let i = 0; i < 2; i++) {
        values2.push(prediction2.values[i])
        labels2.push(prediction2.names[i])
    }


    datasetsList2 = []
    p = {
        label: "Estimé",
        fill: false,
        data: values,
        backgroundColor: [
            'rgb(68, 114, 196)'
        ],
        borderColor: [
            'rgb(68, 114, 196)'
        ],
        borderWidth: 2
    }
    p2 = {
        label: "Réel",
        fill: false,
        data: values2,
        backgroundColor: [
            'rgb(186, 0, 0)'
        ],
        borderColor: [
            'rgb(186, 0, 0)'
        ],
        borderWidth: 2
    }

    datasetsList2.push(p)
    datasetsList2.push(p2)
    var ann = [1];
    var ann_labels = ['today'];

    var annotations_array = ann.map(function (value, index) {
        return {
            type: 'line',
            id: 'vline' + index,
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: value,
            borderColor: 'red',
            borderWidth: 2,
            label: {
                backgroundColor: 'rgba(0,0,0,0.4)',
                fontColor: "#fff",
                enabled: true,
                position: "top",
                content: ann_labels[index]
            }
        }
    });


    var ctx = document.getElementById('myChart2');

    var myChart2 =

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels2,
                datasets: datasetsList2
            },
            options: {
                annotation: {
                    drawTime: 'afterDatasetsDraw',
                    annotations: annotations_array,
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 100,
                                maxTicksLimit: 700,
                                suggestedMax: 600,
                                position: 'right'

                            },
                            position: "right",
                        }, {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 10,
                                maxTicksLimit: 70,
                                suggestedMax: 60,



                            }
                        }
                    ]
                }
            }
        });
}


//=========================== GOOGLE MAPS==================

      // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUf-lvxaloDpGUZ8xYPMDnf2t3D-BF04M&libraries=visualization">

      var map, heatmap;
      var mapZoom = 5;
    // var reg_c={lat: 34.03333333, lng: -6.83333333}
    var data_map =
[
    { "name": "Tanger-Tétouan-Al Hoceïma", "level":1,"lat":35.737808,"lng":-5.854294},
    { "name": "Oriental", "level":2,"lat":34.68333333,"lng":-1.9},
    { "name": "Fès-Meknès", "level":3,lat:34.03333333,lng:-5},
    { "name": "Rabat-Salé-Kénitra", "level":1,lat:34.03333333,lng:-6.83333333},
    { "name": "Béni Mellal-Khénifra", "level":1,lat:32.3684,lng:-6.3693},
    { "name": "Casablanca-Settat", "level":1,lat:33.53333333,lng:-7.58333333},
    { "name": "Marrakech-Safi", "level":1,lat:31.61666667,lng:-8},
    { "name": "Drâa-Tafilalet", "level":1,lat:30.9,lng:-5.6},
    { "name": "Souss-Massa", "level":1,lat:30.08,lng:-8.48},
    { "name": "Guelmim-Oued Noun", "level":1,lat:28.45,lng:-10.11},
    { "name": "Laâyoune-Sakia El Hamra", "level":1,lat:26.133,lng:-14.5},
    { "name": "Dakhla-Oued Ed-Dahab", "level":1,lat:23,lng:-15},
]

      function initMap() {
        const mapOptions = {
            zoom: mapZoom,
            center: new google.maps.LatLng(29.2710757, -8.8177464),
            mapTypeId: google.maps.MapTypeId.satellite,
            zoomControl: true,
            mapTypeControl: false,
            //scaleControl: true,
            //streetViewControl: boolean,
            // rotateControl: boolean,
            // fullscreenControl: boolean
            // roadmap displays the default road map view. This is the default map type.
            // satellite displays Google Earth satellite images.
            // hybrid displays a mixture of normal and satellite views.
            // terrain displays a physical map based on terrain information.
        };
    
        // map = new google.maps.Map(document.getElementById('googleMap'), {
        //   zoom: 4,
        //   center: {lat: 34.03333333, lng: -6.83333333},
        //   mapTypeId: 'satellite'
        // });

      

        map = new google.maps.Map(document.getElementById("googleMap"), mapOptions),
        mapStyles = [{ featureType: "administrative.country", stylers: [{ visibility: "off" }] }],
        mapType = new google.maps.StyledMapType(mapStyles, { name: "Maroc" });
    map.mapTypes.set('maroc', mapType);
    map.setMapTypeId('maroc');
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1S4aLkBE5u_WS0WMVSchhBgMLdAARuPEjyW4rs20',
            where: "col1 contains 'MAR'"
        },
        styles: [{
            polylineOptions: {
                strokeColor: "#333333",
                strokeWeight: 2
            },
        }],
        suppressInfoWindows: true,
    });
        layer.setMap(map);
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: getPoints(data_map),
            map: map
          });
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      function getPoints(data_map) {
    ret=[]
    for(k=0;k<data_map.length;k++)
    {
     var reg_c = data_map[k]
     if(reg_c.level>0)
    
	  for(i=0;i<22;i++)//500points
	  {
      for(j=0;j<22;j++)
      {
        if(i>11)
        {
          if(j>11)
          {
            ret.push(new google.maps.LatLng(reg_c.lat+0.001*i*reg_c.level, reg_c.lng+0.001*j*reg_c.level))
          }
          else
          {
            ret.push(new google.maps.LatLng(reg_c.lat+0.001*i*reg_c.level, reg_c.lng-0.001*j*reg_c.level))
          }
        }
        else
        {
          if(j>11)
          {
            ret.push(new google.maps.LatLng(reg_c.lat+0.001*i*reg_c.level, reg_c.lng+0.001*j*reg_c.level))
          }
          else
          {
            ret.push(new google.maps.LatLng(reg_c.lat+0.001*i*reg_c.level, reg_c.lng-0.001*j*reg_c.level))
          }
        }
      }
    }
  }
	  
        return ret;
      }