let num1 = (a,b) =>{         
    [a, b] = [b, a]
    return {a,b};
};console.log(num1(3,4))



let num2 =(a,b) =>{
    var number=a;
    a=b;
    b=number;
    return {a,b};
  };console.log(num2(3,4))




  let num3 = (a,b) =>{
    a=a+b;
    b=a-b;
    a=a-b;
    return {a,b};
  };console.log(num3(3,4))