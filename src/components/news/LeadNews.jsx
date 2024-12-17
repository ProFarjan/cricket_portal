import React from "react";
import { getLeadNEws } from "../../api/api";
import { useQuery } from "react-query";
import reactQuery from "../../config/reactQueryConfig";

const LeadNews = () => {
  const { data: lead, error: lead_error, isLoading: lead_isloading } = useQuery(
    "get-lead",
    getLeadNEws,
    reactQuery
  );

  if (lead_isloading) return <div>Loading...</div>;
  if (lead_error) return <div>Error loading data.</div>;
  
  return (
    <div>
      {lead?.map((item) => (
        <div key={item.id} className="md:flex  h-full">
          {/* Left Side: Background and Title */}
          <div
            className="md:w-[65%] bg-cover md:px-28 px-14 "
            style={{
              background: "linear-gradient(to right, black, black 20%, rgba(0, 0, 255, 0.9))",
              
            }}
          >
            {item?.series ? (
                    <p className="md:mt-10 md:py-0 py-10 text-yellow-300">{item.series.long_name}</p>
              ) : (
                <p>No user information available.</p>
              )}
            <h1 className="text-white leading-[50px] text-6xl md:mt-[-12px] mt-[-40px] ">
              {item.title}
            </h1>
            <div className="text-white">
    
              {item?.user_info ? (
                <>
                  <div className="flex gap-4">  
                    <img
                      className="w-10 bg-white rounded-full h-10 outline outline-offset-2 outline-gray-500 "
                      src={`${process.env.NEXT_PUBLIC_IMGPATH}${item.user_info.profile_pic}`}
                      alt={item.title}
                    />
                    <p className="text-white">{item.user_info.name}</p>
                </div>
                </>

              ) : (
                <p>No user information available.</p>
              )}
            </div>
          </div>

          {/* Right Side: Image and Additional Info */}
          <div className="relative md:w-[35%]">
                <img
                  className="h-full w-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_IMGPATH}${item?.image}`}
                  alt={item.title}
                />
                {/* Left Gradient Blur Effect */}
                
          </div>



        </div>
      ))}
    </div>
  );
};

export default LeadNews;
