import { Songs } from "./Songs";
import { CreateSong } from "./CreateSong";

export function App() {
    return (
        <div className="app">
            <h1>Song Collection</h1>
            <Songs />
            <CreateSong />
        </div>
    );
}

export default App;