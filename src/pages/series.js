import React, { useEffect, useState } from 'react';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import GalleryItems from "../components/post/GalleryItems";
import Breadcrumb from '../components/common/Breadcrumb';


const series = () => {
    const match = [
        {
            "match": "Bangladesh vs South Africa - 1st Test",
            "start_date": "17 Nov 2024",
            "end_date": "10 Oct 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "India vs Australia - 2nd Test",
            "start_date": "22 Nov 2024",
            "end_date": "3 Jan 2025",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "23 Nov 2024",
            "end_date": "18 Dec 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "23 Nov 2024",
            "end_date": "18 Dec 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "23 Nov 2024",
            "end_date": "18 Dec 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "23 Nov 2024",
            "end_date": "18 Dec 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
        {
            "match": "England vs Pakistan - 3rd Test",
            "start_date": "23 Nov 2024",
            "end_date": "18 Dec 2024",
            "details": {
                "fixtures_results": "link_to_fixtures_results",
                "squads": "link_to_squads"
            }
        },
    ];

    const [mydata, setmyData] = useState([]);

    useEffect(() => {
        fetch('https://api.cricapi.com/v1/series?apikey=0933caa7-70e1-43ff-988d-ca2d8e88a1cf&offset=0') // Replace with your API URL
            .then(response => response.json()) // Parse the JSON response
            .then(data => setmyData(data.data))   // Log the data to the console
            .catch(error => console.error('Error:', error)); // Log any errors
    }, [])

    console.log(mydata)

    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <Breadcrumb aPage="Series" />
           
                {/* <div>{

                    mydata.map((item, idx) => (
                        <div key="idx">
                            <p>{item?.name}</p>
                        </div>
                    ))
                } </div> */}

            <div className="container mx-auto mt-6">
                <div className="flex flex-wrap">
                    {/* Sidebar */}
                    <div className="md:w-1/4 p-3 bg-gray-100 rounded-md shadow-md">
                        <h1 className="ml-8 text-2xl text-black border-b font-semibold ">Filter</h1>
                        <ul className=" rounded-md shadow-md text-2xl text-black ">
                            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Current Cricket</li>
                            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Future Series / Tournaments</li>
                            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Recently Concluded</li>
                        </ul>
                        <h2 className="ml-6 font-semibold border-b mt-10 pt-4 pb-2 text-2xl text-black  m">Download Schedule</h2>
                        <ul className="mt-4 text-blue-500 space-y-2 rounded-md shadow-md ">
                            <li>
                                <a href="#" className=" hover:underline">Download ICC Future Tours Programme (Men)</a>
                            </li>
                            <li>
                                <a href="#" className=" hover:underline">Download ICC Future Tours Programme (Women)</a>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4 p-2 ">
                        <h1 className="text-2xl font-semibold mb-4 ml-4">International Tours</h1>
                        <div className="bg-white text-xl rounded-md shadow-md p-4">

                            {mydata.map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
                                    <div className="flex gap-2">
                                        <div className="flex mt-4">
                                            {/* Placeholder for team logos */}
                                            <img className="w-10 h-10 rounded-full" src="/images/Flag/Bangladesh.webp" alt="Team 1" />
                                            <img className="w-10 h-10 rounded-full" src="/images/Flag/SA.webp" alt="Team 2" />
                                        </div>
                                        <div className='flex gap-4'>
                                            <button className="text-xl mt-2 text-black font-semibold">{item?.name}</button>
                                            <p className=" text-lg my-4">{item.startDate} to  {item.endDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <a  className="text-blue-500 hover:underline">Fixtures & Results</a>
                                        <a  className="text-blue-500 hover:underline">Squads</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <GalleryItems /> */}
            </div>

            <FooterOne />
        </>
    );
};

export default series;
