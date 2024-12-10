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
import Breadcrumb from "../components/common/Breadcrumb.jsx";


const HomeOne = ({ allPosts }) => {


    const { data: allnews,
        error: news_error,
        isLoading: news_loading
    } = useQuery('getNews', getNews, reactQuery);


    const type = "news";
    const data = "news";


    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <Breadcrumb bCat={type} aPage={data?.title ?? data[0]?.title} />
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
                            allnews?.data?.map((news, index) => {
                                // Function to format the ISO date
                                const formatDate = (isoDate) => {
                                    const date = new Date(isoDate);
                                    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
                                    return date.toLocaleString('en-US', options);
                                };

                                return (
                                    <div
                                        key={news.id}
                                        className={`grid ${index === 0 ? 'grid-cols-1 my-8' : 'grid-cols-3 my-5'}`}
                                    >
                                        <div className={index === 0 ? "col-span-1" : "col-span-1"}>
                                            <img
                                                src={process.env.NEXT_PUBLIC_IMGPATH + news.image}
                                                alt={news.title}
                                                className={index === 0 ? "aspect-w-16 aspect-h-6 mx-auto" : "w-full"}
                                            />
                                        </div>
                                        <div className={index === 0 ? "col-span-1 px-4 text-center" : "col-span-2 px-4"}>
                                            <h3
                                                className={`axil-post-title cursor-pointer hover:underline ${index === 0 ? 'text-2xl font-bold mt-5 leading-[1.1]' : ''
                                                    }`}
                                            >
                                                {news.title}
                                            </h3>
                                            <p>By {news.user_info.name} : {formatDate(news.created_at)}</p>
                                        </div>
                                    </div>
                                );
                            })
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

