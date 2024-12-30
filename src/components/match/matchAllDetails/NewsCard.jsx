import React from "react";


const NewsCard = () => {
    const othersCards = [
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
       
        {
            title: "Paterson, Bosch lead South Africa's Boxing Day domination",
            date: "26-Dec-2024",
            time: "Updated 1 hr ago",
            author: "Danyal Rasool",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393710.6.jpg", // Replace with actual image URL
        },
    ];

    const othersCard = [
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
        {
            title: "Paterson, Bosch lead South Africa's Boxing Day domination",
            date: "26-Dec-2024",
            time: "Updated 1 hr ago",
            author: "Danyal Rasool",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393710.6.jpg", // Replace with actual image URL
        },
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
        {
            title: "Paterson, Bosch lead South Africa's Boxing Day domination",
            date: "26-Dec-2024",
            time: "Updated 1 hr ago",
            author: "Danyal Rasool",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393710.6.jpg", // Replace with actual image URL
        },
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
        {
            title: "Paterson, Bosch lead South Africa's Boxing Day domination",
            date: "26-Dec-2024",
            time: "Updated 1 hr ago",
            author: "Danyal Rasool",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393710.6.jpg", // Replace with actual image URL
        },
        {
            title: "KG vs KG showdown grips SuperSport Park",
            date: "26-Dec-2024",
            time: "3 hrs ago",
            author: "Firdose Moonda",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393703.6.jpg", // Replace with actual image URL
        },
        {
            title: "Paterson, Bosch lead South Africa's Boxing Day domination",
            date: "26-Dec-2024",
            time: "Updated 1 hr ago",
            author: "Danyal Rasool",
            image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/393700/393710.6.jpg", // Replace with actual image URL
        },
    ];

    return (
        <div className="bg-gray-100  w-full">
            {/* Day Heading */}
            <div className="mx-auto bg-white border-1 p-4 m-4">
                <h2 className="text-2xl font-bold ">Day 1</h2>

                {/* Cards Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {othersCards.map((othersCard, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={othersCard.image}
                                alt="othersCard"
                                className="w-full h-60 object-cover"
                            />
                            {/* Card Content */}
                            <div className="px-2">
                                <h3 className="text-lg font-semibold mb-2">{othersCard.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    {othersCard.date} • {othersCard.time}
                                </p>
                                <p className="text-sm text-gray-500">By {othersCard.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto bg-white border-1 p-4 m-4">
                <h2 className="text-2xl font-bold ">Others</h2>

                {/* Cards Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {othersCard.map((othersCard, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={othersCard.image}
                                alt="othersCard"
                                className="w-full h-60 object-cover"
                            />
                            {/* Card Content */}
                            <div className="px-2">
                                <h3 className="text-lg font-semibold mb-2">{othersCard.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    {othersCard.date} • {othersCard.time}
                                </p>
                                <p className="text-sm text-gray-500">By {othersCard.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
