import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import FetchRandomGif from './components/FetchRandomGif'
import FavoriteGifs from './components/FavoriteGifs'

function App() {

  const [gif, setGif] = useState({});
  const [favorite, setFavorite] = useState("")

  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=MDuQj0zAyRfJSPKdV0VMNVBe6VAJE81q`;

  const fetchRandomGif = async () => {
    const res = await axios.get(apiUrl);
    setGif(res.data.data);
  }

  const handleChange = (gif) => {
    setFavorite(gif);
  }

  useEffect(() => {
    fetchRandomGif()
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <main>
          <button onClick={fetchRandomGif}>display Gif!</button>
          <FetchRandomGif gif={gif} favoriteGif={(title)=>handleChange(title)} />
          {/* <button onClick={handleChange}>Favorite Gif</button> */}
          <FavoriteGifs favorite={favorite}/>
        </main>
      </div>
    );
}
export default App;