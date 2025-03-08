// BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  return <div>Viewing blog post {id}</div>;
}

export default BlogPost;
