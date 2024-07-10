import { Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from 'react-query';
import reactQuery from "../../../config/reactQueryConfig";
import { getTop5stories } from "../../../api/api";
import { hasData, shortTxt } from "../../../helpers/helper";

const TopArticles = () => {

    const {
        data: stories,
        error,
        isLoading
    } = useQuery('top-five-stories', getTop5stories, reactQuery);

    return (
        <div className="axil-latest-post">
            <h3 className={`fs-2 p-0 m-0 mb-4`}>Top Stories</h3>
            {hasData(stories) &&
                stories.slice(0, 1).map((data, index) =>
                    <div className="media post-block m-b-xs-5 mt-4">
                        <figure className="fig-container">
                            <Link href="">
                                <a className="m-0">
                                    <Image
                                        src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
                                        alt={data.title}
                                        width={430}
                                        height={430}
                                        placeholder="blur"
                                        blurDataURL="/images/placeholder.png"
                                    />
                                </a>
                            </Link>
                        </figure>
                        <div className="media post-block position-absolute mb-0 p-4" style={{ bottom: '32px',width: '54%'  }}>
                            <div className="media-body">
                                <h3 className="axil-post-title hover-line hover-line color-white">
                                    <Link href="">
                                        <a>{data.title}</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default TopArticles;
