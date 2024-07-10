import { useQuery } from "react-query";
import ArticlesList from "./layout/ArticlesList";
import SectionTitle from "../elements/SectionTitle";
import { getTopArticles } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const TopArticles = ({ postData, pClass }) => {

    const {
        data: articles,
        error,
        isLoading
    } = useQuery('top-articles', getTopArticles, reactQuery);

    return (
        <div className={`random-posts ${pClass ?? "section-gap"}`}>
            <div className="container">
                <div className="card p-4">
                    <SectionTitle title="Top Articles" btnText="See all" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="axil-content">
                                    {hasData(articles) &&
                                        articles.slice(0, 4).map((data) => (
                                            <ArticlesList data={data} postSizeMd={true} key={data.slug} />
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

export default TopArticles;