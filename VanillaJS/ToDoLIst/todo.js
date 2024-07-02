// [1]
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// #todo-form input : id값이 todo-form인 form안에서 input 찾는 것
const toDoList = document.getElementById("todo-list");

// [9-1]
const TODOS_KEY = "todos";

// [6] & [8] & [10-1 const -> let변경]
// const toDos = [];
let toDos = [];
// - js object나 array나 어떤 것이든지 string으로 바꿔주는 기능
// - toDos는 항상 빈 배열 (빈 array)로 시작함 !

// [7] & [8-1 /]
// saveToDos 역할 : toDos array의 내용을 localStorage에 넣는 것
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // ("todos", toDos);
  // ("todos", JSON.stringify(toDos)); 변경 [8-1]
  // 이렇게 수정을 하면 	["a","b","c"]  이런 형태로 변경되어 값이 들어간다
  //  ★ JSON.stringify – 객체를 JSON으로 바꿔줍니다.
  //     => 객체를 문자열로 바꿔주어요
  // 중복값도 입력됨
  // 대신 새로고침 하면 값은 사라짐

  // Delete [11-3]
  // 이제 saveToDos 함수에서 toDos에 text를 저장하지 않고 object를 저장하게 된다  
}

// [5-3]
function deleteToDo(event) {
  // console.log("hahaha");
  // - 콘솔로 찍어보면, X 버튼을 누르면 클릭 이벤트리스너가 발생됨
  // - 그러나 어떤 버튼을 눌렀는지에 대해서는 알 수 없음
  // - 그래서 인자값으로 event를 넣어줌

  // console.dir(event.target.parentElement.innerText);
  // - 이렇게 하나씩 넣고 확인해보면서 직접 보면 이해 쉬움
  // - 위에처럼 입력 후 확인해보면 내가 입력한 값을 인지 함

  // console.log(event.target.parentElement);
  // - 위 코드 실행해보면 li를 볼 수 있음
  // - target : 클릭된 HTML element
  // - 모든 HTML element에는 하나 이상의 property가 있음
  // - parentElement : 클릭된 element의 부모

  // [5-4]
  const li = event.target.parentElement;
  // 위에서 콘솔로 확인한 값을 상수인 li로 값을 지정해줌 -- 우리가 삭제하고 싶은 li임

  // [5-5 /]
  li.remove();
  // li를 클릭하면 삭제됨 !!!
  
  // - 이제 todo 삽입&삭제는 가능함
  // - 저장하는 것에 대해 코드 짜야함
  // - 방법 1. todo 저장
  //        2. todo 불러오기
  //           - 내가 입력한 값들을 입력 하면 값들을 localStorage에 저장 후
  //             새로고침을 하면 localStorage에서 저장된 값들을 불러와서 화면에 보여주게끔 하는 것
  // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // saveToDos();


  // Delete [11]
  // deleteToDo 함수는 화면에서 어떤 HTML의 element를 지워야 하는지는 알지만,
  // 어떤 todo Text를 DB에서 지워야 하는지는 모름
  // 현재 상황 : input값이 들어오면 화면에서 x 버튼으로 삭제는 가능
  //             하지만 내가 클릭한 데이터 값에 대한 각각의 id은 모름
  // 진행 방법 : 1. 랜덤으로 ID를 만드는 방법을 보여줄 것
  //                ID란, element가 만들어질 때 갖게 될 ID 값
  //                - ID값이 무작위한 랜덤 숫자는 아니고,
  //                  Date.now() 함수를 이용할 것임   --   밀리초(1/1000)초를 주는 함수


  // Delete [13]
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // - toDo : toDos DB에 있는 요소 중 하나
  //        - 이 함수는 DB에 있는 모든 것과 함께 실행이 된다
  // ((toDo) => toDo.id !== li.id)
  // - 위 문장 의미 : 우리가 클릭한 li.id값과는 다른 toDo의 값은 남기고 싶어

  // 위 문장 추가 후 input에 값 넣고 실행시켰는데 제대로 안되는 이유는 ?
  // li.id의 값을 console.log(typeof li.id) 값을 해보면 li.id 값은 String 문자열로 출력된다
  // ★ li.id = string,  toDo.id = number  두 개의 문자열 타입이 달라서 올바른 결과물 출력이 안됨
  //    (li.id) 값을 parseInt(li.id)로 형변환 시켜주고
  //.   toDos DB에서 todo를 지운 후 saveToDos() 함수를 한번 더 불러와줘야 함 !
  saveToDos();
}


