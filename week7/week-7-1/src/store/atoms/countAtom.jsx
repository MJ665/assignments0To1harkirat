// import  {atom, selector} from "recoil"
// export const countAtom = atom ({
//     key : "countAtom",
//     default :0

// })

// // // ugly way to make ugly selector 
// // export const selectorAtom = atom ({
// //     key:"selectorAtom",
// //     default:"zero"
// // })




// export const evenSelector= selector ({
//     name :"evenSelector",
//     get:(props)=>{
//     const count = props.get(countAtom);
//         return count %2
//     }
// })





// export const titleAtom = atom({key : "titleAtom",
// default:""})
// export const descriptionAtom = atom({key : "descriptionAtom",
// default:""})

// export const todosAtom = atom ({
//     key:"todosAtom",
//     default:[
//         {title:"gym",description:"gym1"    },
//         {title:"gym",description:"gym2"    },
//         {title:"gym",description:"gym3"    },
//         {title:"gym",description:"gym4"    },
//         {title:"college",description:"college1"    },
//         {title:"college",description:"college2"    },
//     ]
// })

// export const filterAtom = atom({key:"filterAtom",
// default:"null"

// })

// export const todosSelector = selector ({
//     key:"todosSelector",
//     get:(props)=>{const data =  props.get(todosAtom)
//         const filterValue = props.get(filterAtom)
//     // return data.filter((filterValue)=>{return filterValue == data.title })}
//     return data.filter((dataElement) => { return dataElement.title === filterValue })

// }
// })


























// countAtom.jsx
import { atom, selector } from "recoil";

export const titleAtom = atom({
  key: "titleAtom",
  default: ""
});

export const descriptionAtom = atom({
  key: "descriptionAtom",
  default: ""
});

export const todosAtom = atom({
  key: "todosAtom",
  default: [
    { title: "gym", description: "gym1" },
    { title: "gym", description: "gym2" },
    { title: "gym", description: "gym3" },
    { title: "gym", description: "gym4" },
    { title: "college", description: "college1" },
    { title: "college", description: "college2" }
  ]
});

export const filterAtom = atom({
  key: "filterAtom",
  default: ""
});

export const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    const data = get(todosAtom);
    const filterValue = get(filterAtom);
    if (!filterValue) return data; // If no filter is applied, return all todos
    return data.filter((dataElement) =>
      dataElement.title.includes(filterValue)
    );
  }
});
