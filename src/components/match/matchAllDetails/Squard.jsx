import React from 'react';

const Squard = () => {

    const players = [
        {
            name: "Usman Khawaja",
            batting: "Left Hand Bat",
            bowling: "Right Arm Medium",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        // ../../../../public
        {
            name: "Virat Kohli",
            batting: "Right Hand Bat",
            bowling: "Right Arm Medium",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Pat Cummins",
            batting: "Right Hand Bat",
            bowling: "Right Arm Fast",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Steve Smith",
            batting: "Right Hand Bat",
            bowling: "Right Arm Leg Spin",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Ravindra Jadeja",
            batting: "Left Hand Bat",
            bowling: "Left Arm Orthodox",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "David Warner",
            batting: "Left Hand Bat",
            bowling: "Right Arm Leg Spin",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Shubman Gill",
            batting: "Right Hand Bat",
            bowling: "Right Arm Off Spin",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Mitchell Starc",
            batting: "Left Hand Bat",
            bowling: "Left Arm Fast",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Marnus Labuschagne",
            batting: "Right Hand Bat",
            bowling: "Right Arm Leg Spin",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Jasprit Bumrah",
            batting: "Right Hand Bat",
            bowling: "Right Arm Fast",
            image: "/images/squart-img/Usman Khawaja.jpg"
        },
        {
            name: "Rohit Sharma",
            batting: "Right Hand Bat",
            bowling: "Right Arm Off Spin",
            image: "/images/squart-img/Usman Khawaja.jpg"
        }
    ];


    return (
        <div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='px-3 border-r-4 border-b-gray-600'>
                    <h1 className="my-4 text-5xl">AUSTRALIA</h1>
                    <div>
                        <div >
                            {players.map((player, index) => (
                                <div className="flex gap-4 my-4 border-b pb-2" key={index}>
                                    {/* News Image */}
                                    <img
                                        className="h-40 w-40"
                                        src={player.image}
                                    />
                                    <div className="leading-10">
                                        <span className="text-3xl pb-4 font-bold text-black hover:underline cursor-pointer "> {player?.name}</span>
                                        <br />
                                        <span className='text-2xl mt-3'>Batting :{player.batting}</span> <br />
                                        <span className='text-2xl'>Bowling :{player.bowling}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className=''>
                    <h1 className='my-4 text-5xl'>INDIA</h1>
                    <div>
                        <div >
                            {players.map((player, index) => (
                                <div className="flex gap-4 my-4 border-b pb-2" key={index}>
                                    {/* News Image */}
                                    <img
                                        className="h-40 w-40"
                                        src={player.image}
                                    />
                                    <div className="leading-10">
                                        <span className="text-3xl pb-4 font-bold text-black hover:underline cursor-pointer "> {player?.name}</span>
                                        <br />
                                        <span className='text-2xl mt-3'>Batting :{player.batting}</span> <br />
                                        <span className='text-2xl'>Bowling :{player.bowling}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Squard;