import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import { useQuery } from 'react-query';
import reactQuery from "../../../config/reactQueryConfig";
import { getTop5stories } from "../../../api/api";
import { hasData, shortTxt } from "../../../helpers/helper";
import PostLayoutThree from "./PostLayoutThree";

const TopArticles = () => {

  const {
    data: top_stories,
    error,
    isLoading
  } = useQuery('top-articles', getTop5stories, reactQuery);

  return (
    <Tab.Container id="widget-post" className="mb-3" defaultActiveKey="0">
      <div className="col-lg-12 mb-4">
        <h3 className={`fs-2 p-0 m-0 mb-4`}>Match Coverage</h3>
        <Nav variant="underline">
          {hasData(top_stories) &&
            top_stories.slice(0, 4).map((data, index) =>
              <Nav.Item>
                <Nav.Link eventKey={index}>
                  <h4 className="fs-4 m-0 p-0">Ban VS Ind</h4>
                  <p className="fs-6 m-0 p-0 lh-sm">1st Man Test</p>
                </Nav.Link>
              </Nav.Item>
            )}
        </Nav>
      </div>
      <div className="col-lg-6">
        <Tab.Content>
          {hasData(top_stories) &&
            top_stories.map((data, index) =>
              <Tab.Pane eventKey={index}>
                <PostLayoutThree data={data} postSizeLg={true} imgWidth={410} imgHeight={410} />
                <div className="axil-media-bottom mt-auto">
                  <h4 className="axil-post-title fs-2 hover-line hover-line">
                    <Link href={`/post/${data.slug}`}>
                      <a>{data.title}</a>
                    </Link>
                  </h4>
                  <div className="post-metas">
                    <ul className="list-inline">
                      <li>
                        <span>By</span>
                        <Link href={`/author/`}>
                          <a className="post-author">Korib Hossain</a>
                        </Link>
                      </li>
                      <li>
                        <i className="dot">.</i>2024-06-20
                      </li>
                      <li>
                        <i className="feather icon-activity" />
                        {data.post_views}
                      </li>
                      <li>
                        <i className="feather icon-share-2" />
                        {data.post_share}
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab.Pane>
            )}
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

export default TopArticles;
