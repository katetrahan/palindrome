const reducer = (accumulator, currentValue) => accumulator + currentValue;
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var palArray = input.split("");
    var reverseArray = palArray.slice();
    reverseArray.reverse();
    console.log(palArray + " " + reverseArray);

     if (input === reverseArray.reduce(reducer) ){
      $(".output").text("this is a palindrome");
    }
    else {
      $(".output").text("this is not a plaindrome");
    }
  });
});
