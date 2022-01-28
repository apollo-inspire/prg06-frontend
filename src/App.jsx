import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Songs } from "./Songs";
import { CreateSong } from "./CreateSong";
import { SongDetail } from "./SongDetail";
import { EditSong } from "./EditSong";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Songs /> }></Route>
                <Route path="/create" element={ <CreateSong /> }></Route>
                <Route path="/song/:songId" element={ <SongDetail /> }></Route>
                <Route path="/song/:songId/edit" element={ <EditSong /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;