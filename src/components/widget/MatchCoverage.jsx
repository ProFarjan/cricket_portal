import { Tab, Nav } from "react-bootstrap";
import matchCoverageData from "../../data/fake/MatchCoverage.json";
import MatchCoverageView from "./MatchCoverageView";

const MatchCoverage = () => {
    return (
        <div className="post-widget sidebar-post-widget m-b-xs-40">
            <Tab.Container id="widget-post" defaultActiveKey="afg_vs_uga_bridgetown_1">
                <Nav variant="underline">
                    {matchCoverageData.slice(0,6).map((data) =>
                        <Nav.Item>
                            <Nav.Link eventKey={data.slug}>
                                <h4 className="fs-4 m-0 p-0">{data.match}</h4>
                                <p className="fs-6 m-0 p-0 lh-sm">{data.venue}</p>
                            </Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
                <Tab.Content>
                    {matchCoverageData.map((data) =>
                        <Tab.Pane eventKey={data.slug}>
                            <MatchCoverageView data={data} />
                        </Tab.Pane>
                    )}
                </Tab.Content>

            </Tab.Container>
        </div>
    );
};

export default MatchCoverage;
