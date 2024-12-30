"use client";
import React from "react";

const fakePhotosData = [
  {
    id: 1,
    title: "Mohammed Siraj's Breakthrough",
    details: "Mohammed Siraj was pumped up after trapping Marnus Labuschagne lbw.",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/393900/393927.jpg",
    date: "Dec 29, 2024",
    copyright: "Getty Images",
  },
  {
    id: 2,
    title: "Marnus Labuschagne Fifty",
    details: "Marnus Labuschagne scored a hard-fought fifty.",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/393900/393926.jpg",
    date: "Dec 29, 2024",
    copyright: "Getty Images",
  },
  {
    id: 3,
    title: "Jasprit Bumrah's Celebration",
    details: "Jasprit Bumrah watches as Mitchell Starc falls short.",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/393900/393918.jpg",
    date: "Dec 29, 2024",
    copyright: "Getty Images",
  },
  {
    id: 4,
    title: "Mitchell Starc Dismissed",
    details: "Mitchell Starc is dismissed as Jasprit Bumrah celebrates.",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/393900/393917.jpg",
    date: "Dec 29, 2024",
    copyright: "Getty Images",
  },
];

const Photos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-gray-50">
      {fakePhotosData.map((photo) => (
        <div
          key={photo.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Image */}
          <div className="w-full">
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full object-contain"
            />
          </div>
          {/* Details */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {photo.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3">{photo.details}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{photo.date}</span>
              <span>{photo.copyright}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
