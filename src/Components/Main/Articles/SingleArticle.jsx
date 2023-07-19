import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../../utilsSrc/api";
import ArticlesList from "./ArticlesList";


export default function SingleArticle () {

    const [articlesData, setArticlesData] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getArticlesById(article_id)
        .then(({article}) => {
            setArticlesData(article);
        })
        .catch(e=>console.log(e));
    }, [article_id]);

    return <ArticlesList articlesData={articlesData} />
}