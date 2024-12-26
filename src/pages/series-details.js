import React from "react";
import HeadMeta from "../components/elements/HeadMeta";
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../components/common/Breadcrumb";
import playerone from "../../public/images/series-details/taskin.webp";



const articles = [
  {
    title: "Akeal Hosein tops T20I bowling rankings; Root goes back on top of Test batters' charts",
    description: "Joe Root has taken back the top spot in the Test batting rankings back from team-mate Harry Brook",
    image: "/images/series-details/390777.6.webp",
  },
  {
    title: "Mahedi, Taskin help Bangladesh defend 129 to claim series",
    description: "A combined bowling effort followed a powerful cameo of 35 off 17 from Shamim Hossain",
    image: "/images/series-details/390508.6.webp",
  },
  {
    title: "Mahmud's heroic last over helps Bangladesh survive Powell's blitz",
    description: "Powell's stunning 60 off 35 nearly took the hosts over the line after they were 38 for 5",
    image: "/images/series-details/390115.6.webp",
  },
  {
    title: "West Indies, Bangladesh eye T20I improvements to close out the year",
    description: "Neither team has had a great year in the format and will look to make amends",
    image: "/images/series-details/393126.6.webp",
  },
  {
    title: "West Indies, Bangladesh eye T20I improvements to close out the year",
    description: "Neither team has had a great year in the format and will look to make amends",
    image: "/images/series-details/393126.6.webp",
  },

];

const results = [
  { match: "3rd T20I (N), Kingstown", date: "Dec 19, 2024", result: "Bangladesh won by 80 runs", score: "BAN 189/7 | WI 109" },
  { match: "2nd T20I (N), Kingstown", date: "Dec 17, 2024", result: "Bangladesh won by 27 runs", score: "BAN 129/7 | WI 102" },
  { match: "1st T20I (N), Kingstown", date: "Dec 15, 2024", result: "Bangladesh won by 7 runs", score: "BAN 147/6 | WI 140" },
  { match: "3rd ODI, Basseterre", date: "Dec 12, 2024", result: "West Indies won by 4 runs", score: "BAN 321/5 | WI 325/6" },
];

const stats = [
  { name: "Mahedi Hasan", image: "/images/series-details/mahedi Hasan.webp", team: "BAN", style: "rhb", impact: 328.03, runs: 37, wickets: 8 },
  { name: "Jaker Ali", image: "/images/series-details/jaker-ali.webp", team: "BAN", style: "rhb", impact: 180.62, runs: 120, wickets: 0 },
  { name: "Taskin Ahmed", image: "/images/series-details/taskin.webp", team: "BAN", style: "rf", impact: 148.45, runs: 0, wickets: 7 },
];

