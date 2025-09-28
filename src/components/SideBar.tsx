interface SideBarProps{
    thingoftheday:string;
}
function SideBar(props:SideBarProps){
    return (
        <div className="text-center">
        <p>Today's thing of the day:</p>
        <br/>
        <p>{props.thingoftheday}</p>
        <br/>
        <p>The thing of the day can be anything that I think should be featured.<br/>It could be a word, phrase, website, etc.</p>
        </div>
    )
}

export default SideBar