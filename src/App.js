import logo from './logo.svg';
import './App.css';
import ApiCallingAlbumsRes from './ApiCallingAlbumsRes';
import ApiCallingPostsRes from './ApiCallingPostsRes';
import ApiCallingCommentsRes from './ApiCallingCommentsRes';
import ApiCallingTodos from './ApiCallingTodos';
import ApiCallingPhotosRes from './ApiCallingPhotosRes';
import ApiCallingUsersRes from './ApiCallingUsersRes';
import ApiCallingDJsonUsers from './ApiCallingDJsonUsers';
import ApiCallingDJsonProducts from './ApiCallingDJsonProducts';

function App() {
  return (
    <>
      {/* <ApiCallingAlbumsRes></ApiCallingAlbumsRes> */}
      {/* <ApiCallingPostsRes></ApiCallingPostsRes> */}
      {/* <ApiCallingCommentsRes></ApiCallingCommentsRes> */}
      {/* <ApiCallingTodos></ApiCallingTodos> */}
      {/* <ApiCallingPhotosRes></ApiCallingPhotosRes> */}
      {/* <ApiCallingUsersRes></ApiCallingUsersRes> */}
      {/* <ApiCallingDJsonUsers></ApiCallingDJsonUsers> */}
      <ApiCallingDJsonProducts></ApiCallingDJsonProducts>
    </>
  );
}

export default App;
