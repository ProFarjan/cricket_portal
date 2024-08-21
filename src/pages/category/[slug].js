import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import { useRouter } from "next/router";
import PageSidebar from "../../components/common/PageSidebar";
import { capitalize } from "../../helpers/helper";
import { getAllstories, getSeriesWiseData, getTopArticles } from "../../api/api";


const category = ({ postData }) => {
    const router = useRouter();
    const slug = capitalize(router.query.slug);

    return (
        <>
            <HeadMeta metaTitle={`The Cricket Co ${slug} Category`} />
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
                                    <PostLayoutTwo data={data} postSizeMd={true} key={data.slug} slug={slug} />
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


export async function getServerSideProps({ params, query }) {

    const slug = params.slug;

    let postData = [];
    switch (slug) {
        case 'matches':
            const series_id = query.series_id;
            postData = await getSeriesWiseData({ series_id }).then(res => res.data);
            return {
                props: {
                    postData
                }
            }
            break;
        case 'stories':
            postData = await getAllstories().then(res => res.data);
            return {
                props: {
                    postData
                }
            }
            break;
        case 'articles':
            postData = await getTopArticles().then(res => res.data);
            return {
                props: {
                    postData
                }
            }
            break;
        default:
            return {
                props: {
                    postData
                }
            }
    }

}