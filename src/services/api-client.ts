import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3af6dc47f14e424e89c4e651a190ae9a",
    }
})