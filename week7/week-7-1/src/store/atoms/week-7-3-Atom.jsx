import {atom,selector} from "recoil"

export const networkAtom = atom ({
    key :"networkAtom",
    default:104
})
export const jobsAtom = atom ({
    key :"jobsAtom",
    default:0
})
export const notificationsAtom = atom ({
    key :"notificationsAtom",
    default:12
})
export const messagingAtom = atom ({
    key :"messagingAtom",
    default:0
})
export const totalNotificationSelector = selector ({
    key :"totalNotificationSelector",

    get:async (props)=>{
        const messagingAtomCount = props.get(messagingAtom)
        const notificationAtomCount = props.get(notificationsAtom)
        const jobsAtomCount = props.get(jobsAtom)
        const networkAtomCount = props.get(networkAtom)
        return jobsAtomCount+networkAtomCount+messagingAtomCount + notificationAtomCount
    }
})