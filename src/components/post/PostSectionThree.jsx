import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import ArticlesList from "./layout/ArticlesList";
import { getTopArticles } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const PostSectionThree = ({ postData }) => {

  const {
    data: articles,
    error,
    isLoading
  } = useQuery('top-articles', getTopArticles, reactQuery);

  return (
    <div className="section-gap section-gap-top__with-text trending-stories">
      <div className="container">
        <div className="card p-4">
          <SectionTitle title="Top Stories" btnText="See all" />
          <div className="card-body">
            <div className="row mt-4">
              {hasData(articles) &&
                articles.slice(0, 8).map((data, index) => (
                  <div className="col-lg-6" key={data.id}>
                    <ArticlesList data={data} key={index} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