// [4]
// 이 함수는 toDo를 그리는 역할을 담당
// 하지만 지금 그려야 할 것이 뭔지는 모름 - 그래서 인자(newTodo)를 줄거임
function paintToDo(newTodo) {
  // [4-2]
  // console.log("i will paint", newTodo);
  // [4-4]
  const li = document.createElement("li");

  // Delete [11-6 /]
  li.id = newTodo.id;
  // li의 id 값에 newTodoObj.id가 아닌 newTodo.id값인 이유 ?
  // - paintToDo 함수는 newTodo 라는 이름의 인수의 값으로
  //    newTodoObj 라는 object를 받고 있기 때문에 함수 안에서 newTodo.id를 사용하고 있는 것

  const span = document.createElement("span");

  // [4-6]
  // span.innerText = newTodo;     // innerText을 span 내부에 넣음
  // span 안에 넣은 새로운 텍스트(innerText)는 사용자가 form에서 우리에게 준 newTodo 값

  // Delete [11-5]
  // span.innerText = newTodo; 가 아닌 newTodo.text로 변경
  span.innerText = newTodo.text;

// [5] ToDo 삭제하는 버튼 만들기
  const button = document.createElement("button");
  button.innerText = "❌";
  // [5-2]
  button.addEventListener("click", deleteToDo);
  // [4-5]
  li.appendChild(span);         // li는 span이라는 자식을 갖게 됨 == li 내부에 span을 넣음
  // [5-1] 
  li.appendChild(button);       // li에 삭제하는 버튼 추가

  //console.log(li);            // console.log 로 찍으면 아래 적어둔 예시처럼 html 형식으로 나옴
  // <li>
  // <span>input 입력값</span>
  // <li/>
//   li.appendChild(button);
// [4-7]
  toDoList.appendChild(li);
}
// [4-8 /]
// 여기까지 작성했을 때 문제점
// 1. toDo를 지울 수 없음
// 2. 새로고침하면 입력해둔 toDo가 사라짐

