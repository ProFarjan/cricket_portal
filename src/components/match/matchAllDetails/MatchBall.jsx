import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Commentary from "./Commentary";

const MatchBall = () => {
  return (
    
    <><div className="bg-white mt-4 py-4">
    <div className="  ">
      <div className=" px-4 border-b h-24">
        <p className="text-xl ">
          <span className="text-2xl text-black font-bold">
            Partnership:
          </span>{" "}
          22 Runs, 14 B (RR: 10.15){" "}
          <span className="text-2xl text-black font-bold ">
            • Last Bat:
          </span>{" "}
          Harmanpreet Kaur 22 (18b){" "}
          <span className="text-2xl text-black font-bold">• FOW:</span> 215/3
          (35.5 Ov)
        </p>
        <p className="text-xl mt-[-18px] ">
          <span className="text-2xl text-black font-bold">
            Reviews Remaining:{" "}
          </span>India Women - 2 of 2, West Indies Women - 1 of 2
        </p>
      </div>
      <div className="flex justify-between p-2 mt-2 ">
        <FontAwesomeIcon
          className="w-4 cursor-pointer hover:text-blue-500"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="w-4 cursor-pointer hover:text-blue-500"
          icon={faAngleRight}
        />
      </div>
    </div>
    </div>
      <Commentary/>
    </>
  );
};

export default MatchBall;
