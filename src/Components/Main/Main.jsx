import { useEffect, useState } from "react"
import { getArticles, getTopics } from "../../utilsSrc/api";
import FiltersHeader from "./filters/FiltersHeader";
import ArticlesList from "./Articles/ArticlesList";


export default function Main () {
    //Loading handle
    const [isLoading, setIsLoading] = useState(true);
    const [topicsData, setTopicsData] = useState([]);
    const [articlesData, setArticlesData] = useState([]);

    useEffect(()=> {
        getTopics() 
          .then(({topics}) => {
            setTopicsData(topics);
          })
        
        getArticles()
        .then(({articles}) => {
            setArticlesData(articles);
          })
        .catch(err => console.log(err))
        .finally(()=> {
            setIsLoading(false);
        })
      },[topicsData, articlesData]);
  
      if(isLoading) return <h2 className='Loading'>Loading...</h2>

    return <main className="main">
        <em><label htmlFor="categWrapper" id='filter-label-id' className='filter-label' value="Filters : ">Filters : </label></em>
        <FiltersHeader topicsData={topicsData} setTopicsData={setTopicsData } articlesData={articlesData} setArticlesData={setArticlesData} />
        <ArticlesList articlesData={articlesData} />
    </main>
}