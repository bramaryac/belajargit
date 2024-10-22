function calculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  if (operator === "+") {
    let result = num1 + num2;
    document.getElementById("result").innerHTML = `The result is: ${result}`;
  } else if (operator === "-") {
    let result = num1 - num2;
    document.getElementById("result").innerHTML = `The result is: ${result}`;
  } else if (operator === "*") {
    let result = num1 * num2;
    document.getElementById("result").innerHTML = `The result is: ${result}`;
  } else if (operator === "/") {
    if (num2 !== 0) {
      let result = num1 / num2;
      document.getElementById("result").innerHTML = `The result is: ${result}`;
    } else {
      document.getElementById("result").innerHTML = "Error: Division by zero";
    }
  }
}