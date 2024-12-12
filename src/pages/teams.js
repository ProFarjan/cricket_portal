import React from "react";
import HeadMeta from "../components/elements/HeadMeta";
import HeaderOne from "../components/header/HeaderOne";
import PageSidebar from "../components/common/PageSidebar";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";

const Teams = () => {
  // Define predefined cricket-playing countries for men's and women's teams
  const mensTeams = [
    { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "England", flag: "https://flagcdn.com/w320/gb-eng.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
  ];

  const womensTeams = [
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "England", flag: "https://flagcdn.com/w320/gb-eng.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "West Indies", flag: "https://flagcdn.com/w320/jm.png" }, // Example flag
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
  ];
  const BBLTeams = [
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "England", flag: "https://flagcdn.com/w320/gb-eng.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "West Indies", flag: "https://flagcdn.com/w320/jm.png" }, // Example flag
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
  ];

  const BPLTeams = [
    { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "England", flag: "https://flagcdn.com/w320/gb-eng.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
  ];

  return (
    <>
      <HeadMeta metaTitle="Teams" />
      <HeaderOne />
      <Breadcrumb aPage="Cricket Teams" />
      {/* <BreadcrumbBanner pageTitle="Cricket Teams" /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            {/* <h3 className='text-2xl'>Popular Men's International Teams</h3> */}
            {/* <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {mensTeams.map((country, index) => (
                <div key={index} className="flex justify-center items-center h-40 gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-20 object-cover mb-2 border rounded"
                  />
                  <p className="text-center text-lg font-medium">{country.name}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-5 text-2xl">Popular Women's International Teams</h3>
            <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {womensTeams.map((country, index) => (
                <div key={index} className="flex justify-center items-center h-40 gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-20 object-cover mb-2 border rounded"
                  />
                  <p className="text-center text-lg font-medium">{country.name}</p>
                </div>
              ))}
            </div>


            <h3 className="mt-5 text-2xl">BBL Teams</h3>
            <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {BBLTeams.map((country, index) => (
                <div key={index} className="flex justify-center items-center h-40 gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-20 object-cover mb-2 border rounded"
                  />
                  <p className="text-center text-lg font-medium">{country.name}</p>
                </div>
              ))}
            </div>


            <h3 className="mt-5 text-2xl">BPL Teams</h3>
            <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {BPLTeams.map((country, index) => (
                <div key={index} className="flex justify-center items-center h-40 gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-20 object-cover mb-2 border rounded"
                  />
                  <p className="text-center text-lg font-medium">{country.name}</p>
                </div>
              ))}
            </div> */}
            <div class="px-4 py-6">
              <h1 class="text-4xl font-extrabold py-4 text-center text-gray-800">
                Cricket Teams
              </h1>
              <h2 class="text-2xl font-semibold py-2 text-center text-gray-600">
                Popular Men’s International Teams
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {BPLTeams.map((country, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="mb-4 w-24 h-24 object-cover rounded-full border-2 border-gray-200"
                    />
                    <p className="font-semibold text-gray-700 text-center text-sm">
                      {country.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div class="px-4 py-6">
              <h1 class="text-4xl font-extrabold py-4 text-center text-gray-800">
                Cricket Teams
              </h1>
              <h2 class="text-2xl font-semibold py-2 text-center text-gray-600">
                WBBL Teams
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mensTeams.map((country, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300"
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-36 object-cover rounded-t-lg"
                    />
                    <div className="flex-1 flex items-center justify-center p-2">
                      <p className="font-semibold text-gray-800 text-center text-sm">
                        {country.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h1 class="text-4xl font-bold py-2 mt-10 text-center">
              Cricket Teams
            </h1>
            <h2 class="text-2xl font-semibold py-2 text-center">ILT20 Teams</h2>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {womensTeams.map((country, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-card gap-5"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-24"
                  />
                  <p className="font-medium text-lg">{country.name}</p>
                </div>
              ))}
            </div>

            <div class="px-4 py-6">
              <h1 class="text-4xl font-extrabold py-4 text-center text-gray-800">
                Cricket Teams
              </h1>
              <h2 class="text-2xl font-semibold py-2 text-center text-gray-600">
                PSL Teams
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {BPLTeams.map((country, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center border rounded-md shadow-lg bg-white hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-28 object-contain bg-gray-100 rounded-t-md"
                    />
                    <div class="w-full p-3 flex items-center justify-center">
                      <p className="font-medium text-gray-800 text-center text-sm">
                        {country.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="px-4 py-6">
              <h1 class="text-4xl font-extrabold py-4 text-center text-gray-800">
                Cricket Teams
              </h1>
              <h2 class="text-2xl font-semibold py-2 text-center text-gray-600">
                WBBL Teams
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mensTeams.map((country, index) => (
                  <div
                    key={index}
                    className="border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300 overflow-hidden"
                  >
                    <div className="w-full h-40">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center p-2 bg-white">
                      <p className="font-semibold text-gray-800 text-center text-sm">
                        {country.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="px-4 py-6">
              <h1 class="text-4xl font-extrabold py-4 text-center text-gray-800">
                Cricket Teams
              </h1>
              <h2 class="text-2xl font-semibold py-2 text-center text-gray-600">
                WBBL Teams
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {mensTeams.map((country, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-40 object-contain border-b"
                    />
                    <div className="flex items-center justify-center py-2">
                      <p className="font-medium text-gray-700 text-center">
                        {country.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <PageSidebar />
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default Teams;
