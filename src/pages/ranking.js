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

const sortData = (data) => {
    return [...data].sort((a, b) => a.position - b.position);
};

const RankingsCard = ({ title, data, imageUrl }) => {
    const sortedData = sortData(data);
    return (
        <div className="bg-white border m-2  flex flex-col">
            <div
                className="relative h-20"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="absolute inset-0 bg-blue-950 ">
                    <h3 className="absolute py-6 px-14 text-xl font-medium text-white">
                    {title}
                </h3>
                </div>
                
            </div>
            <div className="p-2 text-lg">
                <div className="flex flex-col">
                    {/* Header Row */}
                    <div className="flex items-center justify-between  py-2 ">
                        <span className="text-center font-bold text-gray-600 w-1/6">Pos</span>
                        <span className="text-left font-bold text-gray-600 w-2/3">Team</span>
                        <span className="text-right font-bold text-gray-600 w-1/6">Rating</span>
                    </div>

                    {sortedData.map((item) => (
                        <div
                            key={item.position}
                            className={
                                `flex items-start justify-between py-3 border-t-2 border-gray-100   ${
                                    item.position === 1
                                        ? '  h-32 bg-gray-100 items-center font-extrabold text-black'
                                        : 'bg-white text-gray-800'
                                }`
                            }
                        >
                            <span
                                className={
                                    `text-center font-semibold w-1/6 ${
                                        item.position === 1
                                            ? 'text-4xl'
                                            : 'text-lg font-semibold border-r-2 border-gray-200'
                                    }`
                                }
                            >
                                {item.position}
                            </span>
                            <div className="flex items-center w-2/3">
                                {item.flag && (
                                    <img
                                        src={item.flag}
                                        alt="flag"
                                        className="w-10 h-8 mr-2"
                                    />
                                )}
                                <span
                                    className={
                                        item.position === 1
                                            ? 'text-4xl font-medium'
                                            : 'text-xl font-semibold '
                                    }
                                >
                                    {item.team || item.player}
                                </span>
                            </div>
                            <span  className={
                                        item.position === 1
                                            ? 'text-4xl font-medium '
                                            : 'text-xl font-semibold '
                                    }
                                    >
                                {item.rating}
                            </span>
                        </div>
                    ))}
                </div>
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
        <div className="p-4 mt-4">
            <div className="bg-white-100 min-h-screen">
                <div className="container mx-auto p-8 bg-white shadow-md rounded-2xl">
                    <h1 className="text-3xl font-bold ml-4">ICC Men Team Rankings</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test-Team Rankings" data={data?.test} imageUrl="https://example.com/test-team-image.jpg" />
                        <RankingsCard title="ODI-Team Rankings" data={data?.odi} imageUrl="https://example.com/odi-team-image.jpg" />
                        <RankingsCard title="T20I-Team Rankings" data={data?.t20i} imageUrl="https://example.com/t20i-team-image.jpg" />
                    </div>

                    <h1 className="text-3xl font-bold my-24 ml-4 mb-4">ICC Men Batting Rankings</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test-Batting Rankings" data={data?.batting?.test} imageUrl="https://example.com/test-batting-image.jpg" />
                        <RankingsCard title="ODI-Batting Rankings" data={data?.batting?.odi} imageUrl="https://example.com/odi-batting-image.jpg" />
                        <RankingsCard title="T20I-Batting Rankings" data={data?.batting?.t20i} imageUrl="https://example.com/t20i-batting-image.jpg" />
                    </div>

                    <h1 className="text-3xl font-bold my-20 ml-4 mb-4">ICC Men Bowling Rankings</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <RankingsCard title="Test-Bowling Rankings" data={data?.bowling?.test} imageUrl="https://example.com/test-bowling-image.jpg" />
                        <RankingsCard title="ODI-Bowling Rankings" data={data?.bowling?.odi} imageUrl="https://example.com/odi-bowling-image.jpg" />
                        <RankingsCard title="T20I-Bowling Rankings" data={data?.bowling?.t20i} imageUrl="https://example.com/t20i-bowling-image.jpg" />
                    </div>

                    <h1 className="text-3xl font-bold my-20 ml-4 mb-4">ICC Men Allrounder Rankings</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
