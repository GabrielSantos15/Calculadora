const result = document.querySelector("#result");
const operationView = document.querySelector("#operation");
const buttons = document.querySelectorAll("#calc .btn");

class Calculator {
  constructor(result, operationView) {
    this.result = result;
    this.operationView = operationView;
    this.operation = "";
    this.currentOperation = "";
  }

  //   Adiciona os numeros

  addDigit(digit) {
    this.currentOperation = digit;
    this.update();
  }

  //  adiciona as operações

  processOperation(operationValue) {
    if (this.operation == "") {
      return;
    }

    this.currentOperation = operationValue;
    this.update();
  }

  //   execulta comandos

  toolProcess(tool) {
    switch (tool) {
      case "C":
        this.operation = "";
        break;
      case "backspace":
        this.operation = this.operation.slice(0, -1);
        break;
    }
    this.currentOperation = "";
    this.update();
  }

  update() {
    if (this.operation == 0) {
      this.operation = this.currentOperation;
    } else {
      this.operation += this.currentOperation;
    }

    this.operationView.innerHTML = this.operation ? this.operation : 0;
    this.result.innerHTML = eval(this.operation ? this.operation.replace("^", "**").replace(",", ".") : 0);
  }
}

const calc = new Calculator(result, operation);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    // vibrar celular
    if ("vibrate" in navigator) {
      navigator.vibrate(100);
    }

    if (value >= 0 || value === ",") {
      calc.addDigit(value);
    } else if (e.target.classList.contains("op")) {
      calc.processOperation(value);
    } else {
      calc.toolProcess(value);
    }
  });
});
