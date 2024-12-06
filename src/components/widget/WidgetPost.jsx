import { Tab, Nav } from "react-bootstrap";
import PostVideoTwo from "../post/layout/PostVideoTwo";
import RecentNews from "../news/RecentNews";
import { useQuery } from "react-query";
import { getRecentNews } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import PopularNews from "../news/PopularNews";
import Comments from "../news/Comments";

const WidgetPost = ({ dataPost }) => {
  const { data: news, error: news_error, isLoading: news_isloading } = useQuery(
    "get-news",
    getRecentNews,
    reactQuery
  );

  return (
    <div className="post-widget sidebar-post-widget m-b-xs-20 mt-3 p-t-xs-20">
      <div className="card p-4">
        <Tab.Container id="widget-post" defaultActiveKey="recent">
          <Nav variant="pills" className="row no-gutters">
            <Nav.Item className="col">
              <Nav.Link eventKey="recent">RECENT</Nav.Link>
            </Nav.Item>

            <Nav.Item className="col">
              <Nav.Link eventKey="popular">POPULAR</Nav.Link>
            </Nav.Item>
            <Nav.Item className="col">
              <Nav.Link eventKey="comments">COMMENTS</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="recent">
              {dataPost
                .slice(0, 4)
                .map(data =>
                  <PostVideoTwo data={data} pClass="" key={data.slug} />
                )}
              <RecentNews news={news} news_isloading={news_isloading} />
            </Tab.Pane>
            <Tab.Pane eventKey="popular">
              {dataPost
                .slice(0, 4)
                .map(data =>
                  <PostVideoTwo data={data} pClass="" key={data.slug} />
                )}
              <PopularNews news={news} news_isloading={news_isloading} />
            </Tab.Pane>
            <Tab.Pane eventKey="comments">
              {dataPost
                .slice(0, 4)
                .map(data =>
                  <PostVideoTwo data={data} pClass="" key={data.slug} />
                )}
              <Comments news={news} news_isloading={news_isloading} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default WidgetPost;
