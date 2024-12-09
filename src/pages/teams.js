import React from 'react';
import HeadMeta from '../components/elements/HeadMeta';
import HeaderOne from '../components/header/HeaderOne';
import PageSidebar from '../components/common/PageSidebar';
import FooterOne from '../components/footer/FooterOne';
import Breadcrumb from '../components/common/Breadcrumb';
import BreadcrumbBanner from '../components/common/BreadcrumbBanner';

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

  return (
    <>
      <HeadMeta metaTitle="Teams" />
      <HeaderOne />
      <Breadcrumb aPage="Cricket Teams" />
      <BreadcrumbBanner pageTitle="Cricket Teams" />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            <h3 className='text-2xl'>Popular Men's International Teams</h3>
            <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
