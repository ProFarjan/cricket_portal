import React, { useEffect, useState } from 'react'
import HeadMeta from '../components/elements/HeadMeta'
import HeaderOne from '../components/header/HeaderOne'
import PageSidebar from '../components/common/PageSidebar'
import GalleryItems from '../components/post/GalleryItems'
import FooterOne from '../components/footer/FooterOne'
import Breadcrumb from '../components/common/Breadcrumb'
import BreadcrumbBanner from '../components/common/BreadcrumbBanner'

const teams = () => {
  const [countries, setCountries] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const mappedCountries = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
        })).sort((a, b) => a.name.localeCompare(b.name));;
        setCountries(mappedCountries);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); 
  console.log(countries)

  if (loading) {
    return <p>Loading countries...</p>; // Display loading message while fetching data
  }
  return (
    <>
    <HeadMeta metaTitle="Teams" />
      <HeaderOne />
      <Breadcrumb aPage="Our Teams" />
      <BreadcrumbBanner pageTitle="Our Teams" />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-4 bg-amber-800">
             {countries.map((country, index) => (
             <div key={index} className="border p-4 rounded-md shadow">
             <img
               src={country.flag}
               alt={`${country.name} flag`}
               className="w-full h-32 object-cover mb-2"
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
        <div className="row">
          <div className="">
            <GalleryItems />
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  )
}

export default teams