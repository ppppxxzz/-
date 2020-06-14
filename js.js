



function enterstore() {
  $.getJSON('restaurant.json', function (data) {
    $.each(data, function (i, f) {
      var tblRow = '<span class="thisspan" onclick="clickspan(' + f.id + ')"><div style="margin-top:60px;width=600px; border-radius:10px;" class=row>' + "<img width=500 height=500 src=" + f.picture + " class=img-thumbnail col-6>" + " </img>" +
        '<h3 style=" padding-bottom:40px;">' + f.name + "<br>" + f.location + "</h3>" /*+ "<p>" + f.location + "</p>"*/ + "</div></span>" /*+ "<div><iframe src= " + f.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"*/
      $(tblRow).appendTo("#restaurantData");
    });

  });

}




function clickspan(f) {
  //alert("I am an alert box!");
  $("#restaurantData").empty();
  $("#menu").empty();

  //restaurantData
  $.getJSON('restaurant.json', function (data) {
    $.each(data, function (i, d) {
      if (f == d.id) {
        var tblRow = '<span class="thisspan" onclick="clickspan(' + d.id + ')"><div class="row">' + "<img src=" + d.picture + " class=img-thumbnail col-6>" + " </img>" +
          "<h3 col-2 style=padding-bottom:40px;>" + d.name + "</h3>" + "<p col-4 style=padding-bottom:40px;>" + d.location + "</p>" + "</div></span>" + "<div><iframe src= " + d.map + " width=600 height=450 frameborder=0 style=border:0; allowfullscreen= aria-hidden=false tabindex=0></iframe></div>"
        $(tblRow).appendTo("#restaurantData");
      }
    });

  });

  //menu
  $.getJSON('restaurant.json', function (data) {
    $.each(data, function (i, d) {
      if (f == d.id) {

        for (var i = 1; d.i; i++) {
          var tblRow = '<p style=" padding-bottom:40px;" id="iton' + i + '" onclick="itonplus(' + i + ',' + d.i + ')">' + d.i + '</p>'
          $(tblRow).appendTo("#menu");
        }

      }
    });

  });

}
var a = [], times = 0;
var b = [];

function itonplus(i, iton) {
  a[times] = iton;
  b[iton]++;
  times++;
  updata();
}

function updata() {
  $("#item").empty();
  for (var i = 0; i < a.length; i++) {
    var tblRow = '<p style=" padding-bottom:40px;"> '+a[i] +": "+b[a[i]] +' </p>'
    $(tblRow).appendTo("#item");
  }
}


