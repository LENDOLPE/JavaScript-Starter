function calculateChange(payment, cost) {
  const MONEY = [50000, 10000, 5000, 1000];

  change = payment - cost;
  let count = 0;

  for (let idx = 0; idx < MONEY.length; idx++) {
    if (MONEY[idx] <= change) {
      //잔돈이 더 많을경우
      change -= MONEY[idx]; //잔돈 - 정의된 지폐
      count++; // 정의된 지폐 +1
      idx--; // 재반복
    } else {
      console.log(`${MONEY[idx]}원 지폐: ${count}장`);
      count = 0;
    }
  }
}

// 테스트 코드
calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
