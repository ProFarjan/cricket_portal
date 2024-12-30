import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import ScoreCard from "./ScoreCard";
import LiveScore from "./LiveScore";
import NewsCard from "./NewsCard";
import TableCard from "./TableCard";
import Summary from "./Summary";
import Commentary from "./Commentary";

const Table = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until mounted
  }

  return (
    <div>
      <Tab.Container defaultActiveKey="Scorecard">
        <Nav className="custom-nav bg-white p-2 border-b border-r border-l">
          <div className="flex text-[13px]">
            <Nav.Item>
              <Nav.Link eventKey="Live">Live</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Summary">Summary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Scorecard">Scorecard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Commentary">Commentary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Performance">Performance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Squads">Squads</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Photo">Photo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Overs">Overs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Table">Table</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="News">News</Nav.Link>
            </Nav.Item>
          </div>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Live">
            <LiveScore />
          </Tab.Pane>
          <Tab.Pane eventKey="Summary">
            <Summary />
          </Tab.Pane>
          <Tab.Pane eventKey="Scorecard">
            <ScoreCard />
          </Tab.Pane>
          <Tab.Pane eventKey="Commentary">
            <Commentary />
          </Tab.Pane>
          <Tab.Pane eventKey="Performance">
            <h1>Performance</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="Squads">
            <h1>Squads</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="Photo">
            <h1>Photo</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="Overs">
            <h1>Overs</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="Table">
            <TableCard />
          </Tab.Pane>
          <Tab.Pane eventKey="News">
            <NewsCard />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Table;
