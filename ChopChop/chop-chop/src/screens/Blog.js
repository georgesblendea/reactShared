import MediaCard from "../components/MediaCard";
import '../styles/screens/Blog.css';
import MediaGrid from "../components/MediaGrid";

const Blog = () => {
    return(
        <>
            <div className="blogPage">
               {/* <MediaCard/> */}
               <MediaGrid></MediaGrid>
            </div>
        </>
    );
}

export default Blog;