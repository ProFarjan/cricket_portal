import { useRouter } from "next/router";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import FooterOne from "../../components/footer/FooterOne";
import PageSidebar from "../../components/common/PageSidebar";
import { useQuery } from "react-query";

const SeriesDetail = () => {
    const router = useRouter();
    const { slug, series_id, match_id } = router.query;

    // const {
    //     data: match,
    //     error,
    //     isLoading
    // } = useQuery('match-data', getMatchData)

    return (
        <>
            <HeadMeta metaTitle={slug.replaceAll('-', ' ')} />
            <HeaderOne />
            <Breadcrumb bCat="Series" aPage={slug.replaceAll('-', ' ')} />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 p-2">
                        <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <h1>Hello world</h1>
                                    </div>
                                    <div className="card-body">
                                        Nice Day
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 p-0">
                        <PageSidebar />
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default SeriesDetail;