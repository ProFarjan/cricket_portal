import { useQuery } from "react-query";
import { getGalleryItems } from "../../api/api";
import reactQueryConfig from "../../config/reactQueryConfig";
import { slugify } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import GalleryItem from "./layout/GalleryItem";
import { hasData } from "../../helpers/helper";

const GalleryItems = () => {

    const {
        data: galleries,
        error,
        isLoading
    } = useQuery('gallery-item', getGalleryItems, reactQueryConfig);

    return (
        <div className="related-post mt-3 section-gap p-b-xs-15">
            <div className="container">
                <div className="card p-4">
                    <SectionTitle title="Photos" btnText="See All" />
                    <div className="grid-wrapper">
                        <div className="row">
                            {hasData(galleries) &&
                                galleries.slice(0, 4).map((data) => (
                                    <div className="col-lg-3 col-md-4" key={data.slug}>
                                        <GalleryItem data={data} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GalleryItems;