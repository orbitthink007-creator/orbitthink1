import Blog7 from "../../Components/Blog/Blog7";
import BlogDetailsLeft1 from "../../Components/BlogDetails/BlogDetailsLeft1";
import BreadCumb from "../../Components/Common/BreadCumb";
import Cta1 from "../../Components/Cta/Cta1";
import MarqueeText from "../../Components/MarqueeText/MarqueeText";

const BlogDetails = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <BreadCumb Title="Blog Details"></BreadCumb>
            <MarqueeText></MarqueeText>
            <BlogDetailsLeft1 blogId={id}></BlogDetailsLeft1>
            <Blog7></Blog7>
            <Cta1></Cta1>
        </div>
    );
};

export default BlogDetails;