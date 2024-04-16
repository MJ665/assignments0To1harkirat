// import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 0, 
//         jobs: 0, 
//         messaging: 0, 
//         notifications: 0
//     }
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })




























// when we load our app for the first time we see the flash of the 000 on the screen beacouse we are setting the default value as 0

// This thing is not possible

// beacouse the value of the atom can be default either can be a selector which is asynchronous 

// thats why the concept or asynchronous data queries come in recoil

// import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: async ()=>{
//         axios.get("https://sum-server.100xdevs.com/notifications")
//         .then(res => {
//           setNetworkCount(res.data)
//         })
//     }
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })


































// // Recoil provides a way to map state and derived state to React components via a data-flow graph.
//  What's really powerful is that the functions in the graph can also be asynchronous.
//   This makes it easy to use asynchronous functions in synchronous React component render functions.
//    Recoil allows you to seamlessly mix synchronous and asynchronous functions in your data-flow graph of selectors.
//     Simply return a Promise to a value instead of the value itself from a selector get callback, the interface remains exactly the same. 
//     Because these are just selectors, other selectors can also depend on them to further transform the data.

// // Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph. 
// Please keep in mind that selectors represent "idempotent" functions: For a given set of inputs they should always produce the same results (at least for the lifetime of the application). 
// This is important as selector evaluations may be cached, restarted, or executed multiple times. 
// Because of this, selectors are generally a good way to model read-only DB queries. 
// For mutable data you can use a Query Refresh. 
// Or to synchronize mutable state, persist state, or for other side-effects, consider the Atom Effects API or the Recoil Sync Library.




import { atom, selector } from "recoil";

import axios from "axios";
export const fetchData = async () =>{
    const d1 = new Date()
    const res = await axios.get("https://sum-server.100xdevs.com/notifications")
    const d2 = new Date()
    console.log("time to get the data from the url "+(d2-d1))
    return res.data

          
} 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"asynchronousSelectorToFetchData",
        get:async ({get})=>{
            return fetchData()
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})

