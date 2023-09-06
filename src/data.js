const data = [
  {
    id: 0,
    문제: `
   피셔-예이츠 셔플 알고리즘은 어떤 목적으로 사용되는가?
    `,
    선택지: ["배열의 모든 요소를 오름차순으로 정렬하기 위해", "배열의 특정 요소를 찾기 위해", "배열의 요소들을 무작위로 섞기 위해", "배열의 중복 요소를 제거하기 위해"],
    힌트 : `이 알고리즘은 배열의 순서를 변경하는 데 사용됩니다. 정렬이나 검색과는 관련이 없습니다.`,
    답안: "배열의 요소들을 무작위로 섞기 위해",
  },
  {
    id: 1,
    문제: `
    React의 useEffect hook은 어떤 목적으로 사용되는가?
    `,
    선택지: [,"컴포넌트의 상태를 변경하기 위해", "컴포넌트의 생명주기와 관련된 코드를 실행하기 위해", "스타일링을 적용하기 위해", "Redux store에 접근하기 위해"],
    힌트 : `useEffect는 컴포넌트가 렌더링된 후에 추가적인 코드 실행을 가능하게 해줍니다. 이것은 주로 API 호출, DOM 조작, 이벤트 리스너 등록과 같은 작업들을 위해 사용됩니다.`,
    답안: "컴포넌트의 생명주기와 관련된 코드를 실행하기 위해"
  },
  {
    id: 2,
    문제: `useEffect에서 반환할 수 있는 함수의 주요 목적은 무엇인가?`,
    선택지: ["부작용을 발생시키는 함수", "컴포넌트를 다시 렌더링하는 함수", '정리 (cleanup) 작업을 수행하는 함수', "초기 상태를 설정하는 함수"],
    힌트 : "useEffect에서 반환하는 함수는 컴포넌트가 화면에서 사라지기 전이나, 의존성 배열의 값이 변경될 때 실행됩니다. 이 함수는 주로 이벤트 리스너 제거, 타이머 정리 등의 작업을 수행하는 데 사용됩니다." ,
    답안: '정리 (cleanup) 작업을 수행하는 함수'
  },
  {
    id: 3,
    문제: "useEffect의 의존성 배열이 빈 배열 []일 때, 효과는 언제 실행되는가?",
    선택지: ["컴포넌트가 각각의 렌더링 후에 항상", "컴포넌트가 처음 마운트될 때만", "컴포넌트의 상태나 props가 변경될 때마다", "컴포넌트가 언마운트될 때만"],
    힌트 : "useEffect의 의존성 배열이 빈 배열일 때, 이 효과는 컴포넌트의 생명주기 중 특정 시점에만 한 번 실행됩니다. 그 시점은 컴포넌트가 화면에 처음 나타나는 순간입니다." ,
    답안: "컴포넌트가 처음 마운트될 때만"
  },
  {
    id: 4,
    문제: "자바스크립트에서 원본 배열을 직접 수정하는 것이 좋지 않은 주된 이유는 무엇인가?",
    선택지: ["배열의 크기가 너무 커질 수 있다.", "배열의 요소를 잃어버릴 위험이 있다.", "불변성을 유지하면 상태 관리와 디버깅이 용이하기 때문이다.", "배열의 모든 요소가 자동으로 초기화된다."],
    힌트 : "프로그래밍에서 데이터의 상태를 추적하고 이해하기 쉽게 만드는 원칙이 있습니다. 이 원칙을 따르면 버그를 줄이고 코드를 관리하기 쉽게 만듭니다" ,
    답안: "불변성을 유지하면 상태 관리와 디버깅이 용이하기 때문이다."
  },
  {
    id:5,
    문제: "localStorage에 저장된 데이터의 유효 기간은 어떻게 되는가?",
    선택지: ["세션 종료 시까지", "쿠키 설정에 따라 다름", "브라우저의 캐시가 지워질 때까지", "영구적으로 저장되며, 수동으로 삭제하지 않는 한 유지된다."],
    힌트 : "localStorage는 웹 페이지 세션 간에 데이터를 영구적으로 저장하는 방법입니다. 이 데이터는 사용자가 브라우저를 닫거나 컴퓨터를 종료한 후에도 유지된다." ,
    답안: "영구적으로 저장되며, 수동으로 삭제하지 않는 한 유지된다."
  },
  {
    id:6,
    문제: "localStorage에 저장할 수 있는 데이터의 타입은 무엇인가?",
    선택지: ["오직 문자열만","JSON 객체","자바스크립트 함수","배열"],
    힌트 : "localStorage는 키와 값을 문자열 형태로 저장합니다. 다른 데이터 타입을 저장하려면 문자열로 변환해야 합니다." ,
    답안: "오직 문자열만"
  },
  {
    id:7,
    문제: "PUT과 POST의 주요 차이점은 무엇인가요?",
    선택지: ["PUT은 리소스를 생성하거나 수정할 때 사용되고, POST는 리소스를 생성할 때만 사용된다.","PUT은 idempotent(멱등)하고, POST는 idempotent(멱등)하지 않다.","POST는 데이터를 URL 파라미터로 보내고, PUT은 데이터를 요청 본문에 넣어 보낸다.","POST는 서버에 새 리소스를 추가하면서 서버가 URI를 생성하고, PUT은 클라이언트가 URI를 지정한다."],
    힌트 : "PUT과 POST는 둘 다 데이터를 서버에 보내는 메서드입니다. 하지만 두 메서드는 한 번의 요청으로 수행되는 작업과 그 작업이 여러 번 반복될 때의 특성이 다릅니다." ,
    답안: "PUT은 idempotent(멱등)하고, POST는 idempotent(멱등)하지 않다."
  }
]


export default data;