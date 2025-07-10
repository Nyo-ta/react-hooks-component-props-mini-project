import Article from "./Article";

function ArticleList({posts}){
    function renderposts(currentvalue){
        return <Article key={currentvalue.id} title={currentvalue.title} date={currentvalue.date} preview={currentvalue.preview}/>
    }
    return(
        <main>
            {posts.map(renderposts)}
        </main>  
    )
}
export default ArticleList