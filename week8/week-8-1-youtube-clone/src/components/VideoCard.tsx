export function VideoCard(props:any) {
  return (
    <div className="p-3">

      <img className="border-2 rounded-xl " src={props.thumbnailImage } />
      <div className={"grid grid-cols-12 "}>
        <div className={" col-span-2"}>
          <img
            className={"pt-2  rounded-full w-20 h-20 "}
            src={props.channelImage}
          />
        </div>
        <div className={" pl-2 col-span-10"}>
            <div>

          {props.title}
            </div>
        <div className={"  col-span-11 text-gray-400 text-base"}>
          {props.author}
        </div>
        <div className={" col-span-11 text-gray-400 text-base"}>
          {props.views} | {props.timeStamp}
        </div>
        </div>
      </div>
    </div>
  );
}
