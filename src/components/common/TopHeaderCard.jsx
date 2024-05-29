const TopHeaderCard = ({ data }) => {
    return (
        <div className="card">
            <div className="card-body p-2">
                <h5 className="fs-5 m-0">
                    <strong>{data.type}</strong> {data.title}
                </h5>
                <div className="row">
                    <div className="col-5">
                        <div>
                            <img src={data.party_1.flag_img} className="rounded float-start m-2" width={28} alt={data.party_1.name} />
                            <strong className="fs-5">{data.party_1.short_name}</strong>
                        </div>
                        <div>
                            <img src={data.party_2.flag_img} className="rounded float-start m-2" width={28} alt={data.party_2.name} />
                            <strong className="fs-5">{data.party_2.short_name}</strong>
                        </div>
                    </div>
                    <div className="col-7 align-items-end">
                        <div>
                            <h5 className="fs-4 m-1 text-right">
                                <span className="fs-6">{data.party_1.live_score} </span>
                                {data.party_1.score}
                            </h5>
                        </div>
                        <div>
                            <h5 className="fs-4 m-1 text-right">
                                <span className="fs-6">{data.party_2.live_score} </span>
                                {data.party_2.score}
                            </h5>
                        </div>
                    </div>
                </div>
                <strong className="fs-6">South Africa need 16 runs in 66 balls</strong>
            </div>
            <div class="card-footer fs-5">
                <a style={{ marginRight: "6px" }}>Schedule</a>
                <a style={{ marginRight: "6px" }}>Report</a>
                <a style={{ marginRight: "6px" }}>Videos</a>
                <a style={{ marginRight: "6px" }}>Series</a>
            </div>
        </div>
    );
};

export default TopHeaderCard;