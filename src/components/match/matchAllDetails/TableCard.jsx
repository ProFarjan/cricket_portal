import React from "react";
import classNames from "classnames";

const teams = [
  {
    name: "South Africa",
    flag: "🇿🇦",
    matches: 10,
    won: 6,
    lost: 3,
    tied: 0,
    draw: 1,
    nr: 0,
    points: 76,
    pct: "63.33",
    form: ["W", "W", "W", "W", "W"],
    next: "vs PAK",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    matches: 15,
    won: 9,
    lost: 4,
    tied: 0,
    draw: 2,
    nr: 0,
    points: 106,
    pct: "58.89",
    form: ["W", "W", "L", "L", "D"],
    next: "vs IND, SL, SL",
  },
  {
    name: "India",
    flag: "🇮🇳",
    matches: 17,
    won: 9,
    lost: 6,
    tied: 0,
    draw: 2,
    nr: 0,
    points: 114,
    pct: "55.89",
    form: ["L", "L", "W", "W", "D"],
    next: "vs AUS",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    matches: 14,
    won: 7,
    lost: 7,
    tied: 0,
    draw: 0,
    nr: 0,
    points: 81,
    pct: "48.21",
    form: ["W", "L", "L", "L", "W"],
    next: "-",
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    matches: 11,
    won: 5,
    lost: 6,
    tied: 0,
    draw: 0,
    nr: 0,
    points: 60,
    pct: "45.45",
    form: ["L", "W", "W", "L", "L"],
    next: "vs AUS, AUS",
  },
];

const TableCard = () => {
  return (
    <div className="container mx-auto my-8 p-4 border-1 shadow-md rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold mb-6 ">
        ICC World Test Championship Points Table
      </h1>
      <div className="bg-white shadow-md rounded-lg border-1 overflow-hidden">
        <table className="w-full text-lg text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 ">
              <th className="p-3 font-medium">Teams</th>
              <th className="p-3 font-medium underline">M</th>
              <th className="p-3 font-medium underline">W</th>
              <th className="p-3 font-medium underline">L</th>
              <th className="p-3 font-medium underline">T</th>
              <th className="p-3 font-medium underline">D</th>
              <th className="p-3 font-medium underline">N/R</th>
              <th className="p-3 font-medium underline">PT</th>
              <th className="p-3 font-medium underline">PCT</th>
              <th className="p-3 font-medium ">Series Form</th>
              <th className="p-3 font-medium">Next</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.name}
                className={classNames(
                  "text-gray-700 text-lg",
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                )}
              >
                <td className="p-3 flex items-center space-x-3 text-black font-semibold text-xl uppercase">
                  <span>{team.flag}</span>
                  <span >{team.name}</span>
                </td>
                <td className="p-3">{team.matches}</td>
                <td className="p-3">{team.won}</td>
                <td className="p-3">{team.lost}</td>
                <td className="p-3">{team.tied}</td>
                <td className="p-3">{team.draw}</td>
                <td className="p-3">{team.nr}</td>
                <td className="p-3">{team.points}</td>
                <td className="p-3 font-semibold">{team.pct}</td>
                <td className="p-3 flex space-x-1">
                  {team.form.map((result, i) => (
                    <span
                      key={i}
                      className={classNames(
                        "px-2 py-1 rounded-full text-white",
                        {
                          "bg-green-500": result === "W",
                          "bg-red-500": result === "L",
                          "bg-gray-400": result === "D",
                        }
                      )}
                    >
                      {result}
                    </span>
                  ))}
                </td>
                <td className="p-3">{team.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCard;
