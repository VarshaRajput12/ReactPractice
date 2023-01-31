
const currTime = new Date().getHours()
    let Greeting = ''
    if(currTime > 1 && currTime <= 12){
        Greeting = "Good Morning"
    }else if (currTime >= 12 && currTime <= 18){
        Greeting = "Good Afternoon";
    }else{
        Greeting = "Good Night";
    }

    const myName = "varsha"
    const myAge = "21"

    function sum(n1, n2) {
      let sum = n1 + n2;
      return sum;
    }
    function multiply(n1, n2) {
      let multi = n1 * n2;
      return multi;
    }
    function division(n1, n2) {
      let div = n1 / n2;
      return div.toFixed(2);
    }

    export default Greeting;

    export {myName, myAge, sum, multiply, division};
    
    

    // we cannot use multiple default 
    // so we can use export ->{} in this curly bracket we can add anything to export and the name should be same 