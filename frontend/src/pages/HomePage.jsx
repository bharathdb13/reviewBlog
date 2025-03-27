import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar"; // Import SearchBar

const API_BASE_URL = "http://localhost:1337/api/categories"; // Base API URL

const HomePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        if (!id) return;
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
      <SearchBar /> {/* Search Bar only on Home Page */}
      <h2 className="text-2xl font-bold mb-4">
        {category ? `Posts in ${category.Title}` : "All Posts"}
      </h2>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
