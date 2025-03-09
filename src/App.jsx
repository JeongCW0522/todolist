import {useState, useRef, useCallback} from 'react';
import TodoInsert from './components/TodoInsert';
import Todoplate from './components/TodoTemplate';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, text: '리액트 기초 알아보기', checked: true,
    },
    {
      id: 2, text: '컴포넌트 스타일링해 보기', checked: true,
    },
    {
      id: 3, text: '일정 관리 앱 만들어 보기', checked: false,
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    value => {                  //입력된 value값을 todo배열 text값으로 설정
      const todo = {
        id: nextId.current,
        text: value,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  
  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !==id));
  }, [todos]);

  //체크시 수정
  const onToggle = useCallback(id => {           
    setTodos(todos.map(todo => todo.id === id? { ...todo, checked: !todo.checked} : todo,),);
  }, [todos],);     //해당 id를 가진 항목의 상태 반전 -> 기존 todo 객체 복사(...todo) 
                    // -> checked를 현재 todo의 checked 반대 상태로 반전시킴
                    //같지 않다면 todo 그대로

  return (
    <Todoplate>
      <TodoInsert onInsert = {onInsert} />
      <TodoList todos = {todos} onRemove={onRemove} onToggle = {onToggle} />
    </Todoplate>
  );
}

export default App;