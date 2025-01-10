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
import { useEffect, useState } from "react";

const SeriesDetail = () => {
    const router = useRouter();
    const { slug, series_id, match_id } = router.query;
    

    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(false)
    console.log(match)
    
    
    useEffect(() => {

        const fetchMatch = async () => {
          setLoading(true);
            try {
              const response = await fetch(`https://api.cricapi.com/v1/match_info?apikey=a4403336-b4a2-4b90-a29a-3b1c8dd4aa1a&id=${match_id}`);
              const data = await response.json();
              setMatch(data?.data);
              setLoading(false)
            } catch (error) {
              console.error("Error fetching products:", error);
            }
        };
        fetchMatch();
     },[match_id])
      
      if (loading) {
        return <h1 className="text-xl">Loading ...</h1>
    }
    
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
          day: "numeric",
          month: "short",
          year: "numeric",
        };
        const formattedDate = date.toLocaleString("en-US", options);
        const [month, day, year] = formattedDate.split(" ");
        return `${day.replace(",", "")}, ${month}, ${year}`;
      };
    
    // const {
    //     data: match,
    //     error,
    //     isLoading
    // } = useQuery('match-data', getMatchData)
    // console.log(match)

    return (
        <>
            <HeadMeta metaTitle={slug?.replaceAll('-', ' ')} />
            <HeaderOne />
            <Breadcrumb bCat="Series" aPage={slug?.replaceAll('-', ' ')} />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 p-2">
                        <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
                            <div className="border rounded-t-3xl mr-4 ">
                                <div className="card">
                                    <div className="card-header  h-28 flex justify-between items-center ">
                                        <div className="mt-5">
                                                <h1 className="text-3xl p-2  text-gray-700">RESULT</h1>
                                            <p className="text-2xl p-2 mt-[-24px] "> {match?.name},<span className="ml-3">{formatDate(match?.date) }</span></p>
                                        </div>
                                        <div className="flex gap-2 ">
                                                <FontAwesomeIcon className="w-4 cursor-pointer hover:text-blue-500" icon={faAngleLeft} /><span className="text-xl mr-4 cursor-pointer hover:text-blue-500" >Prev</span><span className="text-xl cursor-pointer hover:text-blue-500">Next</span>
                                                <FontAwesomeIcon className="w-4 cursor-pointer hover:text-blue-500" icon={faAngleRight} />
                                         </div>
                                    </div>
                                    <div className=" mr-4 ">
                                        <MatchCard matchdata={match} />                      
                                    </div>
                                </div>
                            </div>
                            <div className="mr-4">
                                <Table/>
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
