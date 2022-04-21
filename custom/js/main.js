// All global variables
var button_polygon;
var button_edit;
var button_delete;
var button_point;
var button_line;
var abort = false; // set abort to true from the begining of the inirialization , because if someone start edit after the map loads, he or she must be able to start editing
var edit;
var draw;
var snap;
var select_click;
var flag_is_editing_mode_on = false; // turning off the editing mode begining of the inirializarion of the map to start the editing mode
var flag_is_point_mode_on = false; // turning off the editing mode begining of the inirializarion of the map to start the editing mode
var flag_is_polygon_mode_on = false;
var flag_is_line_mode_on = false;
var point_types = ['Trees', 'ATM', 'Telephone Booth', 'Telephone Poles', 'Electricity Poles'];
var line_types = ['Roads', 'Rivers', 'Utility Lines'];
var polygon_types = ['Buildings', 'Land', 'Grounds', 'Yards'];
var selected_geom_type;
var edit_geom_type;
var feature; // Clicked feature on function to find clicked geometry
var drawn_feature; // drawn feature after the feature is added to the map
var updated_feature; // updated feature after the feature is updated on the map
var load_features; // loaded feature after the feature is loaded on the map
var g_id; // New variable for gid
// var sl_level;

/* begin: Dashboard Content Change Dummy */
var overview_section = $('.overview-section');
var save_section = $('.save-section');
var share_section = $('.share-section');
var bw_mc_section = $('.bw-mc-section');
var sidebar_width = $('.sidebar-col').width();
var sidebar_details_col = $('.sidebar-details-col');
var map_section = $('.map-section');
var btns = document.getElementsByClassName("nav-link");
var check_class = sidebar_details_col.hasClass('hide');
var controllers = $('.ol-overlaycontainer-stopevent');
var toolbar = $('.map-toolbar-sec');

