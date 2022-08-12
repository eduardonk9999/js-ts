// es5
function calculate() {
  console.log('function es5')
}

const calculate2 = () => {
  console.log('function es6')
}

const calculate3 = () => {
  return () => {
    console.log("essa é a função interna")
  }
}
calculate3()();