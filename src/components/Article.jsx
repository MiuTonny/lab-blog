//Article.jsx
//display a single blog article: image title data and preview.
//used inside Article.jsx

function Article({ title, date, preview, image }) {
    return (
        <article>
            <img src={image} 
            alt={`${title} cover`} 
            style={{ width: '100px', height: '150px' }} />
        <h3>{title}</h3>
        <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;