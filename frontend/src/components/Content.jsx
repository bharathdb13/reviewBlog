const Content = () => {
    return (
      <main className="content">
        <h2>Latest Blog Posts</h2>
        {/* Example blog post */}
        <article className="post">
          <img src="https://via.placeholder.com/800x400" alt="Post Cover" className="post-image" />
          <h3 className="post-title">Sample Blog Title</h3>
          <p className="post-content">
            This is a sample blog post content. More content will be displayed here dynamically.
          </p>
        </article>
      </main>
    );
  };
  
  export default Content;
  