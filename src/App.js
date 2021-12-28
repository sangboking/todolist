import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      text: '리액트 공부하기',
      checked: true,
    },
    {
      id:2,
      text: '운동하기',
      checked: true,
    },
    {
      id:3,
      text:'코딩연습하기',
      checked: true
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(text=>{
      const todo = {
        id:nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos]
  )

  const onRemove = useCallback((id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  })

  const onToggle = useCallback((id)=>{
    setTodos(todos.map((todo)=>(todo.id === id? {...todo,checked: !todo.checked}:todo)));
  })


  return (
   <TodoTemplate>
     <TodoInsert onInsert={onInsert}/>
     <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}byh  />
   </TodoTemplate>
    
  );
}

export default App;
