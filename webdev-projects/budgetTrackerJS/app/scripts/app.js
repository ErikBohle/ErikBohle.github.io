/* 
Budget app

todo:
-validate inputs with regex -> before put into array?
- get sum of array and display total in  #totalText
 *only show 2 decimals.
-Store everything in local storage?
-reset button
- use DRY to reuse code
*/

// declarations
let myarray = [];
let count = 0;
let arrayOfNumbers = [];
let total = 0;
let arr = [];
let removedNumber = 0;
let test = [];
//process inputs

// if else statement to see if index is positive or negative inside for loop then append to dom and add class with variable.classList.add("bgRed")
function appendAndSort() {
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < 0) {
      $(
        "<div><p>" +
          arrayOfNumbers[i] +
          "</p> <button class='bgRed removeDiv' type='button' >Remove item</button> </div>"
      )
        .appendTo(".allinputs")
        .addClass("bgRed");
      //classList.add("bgRed")
    } else if (arrayOfNumbers[i] > 0) {
      $(
        "<div><p>" +
          arrayOfNumbers[i] +
          "</p> <button class='bgBlue removeDiv' type='button' >Remove item</button> </div>"
      )
        .appendTo(".allinputs")
        .addClass("bgBlue");
    }
  }
  deleteBtn();
}

//create a new array so we can use the append method.
//fixes sum to total and rounds it to 2 decimal places.
function addToArrayAndTotal() {
  arrayOfNumbers = myarray.map(Number);
  total = sumArray(arrayOfNumbers).toFixed(2);
  $("#totalText").text(total);
  //empty div so we can use the append method to display prev, inputs.
  $(".allinputs").empty();
}
//sum for total
var sumArray = (function () {
  function add(a, b) {
    return a + b;
  }
  return function (arr) {
    return arr.reduce(add, 0);
  };
})();

//get values from subtract button
$("#btnSubtract").click(function () {
  //validating and changing positive/negative
  if ($("#subtract").val() > 0) {
    myarray.push($("#subtract").val() * -1);
  } else if ($("#subtract").val() < 0) {
    myarray.push($("#subtract").val());
  }
  //adds input to array and gets total sum
  addToArrayAndTotal();
  //Run through array to add items to div
  appendAndSort();
});


// get values from add button
$("#btnAdd").click(function () {
  //validating and changing positive/negative
  if ($("#add").val() > 0) {
    myarray.push($("#add").val());
  } else if ($("#add").val() < 0) {
    myarray.push($("#add").val() * -1);
  }
  //adds input to array and gets total sum
  addToArrayAndTotal();
  //Run through array to add items to div
  appendAndSort();
});
//remove div when button pressed
deleteBtn = function () {
  jQuery(function ($) {
    $("button.removeDiv").on("click", function () {
      removedNumber = $(this).siblings("p").text();
      $(this).closest("div").remove();
      // arr = arrayOfNumbers;
      for (var i = 0; i < myarray.length; i++) {
        if (myarray[i] == removedNumber) {
          myarray.splice(i, 1);
          arrayOfNumbers = myarray.map(Number);
          $(".allinputs").empty();
          addToArrayAndTotal();
          appendAndSort();
          break;
        }
      }
    });
  });
};

