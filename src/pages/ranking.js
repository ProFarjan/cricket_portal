import React from 'react';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import GalleryItems from "../components/post/GalleryItems";
import PageSidebar from "../components/common/PageSidebar";
import Breadcrumb from '../components/common/Breadcrumb';

const data = {
    test: [
        { position: 1, team: 'Australia', rating: 124, flag: 'https://flagcdn.com/au.svg' },
        { position: 2, team: 'India', rating: 111, flag: 'https://flagcdn.com/in.svg' },
        { position: 3, team: 'South Africa', rating: 105, flag: 'https://flagcdn.com/za.svg' },
        { position: 4, team: 'England', rating: 103, flag: 'https://flagcdn.com/gb.svg' },
        { position: 5, team: 'New Zealand', rating: 100, flag: 'https://flagcdn.com/nz.svg' },
    ],
    odi: [
        { position: 1, team: 'India', rating: 118, flag: 'https://flagcdn.com/in.svg' },
        { position: 2, team: 'Australia', rating: 113, flag: 'https://flagcdn.com/au.svg' },
        { position: 3, team: 'Pakistan', rating: 106, flag: 'https://flagcdn.com/pk.svg' },
        { position: 4, team: 'South Africa', rating: 106, flag: 'https://flagcdn.com/za.svg' },
        { position: 5, team: 'New Zealand', rating: 98, flag: 'https://flagcdn.com/nz.svg' },
    ],
    t20i: [
        { position: 1, team: 'India', rating: 268, flag: 'https://flagcdn.com/in.svg' },
        { position: 2, team: 'Australia', rating: 259, flag: 'https://flagcdn.com/au.svg' },
        { position: 3, team: 'England', rating: 255, flag: 'https://flagcdn.com/gb.svg' },
        { position: 4, team: 'West Indies', rating: 251, flag: 'https://flagcdn.com/jm.svg' },
        { position: 5, team: 'New Zealand', rating: 247, flag: 'https://flagcdn.com/nz.svg' },
    ],
    batting: {
        test: [
            { position: 1, player: 'Marnus Labuschagne', rating: 877 },
            { position: 2, player: 'Steve Smith', rating: 844 },
            { position: 3, player: 'Kane Williamson', rating: 804 },
        ],
        odi: [
            { position: 1, player: 'Virat Kohli', rating: 884 },
            { position: 2, player: 'Rohit Sharma', rating: 858 },
            { position: 3, player: 'Babar Azam', rating: 851 },
        ],
        t20i: [
            { position: 1, player: 'Mohammad Rizwan', rating: 823 },
            { position: 2, player: 'Suryakumar Yadav', rating: 815 },
            { position: 3, player: 'David Malan', rating: 804 },
        ],
    },
    bowling: {
        test: [
            { position: 1, player: 'Pat Cummins', rating: 891 },
            { position: 2, player: 'Ravichandran Ashwin', rating: 874 },
            { position: 3, player: 'Kagiso Rabada', rating: 868 },
        ],
        odi: [
            { position: 1, player: 'Josh Hazlewood', rating: 794 },
            { position: 2, player: 'Shaheen Shah Afridi', rating: 778 },
            { position: 3, player: 'Mohammad Shami', rating: 768 },
        ],
        t20i: [
            { position: 1, player: 'Wanindu Hasaranga', rating: 783 },
            { position: 2, player: 'Rashid Khan', rating: 775 },
            { position: 3, player: 'Shadab Khan', rating: 767 },
        ],
    },
    allrounder: {
        test: [
            { position: 1, player: 'Ben Stokes', rating: 732 },
            { position: 2, player: 'Shakib Al Hasan', rating: 718 },
            { position: 3, player: 'Kyle Jamieson', rating: 711 },
        ],
        odi: [
            { position: 1, player: 'Hardik Pandya', rating: 635 },
            { position: 2, player: 'Mohammad Nabi', rating: 618 },
            { position: 3, player: 'Chris Woakes', rating: 610 },
        ],
        t20i: [
            { position: 1, player: 'Glenn Maxwell', rating: 686 },
            { position: 2, player: 'Shakib Al Hasan', rating: 676 },
            { position: 3, player: 'Marcus Stoinis', rating: 670 },
        ],
    },
};

