import Header from './components/Header'
import About from './components/About'
import ArticleList from './components/ArticleList'
import './App.css';

const posts = [
  {
    id: 1,
    title: 'Understading React',
    date: 'July 1, 2025',
    preview: 'React',
    image: 'https://miro.medium.com/v2/resize:fit:1022/1*ufuG8ATCJ6Suk0L7XPJh_A.png'
  },
  {
    id: 2,
    title: 'Learning React',
    date: 'July 2, 2025',
    preview: 'React 2nd Edition.',
    image: 'https://m.media-amazon.com/images/I/61UKzozunpL.jpg'
  }
];


function App() {
  return (
    <div>
      <Header name="Milton's Blog" />
      <About 
      image="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2"
      about="Welcome to my blog" />
      <ArticleList posts={posts} />
    </div>
  );
}


export default App;
