import SearchBar from "./SearchBar"
export default function AppBar (){
    return (
        <div className="flex justify-between">
            <div className="inline-flex  pb-2 items-center">youtube</div>
            <SearchBar />
            <div>sighin</div>

        </div>
    )
}