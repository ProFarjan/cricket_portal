import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import StorieItem from "./layout/StorieItem";
import { getTop5stories } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const TopStories = () => {

  const {
    data: stories,
    error,
    isLoading
  } = useQuery('top-articles', getTop5stories, reactQuery);

  return (
    <div className="section-gap section-gap-top__with-text trending-stories">
      <div className="container">
        <div className="card p-4">
          <SectionTitle title="Top Stories" btnText="See all" />
          <div className="card-body">
            <div className="row">
              {hasData(stories) &&
                stories.slice(0, 8).map((data, index) => (
                  <div className="col-lg-6" key={data.id}>
                    <StorieItem data={data} key={index} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
