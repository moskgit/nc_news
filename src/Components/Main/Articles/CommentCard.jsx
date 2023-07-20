export default function CommentCard ({comment}) {
   const dateString = comment.created_at;
   const date = dateString.split('T')[0];
   const time = dateString.slice(dateString.indexOf('T')+1,dateString.lastIndexOf(':'))
    
    return <>
        <div className="comment-card" key={comment.comment_id} >
            <p className="comment-body">{comment.body}</p>
            <div className="col2-comment-parent">
                <p className="col2-comment-child">Commented by: {comment.author}</p>
                <p className="col2-comment-child">Created at: {date}, Time: {time} </p>
            </div>
            <p className="comment-votes"><em>Votes </em> {comment.votes}</p>
        </div>
        <hr/>
    </>
}
