// 콜백(callback) 패턴
// 파라미터로 함수가 올 수 있다.
// 함수는 객체다. 대입함수가 가능함[함수를 받는 변수 선언이 가능함]
const goodSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 1000);
  });
};
const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 1000);
  });
};
const account = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("결제하기");
      resolve();
    }, 1000);
  });
};

const delivery = () => console.log("배송하기");

goodSearch()
  .then(cart) //파라미터로 cart를 넘기면 resolve가 cart함수 전체를 받아서 처리
  .then(account)  //account를 넘기면 resolve가 account함수 전체 받아서 처리
  .then(delivery)
  .then(()=>console.log("배송완료"))
