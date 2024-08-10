import Link from "next/link";

const TopHeaderCard = ({ data }) => {
    return (
        <div className="card">
            <Link href={{
                pathname: `/series/${data.slug}`,
                query: { series_id: data.series_data_id, match_id: data.match_data_id }
            }}>
                <a>
                    <div className="card-body p-2">
                        <h5 className="fs-5 m-0">
                            <strong>{data.type}</strong> {data.title}
                        </h5>
                        <div className="row">
                            <div className="col-5">
                                <div className="overflow-hidden">
                                    <img src={data.team_1.flag_img} className="rounded float-start m-2" width={28} height={20} alt={data.team_1.name} />
                                    <strong className="fs-5">{data.team_1.short_name}</strong>
                                </div>
                                <div className="overflow-hidden">
                                    <img src={data.team_2.flag_img} className="rounded float-start m-2" width={28} height={20} alt={data.team_2.name} />
                                    <strong className="fs-5">{data.team_2.short_name}</strong>
                                </div>
                            </div>
                            <div className="col-7 align-items-end">
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.team_1.live_score}</span>
                                        {data.team_1.score}
                                    </h5>
                                </div>
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.team_2.live_score}</span>
                                        {data.team_2.score}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <strong className="fs-6">
                            {data?.event_message ? data.event_message.substring(0, 46) : "NO DATA FOUND"}
                        </strong>
                    </div>
                </a>
            </Link>
            <div className="card-footer fs-5">
                <a style={{ marginRight: "6px" }}>Schedule</a>
                <a style={{ marginRight: "6px" }}>Report</a>
                {/* <a style={{ marginRight: "6px" }}>Videos</a> */}
                <a style={{ marginRight: "6px" }}>Series</a>
            </div>
        </div >
    );
};

export default TopHeaderCard;