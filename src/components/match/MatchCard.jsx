import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MatchCard = ({ matchdata }) => {
  
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);

  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  // 

  return (
    <div className="flex">
      <div className="w-[70%] border-r px-4">
        <div className="flex items-center justify-between">
          <div className="flex  gap-3">
            <img
              className="w-12 h-12"
              src={matchdata?.teamInfo?.[0].img || 'No pic'}
              alt=""
            />
            <p className="text-2xl mt-2 text-black font-bold">{matchdata?.teams?.[0] || 'No team available'}</p> 
          </div>
          <div className="flex gap-2 p-4 mt-5">
            
            <p>
            {matchdata?.score?.slice(0,1).map((s, index) => (
                <div key={index} className="flex">
                    <p className="text-2xl">({s.o} ov)</p>
                    <p className="text-black font-bold text-2xl">
                        {s.r}/{s.w} 
                    </p>
                </div>
            ))}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[-90px]">
          <div className="flex gap-3">
            <img className="w-12 h-12" src={matchdata?.teamInfo?.[1].img || 'No pic'} alt="" />
            <p className="text-2xl mt-2 text-black font-bold">{matchdata?.teams?.[1] || 'No team available'}</p>

          </div>
          <div className="flex gap-2 p-4 mt-4">
            
            <p>
            {matchdata?.score?.slice(1,2).map((s, index) => (
                <div key={index} className="flex">
                    <p className="text-2xl">({s.o} ov)</p>
                    <p className="text-black font-bold text-2xl">
                        {s.r}/{s.w} 
                    </p>
                </div>
            ))}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex items-center"><h1 className="text-xl ">No Data available</h1></div>
      {/* <div className="w-[30%] h-72">
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="flex justify-between h-32 px-2 ">
                <div className="text-left p-3">
                  <p className="text-xl uppercase ">Player of The Match</p>
                  <p className="mt-[-32px] ">
                    <span className="underline text-2xl ">Saim Ayub,</span>
                    <span className="text-xl ">PAK</span>
                  </p>
                  <p className="text-xl mt-[-28px]  ">
                    101 (94), 1/34 & 2 <span>catches</span>
                  </p>
                </div>
                <div className="w-24 h-24 mt-3">
                  <img
                    className="rounded-full border"
                    src="/images/Flag/aub.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between border-t h-32 px-2">
                <div className="text-left p-3 ">
                  <p className="text-xl uppercase ">Player of The Series</p>
                  <p className="mt-[-32px] ">
                    <span className="underline text-2xl ">Saim Ayub,</span>
                    <span className="text-xl ">PAK</span>
                  </p>
                  <p className="text-xl mt-[-28px]  ">235 runs, 2 wkts</p>
                </div>
                <div className="w-24 h-24 mt-3">
                  <img
                    className="rounded-full border"
                    src="/images/Flag/aub.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="flex justify-between h-32 px-2 ">
                <div className="text-left p-3 ">
                  <p className="text-xl uppercase ">Player of The Series</p>
                  <p className="mt-[-32px] ">
                    <span className="underline text-2xl ">Saim Ayub,</span>
                    <span className="text-xl ">PAK</span>
                  </p>
                  <p className="text-xl mt-[-28px]  ">235 runs, 2 wkts</p>
                </div>
                <div className="w-24 h-24 mt-3">
                  <img
                    className="rounded-full border"
                    src="/images/Flag/aub.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20" />
            </svg>
            <span ref={progressContent} />
          </div> */}
        {/* </Swiper> */} 
      {/* </div> */} 
    </div>
  );
};

export default MatchCard;
