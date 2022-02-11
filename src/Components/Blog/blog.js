import './blog.css';
import comingSoon from '../../Assets/coming-soon.jpg';

const Blog = () => {
    return (
        <div className="Blog">
            <h1>Blog</h1>
            <p>The blog is currently under construction! The first articles will be uploaded in the near future!</p>
            <img className="ComingSoon" src={comingSoon} alt="Coming Soon" />
        </div>
    )
}

export default Blog;