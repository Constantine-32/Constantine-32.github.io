var date1 = new Date("Nov 29, 2017 3:00:00").getTime();
// var date2 = new Date("Jul 31, 2017 5:30:00").getTime();

setInterval(function() {

  var dist = date1 - new Date().getTime();
  var dd, hh, mm, ss;

  if (dist > 0) {
    dd = Math.floor(dist / 86400000);
    hh = Math.floor(dist % 86400000 / 3600000);
    mm = Math.floor(dist % 3600000 / 60000);
    ss = Math.floor(dist % 60000 /  1000);

    if (dd < 10) dd = "0" + dd;
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;
  } else dd = hh = mm = ss = "00";

  document.getElementById("dd1").innerHTML = dd;
  document.getElementById("hh1").innerHTML = hh;
  document.getElementById("mm1").innerHTML = mm;
  document.getElementById("ss1").innerHTML = ss;

  // dist = date2 - new Date().getTime();
  //
  // if (dist > 0) {
  //   dd = Math.floor(dist / 86400000);
  //   hh = Math.floor(dist % 86400000 / 3600000);
  //   mm = Math.floor(dist % 3600000 / 60000);
  //   ss = Math.floor(dist % 60000 /  1000);
  //
  //   if (dd < 10) dd = "0" + dd;
  //   if (hh < 10) hh = "0" + hh;
  //   if (mm < 10) mm = "0" + mm;
  //   if (ss < 10) ss = "0" + ss;
  // } else dd = hh = mm = ss = "00";
  //
  // document.getElementById("dd2").innerHTML = dd;
  // document.getElementById("hh2").innerHTML = hh;
  // document.getElementById("mm2").innerHTML = mm;
  // document.getElementById("ss2").innerHTML = ss;

}, 1000);