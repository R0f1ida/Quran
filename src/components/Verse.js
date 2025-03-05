export function Verse(props) {

    return (
        <div className="verse" style={{opacity: props.opacity}}>
            <div id="num" className="verse--number">{props.num}</div>
            <div id="verse" className="verse--start">From: {props.start}</div>
            <div className="verse--end" id="endVerse">Until: {props.end}</div>
        </div>
    )
};


