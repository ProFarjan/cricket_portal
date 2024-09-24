import WidgetAd from "../widget/WidgetAd";
import WidgetCategory from "../widget/WidgetCategory";
import WidgetInstagram from "../widget/WidgetInstagram";
import WidgetNewsletter from "../widget/WidgetNewsletter";
import WidgetPost from "../widget/WidgetPost";
import WidgetSocialShare from "../widget/WidgetSocialShare";

const PageSidebar = () => {
    return (
        <div className="post-sidebar">
            <WidgetAd />
            <WidgetNewsletter />
            <WidgetCategory cateData={[]} />
            <WidgetSocialShare />
            <WidgetPost dataPost={[]} />
            <WidgetInstagram />
            <WidgetAd img="/images/clientbanner/endbanner.jpg" height={492} width={320}/>
        </div>
    )
}

export default PageSidebar;