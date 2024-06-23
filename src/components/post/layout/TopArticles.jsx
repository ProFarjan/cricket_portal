import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const TopArticles = ({ data }) => {
    return (
        <div className="axil-latest-post">
            <div className="media post-block m-b-xs-20">
                <figure className="fig-container">
                    <Link href="">
                        <a>
                            <Image
                                src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
                                alt={data.title}
                                width={540}
                                height={540}
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
            {/* End of .post-block */}
        </div>
    );
};

export default TopArticles;
