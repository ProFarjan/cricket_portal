import React from 'react';
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import GalleryItems from "../components/post/GalleryItems";
import PageSidebar from "../components/common/PageSidebar";
import { useQuery } from 'react-query';
import reactQuery from '../config/reactQueryConfig';
import { getSeries } from '../api/api';


const series = () => {
    const {
        data: series,
        error: menu_error,
        isLoading: menu_isloading
    } = useQuery('get-series', getSeries, reactQuery);
    console.log(series)
    return (
        <>
            <HeadMeta metaTitle="The Cricket Co" />
            <HeaderOne />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 p-2">


                        <div>
                            <h1 className='font-font-bold text-2xl'>Cricket Fixtures - Domestic & International Cricket Series</h1>
                            {
                                series?.data?.map((item) => (
                                    <div className='flex p-4' key={item.id}>
                                        <div className='flex w-14 h-14'>
                                            <img src="/images/Bangladesh.webp" alt=""></img>
                                            <img className='' src="/images/westindies.webp" alt=""></img>
                                            
                                        </div>

                                        <div className='flex px-20'>
                                            <p>{item.slug}</p>
                                            <p className='px-4'>{item.start_date}</p>
                                            <p>{item.end_date}</p>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <PageSidebar />
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <GalleryItems />
                    </div>
                </div>
            </div>
            <FooterOne />

        </>
    );
};

export default series;