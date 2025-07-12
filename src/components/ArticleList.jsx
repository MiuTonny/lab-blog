//ArticleList.jsx
//list of article components
//props: receives posts array from app.jsx
//each post is an individual article.
import Article from './Article';

function ArticleList({ posts }) {
    return (
        <main className="article-list">
            {posts.map((post) => (
                <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                image={post.image}
                />
            ))}
        </main>
    );
}

export default ArticleList;