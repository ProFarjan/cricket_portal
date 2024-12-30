import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from '../components/common/Breadcrumb';

const Series = () => {
  const [mydata, setmyData] = useState([]);

  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/series?apikey=${process.env.NEXT_PUBLIC_CRICAPI_KEY}&offset=0`)
      .then(response => response.json())
      .then(data => setmyData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <Breadcrumb aPage="Series" />
      <div className="container mx-auto mt-6">
        <div className="flex flex-wrap">
          {/* Sidebar */}
          <div className="md:w-1/4 p-3 bg-gray-100 rounded-md shadow-md">
            <h1 className="ml-8 text-2xl text-black border-b font-semibold">Filter</h1>
            <ul className="rounded-md shadow-md text-2xl text-black">
              <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Current Cricket</li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Future Series / Tournaments</li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Recently Concluded</li>
            </ul>
            <h2 className="ml-6 font-semibold border-b mt-10 pt-4 pb-2 text-2xl text-black">Download Schedule</h2>
            <ul className="mt-4 text-blue-500 space-y-2 rounded-md shadow-md">
              <li>
                <a href="#" className="hover:underline">Download ICC Future Tours Programme (Men)</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Download ICC Future Tours Programme (Women)</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 p-2">
            <h1 className="text-2xl font-semibold mb-4 ml-4">International Tours</h1>
            <div className="bg-white text-xl rounded-md shadow-md p-4">
              {mydata.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex gap-2">
                    <div className="flex mt-4">
                      <Image className="w-10 h-10 rounded-full" src="/images/Flag/Bangladesh.webp" alt="Team 1" width={40} height={40} />
                      <Image className="w-10 h-10 rounded-full" src="/images/Flag/SA.webp" alt="Team 2" width={40} height={40} />
                    </div>
                    <div className="flex gap-4">
                      <button className="text-xl mt-2 text-black font-semibold">{item?.name}</button>
                      <p className="text-lg my-4">{item.startDate} to {item.endDate}</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a className="text-blue-500 hover:underline">Fixtures & Results</a>
                    <a className="text-blue-500 hover:underline">Squads</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default Series;
