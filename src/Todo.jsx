import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

// NemedExportに書き換える
export const Todo = () => {
  // useState関数は２つの値を配列の分割代入（好きな名前をつける）で受け取る[現在の値,set変化した値]※その差分をexportに返してTodoとしてレンダリングしている。
  // 差分が関数になる、入力される前とされた後の差分ひとつひとつを見極めて、ひとつずつ関数を定義し、stateを更新できるようにしていく。
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
// 追加されたTODOの削除ボタンを押すと消える機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
// 追加されたTODOの完了ボタンを押すと完了リストに項目が移る機能
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newcompleteTodos);
  };

  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newcompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };


  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };


  return (
    <>
    <InputTodo 
    todoText={todoText}
    onChange={onChangeTodoText}
    onClick={onClickAdd}
    />
    <IncompleteTodos
    todos={incompleteTodos}
    onClickComplete={onClickComplete}
    onClickDelete={onClickDelete}
    />
    <CompleteTodos
    todos={completeTodos}
    onClickBack={onClickBack}/>
    
    </>
  )
  }


export default Todo;
