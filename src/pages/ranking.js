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
            { position: 1,image:"/images/Flag/pic.png" ,player: 'Harry Brook', rating: 898, flag: 'https://flagcdn.com/gb.svg' },
            { position: 2, player: 'Joe Root', rating: 897, flag: 'https://flagcdn.com/gb.svg' },
            { position: 3, player: 'Kane Williamson', rating: 812, flag: 'https://flagcdn.com/nz.svg' },
        ],
        odi: [
            { position: 1,image:"/images/Flag/pic.png" , player: 'Babar Azam', rating: 800, flag: 'https://flagcdn.com/pk.svg' },
            { position: 2, player: 'Rohit Sharma', rating: 765, flag: 'https://flagcdn.com/in.svg' },
            { position: 3, player: 'Shubman Gill', rating: 763, flag: 'https://flagcdn.com/in.svg' },
        ],
        t20i: [
            { position: 1,image:"/images/Flag/pic.png" , player: 'Travis Head', rating: 855, flag: 'https://flagcdn.com/au.svg' },
            { position: 2, player: 'Phil Salt', rating: 829, flag: 'https://flagcdn.com/gb.svg' },
            { position: 3, player: 'Tilak Varma', rating: 806, flag: 'https://flagcdn.com/in.svg' },
        ],
    },
    bowling: {
        test: [
            { position: 1, player: 'Pat Cummins', rating: 891, flag: 'https://flagcdn.com/au.svg' },
            { position: 2, player: 'Ravichandran Ashwin', rating: 874, flag: 'https://flagcdn.com/in.svg' },
            { position: 3, player: 'Kagiso Rabada', rating: 868, flag: 'https://flagcdn.com/za.svg' },
        ],
        odi: [
            { position: 1, player: 'Josh Hazlewood', rating: 794, flag: 'https://flagcdn.com/au.svg' },
            { position: 2, player: 'Shaheen Shah Afridi', rating: 778, flag: 'https://flagcdn.com/pk.svg' },
            { position: 3, player: 'Mohammad Shami', rating: 768, flag: 'https://flagcdn.com/in.svg' },
        ],
        t20i: [
            { position: 1, player: 'Hasaranga', rating: 783, flag: 'https://flagcdn.com/lk.svg' },
            { position: 2, player: 'Rashid Khan', rating: 775, flag: 'https://flagcdn.com/af.svg' },
            { position: 3, player: 'Shadab Khan', rating: 767, flag: 'https://flagcdn.com/pk.svg' },
        ],
    },
    allrounder: {
        test: [
            { position: 1, player: 'Ben Stokes', rating: 732, flag: 'https://flagcdn.com/gb.svg' },
            { position: 2, player: 'Shakib Al Hasan', rating: 718, flag: 'https://flagcdn.com/bd.svg' },
            { position: 3, player: 'Kyle Jamieson', rating: 711, flag: 'https://flagcdn.com/nz.svg' },
        ],
        odi: [
            { position: 1, player: 'Hardik Pandya', rating: 635, flag: 'https://flagcdn.com/in.svg' },
            { position: 2, player: 'Mohammad Nabi', rating: 618, flag: 'https://flagcdn.com/af.svg' },
            { position: 3, player: 'Chris Woakes', rating: 610, flag: 'https://flagcdn.com/gb.svg' },
        ],
        t20i: [
            { position: 1, player: 'Glenn Maxwell', rating: 686, flag: 'https://flagcdn.com/au.svg' },
            { position: 2, player: 'Shakib Al Hasan', rating: 676, flag: 'https://flagcdn.com/bd.svg' },
            { position: 3, player: 'Marcus Stoinis', rating: 670, flag: 'https://flagcdn.com/au.svg' },
        ],
    },
};

// Sorting data to ensure Pos 1 is at the top
const sortData = (data) => {
    return [...data].sort((a, b) => a.position - b.position);
};

