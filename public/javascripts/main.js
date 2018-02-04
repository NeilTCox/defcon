$(document).ready(function () {
  $('.list-inline').on('click', '#shelterButton', function(event){

    $("#locationId").addClass("hidden");
    $("#hospitalId").addClass("hidden");
    $("#foodId").addClass("hidden");

    $("#shelterId").removeClass("hidden");
  });

  $('.list-inline').on('click', '#foodButton', function(event){
    $("#locationId").addClass("hidden");
    $("#hospitalId").addClass("hidden");
    $("#shelterId").addClass("hidden");

    $("#foodId").removeClass("hidden");
  });

  $('.list-inline').on('click', '#hospitalButton', function(event){
    $("#locationId").addClass("hidden");
    $("#shelterId").addClass("hidden");
    $("#foodId").addClass("hidden");

    $("#hospitalId").removeClass("hidden");
  });


});
