import thumbUp from '../../../assets/icons/thumbUp.png'
import { Link } from "react-router-dom"
import Button from "../../UtilsComponents/Button"
import { useState } from 'react';
import addVote from '../../../utilsSrc/addVote';


export default function ArticleCard ({article}) {

    const dateString = article.created_at;
    const date = dateString.split('T')[0];
    const time = dateString.slice(dateString.indexOf('T')+1,dateString.lastIndexOf(':'))

    const [articleVoteCount, setArticleVoteCount] = useState(article.votes);
    const [count, setcount] = useState(0);
    const [err, setErr] = useState(false);

    function handleClick(){
        setcount(count + 1)
        setArticleVoteCount(articleVoteCount + 1)
        addVote(article.article_id)
        .then(()=>{setErr(()=>false)})
        .catch(() => {
            setErr(()=>true)
            setArticleVoteCount(articleVoteCount);
        })
    }

    return <>
        <div className="card">
            <Link to={`/articles/${article.article_id}`} className="card-title" href="#">
                <h1 title="CLICK the HEADING to read an article.">{article.title}</h1>
            </Link>
            <h2>Topic: {article.topic}</h2>
            <h3>Author: {article.author}</h3>
            <p>
                <img src={`${article.article_img_url}`} alt="Article Cover" className="cardImage" title="CLICK the HEADING to read an article." />
            </p>
            <p>{article.body}</p>
            <p>Created At: {date}, Time: {time} </p>
            <div className="votes-info">
                Article Votes Count: {articleVoteCount}
                {err && <h3 className='errmsg' >error occured, Please refresh the page and try again.</h3>}
            </div>
            <Button as={Link} onClick={(count < 1) && handleClick } img={<img src={thumbUp} alt="Click to Vote" id="click-to-vote_id" className="btn-help comment-votes"  /> } > Click to Vote</Button>
            <Button as={Link} to={`/articles/${article.article_id}/comments`} img="Comments" alt="View Comments" className='btn-comments'>View Comments</Button>
        </div>    
        <hr/>
    </>
}