const RankingsCard = ({ title, data, imageUrl }) => {
    const sortedData = sortData(data); // Sort the data by position
    return (
        <div className="bg-white border m-2 flex flex-col">
            <div
                className="relative h-20"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="absolute inset-0 bg-blue-950"></div>
                <h3 className="absolute py-6 px-14 text-xl text-white">{title}</h3>
            </div>
            <div className="p-2 text-lg">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="px-2 py-2 text-center">Pos</th>
                            <th className="px-2 py-2">Team/Player</th>
                            <th className="px-2 py-2 text-right">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item) => (
                            <tr
                                className={
                                    item.position === 1
                                        ? 'text-black font-extrabold text-3xl py-4 border-b-2 border-gray-200'
                                        : 'bg-white text-gray-800 border-t-2'
                                }
                                key={item.position}
                            >
                                <td className="p-2 py-3 text-center font-semibold">{item.position}</td>
                                <td
                                    className={
                                        item.position === 1
                                            ? 'px-2 py-2 flex my-8 text-2xl font-medium'
                                            : 'px-2 flex py-3 text-xl font-medium'
                                    }
                                >
                                    {item.flag && (
                                        <img src={item.flag} alt="flag" className="w-8 h-6 mr-2" />
                                    )}
                                    {item.team || item.player}
                                </td>
                                <td className="px-2 py-3 text-right font-semibold">{item.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-auto">
                <button className="bg-gray-100 w-full p-2 hover:text-white hover:bg-blue-950 font-semibold md:text-2xl duration-300">
                    View All
                </button>
            </div>
        </div>
    );
};


const ICCRankings = () => {
    return (
        <div className="p-3">
            <div className="bg-white-100 min-h-screen">
                <div className="container mx-auto p-8 bg-white shadow-md">
                    <h1 className="text-3xl  font-bold ml-4 ">ICC Men Team Rankings</h1>
                    <div className="grid h-[300px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard  title="Test-Team Rankings" data={data?.test} imageUrl="https://example.com/test-team-image.jpg" />
                        <RankingsCard title="ODI-Team Rankings" data={data?.odi} imageUrl="https://example.com/odi-team-image.jpg" />
                        <RankingsCard title="T20I-Team Rankings" data={data?.t20i} imageUrl="https://example.com/t20i-team-image.jpg" />
                    </div>
                    <h1 className="text-3xl font-bold my-40 ml-4 mb-4">ICC Men Batting Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test-Batting Rankings" data={data?.batting?.test} imageUrl="https://example.com/test-batting-image.jpg" />
                        <RankingsCard title="ODI-Batting Rankings" data={data?.batting?.odi} imageUrl="https://example.com/odi-batting-image.jpg" />
                        <RankingsCard title="T20I-Batting Rankings" data={data?.batting?.t20i} imageUrl="https://example.com/t20i-batting-image.jpg" />
                    </div>
                    <h1 className="text-3xl font-bold my-20 ml-4 mb-4">ICC Men Bowling Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test-Bowling Rankings" data={data?.bowling?.test} imageUrl="https://example.com/test-bowling-image.jpg" />
                        <RankingsCard title="ODI-Bowling Rankings" data={data?.bowling?.odi} imageUrl="https://example.com/odi-bowling-image.jpg" />
                        <RankingsCard title="T20I-Bowling Rankings" data={data?.bowling?.t20i} imageUrl="https://example.com/t20i-bowling-image.jpg" />
                    </div>
                    <h1 className="text-3xl font-bold my-20 ml-4 mb-4">ICC Men Allrounder Rankings</h1>
                    <div className="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                        <RankingsCard title="Test-Allrounder Rankings" data={data?.allrounder?.test} imageUrl="https://example.com/test-allrounder-image.jpg" />
                        <RankingsCard title="ODI-Allrounder Rankings" data={data?.allrounder?.odi} imageUrl="https://example.com/odi-allrounder-image.jpg" />
                        <RankingsCard title="T20I-Allrounder Rankings" data={data?.allrounder?.t20i} imageUrl="https://example.com/t20i-allrounder-image.jpg" />
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