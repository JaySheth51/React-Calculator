import React from 'react';
import './App.css';
import Result from './components/Result';
import Keys from './components/Keys';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      previousInput: '',
      endOfCalculation: false
    }
  }
  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      if (this.state.result === 0) {
        this.setState({
          result: button,
          previousInput: button
        })
      }
      else {
        let previous;
        const previousInput = this.state.previousInput;
        const result = this.state.result
        previous = this.state.endOfCalculation ? result : previousInput;
        if (!this.state.endOfCalculation) {
          if (this.isOperator(button)) {
            this.setState({
              previousInput: previous + button,
              result: '',
              endOfCalculation: false
            })
          }
          else {
            this.setState({
              result: result + button,
              previousInput: previousInput + button
            })
          }
        }
        else {
          if (this.isOperator(button)) {
            this.setState({
              previousInput: previous + button,
              result: '',
              endOfCalculation: false
            })
          }
          else {
            this.setState({
              previousInput: button,
              result: button,
              endOfCalculation: false
            })
          }
        }
      }
    }
  };

  isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/' || char === '%';
  }

  calculate = () => {
    try {
      let result = eval(this.state.previousInput)
      this.setState({
        result: result,
        previousInput: '',
        endOfCalculation: true
      })
    }
    catch (e) {
      this.setState({
        result: 0,
        previousInput: ''
      }, alert('Invalid Calculation'))
    }
  };

  reset = () => {
    this.setState({
      result: 0,
      previousInput: ''
    })
  };

  backspace = () => {
    let result = this.state.result;
    let previousInput = this.state.previousInput
    this.setState({
      result: result.toString().slice(0, -1),
      previousInput: previousInput.toString().slice(0, -1)
    })
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-body">
          <h1 className="App-header col-sm-12">Calculator</h1>
          <Result result={this.state.result} previousInput={this.state.previousInput} />
          <Keys onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
