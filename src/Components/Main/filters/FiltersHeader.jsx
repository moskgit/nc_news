import { Link } from 'react-router-dom';


//Topics, Autohors and All filters 
export default function FiltersHeader ({topicsData, setTopicsData, articlesData, setArticlesData}) {
   
    return <section className='categWrapper'>

        {/* Topics  */}
        <div className="dropdown">
            <button className="dropbtn">Topic <i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content" tooltip={`$`}>
                {topicsData.map((topic, i) => {
                    //Note: Tool-tip is added (Description as a tool-tip)
                    return <div key={topic.slug} title={`${topic.description}`} id={topic.slug}>
                        <Link to={`/articles?topic=${topic.slug}`} href="#">{topic.slug}</Link>
                    </div>
                })}
            </div>
        </div>


        {/* Articles data to be set here for the filtered list */}

        {/* Author */}
        <div className="dropdown">
            <button className="dropbtn">Author <i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content" tooltip={`$`}>
                {topicsData.map(topic => {
                    //Note: Tool-tip is added (Description as a tool-tip)
                    return <div title={`${topic.description}`} key={topic.sug}>
                        <Link 
                            to={`/articles?topic=${topic.slug}`} 
                            key={topic.slug} id={topic.slug} 
                            href="#">{topic.slug} 
                            </Link>
                    </div>
                })}
            </div>
        </div>
        
        {/* Other */}
        <div className="dropdown">
            <button className="dropbtn">Other <i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content" tooltip={`$`}>
                {topicsData.map(topic => {
                    //Note: Tool-tip is added (Description as a tool-tip)
                    return <div title={`${topic.description}`}>
                        <Link 
                            to={`/articles?topic=${topic.slug}`} 
                            key={topic.slug} id={topic.slug} 
                            href="#">{topic.slug} 
                            </Link>
                    </div>
                })}
            </div>
        </div>
        
        {/* All Options */}
        <div className="dropdown">
            <button className="dropbtn">All Options <i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content" tooltip={`$`}>
                {topicsData.map(topic => {
                    //Note: Tool-tip is added (Description as a tool-tip)
                    return <div title={`${topic.description}`}>
                        <Link 
                            to={`/articles?topic=${topic.slug}`} 
                            key={topic.slug} id={topic.slug} 
                            href="#">{topic.slug} 
                            </Link>
                    </div>
                })}
            </div>
        </div>
    </section>
}