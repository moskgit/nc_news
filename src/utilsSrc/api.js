import axios from "axios";

const api = axios.create({
    baseURL : "https://articles-6py6.onrender.com/api"
})

// Get list of topics (fills the dropdown list) 
export const getTopics = () => {
    return api.get('/topics')
        .then(({data}) => {
            return data;
        })
}

// Get articles
export const getArticles = () => {
    return api.get('/articles')
        .then(({data}) => {
            return data;
        })
}

export const getArticlesById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data;
    })
}

