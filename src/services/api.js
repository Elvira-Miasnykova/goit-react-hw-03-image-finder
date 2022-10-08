import axios from "axios";

export const fetchImage = async (page, searchQuery) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29465980-7b99950ec6153fcb016c43dc5';
    const urlOptions = `image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
    
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${urlOptions}`);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    };