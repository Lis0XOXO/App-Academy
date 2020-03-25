//Solution using arguments keyword
function sum() { 
  let totalSum = 0; 

  for (let i = 0; i < arguments.length; i++) { 
    totalSum += arguments[i]; 
  }

  return totalSum;
}

//Solution using ...rest operator 
function sumRest(...args) { 
  let totalSum = 0; 

  args.forEach(num => { 
    return totalSum += num; 
  })

  return totalSum; 
}

//Solution using arguments keyword
Function.prototype.myBind1 = function(context) { 
  const bindArgs = Array.from(arguments).slice(1); 
  return () => { 
    const callArgs = Array.from(arguments); 
    return this.apply(context, bindArgs.concat(callArgs)); 
  }
}

//Solution using ... rest operator  
Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...callArgs) => { 
    this.apply(context, bindArgs.concat(callArgs)); 
  }
};

function curriedSum(numArgs) { 
  let numbers = []; 

  function _curriedSum(num) { 
    numbers.push(num); 

    if (numbers.length === numArgs) { 
      return sum(...numbers); 
    } else { 
      return _curriedSum; 
    }
  }
  return _curriedSum; 
}
