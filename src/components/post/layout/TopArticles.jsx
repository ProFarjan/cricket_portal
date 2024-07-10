import { useState, useEffect } from 'react';
import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import { getMatchData } from "../../../api/api";
import { hasData } from "../../../helpers/helper";
import PostLayoutThree from "./PostLayoutThree";

const TopArticles = ({ matches }) => {
  const [key, setKey] = useState('');
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    if (matches && matches.length > 0) {
      const defaultTab = matches[0];
      setKey(defaultTab.match_data_id);
      fetchData(defaultTab.match_data_id, defaultTab.series_data_id);
    }
  }, [matches]);

  const fetchData = (match_data_id, series_data_id) => {
    getMatchData({ match_data_id, series_data_id })
      .then(response => {
        setMatchData(prevData => ({ ...prevData, [match_data_id]: response.data }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSelect = (eventKey) => {
    setKey(eventKey);
    const selectedTab = matches.find(match => match.match_data_id == eventKey);
    if (selectedTab && !matchData[eventKey]) {
      fetchData(selectedTab.match_data_id, selectedTab.series_data_id);
    }
  };

  if (!matches || matches.length === 0) {
    return <div>Loading tabs...</div>;
  }

  return (
    <Tab.Container id="widget-post" className="mb-3" activeKey={key} onSelect={handleSelect}>
      <div className="col-lg-12 mb-4">
        <h3 className="fs-2 p-0 m-0 mb-4">Match Coverage</h3>
        <Nav variant="underline">
          {hasData(matches) &&
            matches.slice(0, 4).map((data) =>
              <Nav.Item key={data.match_data_id}>
                <Nav.Link eventKey={data.match_data_id}>
                  <h4 className="fs-4 m-0 p-0">{data.team_1.short_name} VS {data.team_2.short_name}</h4>
                  <p className="fs-6 m-0 p-0 lh-sm">{data.title}</p>
                </Nav.Link>
              </Nav.Item>
            )}
        </Nav>
      </div>
      <div className="col-lg-6">
        <Tab.Content>
          {Object.keys(matchData).map(match_data_id => (
            <Tab.Pane eventKey={match_data_id} key={match_data_id}>
              {matchData[match_data_id] ? (
                <div>
                  <PostLayoutThree data={matchData[match_data_id]} postSizeLg={true} imgWidth={410} imgHeight={410} />
                  <div className="axil-media-bottom mt-auto">
                    <h4 className="axil-post-title fs-2 hover-line">
                      <Link href={`/post/${matchData[match_data_id].matchScore.match.slug}`}>
                        <a>{matchData[match_data_id].matchScore.match.statusText}</a>
                      </Link>
                    </h4>
                    <div className="post-metas">
                      <ul className="list-inline">
                        <li>
                          <Link href={`/author/`}>
                            <a className="post-author">{matchData[match_data_id].matchScore.match.title}</a>
                          </Link>
                        </li>
                        <li>
                          <i className="dot">.</i>{matchData[match_data_id].matchScore.match.daysInfo}
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
    </Tab.Container>
  );
};

export default TopArticles;
