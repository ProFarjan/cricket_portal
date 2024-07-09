import AdBanner from "../common/AdBanner";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionFive = ({ postData, adBanner, pClass }) => {
    return (
        <div className={`random-posts ${pClass ?? "section-gap"}`}>
            <div className="container">
                <div className="card">
                    <div className="row p-4">
                        <div className="col-lg-12">
                            {adBanner === true ? <AdBanner /> : ""}
                            <div className="axil-content">
                                {postData.slice(0, 4).map((data) => (
                                    <PostLayoutTwo data={data} postSizeMd={true} key={data.slug} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PostSectionFive;