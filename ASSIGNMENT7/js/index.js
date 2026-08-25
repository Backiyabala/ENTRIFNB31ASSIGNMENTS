// function to perform calculations
function calculate() {
    // get input values
    let operand1 = document.getElementById("operand1").value;
    let operand2 = document.getElementById("operand2").value;
    let operator = document.getElementById("operator").value;
    let result;

    if (operand1 == "") {
        document.getElementById("result").innerHTML = "Enter Operand1";
        console.log(operand1);
        return;
    }
    else {
        // select diifferent operations
        switch (operator) {
            // Addition
            case "+":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                result = Number(operand1) + Number(operand2);
                break;
            // Subtraction
            case "-":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                result = Number(operand1) - Number(operand2);
                break;
            // Multiplication
            case "*":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                result = Number(operand1) * Number(operand2);
                break;
            // Division
            case "/":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                if (operand2 == 0) {
                    findResult("Cannot divide by zero");
                    return;
                }
                result = Number(operand1) / Number(operand2);
                break;

            // Modulo
            case "%":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                result = Number(operand1) % Number(operand2);
                break;

            // Square root
            case "sqrt":
                if (operand1 < 0) {
                    findResult("can't accept negative number");
                    return;
                }
                result = Math.sqrt(Number(operand1));
                break;

            // CubeRoot
            case "cbrt":
                if (operand1 < 0) {
                    findResult("can't accept negative number");
                    return;
                }
                result = Math.cbrt(Number(operand1));
                break;

            // Exponential
            case "power":
                if (operand2 == "") {
                    findResult("Enter operand2");
                    return;
                }
                result = Math.pow(Number(operand1), Number(operand2));
                break;

            default:
                findResult("Select Anyone operation");
                return;
        }
    }

    findResult(result);

}

function findResult(result) {
    document.getElementById("result").innerHTML = result;
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", function clear() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    document.getElementById("result").innerHTML = "";
})