// li를 list(toDoList)에 추가하는 것
// [2]
function handleToDoSubmit(event) {
  // event : handleToDoSubmit 함수의 첫번째 인자로 줌

  // [2-1]
  event.preventDefault();
  // 값 입력 후 enter를 쳐도 submit 기본동작인 새로고침이 일어나지 않음 - 정상작동

  // [2-2]
  // console.log(toDoInput.value);
  // - toDoInput.value : 내가 입력한 input 값이 콘솔에 그대로 출력됨
  // - 그치만 입력한 값이 사라지지는 않음 - input에 값 입력 후 enter 치면 사라지게 만들기

  // [2-4 /]
  const newTodo = toDoInput.value;
  // - toDoInput.value 값을 입력하면 그 값들을 newTodo 라는 상수에 저장시킨 후
  //   아래 코드를 이용해서 toDoInput의 값을 비워주는 것임
  // ★ 중요 ★
  //  - toDoInput.value의 값을 비웠다고 해서 newTodo의 값이 비워지는 것은 아님 !!!
  //  - 이 코드는 input의 value를 새로운 변수인 newTodo에 저장(복사) 하는 것임
  //  - 그 이후 input의 value를 가지고 뭔 짓을 하던, newTodo 에는 영향이 없음

  // [4-3] 설명 : input에서 value값을 얻어서 상수 newTodo에 값을 전달(복사)해주면
  //              [4-1] 코드인 paintToDo() 라는 새로운 함수에 그 값을 전달해준다
  // console.log(toDoInput.value);

  // [2-3]
  toDoInput.value = "";  
  // - 이제 input값을 입력 후 enter를 누르면 값을 비워주는 코드 작성하기
  // == toDoInput의 value 값에 빈 값("")을 넣어주는 것
  // - input에 값 입력 후 enter 치면 값을 비워주지만, 저장은 안됨 - 저장하는 코드 만들기
  // console.log(newTodo, toDoInput.value);

  // Delete [11-1]
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  // [6-1 /]
  // - toDos.push(newTodo);
  // - a, b, c를 입력 후 콘솔에 toDos를 입력하면?
  // - (3) ['a', 'b', 'c'] 이런식으로 array 형태 값이 출력됨
  // - 나는 이제 이 값들을 localStorage에 넣고 싶음
  // - 근데? localStorage에는 array 값은 저장이 불가능함
  // -      localStorage에는 오직 "텍스트"만 저장 가능함

  // Delete [11-2]
  // - toDos.push(newTodo); 코드에 newTodo 대신 newTodoObj를 push 해줌
  // 그러면 이제 id값이 포함된 object를 저장하게 됨
  toDos.push(newTodoObj);

  // [4-1]
  // paintToDo(newTodo);
  // paintToDo 함수에 newTodo인자를 넣고 실행시켜주면?
  // - paintToDo는 무엇을 그려야 할 지 알게 됨
  // - 그래서 paintToDo() 함수에서 console.log()로 확인해줌

  // Delete [11-4]
  // - paintToDo(newTodo); 코드해석 : paintToDo는 오직 text인 newTodo만 갖고 있음
  //                                  그래서 이걸 object로 바꿔줄거임
  //                       어떻게 ? : paintToDo에서 string으로 newTodo 주는 대신, newTodoObj 줌
  paintToDo(newTodoObj);
  // 새로 추가한 코드 설명
  // - toDos 배열에 newTodoObj를 push 후
  // - paintToDo에는 text가 아닌 newTodoObj 값을 줄거임
  // 그런데) 이렇게 추가해주면 화면에 글자를 입력하면 [object Object] 라고 뜨게 됨
  //         나는 [object Object] 이런 문구가 아닌 내가 입력한 실제 문자를 보고 싶음
  //         - 그렇다면? paintToDo 함수를 변경해줘야함
  //         - 현재 paintToDo()는 newTodo인 text 값을 받고 있는데, 이제는 object로 받음
  //         - 왜?  handleToDoSubmit() 에서 object는 text와 id값을 갖고 있음
  //           즉. span.innerText = newTodo.text 로 변경되어야 함



  // const newTodoObj = {
  //   text: newTodo,
  //   id: Date.now(),
  // };
  // toDos.push(newTodoObj);
  // paintToDo(newTodoObj);

  // [7-1 /]
  saveToDos();
  // 여기까지 작업 진행 점검
  // - 값을 입력하면 삽입 / 삭제 / localStorage에 저장까지 완료
  // - 그치만 다시 값을 입력하면 새로고침이 되어 localStorage에 값이 사라짐
  // - 기존에 입력했던 값인 toDo 값들이 화면에 나타나지 않음
  // - 그리고 아직까지는 입력한 값들이 array 형태로 저장됨  a, b, c ~
}


// [3 /]
toDoForm.addEventListener("submit", handleToDoSubmit);

// [9-4]
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// [9]
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);  // 아무것도 없으면 null값 나옴

