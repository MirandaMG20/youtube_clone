import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = { // copied from https://rapidapi.com/ytdlfree/api/youtube-v31 
    url: BASE_URL,
    params: {
        maxResults: '50' // This is what's on the video
        // This was not on the video 
        //   part: 'snippet',
        //   videoId: 'M7FIvfx5J10'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); // Dynamic = let us call baseUrl/getVideos/getChannel

    return data;
}