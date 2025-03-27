const PostList = ({ posts }) => {
    return (
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => {
            const coverImageUrl = post.coverImage?.[0]?.url
              ? `http://localhost:1337${post.coverImage[0].url}`
              : null;
  
            return (
              <div key={post.id} className="card">
                {coverImageUrl && (
                  <img
                    src={coverImageUrl}
                    alt={post.title}
                    className="post-image"
                  />
                )}
                <h3>{post.title}</h3>
                <p>
                  {Array.isArray(post.Content)
                    ? post.Content.map((block, index) =>
                        block.children ? (
                          <p key={index}>
                            {block.children.map((child) => child.text).join(" ")}
                          </p>
                        ) : null
                      )
                    : post.Content}
                </p>
              </div>
            );
          })
        ) : (
          <p>Blog posts are available here</p>
        )}
      </div>
    );
  };
  
  export default PostList;
  