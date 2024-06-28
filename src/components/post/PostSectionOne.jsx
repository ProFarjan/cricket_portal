import { useQuery } from 'react-query';
import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import TopArticles from "./layout/TopArticles";
import ArticlesList from "./layout/ArticlesList";
import { getTop5stories } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const PostSectionOne = ({ postData }) => {

  const {
    data: stories,
    error,
    isLoading
  } = useQuery('top-five-stories', getTop5stories, reactQuery);

  SortingByDate(postData);
  return (
    <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
      <div className="container">
        <div className="card p-4">
          <div className="row">
            <div className="col-lg-7">
              <TopArticles />
            </div>
            <div className="col-lg-5">
              <div className="axil-recent-news">
                <SectionTitle
                  title="&nbsp;"
                  btnText="See All"
                  pClass="mb-4"
                />
                <div className="axil-content">
                  {hasData(stories) &&
                    stories.slice(1, 6).map((data, index) => (
                      <ArticlesList data={data} key={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSectionOne;