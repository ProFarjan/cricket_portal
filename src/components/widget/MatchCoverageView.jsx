import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const MatchCoverageView = ({ data }) => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true
    };
    return (
        <>
            <div className="media post-block m-b-xs-30 post-block__mid mt-4">
                <Link href="#">
                    <a className="align-self-center">
                        <Image
                            src={data.featureImg}
                            alt={data.title}
                            width={data.featureImg === null ? 400 : 434}
                            height={data.featureImg === null ? 400 : 244}
                            placeholder="blur"
                            className="rounded"
                            blurDataURL="/images/placeholder.png"
                        />
                    </a>
                </Link>
                <div className="media-body">
                    <h3 className="axil-post-title hover-line hover-line">
                        <Link href="/">
                            <a className="link-underline-opacity-0">{data.title}</a>
                        </Link>
                    </h3>
                    {data.score && (
                        <p className="mid bg-body-tertiary mb-2 fs-5">{data.score}</p>
                    )}
                    <div className="post-metas">
                        {data.list.length && (
                            <ul className="list-inside">
                                {data.list.map((item, index) =>
                                    <li key={index}>
                                        <Link href="/">
                                            {item.label}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {data.others.length &&
                <div>
                    <Slider {...settings}>
                        {data.others.map((item) =>
                            <div>
                                <img src={item.img} class="rounded mx-auto d-block" alt={item.title} />
                                <p className="fs-6 pt-2 lh-sm fw-medium">{item.title}</p>
                            </div>
                        )}
                    </Slider>
                </div>
            }

        </>
    );
};
export default MatchCoverageView; 