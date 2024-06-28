import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";
import { getTop5stories } from "../../api/api";
import { hasData } from "../../helpers/helper";
import reactQuery from "../../config/reactQueryConfig";

const PostSectionTwo = ({ postData }) => {

  const storyPost = postData.filter(post => post.story === true);

  const {
    data: top_stories,
    error,
    isLoading
  } = useQuery('top-articles', getTop5stories, reactQuery);

  return (
    <div className="section-gap section-gap-top__with-text top-stories">
      <div className="container">
        <div className="card p-4">
          <SectionTitle title="Top Stories" btnText="All Top Stories" />
          <div className="row">
            <div className="col-lg-8">
              {hasData(top_stories) &&
                top_stories.slice(0, 1).map((data) => (
                  <PostLayoutThree data={data} postSizeLg={true} key={data.id} />
                ))}
            </div>
            <div className="col-lg-4">
              {hasData(top_stories) &&
                top_stories.slice(1, 3).map((data) => (
                  <PostLayoutThree data={data} key={data.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