// Custom Control
$.ajax({
  type: 'POST',
  url: 'scripts/load_features.php',
  // dataType: 'json',
  success: function (data, status) {
    class polygon_button extends ol.control.Control {
      /**
       * @param {Object} [opt_options] Control options.
       */
      constructor(opt_options) {
        const options = opt_options || {};

        button_polygon = document.createElement('button'); // Creating button element
        button_polygon.id = 'button_polygon' // Creating button id
        button_polygon.innerHTML = '<i class="fas fa-draw-polygon"></i>'; // Creating button element
        button_polygon.setAttribute('data-toggle', "tooltip"); // Setting attributes to the button
        button_polygon.setAttribute('data-placement', "right"); // Setting attributes to the button
        button_polygon.title = 'Draw polygon';

        var element_polygon = document.createElement('div'); // Creating div element
        element_polygon.className = 'polygon-tool ol-unselectable ol-control'; // Creating element class
        element_polygon.appendChild(button_polygon); // Appending button element as a child element inside the div

        super({
          element: element_polygon,
          target: options.target,
        });

        button_polygon.addEventListener('click', this.start_polygon_draw.bind(this), false);
      }

      start_polygon_draw() { // Function when button is clicked
        selected_geom_type = 'Polygon';
        if (flag_is_polygon_mode_on == false) {
          abort = true; // map on click function will stop execution
          snap = new ol.interaction.Snap({
            source: draw_source
          });
          draw = new ol.interaction.Draw({
            type: 'Polygon',
            source: draw_source
          });
          map.addInteraction(draw);
          map.addInteraction(snap);
          button_polygon.innerHTML = '<i class ="far fa-stop-circle"></i>'; // Creating button element
          flag_is_polygon_mode_on = true;
        } else {
          abort = false
          map.removeInteraction(draw);
          map.removeInteraction(snap);
          flag_is_polygon_mode_on = false;
          button_polygon.innerHTML = '<i class="fas fa-draw-polygon"></i>'; // Creating button element
        }
      }
    }

    class editing_button extends ol.control.Control {
      /**
       * @param {Object} [opt_options] Control options.
       */
      constructor(opt_options) {
        const options = opt_options || {};

        button_edit = document.createElement('button'); // Creating button element
        button_edit.id = 'button_start_edit' // Creating button id
        button_edit.innerHTML = '<i class="fas fa-edit"></i>'; // Creating button element
        button_edit.setAttribute('data-toggle', "tooltip"); // Setting attributes to the button
        button_edit.setAttribute('data-placement', "right"); // Setting attributes to the button
        button_edit.title = 'Edit features';

        var element_edit = document.createElement('div'); // Creating div element
        element_edit.className = 'edit-tool ol-unselectable ol-control'; // Creating element class
        element_edit.appendChild(button_edit); // Appending button element as a child element inside the div

        super({
          element: element_edit,
          target: options.target,
        });

        button_edit.addEventListener('click', this.start_stop_editing.bind(this), false);
      }

      start_stop_editing() { // Function when button is clicked
        if (flag_is_editing_mode_on == false) {
          start_edit();
        } else {
          map.removeInteraction(edit); // if edit mode is on, then turn it off
          flag_is_editing_mode_on = false
          document.getElementById('button_start_edit').innerHTML = '<i class="fas fa-edit"></i>' // Setting the button to initial state
          /*define_type_of_features(); // Activate the function in editing mode on*/
          /*change_modal_button(); // Activate the function to change the modal button*/
          /* $('#enter_information_modal').modal('show'); // Show form to enter the information when the button is clicked after editing a feature when edit mode is on*/
        }
      }
    }

    class point_button extends ol.control.Control {
      /**
       * @param {Object} [opt_options] Control options.
       */
      constructor(opt_options) {
        const options = opt_options || {};

        button_point = document.createElement('button'); // Creating button element
        button_point.id = 'button_point' // Creating button id
        button_point.innerHTML = '<i class="fas fa-map-marker-alt"></i>'; // Creating button element
        button_point.setAttribute('data-toggle', "tooltip"); // Setting attributes to the button
        button_point.setAttribute('data-placement', "right"); // Setting attributes to the button
        button_point.title = 'Draw point';

        var element_point = document.createElement('div'); // Creating div element
        element_point.className = 'point-tool ol-unselectable ol-control'; // Creating element class
        element_point.appendChild(button_point); // Appending button element as a child element inside the div

        super({
          element: element_point,
          target: options.target,
        });

        button_point.addEventListener('click', this.start_point_draw.bind(this), false);
      }

      start_point_draw() { // Function when button is clicked
        selected_geom_type = 'Point';
        if (flag_is_point_mode_on == false) {
          abort = true; // map on click function will stop execution
          snap = new ol.interaction.Snap({
            source: draw_source
          });
          draw = new ol.interaction.Draw({
            type: 'Point',
            source: draw_source
          });
          map.addInteraction(draw);
          map.addInteraction(snap);
          button_point.innerHTML = '<i class ="far fa-stop-circle"></i>'; // Creating button element
          flag_is_point_mode_on = true;
        } else {
          abort = false; // map on click function will stop execution
          map.removeInteraction(draw);
          map.removeInteraction(snap);
          flag_is_point_mode_on = false;
          button_point.innerHTML = '<i class="fas fa-map-marker-alt"></i>'; // Creating button element
        }
      }
    }

    class line_button extends ol.control.Control {
      /**
       * @param {Object} [opt_options] Control options.
       */
      constructor(opt_options) {
        const options = opt_options || {};

        button_line = document.createElement('button'); // Creating button element
        button_line.id = 'button_line' // Creating button id
        button_line.innerHTML = '<i class="fas fa-bezier-curve"></i>'; // Creating button element
        button_line.setAttribute('data-toggle', "tooltip"); // Setting attributes to the button
        button_line.setAttribute('data-placement', "right"); // Setting attributes to the button
        button_line.title = 'Draw Line';


        var element_line = document.createElement('div'); // Creating div element
        element_line.className = 'line-tool ol-unselectable ol-control'; // Creating element class
        element_line.appendChild(button_line); // Appending button element as a child element inside the div

        super({
          element: element_line,
          target: options.target,
        });

        button_line.addEventListener('click', this.start_line_draw.bind(this), false);
      }

      start_line_draw() { // Function when button is clicked
        selected_geom_type = 'LineString';
        if (flag_is_line_mode_on == false) {
          abort = true; // map on click function will stop execution
          snap = new ol.interaction.Snap({
            source: draw_source
          });
          draw = new ol.interaction.Draw({
            type: 'LineString',
            source: draw_source
          });
          map.addInteraction(draw);
          map.addInteraction(snap);
          button_line.innerHTML = '<i class ="far fa-stop-circle"></i>'; // Creating button element
          flag_is_line_mode_on = true;
        } else {
          abort = false; // map on click function will stop execution
          map.removeInteraction(draw);
          map.removeInteraction(snap);
          flag_is_line_mode_on = false;
          button_line.innerHTML = '<i class="fas fa-bezier-curve"></i>'; // Creating button element
        }
      }
    }

    class deleting_button extends ol.control.Control {
      /**
       * @param {Object} [opt_options] Control options.
       */
      constructor(opt_options) {
        const options = opt_options || {};

        button_delete = document.createElement('button'); // Creating button element
        button_delete.id = 'button_start_delete' // Creating button id
        button_delete.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Creating button element
        button_delete.setAttribute('data-toggle', "tooltip"); // Setting attributes to the button
        button_delete.setAttribute('data-placement', "right"); // Setting attributes to the button
        button_delete.title = 'Delete features';

        var element_delete = document.createElement('div'); // Creating div element
        element_delete.className = 'delete-tool ol-unselectable ol-control'; // Creating element class
        element_delete.appendChild(button_delete); // Appending button element as a child element inside the div

        super({
          element: element_delete,
          target: options.target,
        });

        button_delete.addEventListener('click', this.start_stop_deleting.bind(this), false);
      }

      start_stop_deleting() { // Function when button is clicked
        if (feature) { // if feature exist after click
          var confirm_msg = confirm("Are you sure, you want to permenantly DELETE this feature!?");
          if (confirm_msg == true) { // if clicked ok confirm_msg returns true
            draw_source.removeFeature(feature); // remove clicked feature
            $.ajax({
              url: 'scripts/delete_features.php',
              type: 'POST', // method
              data: {
                id_of_feature: g_id, // new variables for passing data
              },
              success: function () {
                alert("Feature deleted successfully!");
                console.log("Feature deleted successfully!")
              }
            })

          } else { // if clicked cancel confirm_msg returns false
            return false; // Keep clicked feature
          }
        }
      }
    }
    load_features = new ol.format.GeoJSON().readFeatures(data); // reading returned data from the ajax request
    console.log(load_features); // for debugging 
    // View
    var myview = new ol.View({
      projection: 'EPSG:4326',
      center: [80.98885377363007, 6.830454104603501], // remeber to set latlon in 'lon' first and 'lat' scecond
      zoom: 17
    });

    // Base Layer
    var baseLayer = new ol.layer.Group({
      // A layer must have a title to appear in the layerswitcher
      title: 'Base maps',
      fold: 'open',
      layers: [
        /*new ol.layer.Group({
          // A layer must have a title to appear in the layerswitcher
          title: 'Water color with labels',
          // Setting the layers type to 'base' results
          // in it having a radio button and only one
          // base layer being visibile at a time
          type: 'base',
          // Setting combine to true causes sub-layers to be hidden
          // in the layerswitcher, only the parent is shown
          combine: true,
          visible: false,
          layers: [
            new ol.layer.Tile({
              source: new ol.source.Stamen({
                layer: 'watercolor'
              })
            }),
            new ol.layer.Tile({
              source: new ol.source.Stamen({
                layer: 'terrain-labels'
              })
            })
          ]
        }),
        new ol.layer.Tile({
          // A layer must have a title to appear in the layerswitcher
          title: 'Water color',
          // Again set this layer as a base layer
          type: 'base',
          visible: false,
          source: new ol.source.Stamen({
            layer: 'watercolor'
          })
        }),*/
        new ol.layer.Tile({
          // A layer must have a title to appear in the layerswitcher
          title: 'BingMaps',
          // Again set this layer as a base layer
          type: 'base',
          visible: true,
          source: new ol.source.BingMaps({
            key: 'AshrP2YvBPN60emxJEFYNNNtBYcUAqEJ2J0FctgznIkRgrNnOdbPdRpbht_X7eD8',
            imagerySet: 'AerialWithLabels'
          })
        }),
        new ol.layer.Tile({
          // A layer must have a title to appear in the layerswitcher
          title: 'OSM',
          // Again set this layer as a base layer
          type: 'base',
          visible: true,
          source: new ol.source.OSM()
        }),

      ]
    })

    // Draw vector layer
    // 1. Define source
    var draw_source = new ol.source.Vector({
      features: load_features
    })
    // 2. Define layer
    var draw_layer = new ol.layer.Group({
      // A layer must have a title to appear in the layerswitcher
      title: 'Overlays',
      // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
      // collapsible
      fold: 'open',
      layers: [
        new ol.layer.Vector({
          // A layer must have a title to appear in the layerswitcher
          title: 'Draw Layer',
          source: draw_source
        }),
        /*new ol.layer.Group({
          // A layer must have a title to appear in the layerswitcher
          title: 'Census',
          fold: 'open',
          layers: [
            new ol.layer.Image({
              // A layer must have a title to appear in the layerswitcher
              title: 'Local Authority Districts December 2011 Boundaries',
              source: new ol.source.ImageArcGISRest({
                ratio: 1,
                params: {
                  LAYERS: 'show:0'
                },
                url: 'https://ons-inspire.esriuk.com/arcgis/rest/services/Census_Boundaries/Census_Merged_Local_Authority_Districts_December_2011_Boundaries/MapServer'
              })
            }),
            new ol.layer.Image({
              // A layer must have a title to appear in the layerswitcher
              title: 'Wards',
              visible: false,
              source: new ol.source.ImageArcGISRest({
                ratio: 1,
                params: {
                  LAYERS: 'show:0'
                },
                url: 'https://ons-inspire.esriuk.com/arcgis/rest/services/Census_Boundaries/Census_Merged_Wards_December_2011_Boundaries/MapServer'
              })
            })
          ]
        })*/
      ]
    })

    // Layer Array
    var layer_array = [baseLayer, draw_layer]

    // Controls Attribute Collapse
    var mycontrols = new ol.control.defaults({
      attributionOptions: {
        collapsible: true
      }
    }).extend([new polygon_button(), new editing_button(), new deleting_button(), new point_button(), new line_button()]);

    // Map
    var map = new ol.Map({
      target: 'mymap',
      layers: layer_array,
      view: myview,
      controls: mycontrols,
    });

    var layerSwitcher = new ol.control.LayerSwitcher({
      tipLabel: 'Légende', // Optional label for button
      groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
    });
    map.addControl(layerSwitcher);

    select_click = new ol.interaction.Select({
      condition: ol.events.condition.click,
      hitTolerance: 1
    });
    map.addInteraction(select_click);

    // Function Start Editing
    function start_edit() {
      edit = new ol.interaction.Modify({
        source: draw_source
      });
      snap = new ol.interaction.Snap({
        source: draw_source
      });
      map.addInteraction(edit);
      map.addInteraction(snap);
      document.getElementById('button_start_edit').innerHTML = '<i class ="far fa-stop-circle"></i>' // Activating the stop button
      flag_is_editing_mode_on = true; // set to editing mode is on inside the flag
    };

    // function to find the clicked feature geometry type
    map.on('click', function (evt) {
      if (abort) { // if abort == true , function execution will stop
        return;
      }
      feature = map.forEachFeatureAtPixel(evt.pixel,
        function (feature, layer) {
          if (abort) { // if abort == true , function execution will stop
            return;
          }
          return feature;
        }, {
        hitTolerance: 8,
      });
      if (feature) { // if feature; exist
        if (abort) { // if abort == true , function execution will stop
          return;
        }
        var geometry = feature.getGeometry();
        var type = geometry.getType();
        console.log(type);
        selected_geom_type = type;
        console.log(selected_geom_type);
        g_id = feature.getProperties().id; // getting feature_id
        console.log(g_id);
        // sl_level = feature.getProperties().sl_level; // getting the administartive level
        // console.log(sl_level);

        $.ajax({
          url: 'scripts/get_parcel_details.php',
          type: 'POST', // method
          data: {
            /* type_of_geom: type, // new variables for passing data
             name_of_geom: name, // new variables for passing data*/
            // id: '786'// new variables for passing data
            id: g_id
          },
          success: function (data) {
            const allData = JSON.parse(data);
            bindAllValues(allData);

          },
          error: function (error) {
            alert("Error Occurred Please try again.")
          }
        })

        overview_section.removeClass('hide-section');
        save_section.addClass('hide-section');
        share_section.addClass('hide-section');
        bw_mc_section.addClass('hide-section');

        if (check_class) {
          sidebar_details_col.removeClass('hide');
        } else {
          return;
        }

        for (var i = 0; i < btns.length; i++) {
          btns[i].classList.remove('active');
        };

        $('#overview-btn').addClass('active');

        toolbar.addClass('go-right-toolbar');

        $('.ol-overlaycontainer-stopevent').addClass('go-right');

      };
    });

    /*
        // function to add types of feature
        function define_type_of_features() {
          var drop_down_of_types = document.getElementById('type_of_features'); // Cathing HTML element with id='types_of_features' <select>
          drop_down_of_types.innerHTML = ''; // Clearing previous values of the element before creating the <options> dynamically
          if (selected_geom_type == 'Point') {
            for (let i = 0; i < point_types.length; i++) {
              var op = document.createElement('option'); // Creating dynamically HTML element <option> inside <select> element
              op.value = point_types[i]; //Assigning values to <option>
              op.innerHTML = point_types[i]; //Creating HTML elements for those assigned values
              drop_down_of_types.appendChild(op); //Appending the created <option> element as a child element of <select> 
            }
          } else if (selected_geom_type == 'LineString') {
            for (let i = 0; i < line_types.length; i++) {
              var op = document.createElement('option'); // Creating dynamically HTML element <option> inside <select> element
              op.value = line_types[i]; //Assigning values to <option>
              op.innerHTML = line_types[i]; //Creating HTML elements for those assigned values
              drop_down_of_types.appendChild(op); //Appending the created <option> element as a child element of <select> 
            }
          } else {
            for (let i = 0; i < polygon_types.length; i++) {
              var op = document.createElement('option'); // Creating dynamically HTML element <option> inside <select> element
              op.value = polygon_types[i]; //Assigning values to <option>
              op.innerHTML = polygon_types[i]; //Creating HTML elements for those assigned values
              drop_down_of_types.appendChild(op); //Appending the created <option> element as a child element of <select> 
            }
          }
        }*/

    // Even is fired after the feature is added to the map
    draw_source.on('addfeature', function (event) {
      drawn_feature = event.feature;
      console.log(drawn_feature);
      console.log("Drawing Finished!")
      /*define_type_of_features(); // Activate the function in editing mode on*/
      /* $('#enter_information_modal').modal('show'); // Show form to enter the information when the button is clicked after editing a feature when edit mode is on*/
      var confirm_msg_save = confirm("Are you sure, you want to ADD this feature!?");
      if (confirm_msg_save == true) {
        save_features_db()
      } else { // if clicked cancel confirm_msg returns false
        draw_source.removeFeature(drawn_feature); // remove clicked feature
        return false; // Keep clicked feature
      }
    });

    // Event is fired after the features changed
    draw_source.on('changefeature', function (event) {
      updated_feature = event.feature;
      console.log(updated_feature);
    })

    $('.ol-zoom-in, .ol-zoom-out').attr('data-toggle', "tooltip") // setting attributes to the Ol default buttons using jQuery

    $(function () { // activating tooltip for every element containing 'data-toggle="tooltip"'
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
});

// function to save information in to DATABASE
function save_features_db() {
  // define geoJSON format convertor
  var geo_JSON_format = new ol.format.GeoJSON();

  // use methord to convert feature to a GeoJSON object
  var feature_Geo_JSON = geo_JSON_format.writeFeatureObject(drawn_feature);
  console.log("Converted the feature to GeoJSON Object: ");
  console.log(feature_Geo_JSON);

  /* // Catching the type of feature to the variable
   var type = $('#type_of_features')[0].value;
   console.log(type);*/

  /* // Catching the name of feature to the variable
   var name = $('#name_of_feature')[0].value;
   console.log(name);*/

  // Converting the geometry object to a string
  var geom = JSON.stringify(feature_Geo_JSON.geometry);
  console.log(geom);

  /*if (type != '') { // If type is not empty*/
  $.ajax({
    url: 'scripts/save_features.php',
    type: 'POST', // method
    data: {
      /* type_of_geom: type, // new variables for passing data
       name_of_geom: name, // new variables for passing data*/
      string_of_geom: geom // new variables for passing data
    },
    success: function () {
      alert("Feature added successfully!");
      console.log("Feature added successfully!");
    }
  })
  /*} else {
    alert("Please select a feature type")
  }*/

}

/*function change_modal_button() { // function to change the modal button
  document.getElementById("button_save").classList.remove('btn-primary'); // removing the button bootsrap class on button
  document.getElementById("button_save").classList.add('btn-success'); // adding the button bootsrap class on button
  document.getElementById("button_save").innerText = 'Update Feature'; // Changing the button name
  document.getElementById("button_save").setAttribute('onclick', 'update_features_db()'); // Setting attributes to the button
}*/

// function to update information in to DATABASE
function update_features_db() {
  // define geoJSON format convertor
  var geo_JSON_format = new ol.format.GeoJSON();

  // use methord to convert feature to a GeoJSON object
  var feature_Geo_JSON = geo_JSON_format.writeFeatureObject(updated_feature);
  console.log("Converted the feature to GeoJSON Object: ");
  console.log(feature_Geo_JSON);

  // Catching the type of feature to the variable
  /*var type = $('#type_of_features')[0].value;
  console.log(type);*/

  // Catching the name of feature to the variable
  /* var name = $('#name_of_feature')[0].value;
   console.log(name);*/

  // Converting the geometry object to a string
  var geom = JSON.stringify(feature_Geo_JSON.geometry);
  console.log(geom);

  if (type != '') { // If type is not empty
    $.ajax({
      url: 'scripts/update_features.php',
      type: 'POST', // method
      data: {
        /*type_of_geom: type, // new variables for passing data
        name_of_geom: name, // new variables for passing data*/
        string_of_geom: geom, // new variables for passing data
        id_of_feature: g_id, // new variables for passing data
      },
      success: function () {
        alert("Feature Updated successfully!");
        console.log("Feature Updated successfully!");
      }
    })
  } else {
    alert("Please select a feature type")
  }

}

/* UI jquery */
$(document).ready(function () {

  /* Map Section Positioning */
  map_section.css({
    "margin-left": sidebar_width,
  });

  /* Dashboard Section Positioning */
  sidebar_details_col.css({
    "margin-left": sidebar_width
  });

  /* Dashboard Expand Function */
  // $(".nav-link").each(function (index) {
  //   $(this).on("click", function () {

  //     if (check_class) {
  //       sidebar_details_col.removeClass('hide');
  //     } else {
  //       return;
  //     }

  //     toolbar.addClass('go-right-toolbar');
  //     $('.ol-overlaycontainer-stopevent').addClass('go-right');
  //   });
  // });

  // expand second menu
  $(".btn-district-btn").each(function (index) {
    $(this).on("click", function () {
      $('.btn-district-btn').each(function(index){
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      $('.expand-menu-2').removeClass('hide-section');
    });
  });

  $(".mcs-accordion-btn").each(function (index) {
    $(this).on("click", function () {
      $('.btn-district-btn').each(function(index){
        $(this).removeClass('active');
      })
      $('.expand-menu-2').addClass('hide-section');
      $('.expand-menu-3').addClass('hide-section');
    });
  });
  // expand third menu
  $(".second-menu-btn").each(function (index) {
    $(this).on("click", function () {
      $('.second-menu-btn').each(function(index){
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      $('.expand-menu-3').removeClass('hide-section');
    });
  });

  /* Dashboard Close Function */
  $(".btn-sidebar-det-close").click(function () {

    sidebar_details_col.addClass('hide');

    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    };

    toolbar.removeClass('go-right-toolbar');
    $('.ol-overlaycontainer-stopevent').removeClass('go-right');
  });

  /* Add active class to the current button (highlight it) */
  $(".nav-link").click(function () {

    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
    };
    if (g_id) {
      $(this).addClass('active');
    }

  });

  $(".nav-link").hover(function () {

    if (g_id) {
      $(this).css({
        'cursor':'pointer',
      });
    } else {
      $(this).css({
        'cursor':'not-allowed',
      })
    }
  
  });

  /* Parcel Click to Open Overview & Active Sidebar Overview */
  // $('.expand-btn').click(function () {

  //   overview_section.removeClass('hide-section');
  //   save_section.addClass('hide-section');
  //   share_section.addClass('hide-section');

  //   if (check_class) {
  //     sidebar_details_col.removeClass('hide');
  //   } else {
  //     return;
  //   }

  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].classList.remove('active');
  //   };

  //   $('#overview-btn').addClass('active');

  // });

  $("#overview-btn").click(function () {
    if (g_id) {
      if (check_class) {
        sidebar_details_col.removeClass('hide');
      } else {
        return;
      }
      overview_section.removeClass('hide-section');
      save_section.addClass('hide-section');
      share_section.addClass('hide-section');
      bw_mc_section.addClass('hide-section');
    }
  });
  $("#save-btn").click(function () {
    if (g_id) {
      if (check_class) {
        sidebar_details_col.removeClass('hide');
      } else {
        return;
      }
      save_section.removeClass('hide-section');
      overview_section.addClass('hide-section');
      share_section.addClass('hide-section');
      bw_mc_section.addClass('hide-section');
    }
  });
  $("#share-btn").click(function () {
    if (g_id) {
      if (check_class) {
        sidebar_details_col.removeClass('hide');
      } else {
        return;
      }
      share_section.removeClass('hide-section');
      overview_section.addClass('hide-section');
      save_section.addClass('hide-section');
      bw_mc_section.addClass('hide-section');
    }
  });
  $("#bw-mc-btn").click(function () {
    if (g_id) {
      if (check_class) {
        sidebar_details_col.removeClass('hide');
      } else {
        return;
      }
      bw_mc_section.removeClass('hide-section');
      overview_section.addClass('hide-section');
      save_section.addClass('hide-section');
      share_section.addClass('hide-section');
    }
  });
  /* end: Dashboard Content Change Dummy */



});