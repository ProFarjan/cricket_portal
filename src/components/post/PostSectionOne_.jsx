import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import MatchCoverage from "../widget/MatchCoverage";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import mustWatch from "./../../data/fake/mustWatch.json"
import Slider from "react-slick";

const PostSectionOne = ({ postData }) => {
  SortingByDate(postData);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="recent-news-wrapper section-gap bg-grey-light-three p-t-xs-15 p-t-sm-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fs-2 mb-4">Match Coverage</h5>
                <MatchCoverage />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <SectionTitle
                  title="Must Watch"
                  btnText="See all"
                  pClass="m-b-xs-5"
                  fSize="fs-4"
                />
              </div>
              <div className="card-body">
                <Slider {...settings}>
                  {mustWatch.map((item) =>
                    <div>
                      <img src={item.img} class="rounded mx-auto d-block" alt={item.title} />
                      <p className="fs-5 m-0 pl-2 pt-0 pb-0 fw-medium">{item.title}</p>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <SectionTitle
                  title="Number Crunching"
                  pClass="m-b-xs-5"
                  fSize="fs-4"
                />
              </div>
              <div className="card-body">
                <Slider {...settings}>
                  {mustWatch.map((item) =>
                    <div>
                      <img src={item.img} class="rounded mx-auto d-block" alt={item.title} />
                    </div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSectionOne;