import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";

const API_BASE_URL = "http://localhost:1337/api/categories"; // Base API URL

const CategoryPage = () => {
  const { id } = useParams(); // Get category ID from URL
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${id}?populate=posts.coverImage`);
        const data = await response.json();
        
        setCategory(data.data);
        setPosts(data.data?.posts || []);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-10xl font-bold mb-4">
        {category ? `Posts in ${category.Title}` : "Login to fetch the posts"}
      </h2>
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryPage;
