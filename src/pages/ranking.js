import React from 'react';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import GalleryItems from "../components/post/GalleryItems";
import PageSidebar from "../components/common/PageSidebar";

// Ensure the data object is defined with default values to prevent undefined access
const data = {
  test: [
    { position: 1, team: 'Australia', rating: 124 },
    { position: 2, team: 'India', rating: 111 },
    { position: 3, team: 'South Africa', rating: 105 },
    { position: 4, team: 'England', rating: 103 },
    { position: 5, team: 'New Zealand', rating: 100 },
  ],
  odi: [
    { position: 1, team: 'India', rating: 118 },
    { position: 2, team: 'Australia', rating: 113 },
    { position: 3, team: 'Pakistan', rating: 106 },
    { position: 4, team: 'South Africa', rating: 106 },
    { position: 5, team: 'New Zealand', rating: 98 },
  ],
  t20i: [
    { position: 1, team: 'India', rating: 268 },
    { position: 2, team: 'Australia', rating: 259 },
    { position: 3, team: 'England', rating: 255 },
    { position: 4, team: 'West Indies', rating: 251 },
    { position: 5, team: 'New Zealand', rating: 247 },
  ],
  batting: {
    test: [
      { position: 1, player: 'Marnus Labuschagne', rating: 877 },
      { position: 2, player: 'Steve Smith', rating: 844 },
      { position: 3, player: 'Kane Williamson', rating: 804 },
      // Add more players...
    ],
    odi: [
      { position: 1, player: 'Virat Kohli', rating: 884 },
      { position: 2, player: 'Rohit Sharma', rating: 858 },
      { position: 3, player: 'Babar Azam', rating: 851 },
      // Add more players...
    ],
    t20i: [
      { position: 1, player: 'Mohammad Rizwan', rating: 823 },
      { position: 2, player: 'Suryakumar Yadav', rating: 815 },
      { position: 3, player: 'David Malan', rating: 804 },
      // Add more players...
    ]
  },
  bowling: {
    test: [
      { position: 1, player: 'Pat Cummins', rating: 891 },
      { position: 2, player: 'Ravichandran Ashwin', rating: 874 },
      { position: 3, player: 'Kagiso Rabada', rating: 868 },
      // Add more players...
    ],
    odi: [
      { position: 1, player: 'Josh Hazlewood', rating: 794 },
      { position: 2, player: 'Shaheen Shah Afridi', rating: 778 },
      { position: 3, player: 'Mohammad Shami', rating: 768 },
      // Add more players...
    ],
    t20i: [
      { position: 1, player: 'Wanindu Hasaranga', rating: 783 },
      { position: 2, player: 'Rashid Khan', rating: 775 },
      { position: 3, player: 'Shadab Khan', rating: 767 },
      // Add more players...
    ]
  },
  allrounder: {
    test: [
      { position: 1, player: 'Ben Stokes', rating: 732 },
      { position: 2, player: 'Shakib Al Hasan', rating: 718 },
      { position: 3, player: 'Kyle Jamieson', rating: 711 },
      // Add more players...
    ],
    odi: [
      { position: 1, player: 'Hardik Pandya', rating: 635 },
      { position: 2, player: 'Mohammad Nabi', rating: 618 },
      { position: 3, player: 'Chris Woakes', rating: 610 },
      // Add more players...
    ],
    t20i: [
      { position: 1, player: 'Glenn Maxwell', rating: 686 },
      { position: 2, player: 'Shakib Al Hasan', rating: 676 },
      { position: 3, player: 'Marcus Stoinis', rating: 670 },
      // Add more players...
    ]
  }
};

// RankingsCard component to display the data with image background
const RankingsCard = ({ title, data, imageUrl }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md m-2 overflow-hidden">
      {/* Card image */}
      <div className="relative h-20 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute inset-0 bg-blue-950"></div>
        <h3 className="absolute py-6 px-6  text-lg   text-white ">{title}</h3>
      </div>

      <div className="p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-2 py-1">Pos</th>
              <th className="px-2 py-1">Player/Team</th>
              <th className="px-2 py-1">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.position} className="border-t border-gray-700">
                <td className="px-2 py-1 text-center">{item.position}</td>
                <td className="px-2 py-1">{item.player || item.team}</td>
                <td className="px-2 py-1 text-center">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button className="bg-blue-950 hover:bg-blue-600 text-2xl text-white px-4 py-2 rounded">View All</button>
        </div>
      </div>
    </div>
  );
};

// ICCRankings component to render the rankings
const ICCRankings = () => {
  return (
    <div className="p-4 border-rounded-2xl">
      <div className="bg-white-100 min-h-screen">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">ICC Men Rankings</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Batting Rankings */}
            <RankingsCard title="Test Batting Rankings" data={data.batting.test} imageUrl="https://example.com/test-batting-image.jpg" />
            <RankingsCard title="ODI Batting Rankings" data={data.batting.odi} imageUrl="https://example.com/odi-batting-image.jpg" />
            <RankingsCard title="T20I Batting Rankings" data={data.batting.t20i} imageUrl="https://example.com/t20i-batting-image.jpg" />
            
            
            {/* Bowling Rankings */}
            <RankingsCard title="Test Bowling Rankings" data={data.bowling.test} imageUrl="https://example.com/test-bowling-image.jpg" />
            <RankingsCard title="ODI Bowling Rankings" data={data.bowling.odi} imageUrl="https://example.com/odi-bowling-image.jpg" />
            <RankingsCard title="T20I Bowling Rankings" data={data.bowling.t20i} imageUrl="https://example.com/t20i-bowling-image.jpg" />

            {/* Allrounder Rankings */}
            <RankingsCard title="Test Allrounder Rankings" data={data.allrounder.test} imageUrl="https://example.com/test-allrounder-image.jpg" />
            <RankingsCard title="ODI Allrounder Rankings" data={data.allrounder.odi} imageUrl="https://example.com/odi-allrounder-image.jpg" />
            <RankingsCard title="T20I Allrounder Rankings" data={data.allrounder.t20i} imageUrl="https://example.com/t20i-allrounder-image.jpg" />
            
            {/* Team Rankings */}
            <RankingsCard title="Test Team Rankings" data={data.test} imageUrl="https://example.com/test-team-image.jpg" />
            <RankingsCard title="ODI Team Rankings" data={data.odi} imageUrl="https://example.com/odi-team-image.jpg" />
            <RankingsCard title="T20I Team Rankings" data={data.t20i} imageUrl="https://example.com/t20i-team-image.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component that wraps everything
const CricketRankings = () => {
  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ICCRankings />
          </div>
          <div className="col-md-3 p-0">
            <PageSidebar />
          </div>
        </div>
        <div className="row">
          <div className="">
            <GalleryItems />
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default CricketRankings;
