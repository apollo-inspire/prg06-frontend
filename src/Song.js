export function Song (props) {
    return (
        <div className="song">
            <h2>Title: { props.title } </h2>
            <h3>Artist: { props.artist } </h3>
        </div>
    )
}