import { useQuery } from 'react-query';
import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import TopArticles from "./layout/TopArticles";
import ArticlesList from "./layout/ArticlesList";
import { getTopArticles } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const PostSectionOne = ({ postData }) => {

  const {
    data: articles,
    error,
    isLoading
  } = useQuery('top-articles', getTopArticles, reactQuery);

  SortingByDate(postData);
  return (
    <div className="recent-news-wrapper mt-5 section-gap p-t-xs-15 p-t-sm-20">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-lg-8">
              {hasData(articles) &&
                articles.slice(0, 1).map((data, index) => (
                  <TopArticles data={data} key={index} />
                ))}
            </div>
            <div className="col-lg-4">
              <div className="axil-recent-news">
                <SectionTitle
                  title="Recent News"
                  btnText="See All"
                  pClass="m-b-xs-30"
                />
                <div className="axil-content">
                  {hasData(articles) &&
                    articles.slice(1, 5).map((data, index) => (
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