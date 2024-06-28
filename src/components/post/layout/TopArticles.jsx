import { Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from 'react-query';
import reactQuery from "../../../config/reactQueryConfig";
import matchCoverageData from "../../../data/fake/MatchCoverage.json";
import { getTop5stories } from "../../../api/api";
import { slugify } from "../../../utils";
import { hasData, shortTxt } from "../../../helpers/helper";

const TopArticles = () => {

    const {
        data: top_stories,
        error,
        isLoading
    } = useQuery('top-articles', getTop5stories, reactQuery);

    return (
        <div className="axil-latest-post">
            <Tab.Container id="widget-post" defaultActiveKey="0">
                <Nav variant="underline">
                    {hasData(top_stories) &&
                        top_stories.slice(0, 3).map((data, index) =>
                            <Nav.Item>
                                <Nav.Link eventKey={index}>
                                    <h4 className="fs-4 m-0 p-0">{shortTxt(data.title, 15)}</h4>
                                    {/* <p className="fs-6 m-0 p-0 lh-sm">{data.venue}</p> */}
                                </Nav.Link>
                            </Nav.Item>
                        )}
                </Nav>
                <Tab.Content>
                    {hasData(top_stories) &&
                        top_stories.map((data, index) =>
                            <Tab.Pane eventKey={index}>
                                <div className="media post-block m-b-xs-20">
                                    <figure className="fig-container">
                                        <Link href="">
                                            <a>
                                                <Image
                                                    src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
                                                    alt={data.title}
                                                    width={440}
                                                    height={440}
                                                    placeholder="blur"
                                                    blurDataURL="/images/placeholder.png"
                                                />
                                            </a>
                                        </Link>
                                    </figure>
                                    <div className="media-body">
                                        <h3 className="axil-post-title hover-line hover-line">
                                            <Link href="">
                                                <a>{data.title}</a>
                                            </Link>
                                        </h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>
                                                    <span>By</span>
                                                    <Link href={`/author/${slugify(data.created_by)}`}>
                                                        <a className="post-author">{data.created_by}</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="dot">.</i>{data.created_at}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>
                        )}
                </Tab.Content>
            </Tab.Container>
            {/* End of .post-block */}
        </div>
    );
};

export default TopArticles;
