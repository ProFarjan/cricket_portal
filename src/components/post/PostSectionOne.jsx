import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import MatchCoverage from "../widget/MatchCoverage";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionOne = ({ postData }) => {
  SortingByDate(postData);
  return (
    <div className="recent-news-wrapper section-gap bg-grey-light-three p-t-xs-15 p-t-sm-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fs-2 mb-4">Match Coverage</h5>
                <MatchCoverage />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="axil-recent-news">
                  <SectionTitle
                    title="Recent News"
                    btnText="ALL RECENT NEWS"
                    pClass="m-b-xs-30"
                  />
                  <div className="axil-content">
                    {postData.slice(1, 4).map((data) => (
                      <PostLayoutTwo data={data} key={data.slug} />
                    ))}
                  </div>
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