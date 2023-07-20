import loadingGif from '../../../assets/icons/loading.webp'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../utilsSrc/api";
import ArticlesList from "./ArticlesList";


export default function SingleArticle () {

    const [isLoading, setIsLoading] = useState(true);
    const [articlesData, setArticlesData] = useState([]);
    const {article_id} = useParams();

    
    useEffect(() => {
        getArticleById(article_id)
        .then(({article}) => {
            setArticlesData(article);
            setIsLoading(false);
        })
        .catch(e=>console.log(e));
    }, [article_id, isLoading]);
    
    if(isLoading) return <h2><img src={loadingGif} className="loading-img" alt="Loading..." />  Loading... Please wait</h2>

    return <ArticlesList articlesData={articlesData} />
}