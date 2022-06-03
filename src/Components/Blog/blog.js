import './blog.css';

const Blog = () => {

    const articles = [
        {
            title: "Django Part 1- Creating a new project",
            link: "https://dev.to/willp11/django-part-1-creating-a-new-project-1mk1"
        },
        {
            title: "Django Part 2 - Creating a custom User model",
            link: "https://dev.to/willp11/django-part-2-creating-a-custom-user-model-3a8a"
        },
        {
            title: "Django Part 3 - User authentication with dj-rest-auth and allauth",
            link: "https://dev.to/willp11/django-part-3-user-authentication-with-dj-rest-auth-and-allauth-4dih"
        }
    ]

    const articles_div = articles.map((article)=>{
        return (
            <div className="Article">
                <h2>{article.title}</h2>
                <a href={article.link}>{article.link}</a>
            </div>
        )
    })

    return (
        <div className="Blog">
            <h1>Blog</h1>
            {articles_div}
        </div>
    )
}

export default Blog;