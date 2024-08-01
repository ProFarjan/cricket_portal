import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import ExclusiveItem from "./layout/ExclusiveItem";
import { getExclusiveItems } from "../../api/api";
import { hasData } from "../../helpers/helper";
import reactQuery from "../../config/reactQueryConfig";

const PostSectionTwo = ({ postData }) => {

  const storyPost = postData.filter(post => post.story === true);

  const {
    data: exclusives,
    error,
    isLoading
  } = useQuery('exclusive-item', getExclusiveItems, reactQuery);

  return (
    <div className="section-gap section-gap-top__with-text top-stories">
      <div className="container">
        <div className="card p-4">
          <SectionTitle title="Exclusive" btnText="See All" />
          <div className="row mt-4">
            <div className="col-lg-8">
              {exclusives?.exclusive_story && (
                <ExclusiveItem data={exclusives?.exclusive_story} pClass={`m-b-xs-0`} postSizeLg={true} />
              )}
            </div>
            <div className="col-lg-4">
              {exclusives?.exclusive_interview && (
                <ExclusiveItem data={exclusives?.exclusive_interview} type="Exclusive Interview" />
              )}

              {exclusives?.exclusive_expert_opinion && (
                <ExclusiveItem data={exclusives?.exclusive_expert_opinion} type="Exclusive Expert Opinion" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