const RankingsCard = ({ title, data, imageUrl }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md m-2 flex flex-col h-full">
            <div
                className="relative h-20 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className=" absolute  inset-0 bg-blue-950"></div>
                <h3 className="absolute py-6 px-24 text-xl text-white">{title}</h3>
            </div>
            <div className="p-2 text-xl ">
                <table className="table-auto w-full  ">
                    <thead>
                        <tr>
                            <th className="px-1 py-1 text-center">Pos</th>
                            <th className="px-1 py-1">Team/players</th>
                            <th className="pl-8 py-1 text-right">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr className="text-2xl" key={item.position}>
                                <td className="px- py-1 text-center">{item.position}</td>
                                <td className="px-1 py-1 flex items-center">
                                    {item.flag && <img src={item.flag} alt={item.team} className="w-6 h-6 mr-2" />}
                                    {item.team || item.player}
                                </td>
                                <td className="pl-8 py-1 text-right">{item.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center bg-blue-950 hover:bg-blue-900 border-t p-2 mt-auto">
                <button className="text-white md:text-2xl duration-300">View All</button>
            </div>
        </div>
    );
};

const ICCRankings = () => {
    return (
        <div className="p-3">
            <div className="bg-white-100 min-h-screen">
                <div className="container mx-auto p-8 bg-white rounded-2xl shadow-md">
                    <h1 className="text-3xl mb-0 font-bold ml-4">ICC Men Team Rankings</h1>
                    <div className="grid h-[300px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test Team Rankings" data={data?.test} imageUrl="https://example.com/test-team-image.jpg" />
                        <RankingsCard title="ODI Team Rankings" data={data?.odi} imageUrl="https://example.com/odi-team-image.jpg" />
                        <RankingsCard title="T20I Team Rankings" data={data?.t20i} imageUrl="https://example.com/t20i-team-image.jpg" />
                    </div>
                    <h1 className="text-3xl mb-0 font-bold mt-12 ml-4">ICC Men Batting Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test Batting Rankings" data={data?.batting?.test} imageUrl="https://example.com/test-batting-image.jpg" />
                        <RankingsCard title="ODI Batting Rankings" data={data?.batting?.odi} imageUrl="https://example.com/odi-batting-image.jpg" />
                        <RankingsCard title="T20I Batting Rankings" data={data?.batting?.t20i} imageUrl="https://example.com/t20i-batting-image.jpg" />
                    </div>
                    <h1 className="text-3xl mb-0 font-bold mt-12 ml-4">ICC Men Bowling Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test Bowling Rankings" data={data?.bowling?.test} imageUrl="https://example.com/test-bowling-image.jpg" />
                        <RankingsCard title="ODI Bowling Rankings" data={data?.bowling?.odi} imageUrl="https://example.com/odi-bowling-image.jpg" />
                        <RankingsCard title="T20I Bowling Rankings" data={data?.bowling?.t20i} imageUrl="https://example.com/t20i-bowling-image.jpg" />
                    </div>
                    <h1 className="text-3xl mb-0 font-bold mt-12 ml-4">ICC Men Allrounder Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test Allrounder Rankings" data={data?.allrounder?.test} imageUrl="https://example.com/test-allrounder-image.jpg" />
                        <RankingsCard title="ODI Allrounder Rankings" data={data?.allrounder?.odi} imageUrl="https://example.com/odi-allrounder-image.jpg" />
                        <RankingsCard title="T20I Allrounder Rankings" data={data?.allrounder?.t20i} imageUrl="https://example.com/t20i-allrounder-image.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CricketRankings = () => {
    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <Breadcrumb aPage="Ranking" />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <ICCRankings />
                    </div>
                    <div className="col-md-3 p-0">
                        <PageSidebar />
                    </div>
                </div>
                <GalleryItems />
            </div>
            <FooterOne />
        </>
    );
};

export default CricketRankings;
