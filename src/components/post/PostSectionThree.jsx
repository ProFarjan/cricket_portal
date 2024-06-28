import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import PostLayoutTwo from "./layout/PostLayoutTwo";
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
        <div className="card">
          <div className="card-header">
            <SectionTitle title="Update News" btnText="See all" />
          </div>
          <div className="card-body">
            <div className="row">
              {hasData(articles) &&
                articles.slice(0, 6).map((data) => (
                  <div className="col-lg-6" key={data.id}>
                    <PostLayoutTwo data={data} />
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
