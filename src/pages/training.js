import HeadMeta from "../components/elements/HeadMeta";
import HeaderOne from "../components/header/HeaderOne";
import PageSidebar from "../components/common/PageSidebar";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../components/common/Breadcrumb";
import { useQuery } from "react-query";
import { getTraining } from "../api/api";
import reactQuery from "../config/reactQueryConfig";
import { useState } from "react";
import VideoPopup from "../components/videos/VideoPopup";

const TrainingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const handlePopupOpen = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentVideoUrl("");
  };

  const {
    data: training,
    error: training_error,
    isLoading: training_isloading
  } = useQuery("get-training", getTraining, reactQuery);

  if (training_isloading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <HeadMeta metaTitle="Training" />
      <HeaderOne />
      <Breadcrumb aPage="Training" />
      <div className="container ">
        <div className="row">
          <div className="col-md-9 p-2">
            <div className="px-4 md:px-20">
              {/* Banner Section */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row gap-5">
                  {/* title  */}
                  <div>
                    <h1 className="text-3xl mt-12">The Cricket Online</h1>
                    <p className="text-green-800 font-extrabold text-4xl mt-[-12px]">
                      TRAINING
                    </p>
                    <p className="font-extrabold text-black text-5xl">
                      Coaching experienced <br /> cricket coaches through our
                      website
                    </p>
                    <p className="text-1xl leading-10 text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <br /> Molestias quae mollitia ducimus voluptate,
                    </p>
                    <div>
                      <button className="bg-green-600 font-semibold text-white p-2 w-52 rounded-3xl">
                        Explore more
                      </button>
                    </div>
                  </div>
                  {/* image   */}
                  <div className=" md:block hidden">
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                      <div className="row-start-2 row-span-2 rounded-md">
                        <img
                          className="h-[150px]  object-cover ml-32  md:ml-[148px] mt-[45px]"
                          src="/images/cricket/cricket.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="row-end-3 row-span-2 rounded-md">
                        <img
                          className="h-56 w-full object-cover"
                          src="/images/cricket/1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="row-start-1 row-end-4 rounded-md">
                        <img
                          className="mt-24 h-96 md:w-[150px] w-[150px] object-cover"
                          src="/images/cricket/images.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 mr-6 gap-4">
                      <div className="rounded-md">
                        <img
                          className="w-[120px] h-[180px] object-cover"
                          src="/images/cricket/5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="rounded-md">
                        <img
                          className="w-[230px] h-[120px] object-cover"
                          src="/images/cricket/4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards Section */}
              <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {training?.data?.map((item) => (
                    <div
                      className="shadow-md shadow-slate-500 rounded-t-md"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        className="w-full h-72 rounded-t-lg"
                        alt={item.title}
                      />
                      <p className="text-gray-700  p-3">{item.title}</p>
                      <div className="p-3 mt-[-25px] ">
                        <button
                          onClick={() =>
                            handlePopupOpen(item.videoUrl || item.image)
                          }
                          className="bg-rose-600 font-semibold mb-4 text-white cursor-pointer  p-2 w-40 rounded-full"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <PageSidebar />
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isPopupOpen && (
        <>
          {/* Black Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>

          {/* Video Popup */}
          <VideoPopup
            isOpen={isPopupOpen}
            onClose={handlePopupClose}
            videoUrl={currentVideoUrl}
          />
        </>
      )}

      <FooterOne />
    </>
  );
};

export default TrainingPage;
