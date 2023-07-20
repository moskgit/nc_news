import { useEffect, useState } from "react";
import loadingGif from '../../../assets/icons/loading.webp'
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"
import { getArticleComments } from "../../../utilsSrc/api";


export default function CommentsForAnArticle_List () {

    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [commentsData, setCommentsData] = useState([]);

    useEffect(()=> {
        getArticleComments(article_id)
        .then(({comments}) => {
            setCommentsData(comments);
            setIsLoading(false);
        })
        .catch(err=>{console.log(err)})
    },[article_id]);

    if(isLoading) return <h2><img src={loadingGif} className="loading-img" alt="Loading..." />   Loading... Please wait</h2>

    return <>
        <section>
            <div className="comments-of-an-article">
                {commentsData.map(comment => {
                    return <CommentCard key={comment.comment_id}  comment={comment} />
                })}
            </div>
        </section>
    </>
}