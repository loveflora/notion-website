// routing
// http://localhost:3000/test

// 라우팅 안되게 하고 싶으면, _ 붙이면 됨
// _ : 안에 폴더 전부 라우팅 안됨 (라우팅 X, 컴포넌트로 사용 O)
// () : () 붙인 폴더만 라우팅 안됨

const TestPage = () => {
  return <div>Hello Test Page</div>;
};

export default TestPage;
