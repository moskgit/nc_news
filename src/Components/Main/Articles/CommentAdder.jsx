import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../user/user";
import { useParams } from "react-router-dom";
import { postComment } from "../../../utilsSrc/api";

export default function CommentAdder ({commentsData, setCommentsData}) {

    const {article_id} = useParams();
    const [newComment, setNewComment] = useState('');
    const { user } = useContext(UserContext);

    function handleSubmitnewComment(e) {
        e.preventDefault();

        postComment(article_id, user, newComment)
        .then(({comment}) => {
            setCommentsData(() => {
                return [comment[0], ...commentsData];
            })
        })
        .catch(err=>{console.log(err)})
        setNewComment("");
    }

    return <form className="frm-commentadder" onSubmit={handleSubmitnewComment}>
        <label htmlFor="add-comment-textarea-id"></label>
        <textarea name="add-comment-txtarea" className="commentadder-txtarea" id="add-comment-txtarea-id"  onChange={(e)=>{
            setNewComment(e.target.value)
            }}  cols="50" rows="5">
        </textarea>
        <input type="submit" value="Add Comment" id="btn-comment-submit" className='btn-comments'/>
    </form>
}