function calcNet(salary) {
  let tax = 0;

  switch (true) {
    case salary >= 30000:
      tax = 0.4;
      break;

    case salary >= 25000:
      tax = 0.35;
      break;

    case salary >= 20000:
      tax = 0.3;
      break;

    case salary >= 10000:
      tax = 0.25;
      break;

    default:
      tax = 0.01;
      break;
  }
  let net = salary * (1 - tax);

  return net;
}

let salary = 24398 

const net = calcNet(salary);

console.log("salary:", salary ,"net", net);
