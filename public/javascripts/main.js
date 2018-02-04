alert('we in main folks');
alert('we changed');
function() {
  $('.list-inline').on('click', '#shelterButton', function(event){
    alert('one');
    $("#locationId").addClass("hidden");
    $("#hospitalId").addClass("hidden");
    $("#foodId").addClass("hidden");

    $("#shelterId").removeClass("hidden");
  });

  $('.list-inline').on('click', '#foodButton', function(event){
    alert('two');
    $("#locationId").addClass("hidden");
    $("#hospitalId").addClass("hidden");
    $("#shelterId").addClass("hidden");

    $("#foodId").removeClass("hidden");
  });

  $('.list-inline').on('click', '#hospitalButton', function(event){
    alert('three');
    $("#locationId").addClass("hidden");
    $("#shelterId").addClass("hidden");
    $("#foodId").addClass("hidden");

    $("#hospitalId").removeClass("hidden");
  });
};
