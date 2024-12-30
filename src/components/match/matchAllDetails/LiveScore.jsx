import React from "react";
import MatchBall from "./MatchBall";

const LiveScore = () => {
  return (
      <>
      <div className="border border-gray-300 mt-16  w-full">
        
      <table className="table-auto w-full text-black text-left text-xl">
        <thead className="bg-gray-200  ">
          <tr>
            <th className="p-2">Batters</th>
            <th className="p-2">R</th>
            <th className="p-2">B</th>
            <th className="p-2">4s</th>
            <th className="p-2">6s</th>
            <th className="p-2">SR</th>
            <th className="p-2">This Bowler</th>
            <th className="p-2">Last 5 Ovs</th>
            <th className="p-2">Mat</th>
            <th className="p-2"> Runs </th>
            <th className="p-2"> HS </th>
            <th className="p-2"> Ave</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b ">
            <td className="px-2 py-3 font-semibold">Pratika Rawal*</td>
            <td className="p-2">51</td>
            <td className="p-2">62</td>
            <td className="p-2">9</td>
            <td className="p-2">0</td>
            <td className="p-2">82.25</td>
            <td className="p-2">7 (10b)</td>
            <td className="p-2">10 (15b)</td>
            <td className="p-2">2 </td>
            <td className="p-2"> 91 </td>
            <td className="p-2"> 51* </td>
            <td className="p-2"> 91.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-3">Harleen Deol</td>
            <td className="p-2">7</td>
            <td className="p-2">13</td>
            <td className="p-2">0</td>
            <td className="p-2">0</td>
            <td className="p-2">53.84</td>
            <td className="p-2">4 (9b)</td>
            <td className="p-2">7 (13b)</td>
            <td className="p-2">15 </td>
            <td className="p-2">328 </td>
            <td className="p-2"> 77</td>
            <td className="p-2"> 27.33</td>
          </tr>
        </tbody>
        <thead className="bg-gray-200  ">
          <tr className="">
            <th className=" p-2 ">Bowlers</th>
            <th className="p-2">O</th>
            <th className="p-2">M</th>
            <th className="p-2">R</th>
            <th className="p-2">W</th>
            <th className="p-2">Econ</th>
            <th className="p-2">0s</th>
            <div className="gap-4 flex">
              <th className="p-2">4s</th>
              <th className="p-2">6s</th>
              <th className="p-2">This Spell</th>
            </div>
            <th className="p-2">Mat</th>
            <th className="p-2"> Wkts </th>
            <th className="p-2"> BBI </th>
            <th className="p-2"> Ave</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b ">
            <td className=" px-2 py-3 font-semibold">Zaida James (sla)</td>
            <td className="p-2">702</td>
            <td className="p-2">0</td>
            <td className="p-2">30</td>
            <td className="p-2">0</td>
            <td className="p-2">4.25</td>
            <td className="p-2">23</td>
            <div className="flex gap-5">
              <td className="p-2">2</td>
              <td className="p-2">2 </td>
              <td className="p-2"> 3.1-0-18-0</td>
            </div>
            <td className="p-2"> 12 </td>
            <td className="p-2"> 6</td>
            <td className="p-2"> 5/45</td>
            <td className="p-2"> 12.45</td>
          </tr>
        </tbody>
      </table>
       </div>
      <div>
          <MatchBall/>
        </div>
      </>
  );
};

export default LiveScore;
