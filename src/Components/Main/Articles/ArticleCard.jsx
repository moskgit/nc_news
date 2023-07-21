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

    function handleClick(){
        setArticleVoteCount(articleVoteCount + 1)
        addVote(article.article_id)
        .catch(() => {
            setArticleVoteCount(articleVoteCount - 1);
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
            </div>
            <Button as={Link} onClick={handleClick} img={<img src={thumbUp} alt="Click to Vote" id="click-to-vote_id" className="btn-help comment-votes"  /> } > Click to Vote</Button>
            <Button as={Link} to={`/articles/${article.article_id}/comments`} img="Comments" alt="View Comments" className='btn-comments'>View Comments</Button>
        </div>    
        <hr/>
    </>
}

