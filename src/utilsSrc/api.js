import axios from "axios";

const api = axios.create({
    baseURL : "https://articles-6py6.onrender.com/api"
})

export const fetchUsers = () => {
    return api.get('/users')
    .then(({data})=>{
        return data;
    })
}

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

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data;
    })
}

export const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data;
    }) 
}

export const patchVotes = (article_id, inc_votes) => {
    return api.patch(`/articles/${article_id}`, {inc_votes})
    .then(({data}) => {
        return data;
    })
}

export const postComment = (article_id, username, body) => {
    return api.post(`/articles/${article_id}/comments`, {username, body})
    .then(({data}) => {
        return data;
    })
}