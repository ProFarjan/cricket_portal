import React from "react";

const cricketData = {
    currentOver: {
        number: 82,
        runs: 14,
        score: "AUS: 228/9",
        crr: "2.78",
        players: [
            { name: "Nathan Lyon", runs: 41, balls: 58 },
            { name: "Scott Boland", runs: 24, balls: 75 },
        ],
        bowlers: [
            { name: "Jasprit Bumrah", stats: "2-47" },
            { name: "Akash Deep", stats: "17-4-5-0" },
        ],
        commentary: [
            "6.05pm Phew. What a long and eventful day...",
            "Tomorrow could be another, so do join us nice and early...",
            "Akram: I think it’s been a better decision to not declare...",
        ],
    },
    deliveries: [
        {
            ball: "81.6",
            bowler: "Bumrah",
            result: "FOUR",
            description:
                "Length ball in the corridor, and again Lyon has a hesitant poke at it...",
        },
        {
            ball: "81.5",
            bowler: "Bumrah",
            result: "no run",
            description: "Length ball banging into the stumps, clipped to midwicket.",
        },
        {
            ball: "81.4",
            bowler: "Bumrah",
            result: "2 runs",
            description: "Wide of the crease, clipping away to the left of square leg...",
        },
        {
            ball: "81.3",
            bowler: "Bumrah",
            result: "(no ball)",
            description:
                "Length ball close to off stump, defended to the covers again...",
        },
        {
            ball: "81.2",
            bowler: "Bumrah",
            result: "no run",
            description: "Length ball to off stump, defended to the covers.",
        },
        {
            ball: "81.1",
            bowler: "Bumrah",
            result: "FOUR",
            description:
                "And he sends down the loosest loosener of his career...",
        },
    ],
};

const Commentary = () => {
    const {
        currentOver: { number, runs, score, crr, players, bowlers, commentary },
        deliveries,
    } = cricketData;

    return (
        <div className=" bg-card rounded-lg shadow-md">
            {/* Over Summary */}
            <div className="bg-blue-100 p-4 rounded-md">
                <div className="flex justify-between items-center border-b border-blue-400 pb-2">
                    {/* Left Section */}
                    <div className="flex items-center gap-4 ">
                        <div className="text-lg font-bold">END OF OVER {Number}</div>
                        <div className="text-gray-700">{runs} runs</div>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <div className="font-bold text-lg">{score}</div>
                        <div className="text-gray-600">CRR: {crr}</div>
                    </div>
                </div>
                {/* Players Section */}
                <div className="mt-2 flex justify-between">
                    {/* Left Section - Players */}
                    <div className=" text-left">
                        {players.map((player, index) => (
                            <span key={index} className="block">
                                <span className="font-semibold">{player.name}</span>{" "}
                                <span>
                                    {player.runs} ({player.balls})
                                </span>
                            </span>
                        ))}
                    </div>
                    {/* Right Section - Bowlers */}
                    <div className=" text-right">
                        {bowlers.map((bowler, index) => (
                            <span key={index} className="block">
                                <span className="font-semibold">{bowler.name}</span>{" "}
                                <span className="text-gray-600">{bowler.stats}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {commentary.map((line, index) => (
                <p key={index} className="text-muted m-4">
                    {line}
                </p>
            ))}

            {/* Ball-by-Ball Commentary */}
            {deliveries.map((delivery, index) => (
                <div key={index} className="m-4">
                    <h3 className="font-semibold">{delivery.ball}</h3>
                    <p className="">
                        {delivery.bowler} to Lyon, {delivery.result}
                    </p>
                    <p className="text-muted">{delivery.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Commentary;
