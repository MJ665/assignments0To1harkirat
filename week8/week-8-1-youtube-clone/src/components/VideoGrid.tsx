import { VideoCard } from "./VideoCard"

const Videos  = [{
    title:"Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
},{
    title:"222Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
},{
    title:"333Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
},{
    title:"333Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
},{
    title:"333Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
},{
    title:"333Jawan : chaleya (hindi)| Sharukh khan",
author:"T Seareas",
views:"213M",
timeStamp:"3 days ago",
thumbnailImage:"https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp:-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg::&rs:AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg",
channelImage:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj"
}]

export default function VideoGrid  (){
    return(
        <div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {Videos.map ((video) =>{
        return (<VideoCard title={video.title}
        author={video.author}
        views={video.views}
        timeStamp={video.timeStamp}
        thumbnailImage={video.thumbnailImage}
        channelImage={video.channelImage}
         />)
    })}
</div>
        </div>
    )
}