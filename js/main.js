function openEvent(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function toggleIcon1(e) {
    $(e.target)
        .prev('.card-header')
        .find(".accordion_button1")
        .toggleClass('plus minus');
}
function toggleIcon2(e) {
  $(e.target)
      .prev('.card-header')
      .find(".accordion_button2")
      .toggleClass('plus minus');
}
function toggleIcon3(e) {
  $(e.target)
      .prev('.card-header')
      .find(".accordion_button3")
      .toggleClass('plus minus');
}
$('.accordion').on('hidden.bs.collapse', toggleIcon1);
$('.accordion').on('shown.bs.collapse', toggleIcon1);
$('.accordion').on('hidden.bs.collapse', toggleIcon2);
$('.accordion').on('shown.bs.collapse', toggleIcon2);
$('.accordion').on('hidden.bs.collapse', toggleIcon3);
$('.accordion').on('shown.bs.collapse', toggleIcon3);
