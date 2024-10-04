import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import SectionTitle from "../elements/SectionTitle";
import ArticlesList from "./layout/StoriesList";
import { getSeriesList, getSeriesWiseData } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";
import PostLayoutThree from './layout/PostLayoutThree';

const MatchCoverage = () => {
  const [key, setKey] = useState('');
  const [seriesData, setSeriesData] = useState({});

  const {
    data: series_list,
    error: error_series,
    isLoading: isLoading_series
  } = useQuery('series-list', getSeriesList, reactQuery);

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
          <img
            src="/images/clientbanner/fontbanner.jpg"
            alt="font banner"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </div>
        <div className="card p-4">
          <Tab.Container id="widget-post" className="mb-3" activeKey={key} onSelect={handleSelect}>
            <div className="row">

              <div className="col-lg-12 mb-4">
                <h3 className="fs-2 p-0 m-0 mb-4">Recent Matches</h3>
                <Nav variant="underline">
                  {hasData(series_list) &&
                    series_list.slice(0, 5).map((data) =>
                      <Nav.Item key={data.series_id}>
                        <Nav.Link eventKey={data.series_id}>
                          <h4 className="fs-4 m-0 p-0">{data.name}</h4>
                          <p className="fs-6 m-0 p-0 lh-sm">{data.start_date}</p>
                        </Nav.Link>
                      </Nav.Item>
                    )}
                </Nav>
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
                              <h4 className="axil-post-title fs-2 hover-line">
                                <Link href={`/match/${seriesData[series_id][0].series_match.slug}/${seriesData[series_id][0].id}`}>
                                  <a>{seriesData[series_id][0].title}</a>
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
                        btnUrl={`/category/matches?series_id=${key}`}
                        pClass="mb-1"
                      />
                      <div className="axil-content m-t-xs-10">
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