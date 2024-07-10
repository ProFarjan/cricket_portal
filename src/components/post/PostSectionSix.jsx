import { slugify } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

const PostSectionSix = ({postData}) => {

    const foodPost = postData.filter(post => slugify(post.cate) === 'food' || slugify(post.cate) === 'drink');

    return ( 
        <div className="related-post mt-3 section-gap p-b-xs-15">
            <div className="container">
                <div className="card p-4">
                    <SectionTitle title="Photos" btnText="See All" />
                    <div className="grid-wrapper">
                        <div className="row">
                            {foodPost.slice(0, 4).map((data) => (
                                <div className="col-lg-3 col-md-4" key={data.slug}>
                                    <PostLayoutFour data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionSix;