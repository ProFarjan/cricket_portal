import React from "react";

const SummaryTable = ({ data }) => {
  return (
    <div className=" mt-4 bg-white rounded-2xl border">
      <div className="text-sm h-24 text-gray-500 border-b p-3">
        <h1 className="text-2xl ml-2">Match centre </h1>
        <p className="text-xl text-gray-600 mt-[-14px] ml-2">
          Scores: {data.matchCentre.scores} | Comms: {data.matchCentre.comms}
        </p>
      </div>
      <div className="bg-[#f5f6f7] ">
        <p className="text-xl text-gray-600 p-2 ml-4 ">Scorecard Summary</p>
      </div>
      <div className="mt-[-24px] ">
        {[data.scorecard.team1, data.scorecard.team2].map((team, index) =>
          <div key={index} className="py-2">
            <div className="flex gap-2  border-b h-10   ">
              <h2 className=" text-2xl ml-6 mt-[-3px]  ">
                {team.name}
              </h2>
              <span className="text-2xl mt-[-3px]">
                . {team.score}
              </span>
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                {team.players.map((player, idx) =>
                  <div
                    key={idx}
                    className="flex justify-between text-xl border-r border-b p-3 "
                  >
                    <span className="ml-2">
                      {player.name}
                    </span>
                    <span className="ml-2">
                      {player.runs} ({player.balls})
                    </span>
                  </div>
                )}
              </div>
              <div>
                {team.bowlers.map((bowler, idx) =>
                  <div
                    key={idx}
                    className="flex justify-between text-xl border-b p-3"
                  >
                    <span>
                      {bowler.name}
                    </span>
                    <span>
                      {bowler.wickets}/{bowler.runs} ({bowler.overs})
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <button className="mt-2  mb-2 hover:text-blue-500 hover:underline">
          View full scorecard
        </button>
      </div>
    </div>
  );
};

export default SummaryTable;
