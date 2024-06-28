import { Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from 'react-query';
import reactQuery from "../../../config/reactQueryConfig";
import { getTop5stories } from "../../../api/api";
import { hasData, shortTxt } from "../../../helpers/helper";

const TopArticles = () => {

    const {
        data: top_stories,
        error,
        isLoading
    } = useQuery('top-articles', getTop5stories, reactQuery);

    return (
        <div className="axil-latest-post">
            <h3 className={`fs-2 p-0 m-0 mb-4`}>Recent Match</h3>
            <Tab.Container id="widget-post" className="mb-3" defaultActiveKey="0">
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
                                <div className="media post-block m-b-xs-5 mt-4">
                                    <figure className="fig-container">
                                        <Link href="">
                                            <a className="m-0">
                                                <Image
                                                    src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
                                                    alt={data.title}
                                                    width={410}
                                                    height={410}
                                                    placeholder="blur"
                                                    blurDataURL="/images/placeholder.png"
                                                />
                                            </a>
                                        </Link>
                                    </figure>
                                    <div className="media post-block position-absolute mb-0 p-4" style={{bottom: 0}}>
                                        <div className="media-body">
                                            <h3 className="axil-post-title hover-line hover-line color-white">
                                                <Link href="">
                                                    <a>{data.title}</a>
                                                </Link>
                                            </h3>
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
