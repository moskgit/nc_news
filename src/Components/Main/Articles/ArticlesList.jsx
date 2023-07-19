import ArticleCard from "./ArticleCard"

export default function ArticlesList ({articlesData}) {
    return <>
        <hr/>
        <div className="articles-list">
            {articlesData.map(article => {
                if (article) {
                    return <ArticleCard key={article.article_id} article={article} />;
                }
            })}
        </div>
    </>
}