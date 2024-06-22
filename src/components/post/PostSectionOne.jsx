import { useQuery } from 'react-query';
import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutOne from "./layout/PostLayoutOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import { getTopArticles } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";

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
              {postData.slice(0, 1).map((data) => (
                <PostLayoutOne data={data} key={data.slug} />
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
                  {postData.slice(1, 5).map((data) => (
                    <PostLayoutTwo data={data} key={data.slug} />
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