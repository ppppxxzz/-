$(function () {


    var restaurant = [];

    $.getJSON('restaurant.json', function (data) {
      $.each(data.restaurant, function (i, f) {
        var tblRow = '<span class="thisspan" onclick="clickspan('+ f.id +')"><div class="row">' + "<img src=" + f.picture + " class=img-thumbnail col-6>" + " </img>" +
          "<h1 col-2>" + f.name + "</h1>" + "<p col-4>" + f.location + "</p>" + "</div></span>" + "<div><iframe src= " + f.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"
        $(tblRow).appendTo("#restaurantData");
      });

    });

  });

  
         function clickspan(f){
          window.location.href='1.html';
          
          }
      