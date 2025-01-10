import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import SectionTitle from "../elements/SectionTitle";
import ArticlesList from "./layout/StoriesList";
import { getSeriesList, getSeriesWiseData, getTopMetches } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData, shortTxt } from "../../helpers/helper";
import PostLayoutThree from './layout/PostLayoutThree';
import LeadNews from '../news/LeadNews';
import { slugify } from '../../utils';

const MatchCoverage = () => {
  const [key, setKey] = useState('');
  const [seriesData, setSeriesData] = useState({});

   const {
      data: topMenu,
      error,
      isLoading
    } = useQuery('series-metches', getTopMetches, reactQuery);

  const {
    data: series_list,
    error: error_series,
    isLoading: isLoading_series
  } = useQuery('series-list', getSeriesList, reactQuery);

  const loadMatchData = (series_id) => (event) => {
    event.preventDefault();
    const mySeriesData = topMenu.data.filter((s_match) => slugify(s_match.series) == series_id);
    setSeriesData(mySeriesData)
  }

  const handleSelect = (eventKey) => {
    setKey(eventKey);
    const selectedTab = series_list.find(series => series.series_id == eventKey);
    if (selectedTab && !seriesData[eventKey]) {
      fetchData(selectedTab.series_id);
    }
  };

  const fetchData = (series_id) => {
    getSeriesWiseData({ series_id })
      .then(response => {
        setSeriesData(prevData => ({ ...prevData, [series_id]: response.data }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (series_list && series_list.length > 0) {
      const defaultTab = series_list[0];
      setKey(defaultTab.series_id);
      fetchData(defaultTab.series_id);

    }
  }, [series_list]);


  return (
    <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
      <div className="container">
        <div className="mb-5">
          {/* <img
            src="/images/clientbanner/cricket5.jpg"
            alt="font banner"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          /> */}
          <LeadNews/>
        </div>
        <div className="card p-4" style={{padding: `2.5rem !important`}}>
          <Tab.Container id="widget-post" className="mb-3" activeKey={key} onSelect={handleSelect}>
            <div className="row">

              <div className="col-lg-12 mb-4">
                <h3 className="fs-2 p-0 m-0 mb-4">Recent Series</h3>
                <div className="overflow-x-auto mb-3 whitespace-nowrap scrollbar-hide">
                    <ul className="flex space-x-4">
                    
                      {hasData(topMenu) &&
                        topMenu?.series?.map((data, index) => (
                          <li
                            key={slugify(data.name)}
                            className="inline-block cursor-pointer text-white"
                            onClick={loadMatchData(slugify(data.name))}
                          >
                            <Nav.Item>
                              <Nav.Link>
                                <p className='text-xl border-r  hover:text-blue-600 border-blue-600 '><span className=' mr-4'>{data.name} ({data.total})</span></p>
                              </Nav.Link>
                            </Nav.Item>
                          </li>
                        ))}
                    </ul>
                    </div>
              </div>

              <div className='row'>
                <div className="col-lg-6">
                  <Tab.Content>
                    {Object.keys(seriesData).map(series_id => (
                      <Tab.Pane eventKey={series_id} key={series_id}>
                        {seriesData[series_id][0] ? (
                          <div>
                            <PostLayoutThree data={seriesData[series_id][0]} postSizeLg={true} imgWidth={410} imgHeight={410} />
                            <div className="axil-media-bottom mt-auto">
                              <h4 className="axil-post-title fs-1 hover-line">
                                <Link href={`/post/${seriesData[series_id][0].series_match.slug}?id=${seriesData[series_id][0].series_id}&type=match`}>
                                  <a>{seriesData[series_id][0]?.title}</a>
                                </Link>
                              </h4>
                              <div className="post-metas">
                                <ul className="list-inline">
                                  <li>
                                    <Link href="#">
                                      <a className="post-author">{seriesData[series_id][0].user_info.name}</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <i className="dot">.</i>{seriesData[series_id][0].created_at}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>Loading...</div>
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>

                {hasData(seriesData[key]) && (seriesData[key].length > 1) ? (
                  <div className="col-lg-6">
                    <div className="axil-recent-news">
                      <SectionTitle
                        title="Update News"
                        btnText="See All"
                        btnUrl={`/category/match?series_id=${key}`}
                        pClass="mb-1"
                      />
                      <div className="axil-content m-t-xs-20">
                        {hasData(seriesData[key]) && (seriesData[key].length > 1) &&
                          seriesData[key].slice(1, 5).map((data, index) => (
                            <ArticlesList data={data} key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-6">
                    <div className='text-center'>DATA NOT FOUND</div>
                  </div>
                )}

              </div>

            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}

export default MatchCoverage;