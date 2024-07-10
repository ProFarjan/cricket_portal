import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import PostVideoTwo from "./layout/PostVideoTwo";
import { getVideos } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const VideosSection = ({ postData }) => {

    const {
        data: videos,
        error,
        isLoading
    } = useQuery('videos', getVideos, reactQuery);

    const videoPost = postData.filter(post => post.postFormat === 'video');

    return (
        <div className="axil-video-posts section-gap section-gap-top__with-text">
            <div className="container">
                <div className="card p-4">
                    <SectionTitle title="Videos" btnText="All VIDEOS" pClass="m-b-xs-20" />
                    <div className="row">
                        <div className="col-lg-8">
                            {hasData(videos) &&
                                videoPost.slice(0, 1).map((data) => (
                                    <PostVideoOne data={data} key={data.slug} />
                                ))}
                        </div>
                        <div className="col-lg-4">
                            {videoPost.slice(1, 5).map((data) => (
                                <PostVideoTwo data={data} videoIcon={true} key={data.slug} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideosSection;