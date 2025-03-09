import TodoListItem from "./TodoListItem";
import './TodoList.scss';

function TodoList({todos, onRemove, onToggle}) {
  return (
    <div className="TodoList"> 
      {todos.map(todo => (
        <TodoListItem 
          todo = {todo} 
          key = {todo.id} 
          onRemove = {onRemove} 
          onToggle = {onToggle} />
      ))}  
    </div> //todos 배열을 map함수를 통해 todo 배열로 변환 -> 기존 id는 key로, 나머지는 todo로 묶음
  );
};

export default TodoList;