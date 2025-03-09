import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames'; //조건부 클래스
import './TodoListItem.scss'

                      //TodoList로부터 todo배열과 onRemove함수 props로 가져옴
function TodoListItem({todo, onRemove, onToggle, style}) {  
  const {id, text, checked} = todo; 

  return (
    <div className='TodoListItem-virtualized' style = {style}>
      <div className='TodoListItem'>
        <div className={cn('checkbox', {checked})} onClick = {() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>  {/*checked가 true일때 checkbox css 적용, MdCheckBox 아이콘 적용 */}
        </div> 
        <div className='remove'>
          <MdRemoveCircleOutline onClick = {() => onRemove(id) } />
        </div>
      </div>  
    </div>
  );
};

export default React.memo(TodoListItem);