const summaryResults = [
  {
    type: "<span class='font-normal text-gray-400 text-lg uppercase'>Result</span>",
    message: "<span class='text-xl text-black' >2-match <span class='font-bold' >Test</span> series drawn <span class='font-bold' >1-1</span></span> ",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    type: "<span class='font-light text-gray-400 text-lg uppercase'>Winner</span>",
    message: "<span class='text-xl text-black' ><span class='font-bold'>West Indies</span> won the 3-match <span class='font-bold'>ODI</span> series <span class='font-bold'>3-0</span></span>",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    type: " <span class='font-light text-gray-400 text-lg uppercase'>Winner</span>",
    message: "<span class='text-xl text-black' ><span class='font-bold'>West Indies</span> won the 3-match <span class='font-bold'>ODI</span> series <span class='font-bold'>3-0</span></span>",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

const SeriesDetails = () => {
  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <Breadcrumb aPage="Series-Detials" />

      <div className="bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-2">
            {/* Left-Side Results Section */}
            <div className="col-span-1 space-y-2">
              <div className="bg-white p-4 rounded-lg ">
                <h2 className="text-lg font-bold border-b pb-2 mb-4 uppercase">Results</h2>
                <div className="space-y-4">
                  {results.map((item, index) => (
                    <div key={index} className="border-b">
                      <p className="text-lg font-bold">{item.match}</p>
                      <p className="text-lg text-gray-500">{item.date}</p>
                      <p className="text-lg">{item.score}</p>
                      <p className="text-lg font-medium text-blue-600">{item.result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="col-span-2">


              {/* Summary Results Section */}
              <div className="rounded-lg">
                <div className="space-y-6">
                  {summaryResults.map((result, index) => (
                    <div
                      key={index}
                      className={`${result.bgColor} ${result.borderColor} border p-2 rounded-xl h-24`}
                      style={{ width: "100%" }}
                      dangerouslySetInnerHTML={{
                        __html: `<span class='block text-3xl font-bold'>${result.type}</span><p class=' text-sm'>${result.message}</p>` }}/>
                  ))}
                </div>
              </div>
              {/* Top Image Section */}
              <div className="my-6  rounded-lg shadow">
                {articles.slice(0, 1).map((article, index) => (
                  <div key={index} className="rounded-lg overflow-hidden group">
                    {/* Image Section */}
                    <div className="h-auto overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Article Section */}
                    <div className="p-4 bg-black bg-opacity-80 text-center rounded-b-lg">
                      <h2 className="text-white text-2xl lg:text-4xl font-bold">{article.title}</h2>
                      <p className="text-white text-lg lg:text-xl">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>




              {/* Latest Articles Section */}
              <div className=" rounded-lg">
                <div className="grid grid-cols-1 gap-4">
                  {articles.slice(1, 10).map((article, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 flex items-center gap-4 rounded-lg border-1  "
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className=" w-66 h-44  transform transition duration-300 ease-in-out    border  rounded-md transform transition-transform duration-300 hover:scale-110"
                      />
                      <div className="">
                        <h3 className="text-lg font-semibold">{article.title}</h3>
                        <p className="text-lg text-gray-600">{article.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* smart section  */}
            <div className="bg-gray-100">
              <div className="bg-white  rounded-lg shadow-md">
                <h2 className="text-xl font-bold border-b p-4 m-0">Smart Stats</h2>
                <div className="">
                  {stats.map((player, index) => (
                    <div key={index} className="flex space-x-2  border-b">
                      {/* Player Image */}
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-28 h-28 rounded-full border"
                      />

                      {/* Player Details */}
                      <div className="h-auto ">
                        <h3 className="text-base font-semibold">
                          {player.name} <span className="text-gray-500">({player.team}, {player.style})</span>

                        </h3>
                        <div className="cm flex">
                          <div>
                            <p className="text-3xl font-bold  text-gray-900">{player.impact.toFixed(2)}</p>
                          </div>
                          <div className="border-l ml-6">
                            <p className="text-lg font-semibold text-gray-600  pl-2">
                              Runs: {player.runs}
                            </p>
                            <p className="text-lg font-semibold text-gray-600  pl-2">
                              Wickets: {player.wickets}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" p-3 flex justify-center items-center">
                  <a
                    href="#"
                    className=" text-blue-600 text-xl font-bold bg-white hover:underline"
                  >
                    View full list
                  </a>
                </div>
              </div>


              <div className="bg-white  rounded-lg shadow-md mt-4">
                <h2 className="text-xl font-bold border-b p-4">Tournament Fan Ratings</h2>
                <div className="space-y-4">
                  {stats.map((player, index) => (
                    <div key={index} className="flex space-x-2  border-b p-2">
                      {/* Player Image */}
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-28 h-28 rounded-full border"
                      />


                      {/* Player Details */}
                      <div className=" ">
                        <div>
                          <h3 className="text-base font-bold">
                            {player.name} <span className="text-gray-500">({player.team}, {player.style})</span>

                          </h3>
                        </div>
                        <div className=" flex px-2">
                          <div>
                            <p className="text-3xl font-bold  text-gray-900">{player.impact.toFixed(2)}</p>
                          </div>
                          <div className="border-l ml-6">
                            <p className="text-lg text-gray-600  pl-2">
                              Runs: {player.runs}  Wickets: {player.wickets}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" p-3 flex justify-center items-center">
                  <a
                    href="#"
                    className=" text-blue-600 text-xl font-bold bg-white hover:underline"
                  >
                    View full list
                  </a>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow-md mt-4">
                <h2 className="text-xl font-bold border-b p-4">SA vs PAK 2024 Top Wicket Takers</h2>
                <div className="space-y-4">
                  {stats.map((player, index) => (
                    <div key={index} className="flex space-x-2  border-b p-2">
                      {/* Player Image */}
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-28 h-28 rounded-full border"
                      />


                      {/* Player Details */}
                      <div className=" ">
                        <div>
                          <h3 className="text-base font-bold">
                            {player.name} <span className="text-gray-500">({player.team}, {player.style})</span>

                          </h3>
                        </div>
                        <div className=" flex px-2">
                          <div>
                            <p className="text-3xl font-bold  text-gray-900">{player.impact.toFixed(2)}</p>
                          </div>
                          <div className="border-l ml-6">
                            <p className="text-lg text-gray-600  pl-2">
                              Runs: {player.runs}  Wickets: {player.wickets}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" p-3 flex justify-center items-center">
                  <a
                    href="#"
                    className=" text-blue-600 text-xl font-bold bg-white hover:underline"
                  >
                    View full list
                  </a>
                </div>
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
