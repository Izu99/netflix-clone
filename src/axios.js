import axios from "axios";

const ins = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default ins;