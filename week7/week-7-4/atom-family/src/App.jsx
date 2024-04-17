
// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue , atom } from 'recoil';
// import { todosAtomFamily } from './atoms';
// const todoAtom = atom ({
//   key:"todoAtom",
//   default:{
//     id: 1,
//     title: "Go to Gym",
//     description: "Hit the gym from 7-9"
// }
// })
// function App() {
//   return <RecoilRoot>
//     <Todo id={1}/>
//     <Todo id={2} />
//   </RecoilRoot>
// }

// function Todo({id}) {
//   const currentTodo = useRecoilValue(todoAtom)
// return(
//     <>
//       {currentTodo.title}
//       {currentTodo.description}
//       <br />
//     </>
//   )
// }
// // function Todo({id}) {
// //   const currentTodo = useRecoilValue(todoAtom)
// //    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

// //   return (
// //     <>
// //       {todo.title}
// //       {todo.description}
// //       <br />
// //     </>
// //   )
// // }

// export default App

































































import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState,useRecoilValue , atom } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {

   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
 const updateTodo = useSetRecoilState (todosAtomFamily(2))

useEffect(()=>{
  setTimeout (()=>{
    updateTodo((todo)=>{
      return{
      id:todo.id+1,
      title:"newTodo",
      description:`newTodo ${parseInt(todo.id)  }`}
    })
  },2000)
})

  return (
    <>
      {todo.title}<br / >
      {todo.description}
      <br />
    </>
  )
}

export default App
