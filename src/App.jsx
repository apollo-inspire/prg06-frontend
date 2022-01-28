import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Songs } from "./songs/Songs";
import { CreateSong } from "./songs/CreateSong";
import { SongDetail } from "./song/SongDetail";
import { EditSong } from "./song/EditSong";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Songs /> }></Route>
                <Route path="/create" element={ <CreateSong /> }></Route>
                <Route path="/song/:songId" element={ <SongDetail /> }></Route>
                <Route path="/song/:songId/edit/" element={ <EditSong /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;