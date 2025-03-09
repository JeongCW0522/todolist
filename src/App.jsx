import {useState, useRef, useCallback} from 'react';
import TodoInsert from './components/TodoInsert';
import Todoplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) { // 초기값 설정
    array.push({
      id: i,
      text: `할일 ${i}`, // 템플릿 리터럴 수정
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
    

  const nextId = useRef(4);

  const onInsert = useCallback(
    value => {                  //입력된 value값을 todo배열 text값으로 설정
      const todo = {
        id: nextId.current,
        text: value,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    [],
  );
  
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !==id));
  }, []);

  //체크시 수정
  const onToggle = useCallback(id => {           
    setTodos(todos => todos.map(todo => todo.id === id? { ...todo, checked: !todo.checked} : todo,),);
  }, [],);     //해당 id를 가진 항목의 상태 반전 -> 기존 todo 객체 복사(...todo) 
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