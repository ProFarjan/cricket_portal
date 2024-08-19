import { getAllPosts } from "../../../lib/api";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import { slugify } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import { useRouter } from "next/router";
import PageSidebar from "../../components/common/PageSidebar";
import { capitalize } from "../../helpers/helper";


const category = ({ postData }) => {
    const router = useRouter();
    const slug = capitalize(router.query.slug);

    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <Breadcrumb aPage={slug} />
            {/* Banner Start here  */}
            <div className="banner banner__default bg-grey-light-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="post-title-wrapper">
                                <h2 className="m-b-xs-0 axil-post-title hover-line">{slug}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner End here  */}
            <div className="random-posts section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <AdBanner />
                            <div className="axil-content">
                                {postData.map((data) => (
                                    <PostLayoutTwo data={data} postSizeMd={true} key={data.slug} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="post-sidebar">
                                <PageSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default category;


export async function getServerSideProps({ params }) {

    const postParams = params.slug;
    
    const allPosts = getAllPosts([
        'slug',
        'cate',
        'cate_img',
        'title',
        'excerpt',
        'featureImg',
        'date',
        'post_views',
        'read_time',
        'author_name',
        'author_social'
    ]);

    

    const getCategoryData = allPosts.filter(post => slugify(post.cate) === postParams);
    const postData = getCategoryData;

    return {
        props: {
            postData
        }
    }
}