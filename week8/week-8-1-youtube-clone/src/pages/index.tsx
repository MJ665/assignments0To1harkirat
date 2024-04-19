import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard} from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
<VideoCard title={"Jawan : chaleya (hindi)| Sharukh khan"}
author={"T Seareas"}
views={"213M"}
timeStamp={"3 days ago"}
thumbnailImage="https://i.ytimg.com/vi/L8akCkfJj04/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgsqJmg_Sw7hiGPHTN11AA6aFrOg"
channelImage={"https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s68-c-k-c0x00ffffff-no-rj"}
></VideoCard>

</>  );
}
