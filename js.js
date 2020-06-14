



function enterstore() {
        $.getJSON('restaurant.json', function (data) {
          $.each(data, function (i, f) {
            var tblRow = '<span class="thisspan" onclick="clickspan(' + f.id + ')"><div style="margin-top:60px;width=600px;background-color:cce0ff; border-radius:10px;" class=row>' + "<img width=500 height=500 src=" + f.picture + " class=img-thumbnail col-6>" + " </img>" +
              '<h3>' + f.name + "<br>" + f.location + "</h3>" /*+ "<p>" + f.location + "</p>"*/ + "</div></span>" /*+ "<div><iframe src= " + f.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"*/
              $(tblRow).appendTo("#restaurantData");
            });
  
          });
  
        }




function clickspan(f) {
    //alert("I am an alert box!");
    $("#restaurantData").empty();
   

    $.getJSON('restaurant.json', function (data) {
        $.each(data, function (i, d) {
             if (f == d.id) {
            var tblRow = '<span class="thisspan " onclick="clickspan(' + d.id + ')"><div class="row">' + "<img src=" + d.picture + " class=img-thumbnail col-6>" + " </img>" +
                "<h3 col-2>" + d.name + "</h3>" + "<p col-4>" + d.location + "</p>" + "</div></span>" + "<div><iframe src= " + d.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"
            $(tblRow).appendTo("#restaurantData");
            }
        });

    });

}
