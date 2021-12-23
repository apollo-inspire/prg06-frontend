import { Song } from "./Song";

export function Songs () {

    // fetch

    // state
    const [songs, setSongs] = useState(["Pikachu", "Eevee"]);
    
    // loop over items

    return (
        <div className="songs">
            <h2>Songs:</h2>
            <h3>Total Songs: {songs.length} </h3>
            <Song title="test" artist="test"/>
            <Song title="test" artist="test"/>
            <Song title="test" artist="test"/>
        </div>
    )
}