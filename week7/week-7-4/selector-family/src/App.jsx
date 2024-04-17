
// import './App.css'
// import { RecoilRoot, useRecoilStateLoadable,useRecoilState } from 'recoil';
// import { todosAtomFamily } from './atoms';

// function App() {
//   return <RecoilRoot>
//     <Todo id={1}/>
//     <Todo id={2} />
//   </RecoilRoot>
// }

// function Todo({id}) {
//   //  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));


//   return (
//     <>
//       {todo.title}
//       {todo.description}
//       <br />
//     </>
//   )

// }

// export default App












import './App.css'
import { RecoilRoot, useRecoilStateLoadable,useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
console.log(todo.state)
if(todo.state == "loading"){return (<div>Loading ...</div>)}else{

  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}
}

export default App






// learn by self suspence and error boundry