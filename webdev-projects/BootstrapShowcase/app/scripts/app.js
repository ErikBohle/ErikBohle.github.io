
//modals
$("#exampleModal").on("show.bs.modal", (event) => {
  var button = $(event.relatedTarget);
  var modal = $(this);
});

//filter products
var $mediaElements = $(".product");
var min = "";
var max = "";
var filterVal = "";

$.fn.test = function(){
  $(".product")
  .filter(function () {
    $mediaElements.show();
    return $(this).data("price") < min || $(this).data("price") > max;
  })
  .hide();};


$(".filter_link").click(function (e) {
  e.preventDefault();
  // get the category from the attribute
  // var filterVal = $(".product[data-price='15']")
  var filterVal = $(this).val();
  console.log(filterVal, "filtervalue");
  console.log($mediaElements, "Meelem");

  if (filterVal == "all") {
    console.log("hi");
    
    $mediaElements.show();
  } else if (filterVal === "0-20") {
    // $($mediaElements[i]).data("price") < 20 || $($mediaElements[i]).data("price") > 0
    console.log($($mediaElements).data("price"));
    min = 0;
    max = 20;
    $(".product").test();
  } else if (filterVal === "20-40") {
    // $($mediaElements[i]).data("price") < 20 || $($mediaElements[i]).data("price") > 0
    console.log($($mediaElements).data("price"));
    min = 20;
    max = 40;
    $(".product").test();
  } else if (filterVal === "40-60") {
    // $($mediaElements[i]).data("price") < 20 || $($mediaElements[i]).data("price") > 0
    console.log($($mediaElements).data("price"));
    min = 40;
    max = 60;
    $(".product").test();
  } else if (filterVal === "60-100") {
    // $($mediaElements[i]).data("price") < 20 || $($mediaElements[i]).data("price") > 0
    console.log($($mediaElements).data("price"));
    min = 60;
    max = 100;
    $(".product").test();
  }
});
//  for (i = 0; i < $mediaElements; i++) {

// if ([5,6,7,8,9].indexOf(this.currSlideId) > -1) {
//   $('.accolades').addClass('current');
// } else {
//   $('.accolades').removeClass('current');
// }
