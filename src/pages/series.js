import React from 'react';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import GalleryItems from "../components/post/GalleryItems";
import PageSidebar from "../components/common/PageSidebar";
import { useQuery } from 'react-query';
import reactQuery from '../config/reactQueryConfig';
import { getSeries } from '../api/api';


const series = () => {
    const match = [
        {
            "match": "Bangladesh vs South Africa - 1st Test",
            "start_date": "17 nov 2024",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "India vs Australia - 2nd Test",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "New Zealand vs Sri Lanka - 1st ODI",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "West Indies vs Afghanistan - 2nd ODI",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "South Africa vs Zimbabwe - 3rd ODI",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "India vs Bangladesh - 1st T20",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "Australia vs England - 2nd T20",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "Pakistan vs Sri Lanka - 3rd T20",
            "start_date": "17 nov 202Z",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "West Indies vs New Zealand - 1st Test",
            "start_date": "17 nov 2024",
            "end_date": "10 oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        }
    ]

    // const {
    //     data: series,
    //     error: menu_error,
    //     isLoading: menu_isloading
    // } = useQuery('get-series', getSeries, reactQuery);
    console.log(series)
    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 p-2">
                        <h1 className='font-font-bold text-2xl'>Cricket Fixtures - Domestic & International Cricket Series</h1>
                        <div className='flex justify-center'>

                            <div className="flex flex-col space-y-4 p-4 max-w-sm border rounded shadow">

                                <div>
                                    <h2 className="text-lg font-semibold border-b pb-2">Filter</h2>
                                    <ul className="mt-2">
                                        <li className="py-1 px-2  text-white rounded cursor-pointer">Current Cricket</li>
                                        <li className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">Future Series / Tournaments</li>
                                        <li className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">Recently Concluded</li>
                                    </ul>
                                </div>


                                <div>
                                    <h2 className="text-lg font-semibold border-b pb-2">Download Schedule</h2>
                                    <ul className="mt-2">
                                        <li>
                                            <a href="#" className="text-blue-500 hover:underline">Download ICCs Future tours programme (Men)</a>
                                        </li>
                                        <li className="mt-1">
                                            <a href="#" className="text-blue-500 hover:underline">Download ICCs Future tours programme (Women)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                {
                                    match?.map((item) => (
                                        <div key={item.id} className='flex justify-items-center justify-between items-center border-b-2'>
                                            <div className='flex p-2 ' >
                                                <div className='flex '>
                                                    <img className='rounded-full w-10 h-10' src="/images/Bangladesh.webp" alt=""></img>
                                                    <img className='rounded-full w-10 h-10' src="/images/westindies.webp" alt=""></img>

                                                </div>

                                                <div className='flex gap-1 items-center '>
                                                    <p className='text-xl'>{item.match}</p>
                                                    <p className='px-4 text-xl'>{item.start_date}</p>
                                                    <p className='text-xl'>{item.end_date}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3'>
                                                <p className='hover:underline cursor-pointer text-xl'>Fixtures & Results</p>
                                                <p className='hover:underline cursor-pointer text-xl'>Squads</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>


                        </div>
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

export default series;