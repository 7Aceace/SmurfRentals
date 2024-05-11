
import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'
export function Blogs() {
  return (<>
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Joke Tax Chronicles</h1>
            <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <div>
                <span className="font-medium">Jules Winnfield</span>, CEO{"\n                          "}
              </div>
              <div className="text-sm">Posted on August 24, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12">
      <article className="prose prose-gray dark:prose-invert">
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
          One day, his advisors came to him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
          under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem
          to stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
          they couldn't help but laugh. And once they started laughing, they couldn't stop.
        </p>
        <p>
          The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the
          kingdom.
        </p>
        <blockquote>
          “After all,” he said, “everyone enjoys a good joke, so it's only fair that they should pay for the
          privilege.”
        </blockquote>
        <h2>The Joke Tax</h2>
        <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
          refused to let the king's foolishness get him down: a court jester named Jokester.
        </p>
      </article>
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Related Posts</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-md"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link className="hover:underline" href="#">
                    The Rise of Artificial Intelligence
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Exploring the latest advancements in AI technology.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-md"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link className="hover:underline" href="#">
                    The Future of Remote Work
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Insights on the changing landscape of work.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-md"
                  height={60}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link className="hover:underline" href="#">
                    The Importance of Sustainability
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Exploring eco-friendly practices for a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
