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
import { getNews } from "../api/api";

const HomeOne = ({ allPosts }) => {


    const { data: allnews,
        error: news_error,
        isLoading: news_loading
    } = useQuery('getNews', getNews, reactQuery);



    console.log(allnews?.data[0].title)



    // console.log(video)


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

                        <h1 className="m-b-xs-0  mt-10 axil-post-title hover-line">News</h1>

                        {
                            allnews?.data?.map((news) => (
                                <div key={news.id}>
                                    <div className="grid grid-cols-3 my-5">
                                        <div className=" col-span-1 ">
                                            <img src="/images/posts/post_1.jpg" />
                                        </div>
                                        <div className=" col-span-2 px-4">

                                            <h3 className="axil-post-title cursor-pointer hover:underline">{news.title}</h3>
                                            <p>{news.title_bn}</p>
                                            {/* <p>{news.detail_bn}</p> */}
                                            <p>By {news.user_info.name} : {news.user_info.created_at}</p>
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

