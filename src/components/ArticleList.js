
import Article from "./Article";
 
export default function ArticleList ({posts}) {
    return (
       <main>
        {posts.map((article)=><Article key={article.id} title={article.title} date={article.date} preview={article.preview}/> )}
       </main>
    )
}