// [9-2]
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // -toDos = parsedToDos;

  // [9-3]
  // parsedToDos.forEach(sayHello);
  // JS한테 parsedToDos가 가지고 있는 각각의 item에 대해 sayHello 함수를 실행해줘. 라고 말을 하는것
  // 하지만 이 방식은 array의 item들에 대해 한개의 function만 실행할 수 있게 해준다
  // -! 여기서 중요한 것은) 지금 내가 어떤 item을 사용하는지 모른다면 완전 무용지물임
  // 여기서 말하는 item이란, 내가 input에 aa, bb, cc 라는 값을 넣었을 때
  // 내가 클릭한 값에 대한 걸 컴퓨터도 인식을 해야한다는 뜻

  // [9-5]
  // forEach는 array의 각 item에 대해 function을 실행하게 해준다
  // 그리고 우리에게 그 item들을 공짜로 넘겨준다
  // console.log(parsedToDos);

  // [9-6]
  // sayHello() 함수를 만들어서 js에 item 값들을 만들어주는 방법도 있지만,
  // shortcut(단축키)와 비슷한 방법으로도 만들 수 있다
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
  // 위와 같은 방식으로 코드를 작성하면 더 짧고 간단하게 사용 가능
  // 코드 풀이 : parsedToDos에 있는 각각의 item에 대해서, 각각의 item들을 console.log 한다는 뜻
  // => : arrow function(화살표 함수)

  // [9-7 /]
  // 방법 1
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));

  // 방법 2
  // function sayHello(item) {
  //   console.log("this is the turn of", item);
  // }


  // [10-2 /]
  toDos = parsedToDos;
  // "let toDos = [];" 시작 시, localStorage 에서 발견되는 이전의 toDos들로 하고싶은 것임
  // 이 코드를 추가해주면 기존 값 입력 & 새로고침 후 새로운 값을 입력해도 기존 입력한 데이터 남아있음
  // 이제 여기서 문제
  // - 값을 삭제해도 새로고침을 하면 다시 값이 생겨남 -- 화면에서만 지운거지 local에는 남아서 그런것


  // [10]
  // 아래 두 코드는 같음
  // - item은 우리가 입력한 각각의 값들임
  // - 사실상 우리가 보내기 원하는 텍스트들임
  // - 그래서 아래와 같은 복잡하게 item값을 주고 받을 필요 없이,
  //    paintToDo()를 호출하기만 하면 됨
  //    ㄴ paintToDo() 이 함수는 텍스트를 받는데,
  //       JS는 그 텍스트를 paintToDo() 에게 전달해주기 때문
  //        ㄴ JS는 paintToDo()에 "a", "b", "c", ~ 등등의 값을 넣어준다
  //           ㄴ 넣어주는 값들이 localStorage인 array에 있는 각각의 item들이다

  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo);
  // paintToDo()를 불러오면 array에 있는 각각의 item들이 화면으로 출력된다
  // 기존에 입력한 값들이 a,b,c라면 화면과 localStorage에도 잘 저장이 되어있지만
  // 이 값들에 새로운 값인 h,i,j를 새로 입력해주면? - localStorage에 기존에 입력했던 값은 사라짐
  // ㄴ 위와 같은 일이 발생하는 이유는 ?
  //    ㄴ application이 시작될 때 "const toDos = [];" 의 array는 항상 비어있기 때문이다
  //    ㄴ 그리고 newToDo를 작성하고 form을 저장할 때 마다
  //       newToDo를 "const toDos = [];" (빈 array)에 그냥 push하기 때문임 !
  //        그리고, toDo 저장 시, 나는 새로운 toDo들만 포함하고 있는 array를 저장하게 됨 == 덮어씀
  //  == 위에 길게 늘여쓴 문장을 요약하면,
  //      우리가 갖고있던 toDos의 이전 복사본은 잊어버리고 새로 입력하는 값만 array에 저장한다는 것
  // 해결방법?
  // application이 시작될때 "const toDos = [];"를 빈값으로 시작하는 대신,
  // const를 let으로 변경해 업데이트가 가능하게 만든 후,
  // localStorage에 toDo값들이 들어있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDos를 복원하기


  // Delete [12]
  // forEach() 함수는 paintToDo를 parseToDos 배열의 요소마다 실행한다
  // 여기서 중요한점은, forEach는 paintToDo를 기본적으로 실행하는데
  // forEach는 각각의 item을 줘서 item이 object가 된다
}

  // Delete [12-1 /]
  // array에서 값을 삭제할 때는 실제로 array에서 지우는게 아닌 
  // 지우고 싶은 item을 빼고 새로운 array를 만든다 == item을 지우는게 아닌 item을 제외하는 것

  // array의 모든 element를 유지하는 sexyFilter 함수 만들기
  function sexyFilter() {
    return true;
  }
    // sexyFilter 역할
    // - ★ 반드시 true값을 리턴해야함
    // - 만약 새 array에서 이 object 를 유지하고 싶다면 sexyFilter 함수는 반드시 true 리턴해야함
    // ★ 이 함수에서 true값이 아닌 false값을 리턴한다면?
    //    - 비어있는 array 가 만들어지게 된다

    /** 완전 중요
    const todos = [{text: "disend"}, {text: "duswjd"}, {text: "haru"}]
    -> undefined
    funtion nomaFilter(popo) { return popo.text !== "haru"}
    -> undefined
    todos.filter(nomaFilter)
    ->  (2) [{…}, {…}]
          0 : {text: 'disend'}
          1 : {text: 'duswjd'}
          length : 2
          [[Prototype]] : Array(0)
    */