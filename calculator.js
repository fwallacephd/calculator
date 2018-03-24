var state = "left";

$(".digit").on("click", function() {
  if (state === "left") {
    var digitText = $(this).text();
    //Original text + the digit in next line
    var collectDigitLeft = $("#lhs").text() + digitText;
    $("#lhs").text(collectDigitLeft);
    $("#steps").text(collectDigitLeft);
    if (collectDigitLeft.length === 0) {
      collectDigitLeft = 0;
      console.log(collectDigitLeft);
    }
  } else if (state === "right") {
    var digitText = $(this).text();
    //Original text + the digit in line 6
    var collectDigitRight = $("#rhs").text() + digitText;
    $("#rhs").text(collectDigitRight);
    $("#steps").text(collectDigitRight);
  }
});

$(".operator").on("click", function(){
  var buttonOperator = this;
  var buttonText = $(this).text();
  $("#operator").text(buttonText);
  state = "right";
});

$("#compute").on("click", function(){
  var leftNumber = $("#lhs").text();
  leftNumber = Number(leftNumber);
  var rightNumber = $("#rhs").text();
  rightNumber = Number(rightNumber);
  var operatorSign = $("#operator").text();
  var result;
  if (operatorSign === "+"){
    result = leftNumber + rightNumber;
  } else if (operatorSign === "-") {
    result = leftNumber - rightNumber;
  } else if (operatorSign === "*") {
    result = leftNumber * rightNumber;
  } else if (operatorSign === "/") {
    result = leftNumber / rightNumber;
  }
  $("#result").text(result);
  $("#steps").text(result);

  $(".operator").on("click", function(){
    leftNumber = result;
    $("#lhs").text(leftNumber);
    buttonOperator = this;
    buttonText = $(this).text();
    $("#operator").text(buttonText);
    rightNumber = $("#rhs").text(" ");
  });
});


