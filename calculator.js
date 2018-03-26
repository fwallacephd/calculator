var state;
var lhs;
var rhs;
var operator;
var result;

initalize();

function initalize() {
  state = "left";
  lhs = "";
  rhs = "";
  operator = "";
  result = "";
}

function showValues() {
  console.log("state", state, "lhs", lhs, "rhs", rhs, "operator", operator, "result", result);
}

$("#deleteAll").on("click", function() {
  initalize();
  $("#steps").text("0");
  showValues();
});

$("#backOne").on("click", function() {
  if (state === "left") {
    lhs = "";
    $("#steps").text("0");
  } else if (state ===  "right") {
    rhs = "";
    $("#steps").text("0");
  } else if (state === "result") {
    lhs = "";
    rhs = "";
    operator = "";
    $("#steps").text("0");
    state = "left";
  }
  showValues();
})

$(".digit").on("click", function() {
  if (state === "left") {
    var digitText = $(this).text();
    //Original text + the digit in next line
    var collectDigitLeft = lhs + digitText;
    lhs = collectDigitLeft;
    $("#steps").text(collectDigitLeft);
    if (collectDigitLeft.length === 0) {
      collectDigitLeft = 0;
      console.log(collectDigitLeft);
    }
  } else if (state === "right") {
    var digitText = $(this).text();
    //Original text + the digit in line 6
    var collectDigitRight = rhs + digitText;
    rhs = collectDigitRight;
    $("#steps").text(collectDigitRight);
  }
  showValues();

});

$(".decimal").on("click", function(){
  if (state === "left") {
    lhs += ".";
    $("#steps").text(lhs);
  } else if (state === "right") {
    rhs += ".";
    $("#steps").text(rhs);
  } else if (state === "result") {
    lhs = ".";
    rhs = "";
    operator = "";
    state = "left";
    $("#steps").text(lhs);
  }
});

$(".operator").on("click", function(){
  if (state === "left") {
    var buttonOperator = this;
    var buttonText = $(this).text();
    operator = buttonText;
    state = "right";

  } else if (state === "result") {
    leftNumber = result;
    lhs = leftNumber;
    buttonOperator = this;
    buttonText = $(this).text();
    operator = buttonText;
    rhs = " ";
    rightNumber = rhs;
    state = "right";
  } else if (state === "right") {
    // force trigger result calculation
  }
  showValues();
});

$("#compute").on("click", function(){
  if (state === "right") {
    var leftNumber = lhs;
    leftNumber = Number(leftNumber);
    var rightNumber = rhs;
    rightNumber = Number(rightNumber);
    var operatorSign = operator;
    if (operatorSign === "+"){
      result = leftNumber + rightNumber;
    } else if (operatorSign === "-") {
      result = leftNumber - rightNumber;
    } else if (operatorSign === "*") {
      result = leftNumber * rightNumber;
    } else if (operatorSign === "/") {
      result = leftNumber / rightNumber;
    }
    if (result !== Math.floor(result)) {
      $("#steps").text(result.toFixed(4));
    } else {
      $("#steps").text(result);
    }
    state = "result";
  } else if (state === "left") {
    // nothing
  } else if (state === "result") {

  }
  showValues();

});


