import Link from "next/link";

const TopHeaderCard = ({ data }) => {
    return (
        <div className="card">
            <Link href={{
                pathname: `/series/${data.event_key	}`,
                query: { series_id: data.league_key	, match_id: data.event_key }
            }}>
                <a>
                    <div className="card-body p-2">
                        <h5 className="fs-5 m-0" style={{
                            whiteSpace: 'nowrap'
                        }}>
                            <strong>{data.event_status}</strong> {data.event_type} . {data.event_stadium}
                        </h5>
                        <div className="row">
                            <div className="col-5">
                                <div className="overflow-hidden">
                                    <img src={data.event_home_team_logo} className="rounded float-start ml-2 mr-2" width={28} height={20} alt={(data.event_home_team.substring(0, 1)).toUpperCase()} />
                                    <strong className="fs-5">{data.event_home_team.substring(0, 3)}</strong>
                                </div>
                                <div className="overflow-hidden">
                                    <img src={data.event_away_team_logo} className="rounded float-start ml-2 mr-2" width={28} height={20} alt={data.event_away_team.substring(0, 1)} />
                                    <strong className="fs-5">{(data.event_away_team.substring(0, 3)).toUpperCase()}</strong>
                                </div>
                            </div>
                            <div className="col-7 align-items-end">
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.event_home_final_result}</span>
                                        { data.event_service_home ? ` & ${data.event_service_home}` : ''}
                                    </h5>
                                </div>
                                <div>
                                    <h5 className="fs-5 m-1 text-right">
                                        <span className="fs-6">{data.event_away_final_result}</span>
                                        { data.event_service_away ? ` & ${data.event_service_away}` : ''}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <strong className="fs-6" style={{
                            whiteSpace: 'nowrap'
                        }}>
                            {data?.event_status_info ? data.event_status_info : "---"}
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