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
// import Resizer from 'react-image-file-resizer';



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
                                // Function to truncate the detail text to 30 or 40 words
                                const truncateText = (text, limit) => {
                                    const words = text.split(' ');
                                    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
                                };





                                return (
                                    <div
                                        key={news.id}
                                        className={`grid ${index === 0 ? 'grid-cols-1 my-8' : 'grid-cols-3 my-5'}`}
                                    >


                                        <div className={index === 0 ? "w-full h-96 overflow-hidden" : "col-span-1"}>
                                            <img
                                                src={process.env.NEXT_PUBLIC_IMGPATH + news.image}
                                                alt={news.title}
                                                className={index === 0 ? "w-full h-full object-cover mx-auto p-2" : "w-full"}
                                            />
                                        </div>
                                        <div className={index === 0 ? "col-span-1 px-4 text-center" : "col-span-2 px-4"}>
                                            <div className={index === 0 ? "hidden" : "p-2 text-center bg-[#0a1b4a] mb-2 text-xl w-24 text-white"} >{type}</div>
                                            <h3
                                                className={` cursor-pointer hover:underline ${index === 0 ? ' font-bold mt-5 leading-[1.1]' : ''
                                                    }`}
                                            >
                                                {news.title}
                                            </h3>
                                            <p className="text-2xl">{truncateText(news.detail, 30)}</p>
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

