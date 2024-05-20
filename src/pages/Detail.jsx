import React from "react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircleMore,
  Eye,
  CircleUser,
} from "lucide-react";

function Detail() {
  return (
    <div className=" container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20 space-y-24">
      <div>
        <article className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="space-y-16">
              <h1 className="text-3xl text-center font-bold">
                Emerging Technology
              </h1>

              <p className="text-gray-700 text-md ">
                By John Doe | May 19,2024
              </p>
            </div>
            <div className=" space-y-8">
              <p className="text-lg">
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
              <p className="text-lg">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester.
              </p>
              <p className="text-lg">
                And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn't help but
                laugh. And once they started laughing, they couldn't stop.
              </p>
            </div>

            <div className="flex justify-between space-x-">
              <div className="flex gap-6">
                <div className="flex space-x-1 ">
                  <span>
                    {" "}
                    <ThumbsUp />
                  </span>{" "}
                  <span className="mt-1"> 123</span>
                </div>
                <div className="flex space-x-1 ">
                  <span className="mt-1">
                    {" "}
                    <ThumbsDown />
                  </span>{" "}
                  <span className="mt-1"> 15</span>
                </div>
                <div className="flex space-x-1 ">
                  <span>
                    {" "}
                    <MessageCircleMore className="mt-1" />{" "}
                  </span>{" "}
                  <span className="mt-1"> 10</span>
                </div>
              </div>
              <div className="flex space-x-1 ">
                <span>
                  {" "}
                  <Eye />
                </span>{" "}
                <span> 1.3K</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full ">
              <span className="font-medium text-gray-600 ">J</span>
            </div>
            <div>
              <div className="flex justify-between space-x-96">
                <span className="text-gray-500">John Doe | May 19,2024</span>
              </div>
            </div>
          </div>
          <p className=" ml-16">
            This is a really interesting story! I love how the king tried to tax
            the jokes, but the people just couldn't stop laughing. It's a great
            example of how humor can be a powerful force.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;

