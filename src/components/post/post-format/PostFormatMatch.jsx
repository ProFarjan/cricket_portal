import PageSidebar from "../../common/PageSidebar";
import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import MetaDataOne from "./elements/meta/MetaDataOne";
import PostAuthor from "./elements/PostAuthor";
import PostComment from "./elements/PostComment";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";
import Image from "next/image";

const PostFormatMatch = ({ postData }) => {
  // Fake data for left-side content
  const fakeData = [
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
  ];

  return (
    <>
      {/* <MetaDataOne metaData={postData} /> */}
      <div className="post-single-wrapper">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    {/* <SocialShareSide /> */}
                    <div className="">
                      <div className="">
                        <div class="flex p-5 mx-auto justify-evenly gap-5 ">
                          <div class="p-4 flex flex-col">
                            <span class="text-blue-600 px-2 py-1 text-5xl font-semibold rounded-full">
                              News
                            </span>
                            <h2 class="mt-2 text-6xl space-x-4 font-bold text-foreground">
                            {postData[0]?.title || "Sample Title"}
                            </h2>
                            <div class="mt-4 flex items-center">
                              <img
                                src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/184300/184311.png"
                                alt="Recipe Image"
                                class="rounded-full mr-2"
                              />
                              <span class="text-lg text-black">
                                by <span class="font-semibold">J. Smith</span> &{" "}
                                <span class="font-semibold">K. Williams</span>
                              </span>
                            </div>
                          </div>
                          <div>
                            <img
                              src={
                                process.env.NEXT_PUBLIC_IMGPATH +
                                postData[0]?.image
                              }
                              alt="Dish Image"
                              class="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-4 justify-between">
                        <div className="col-span-4">
                          <h1 className="text-2xl text-pretty">
                            For those of us who want to say thank you to our
                            moms, it’s not always easy to put those big feelings
                            in words. Which is where Dribbble comes in. These
                            eight shots crystallize the hard work moms put into
                            keeping their kids alive, happy, and healthy. They
                            might give you the inspiration you need for filling
                            out that card—or stand alone for your mom’s
                            interpretation. Australia took precautions ahead of
                            the New Zealand tour with Voll and Sophie Molineux
                            leaving the field after diving efforts left them
                            feeling ginger, while the fitness of Healy will
                            continue to be monitored. "Healy's coming away with
                            us, we'll see how she goes. But she's progressing
                            well, which is really pleasing," Gardner said. "I'm
                            sure she'll be chomping at the bit to play that
                            first game in New Zealand. The group's just really
                            excited. It's a really cool little period. We're
                            only over there for ten days before the Christmas
                            break. I think it's going to really spur the team on
                            to finish off what we've done here in this series.
                            "I think this group's in a really good place at the
                            moment. We've been really successful in 50-over
                            cricket. So it's just kind of going on to the next
                            progression and that's obviously looking forward to
                            the World Cup.
                          </h1>
                          <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/392700/392785.4.jpg"
                            alt=""
                          />
                          <h6>
                            "I felt it's one of those things... you feel really
                            confident in the nets but then it doesn't replicate
                            in the middle," Gardner said. "For me, I knew that I
                            just had to spend a little bit of time out in the
                            middle and I came in at a pretty tough time. "I just
                            love batting with Bells [Sutherland]. It's always
                            really positive, just keep each other going in those
                            moments and knowing that if we just got through that
                            tough little phase... it would be fine. And I guess
                            that's the messaging that I just tried to keep
                            telling myself." With Alyssa Healy on the sidelines
                            for the entire series due to injury, Tahlia McGrath
                            took the captaincy reins with the 27-year-old
                            Gardner as her deputy. "I think T-Mac [McGrath] and
                            I work really well together," she said. "We're
                            obviously very different personalities, but I think
                            we complement each other in that way as well. "She's
                            a very cool, calm person. And I guess what I
                            challenged her with was to try and think outside the
                            box. What I tried to throw to her was just different
                            ideas at different points to get her mind ticking
                            over." Australia, however, did not submit a flawless
                            performance in Perth having endured a ragged effort
                            in the field marked by five dropped catches. It is
                            an area they will hope to brush up quickly ahead of
                            the three-match ODI series in New Zealand starting
                            on December 19. "We want to be the best fielding
                            team in the world and that certainly wasn't on show
                            tonight," Gardner said. "I think there were glimpses
                            of brilliance, but then there's just those little
                            moments where maybe it's a lapse of concentration.
                          </h6>
                          <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/390100/390115.6.jpg"
                            alt=""
                          />
                          <h5>
                            West Indies coasted to a seven-wicket win against
                            Bangladesh in St Kitts to claim the three-match ODI
                            series. It was West Indies' first ODI series win
                            against Bangladesh in ten years. They had won the
                            last four ODI series between the two sides too. West
                            Indies had on Sunday broken Bangladesh's 11-match
                            winning streak against them in the first ODI. Jayden
                            Seales' career-best figures of 4 for 22 led the home
                            side's bowling efforts as they bowled out the
                            visitors for 227 in 45.5 overs. Brandon King then
                            struck a rapid 82 to accelerate West Indies' chase,
                            as they completed the win in 36.5 overs. Captain
                            Shai Hope and Sherfane Rutherford, who struck 113 in
                            the first game, were the unbeaten batters who
                            completed the game. West Indies were making it look
                            like a cakewalk as they reduced Bangladesh to 115
                            for seven at this stage. Mahmudullah, who had struck
                            one six till that point, had to trust Tanzim, who
                            previously had a first-class fifty to his name.
                            Tanzim looked determined as he struck two fours
                            before launching Motie for his first six over
                            long-on. Mahmudullah had struck two sixes till that
                            point. The pair then hammered Greaves for a six and
                            a four in consecutive overs, before repeating the
                            same dose a few overs later, on the same bowler.
                          </h5>
                          <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/388900/388970.6.jpg"
                            alt=""
                          />
                          <h5>
                            Litton Das has been appointed Bangladesh captain for
                            an entire T20I series for the first time - he filled
                            in once for Mahmudullah on the tour of New Zealand
                            in April 2021 - for the three-match series to round
                            off the ongoing all-format tour of the West Indies.
                            There is a return for batting allrounder Shamim
                            Hossain, who last played in a T20I - or any
                            international match - in December 2023 in New
                            Zealand. Shamim, 24, has had a run in the format but
                            hasn't quite broken through yet. In 14 T20I innings,
                            he has 254 runs at a strike rate of 115.98, and a
                            highest of 51, his only half-century.
                          </h5>
                        </div>
                        <div className="col-span-2">
                          <PageSidebar />
                        </div>
                      </div>
                    </div>
                    <SocialShareBottom />
                    <hr className="m-t-xs-50 m-b-xs-60" />
                    <PostAuthor authorData={postData} />
                    <PostComment />
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatMatch;
