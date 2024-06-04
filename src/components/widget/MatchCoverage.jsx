import { Tab, Nav } from "react-bootstrap";
import matchCoverageData from "../../data/fake/MatchCoverage.json";

const MatchCoverage = () => {
    return (
        <div className="post-widget sidebar-post-widget m-b-xs-40">
            <Tab.Container id="widget-post" defaultActiveKey="recent">
                <Nav variant="pills" className="row no-gutters">
                    {matchCoverageData.map((data) =>
                        <Nav.Item className="col">
                            <Nav.Link eventKey={data.slug}>
                                <p className="fs-4 m-0 p-0">{data.match}</p>
                            </Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>

                <Tab.Content>
                    {matchCoverageData.map((data) =>
                        <Tab.Pane eventKey={data.slug}>
                            {data.slug}
                        </Tab.Pane>
                    )}
                </Tab.Content>

            </Tab.Container>
        </div>
    );
};

export default MatchCoverage;
