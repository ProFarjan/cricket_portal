import React from 'react';
import SummaryTable from './SummaryTable';
import Commentary from './Commentary';
import Image from 'next/image';

const Summary = () => {
    const matchData = {
        matchCentre: {
          scores: "M Venkat Raghav",
          comms: "Andrew Miller",
        },
        scorecard: {
          team1: {
            name: "NEW ZEALAND",
            score: "172/8 (20 Overs)",
            players: [
              { name: "Daryl Mitchell", runs: 62, balls: 42 },
              { name: "Michael Bracewell", runs: 59, balls: 33 },
            ],
            bowlers: [
              { name: "Binura Fernando", wickets: 2, runs: 22, overs: 4 },
              { name: "Maheesh Theekshana", wickets: 2, runs: 29, overs: 4 },
            ],
          },
          team2: {
            name: "SRI LANKA",
            score: "164/8 (20 Overs)",
            players: [
              { name: "Pathum Nissanka", runs: 90, balls: 60 },
              { name: "Kusal Mendis", runs: 46, balls: 36 },
            ],
            bowlers: [
              { name: "Jacob Duffy", wickets: 3, runs: 21, overs: 4 },
              { name: "Matt Henry", wickets: 2, runs: 28, overs: 4 },
            ],
          },
        },
      };
      
    return (
        <>
            <div className='bg-[#e1f1fa] flex gap-2 mt-4 h-28 items-center rounded-xl '>
                <p className='font-bold text-6xl text-[#02a8f5] mt-10 px-4 py-4'>105</p>
                 <p className='text-black text-2xl mt-10'>Michael Bracewell and Mitchell&apos;s 105-run partnership is NZ&apos;s highest for the 6th wicket in T20Is, breaking the record of 85 between McCullum and Luke Ronchi</p>
            </div>
            <div className='flex items-center gap-4 bg-white border p-[20px] rounded-2xl mt-4'>
              <div className="group relative w-[500px] h-[300px] overflow-hidden rounded-2xl">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src="/images/series-details/390508.6.webp"
                    alt=""
                />
              </div>


                <div>
                    <Image height={300} width={500} className='w-[500px] h-[300px] rounded-2xl' src="/images/series-details/390508.6.webp" alt="" />
                </div>
                <div className='ml-10'>
                    <p className='text-5xl font-bold text-black'>Jacob Duffy the slayer <br /> as Sri Lanka suffer <br /> horror collapse</p>
                    <p className='text-2xl mt-[-14px]'>New Zealand fight back with bat and ball <br /> for eight-run win in series opener</p>
                    <p className='text-xl mt-[-20px]'>28-Dec-2024 . Madushka Balasuriya </p>
                </div>
            </div>
        <SummaryTable data={matchData} /> 
        <Commentary/>
        </>
    );
};

export default Summary;