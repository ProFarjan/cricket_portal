import React from "react";

const ScoreCard = () => {
  const data = {
    team: "Pakistan",
    overs: 47,
    total: "308/9",
    batsmen: [
      {
        name: "Saim Ayub",
        dismissal: "c Klaasen b Bosch",
        runs: 101,
        balls: 94,
        fours: 15,
        sixes: 2,
        sr: 107.44
      },
      {
        name: "Abdullah Shafique",
        dismissal: "c Markram b Rabada",
        runs: 0,
        balls: 1,
        fours: 0,
        sixes: 0,
        sr: 0.0
      },
      {
        name: "Babar Azam",
        dismissal: "c Miller b Maphaka",
        runs: 52,
        balls: 71,
        fours: 7,
        sixes: 0,
        sr: 73.23
      },
      {
        name: "Mohammad Rizwan",
        dismissal: "c Rabada b Fortuin",
        runs: 53,
        balls: 52,
        fours: 5,
        sixes: 1,
        sr: 101.92
      },
      {
        name: "Kamran Ghulam",
        dismissal: "c Bavuma b Fortuin",
        runs: 0,
        balls: 3,
        fours: 0,
        sixes: 0,
        sr: 0.0
      },
      {
        name: "Salman Agha",
        dismissal: "c van der Dussen b Rabada",
        runs: 48,
        balls: 35,
        fours: 6,
        sixes: 2,
        sr: 137.14
      },
      {
        name: "Tayyab Tahir",
        dismissal: "c & b Jansen",
        runs: 28,
        balls: 24,
        fours: 4,
        sixes: 1,
        sr: 116.66
      },
      {
        name: "Shaheen Shah Afridi",
        dismissal: "c van der Dussen b Rabada",
        runs: 5,
        balls: 2,
        fours: 1,
        sixes: 0,
        sr: 250.0
      },
      {
        name: "Naseem Shah",
        dismissal: "not out",
        runs: 5,
        balls: 4,
        fours: 1,
        sixes: 0,
        sr: 125.0
      },
      {
        name: "Mohammad Hasnain",
        dismissal: "c Miller b Jansen",
        runs: 0,
        balls: 2,
        fours: 0,
        sixes: 0,
        sr: 0.0
      },
      {
        name: "Sufiyan Muqeem",
        dismissal: "not out",
        runs: 0,
        balls: 1,
        fours: 0,
        sixes: 0,
        sr: 0.0
      }
    ],
    extras: "17 (b 1, lb 1, w 15)",
    fallOfWickets:
      "1-1 (Abdullah Shafique, 0.2 ov), 2-115 (Babar Azam, 22.3 ov), 3-208 (Saim Ayub, 34.6 ov), 4-209 (Kamran Ghulam, 35.3 ov), 5-223 (Mohammad Rizwan, 37.6 ov), 6-297 (Salman Agha, 45.5 ov), 7-297 (Shaheen Shah Afridi, 45.6 ov), 8-298 (Tayyab Tahir, 46.1 ov), 9-302 (Mohammad Hasnain, 46.3 ov)",
    bowlers: [
      {
        name: "Kagiso Rabada",
        overs: 10,
        maidens: 0,
        runs: 56,
        wickets: 2,
        economy: 5.6,
        wides: 0,
        noBalls: 0
      },
      {
        name: "Marco Jansen",
        overs: 9,
        maidens: 0,
        runs: 58,
        wickets: 2,
        economy: 6.44,
        wides: 3,
        noBalls: 1
      },
      {
        name: "Kwena Maphaka",
        overs: 9,
        maidens: 0,
        runs: 50,
        wickets: 1,
        economy: 5.55,
        wides: 2,
        noBalls: 0
      },
      {
        name: "Corbin Bosch",
        overs: 9,
        maidens: 0,
        runs: 69,
        wickets: 1,
        economy: 7.66,
        wides: 2,
        noBalls: 0
      },
      {
        name: "Bjorn Fortuin",
        overs: 10,
        maidens: 0,
        runs: 52,
        wickets: 2,
        economy: 5.2,
        wides: 0,
        noBalls: 0
      },
      {
        name: "Aiden Markram",
        overs: 3,
        maidens: 0,
        runs: 19,
        wickets: 0,
        economy: 6.33,
        wides: 0,
        noBalls: 0
      }
    ]
  };

  return (
    <div className=" mt-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        {data.team} - {data.total} ({data.overs} overs maximum)
      </h1>

      {/* Batting Table */}

      <table className="table-auto w-full border-collapse bg-white mb-6 ">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left ">Batting</th>
            <th className="px-2 py-1 " />
            <th className="px-2 py-1 text-center">R</th>
            <th className="px-2 py-1 text-center">B</th>
            <th className="px-2 py-1 text-center">4s</th>
            <th className="px-2 py-1 text-center">6s</th>
            <th className="px-2 py-1 text-center">SR</th>
          </tr>
        </thead>
        <tbody>
          {data.batsmen.map((batsman, index) =>
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-1 text-[13px] text-left">
                {batsman.name}
              </td>
              <td className="px-2 py-1 text-left text-[13px] ">
                {batsman.dismissal}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {batsman.runs}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {batsman.balls}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {batsman.fours}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {batsman.sixes}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {batsman.sr}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <div>
        <p className="text-2xl text-gray-600  mb-4">
          <span className="text-black font-bold text-3xl">
            Fall of wickets:
          </span>{" "}
          {data.fallOfWickets}
        </p>
      </div> */}

      {/* Bowling Table */}
      {/* <h2 className="text-xl font-semibold mb-2">Bowling</h2> */}
      <table className="table-auto w-full border-collapse bg-white mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left ">Bowler</th>
            <th className="px-2 py-1 text-center">O</th>
            <th className="px-2 py-1 text-center">M</th>
            <th className="px-2 py-1 text-center">R</th>
            <th className="px-2 py-1 text-center">W</th>
            <th className="px-2 py-1 text-center">Econ</th>
            <th className="px-2 py-1 text-center">WD</th>
            <th className="px-2 py-1 text-center">NB</th>
          </tr>
        </thead>
        <tbody>
          {data.bowlers.map((bowler, index) =>
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-1 text-left text-[13px] ">
                {bowler.name}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.overs}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.maidens}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.runs}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.wickets}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.economy}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.wides}
              </td>
              <td className="px-2 py-1 text-[13px] ">
                {bowler.noBalls}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Extras and Fall of Wickets */}
      <div className=" bg-white p-4">
        <p>
          Extras: {data.extras}
        </p>
        <p>
          <span className="font-bold">Fall of Wickets:</span>
          <span className="text-2xl">
            {data.fallOfWickets}
          </span>
        </p>
      </div>

      {/* math details  */}

      <div className=" bg-gray-100  mt-16 ">
        <table className="w-full border border-gray-300 bg-white ">
          <tbody>
            <tr className="border-b">
              <td>
                <h1 className="text-2xl ml-4 mt-4 font-bold border-gray-300 bg-white ">
                  Match Details
                </h1>
              </td>
              <td />
            </tr>
            <tr className="border-b">
              {/* <td className=" px-4 py-1 text-left text-[13px] font-medium">
                Venue
              </td> */}
              <td className="px-4 py-2 text-left text-[13px]">
                Kotambi Stadium, Vadodara
              </td>
            </tr>
            <tr className="border-b ">
              <td className=" font-medium px-4 py-1 text-left border-r text-[13px]">
                Toss
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                India Women, elected to bat first
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Series
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                West Indies Women tour of India
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Competition
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                ICC Women&apos;s Championship
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Season
              </td>
              <td className="px-4 py-1 text-left text-[13px]">2024/25</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r  font-medium">
                Match Number
              </td>
              <td className="px-4 py-1 text-left text-[13px]">WODI no. 1428</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Hours of Play (Local Time)
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                13:30 start, First Session 13:30-16:40, Interval 16:40-17:10,
                Second Session 17:10-20:40
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Match Day
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                24 December 2024 - day/night (50-over match)
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                WODI Debut
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                Nerissa Crafton
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Umpires
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                Jayaram Madanagopal, Kannur Swaroopanand
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                TV Umpire
              </td>
              <td className="px-4 py-1 text-left text-[13px]">
                Eloise Sheridan
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Reserve Umpire
              </td>
              <td className="px-4 py-1 text-left text-[13px]">Ankita Guha</td>
            </tr>
            <tr>
              <td className="px-4 py-1 text-left text-[13px] border-r font-medium">
                Match Referee
              </td>
              <td className="px-4 py-1 text-left text-[13px]">Prakash Bhatt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreCard;
