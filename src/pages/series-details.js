import React from "react";
import HeadMeta from "../components/elements/HeadMeta";
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../components/common/Breadcrumb";



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
    title: "Debutant Jangoo, Carty help West Indies sweep ODI series 3-0",
    description: "Four Bangladesh batters also scored fifties, with Mahmudullah and Jaker adding an unbeaten 150 for the sixth wicket, but in vain",
    image: "/images/series-details/393307.6.webp",
  },
];

const results = [
  { match: "3rd T20I (N), Kingstown", date: "Dec 19, 2024", result: "Bangladesh won by 80 runs", score: "BAN 189/7 | WI 109" },
  { match: "2nd T20I (N), Kingstown", date: "Dec 17, 2024", result: "Bangladesh won by 27 runs", score: "BAN 129/7 | WI 102" },
  { match: "1st T20I (N), Kingstown", date: "Dec 15, 2024", result: "Bangladesh won by 7 runs", score: "BAN 147/6 | WI 140" },
  { match: "3rd ODI, Basseterre", date: "Dec 12, 2024", result: "West Indies won by 4 runs", score: "BAN 321/5 | WI 325/6" },
];

const stats = [
  { name: "Mahedi Hasan", team: "BAN", style: "rhb", impact: 328.03, runs: 37, wickets: 8 },
  { name: "Jaker Ali", team: "BAN", style: "rhb", impact: 180.62, runs: 120, wickets: 0 },
  { name: "Taskin Ahmed", team: "BAN", style: "rf", impact: 148.45, runs: 0, wickets: 7 },
];

const summaryResults = [
  {
    type: "<span class='font-light'>Result</span>",
    message: "2-match Test series drawn 1-1",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    type: "<span class='font-light'>Winner</span>",
    message: "<span class='font-bold'>West Indies</span> won the 3-match ODI series 3-0",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    type: " <span class='font-light'>Winner</span>",
    message: "<span class='font-bold'>Bangladesh</span> won the 3-match T20I series 3-0",
    bgColor: "bg-blue-100",
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            {/* Left-Side Results Section */}
            <div className="col-span-1 space-y-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold border-b pb-2 mb-4">Results</h2>
                <div className="space-y-4">
                  {results.map((item, index) => (
                    <div key={index} className="border-b pb-2">
                      <p className="text-lg font-bold">{item.match}</p>
                      <p className="text-lg text-gray-500">{item.date}</p>
                      <p className="text-lg">{item.score}</p>
                      <p className="text-lg font-medium text-green-600">{item.result}</p>
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
                      className={`${result.bgColor} ${result.borderColor} border p-2 rounded-md`}
                      style={{ minHeight: "50px", width: "100%" }}
                      dangerouslySetInnerHTML={{
                        __html: `
          <span class='block text-sm font-medium'>${result.type}</span>
          <p class=' text-sm'>${result.message}</p>
        ` }}
                    />
                  ))}
                </div>
              </div>
              {/* Top Image Section */}
              <div className="bg-white  my-6 p-4 rounded-lg shadow">
                {articles.slice(0, 1).map((article, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden h-96 flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 text-center text-white px-4 ">
                      <h2 className="text-2xl text-white lg:text-4xl font-bold mb-4">{article.title}</h2>
                      <p className="text-white text-lg lg:text-xl">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Latest Articles Section */}
              <div className="bg-white mt-6 p-4 rounded-lg shadow">
                <div className="grid grid-cols-1 gap-4">
                  {articles.map((article, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 flex rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-48 max-h-32  object-cover border mt-4 ml-4 rounded-md"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                        <p className="text-lg text-gray-600">{article.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold border-b pb-2 mb-4">Smart Stats</h2>
              <div className="space-y-4">
                {stats.map((player, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={`/images/players/${player.name.toLowerCase().replace(/\s/g, "_")}.jpg`}
                        alt={player.name}
                        className="w-16 h-16 rounded-full border"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{player.name} ({player.team}, {player.style})</h3>
                      <p className="text-gray-500">Impact: {player.impact.toFixed(2)}</p>
                      <p className="text-sm">Runs: {player.runs} | Wickets: {player.wickets}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold border-b pb-2 mb-4">Smart Stats</h2>
              <div className="space-y-4">
                {stats.map((player, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={`/images/players/${player.name.toLowerCase().replace(/\s/g, "_")}.jpg`}
                        alt={player.name}
                        className="w-16 h-16 rounded-full border"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{player.name} ({player.team}, {player.style})</h3>
                      <p className="text-gray-500">Impact: {player.impact.toFixed(2)}</p>
                      <p className="text-sm">Runs: {player.runs} | Wickets: {player.wickets}</p>
                    </div>
                  </div>
                ))}
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
