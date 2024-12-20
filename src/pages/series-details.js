import React from "react";
import HeadMeta from "../components/elements/HeadMeta";
import { Breadcrumb } from "react-bootstrap";
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";

const SeriesDetails = () => {
  const news = [
    {
      title: "Mahmud's heroic last over helps Bangladesh survive Powell's blitz",
      description:
        "Powell's stunning 60 off 35 nearly took the hosts over the line after they were 38 for 5.",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "West Indies, Bangladesh eye T20I improvements to close out the year",
      description:
        "Neither team has had a great year in the format and will look to end on a high.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <Breadcrumb aPage="Series" />

      <div className="bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="col-span-3">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">Fixtures</h2>
                <div className="text-sm">
                  <p>
                    <strong>Result:</strong> 2-match Test series drawn 1-1
                  </p>
                  <p>
                    <strong>Winner:</strong> West Indies won the 3-match ODI series
                    3-0
                  </p>
                  <p>
                    <strong>Series Status:</strong> Bangladesh leads the 3-match
                    T20I series 2-0
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">
                  Upcoming Match
                </h2>
                <p className="text-sm">BAN vs WI</p>
                <p className="text-sm">Starts: Dec 20, 6:00 AM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <img
                  src="https://via.placeholder.com/800x400"
                  alt="Top News"
                  className="rounded-lg mb-4"
                />
                <h2 className="text-lg font-bold">
                  Mahedi, Taskin help Bangladesh defend 129 to claim series
                </h2>
                <p className="text-sm text-gray-600">
                  A combined bowling effort followed a powerful cameo of 35 off
                  17 from Shamim Hossain.
                </p>
              </div>

              {/* Render News Cards */}
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt="News Image"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-md font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">
                  Smart Stats
                </h2>
                <ul className="text-sm">
                  <li className="mb-2">
                    <strong>Mahedi Hasan (BAN):</strong> 252.45 Impact Points
                  </li>
                  <li className="mb-2">
                    <strong>Shamim Hossain (BAN):</strong> 142.02 Impact Points
                  </li>
                  <li>
                    <strong>Akeal Hosein (WI):</strong> 137.82 Impact Points
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">
                  Tournament Fan Ratings
                </h2>
                <ul className="text-sm">
                  <li className="mb-2">1. Justin Greaves (WI) - 8.3</li>
                  <li className="mb-2">2. Nahid Rana (BAN) - 8.1</li>
                  <li>3. Mehidy Hasan (BAN) - 7.5</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">
                  Top Wicket Takers
                </h2>
                <ul className="text-sm">
                  <li className="mb-2">1. Taskin Ahmed (BAN) - 11 Wickets</li>
                  <li className="mb-2">2. Jayden Seales (WI) - 9 Wickets</li>
                  <li>3. Kemar Roach (WI) - 8 Wickets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </>
  );
};

export default SeriesDetails;
