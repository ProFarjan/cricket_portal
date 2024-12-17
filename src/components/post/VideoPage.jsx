import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import { getVideos } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";
import PostVideoTwo from './layout/PostVideoTwo';
import PostvideoPage from "../post/PostvideoPage"
import PostVideoimage from './layout/VideoPageImage';

const VideosSection = () => {
    const {
        data: videos,
        error,
        isLoading
    } = useQuery('videos', getVideos, reactQuery);

    return (
        <div className="axil-video-posts section-gap section-gap-top__with-text">
            <div className="container">
                <div className=" ">
                    <div className="">
                        <div className="col-lg-12 my-5 ">
                            {hasData(videos) &&
                                videos.slice(0, 1).map((data) => (
                                    <PostVideoOne data={data} key={data.id} />
                                ))}
                        </div>
                        
                        <div className=" grid grid-cols-3 	  ">
                            {hasData(videos) &&
                                videos.slice(1, 5).map((data) => (
                                    <PostVideoimage  data={data} videoIcon={true} key={data.id}  />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideosSection;