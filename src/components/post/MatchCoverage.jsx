import { useQuery } from 'react-query';
import SectionTitle from "../elements/SectionTitle";
import TopArticles from "./layout/TopArticles";
import ArticlesList from "./layout/ArticlesList";
import { getTop5Metches, getTop5stories } from "../../api/api";
import { top5Matches } from "../../config/reactQueryConfig";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const MatchCoverage = () => {

  // removed start
  const {
    data: stories,
    error: error_section_1,
    isLoading: isLoading_1
  } = useQuery('top-five-stories', getTop5stories, reactQuery);
  // removed end
  const {
    data: matches,
    error,
    isLoading
  } = useQuery('top-five-matches', getTop5Metches, top5Matches);

  return (
    <div className="recent-news-wrapper mt-3 section-gap p-t-xs-15">
      <div className="container">
        <div className="card p-4">
          <div className="row">
            <TopArticles matches={matches} />
            <div className="col-lg-6">
              <div className="axil-recent-news">
                <SectionTitle
                  title="Recent Matches"
                  btnText="See All"
                  pClass="mb-1"
                />
                <div className="axil-content m-t-xs-10">
                  {hasData(stories) &&
                    stories.slice(0, 4).map((data, index) => (
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

export default MatchCoverage;