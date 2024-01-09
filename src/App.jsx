import React from 'react'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Netflix from "./pages/Netflix"
import MoviePage from "./pages/Movies";
import Player from "./pages/Player";

import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
