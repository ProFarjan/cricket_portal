import Link from "next/link";
import { slugify } from "../../utils";

const TopHeaderCard = ({ data }) => {
    return (
        <div className="card">
            <Link href={{
                pathname: `/series/${slugify(data.series)	}`,
                query: { series_id: slugify(data.series), match_id: data.id }
            }}>
                <a>
                    <div className="card-body p-2">
                        <h5 className="fs-5 m-0" style={{
                            whiteSpace: 'nowrap'
                        }}>
                            <strong style={{
                                color: data.ms == 'live' ? 'red' : 'normal'
                            }}>
                                {data.ms.toUpperCase()}
                            </strong> . {data.matchType.toUpperCase()} . { new Date(data.dateTimeGMT).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()}
                        </h5>
                        <div className="row">
                            <div className="col-5">
                                <div className="overflow-hidden mb-1">
                                    <img src={data.t1img} className="rounded float-start ml-2 mr-2" width={28} height={20} alt={(data.t1).match(/\[([^\]]+)\]/)[1]} />
                                    <strong className="fs-5">{(data.t1).match(/\[([^\]]+)\]/)[1]}</strong>
                                </div>
                                <div className="overflow-hidden mt-1">
                                    <img src={data.t2img} className="rounded float-start ml-2 mr-2" width={28} height={20} alt={data.t2.substring(0, 1)} />
                                    <strong className="fs-5">
                                        {
                                            (data.t2).match(/\[([^\]]+)\]/) ? (data.t2).match(/\[([^\]]+)\]/)[1] : data.t2.substring(0, 3).toUpperCase()
                                        }
                                    </strong>
                                </div>
                            </div>
                            <div className="col-7 align-items-end">
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.t1s}</span>
                                    </h5>
                                </div>
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.t2s}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <strong className="fs-6" style={{
                            whiteSpace: 'nowrap'
                        }}>
                            {data?.status ? data.status : "---"}
                        </strong>
                    </div>
                </a>
            </Link>
            <div className="card-footer fs-5">
                <a style={{ marginRight: "6px" }}>Schedule</a>
                <a style={{ marginRight: "6px" }}>Report</a>
                <a style={{ marginRight: "6px" }}>Series</a>
            </div>
        </div >
    );
};

export default TopHeaderCard;