import axios from 'axios';

const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=MDuQj0zAyRfJSPKdV0VMNVBe6VAJE81q`;

const getRandomGif = async () => {
    const res = await axios.get(apiUrl);
    return res.data.data;
}

export default getRandomGif;