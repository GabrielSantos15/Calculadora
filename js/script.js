const result = document.querySelector("#result");
const operation = document.querySelector("#operation");
const buttons = document.querySelectorAll("#calc .btn");

class Calculator {
  constructor(result, operation) {
    this.result = result;
    this.operation = operation;
    this.currentOperation = "";
  }

  //   Adiciona os numeros

  addDigit(digit) {
    if (digit === "," && this.operation.innerHTML.includes(",")) return;

    this.currentOperation = digit;
    this.update();
  }

  //  adiciona as operações

  processOperation(operationValue) {
    console.log(this.operation.innerHTML);
    if (this.operation.innerHTML === "") {
      return;
    }

    this.currentOperation = operationValue;
    this.update();
  }

  //   execulta comandos

  toolProcess(tool) {
    switch (tool) {
      case "C":
        break;
      case "backspace":
        break;
    }
  }

  update() {
    this.operation.innerHTML += this.currentOperation;
    this.result.innerHTML = eval(
      this.operation.innerHTML.replace("^", "**").replace(",", ".")
    );
  }
}

const calc = new Calculator(result, operation);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value >= 0 || value === ",") {
      calc.addDigit(value);
    } else if (e.target.classList.contains("op")) {
      calc.processOperation(value);
    } else {
      calc.toolProcess(value);
    }
  });
});
