import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import { getVideos } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const VideosSection = () => {
    const {
        data: videos,
        error,
        isLoading
    } = useQuery('videos', getVideos, reactQuery);

    return (
        <div className="axil-video-posts section-gap section-gap-top__with-text">
            <div className="container">
                <div className="card p-4">
                    <SectionTitle title="Videos" btnText="All VIDEOS" pClass="m-b-xs-20" />
                    <div className="row">
                        <div className="col-lg-8">
                            {hasData(videos) &&
                                videos.slice(0, 1).map((data) => (
                                    <PostVideoOne data={data} key={data.id} />
                                ))}
                        </div>
                        {/* <div className="col-lg-4">
                            {videos.slice(1, 5).map((data) => (
                                <PostVideoTwo data={data} videoIcon={true} key={data.id} />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideosSection;