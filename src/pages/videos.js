import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import TopArticles from "../components/post/TopArticles";
import VideosSection from "../components/post/VideosSection";
import MatchCoverage from "../components/post/MatchCoverage";
import GalleryItems from "../components/post/GalleryItems";
import TopStories from "../components/post/TopStories";
import PostSectionTwo from "../components/post/PostSectionTwo";
import PageSidebar from "../components/common/PageSidebar";
import { hashQueryKey, useQuery } from "react-query";
import reactQuery from "../config/reactQueryConfig";
import { getNews, getVideos } from "../api/api";

const HomeOne = ({ allPosts }) => {
  const {
    data: video,
    error: video_error,
    isLoading: video_isloading
  } = useQuery('get-Videos', getVideos, reactQuery);



  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            {/* <MatchCoverage />
            <PostSectionTwo />
            <TopStories />
            <VideosSection />
            <TopArticles /> */}
             <h1 className="m-b-xs-0  mt-10 axil-post-title hover-line">Videos</h1>

            {
              video?.map((item) => (
                <div key={item.id} >
                  <div className="grid grid-cols-3">
                    <div className=""><div style={{ maxWidth: '300px', marginBottom: '10px' }}>
                      <video controls style={{ width: '100%', height: '200px' }}>
                        <source src={item.link} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    </div>
                    <div className=" col-span-2">
                    <h3 className="axil-post-title cursor-pointer hover:underline">{item.title}</h3>
                    </div>
                  </div>




              
                </div>


              ))
            }

          </div>
          <div className="col-md-3 p-0">
            <PageSidebar />
          </div>
        </div>
        <div className="row">
        </div>
      </div>
      <FooterOne />
    </>
  );
}

export default HomeOne;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'date',
    'post_views',
    'post_share',
  ])

  return {
    props: { allPosts }
  }
}

