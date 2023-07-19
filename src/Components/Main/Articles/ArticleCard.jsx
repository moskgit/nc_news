import comment from '../../../assets/icons/comment.png'
import { Link } from "react-router-dom"
import Button from "../../UtilsComponents/Button"


export default function ArticleCard ({article}) {

    return <div className="card">
        <Link to={`/articles/${article.article_id}`} className="card-title" href="#">
            <h1 title="CLICK the HEADING to read an article.">{article.title}</h1>
        </Link>
        <h2>Topic: {article.topic}</h2>
        <h3>Author: {article.author}</h3>
        <p>
            <img src={`${article.article_img_url}`} alt="Article Cover" className="cardImage" title="CLICK the HEADING to read an article." />
        </p>
        <p>{article.body}</p>
        <p>Article ID: {`${article.article_id}`}</p>
        <p>Created At: {`${article.created_at}`}</p>
        <div className="votes-info">
            Votes Count: {`${article.votes}`}
        </div>
        <Button as={Link} to="/articles/:article_id/comments" img="Comments" alt="View Comments" className='btn-comments'>View Comments</Button>
        
        <hr/>
    </div>    
}
