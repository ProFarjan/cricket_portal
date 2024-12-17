import { useQuery } from "react-query";
import { getGalleryItems } from "../../api/api";
import reactQueryConfig from "../../config/reactQueryConfig";
import { slugify } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import GalleryItem from "./layout/GalleryItem";
import { hasData } from "../../helpers/helper";

const GalleryItems = () => {
  const { data: galleries, error, isLoading } = useQuery(
    "gallery-item",
    getGalleryItems,
    reactQueryConfig
  );

  return (
    <div className="related-post">
      <div className="container  ">
        <div className="  p-4">
          {/* <SectionTitle className="text-white" title="Photos" btnText="" /> */}
          <h1 className="text-4xl  ">Photo</h1>
          <div className="grid-wrapper  mt-2">
            <div className="md:flex gap-4">
              {hasData(galleries) &&
                galleries.slice(0, 4).map(data =>
                  <div key={data.slug}>
                    <GalleryItem data={data} />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItems;
