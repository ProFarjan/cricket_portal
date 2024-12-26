import { useRouter } from "next/router";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import FooterOne from "../../components/footer/FooterOne";
import PageSidebar from "../../components/common/PageSidebar";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MatchCard from "../../components/match/MatchCard";
import Table from "../../components/match/matchAllDetails/Table";

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
            <HeadMeta metaTitle={slug?.replaceAll('-', ' ')} />
            <HeaderOne />
            <Breadcrumb bCat="Series" aPage={slug?.replaceAll('-', ' ')} />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 p-2">
                        <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
                            <div className="border rounded-t-3xl ">
                                <div className="card">
                                    <div className="card-header  h-28 flex justify-between items-center ">
                                        <div className="mt-5">
                                                <h1 className="text-3xl p-2  text-gray-700">RESULT</h1>
                                                <p className="text-2xl p-2 mt-[-24px] ">3rd ODI (D/N), Johannesburg, December 22, 2024, 
                                                <span className="underline cursor-pointer hover:text-blue-600 ml-1">Pakistan tour of South Africa</span></p>
                                        </div>
                                        <div className="flex gap-2 ">
                                                <FontAwesomeIcon className="w-4 cursor-pointer hover:text-blue-500" icon={faAngleLeft} /><span className="text-xl mr-4 cursor-pointer hover:text-blue-500" >Prev</span><span className="text-xl cursor-pointer hover:text-blue-500">Next</span>
                                                <FontAwesomeIcon className="w-4 cursor-pointer hover:text-blue-500" icon={faAngleRight} />
                                         </div>
                                    </div>
                                    <div className=" ">
                                        <MatchCard/>                      
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Table/>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 p-0">
                        {/* <PageSidebar /> */}
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default SeriesDetail;
