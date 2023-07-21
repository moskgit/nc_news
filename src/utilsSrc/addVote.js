import { patchVotes } from "./api";

export default function addVote(article_id) {
    let votes = '';
    // api call
    return patchVotes(article_id, 1) 
    .then(({article}) => {
        return article.votes;
    })

}