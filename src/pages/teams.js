import React from "react";
import HeadMeta from "../components/elements/HeadMeta";
import HeaderOne from "../components/header/HeaderOne";
import PageSidebar from "../components/common/PageSidebar";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../components/common/Breadcrumb";

const Teams = () => {
  // Define predefined cricket-playing countries for men's and women's teams
  const teams = {
    mensTeams: [
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
    ],
    womensTeams: [
      { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
      { name: "England", flag: "https://flagcdn.com/w320/gb-eng.png" },
      { name: "India", flag: "https://flagcdn.com/w320/in.png" },
      { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
      { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
      { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
      { name: "West Indies", flag: "https://flagcdn.com/w320/jm.png" },
      { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
      { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
    ],
  };

  const renderTeams = (title, teamList) => (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold py-2 text-center text-gray-600">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {teamList.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="mb-4 w-24 h-24 object-cover rounded-full border-2 border-gray-200"
            />
            <p className="font-semibold text-gray-700 text-center text-xl">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <HeadMeta metaTitle="Teams" />
      <HeaderOne />
      <Breadcrumb aPage="Cricket Teams" />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            <div className="px-4 py-6">
              <h1 className="text-4xl font-extrabold py-4 text-center text-gray-800">Cricket Teams</h1>
              {renderTeams("Popular Men's International Teams", teams.mensTeams)}
              {renderTeams("Popular Women's International Teams", teams.womensTeams)}
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
