//About.jsx
//Display blog image and about message.
//props: image, about paragraph text

function About({ image, about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p className="about-text">
             <img 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbd6sk7zjsfY8mwVucWTooKzm3j4yV6RkCw&s" 
               alt="icon" 
               className="inline-icon"
  /> 
             Welcome to my blog 
             <img 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbd6sk7zjsfY8mwVucWTooKzm3j4yV6RkCw&s" 
               alt="icon" 
               className="inline-icon"
              />
            </p>
        </aside>
    );
}
export default About;