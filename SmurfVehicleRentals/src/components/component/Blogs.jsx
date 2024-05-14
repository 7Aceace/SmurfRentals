
import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'
export function Blogs() {
  return (<>
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tourist Spots Itinerary in Siquijor: Comprehensive guide to explore the beauty of Siquijor
            </h1>
            <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <div>
                <span className="font-medium">Chuche Montenegro</span>,Writer{"\n                          "}
              </div>
              <div className="text-sm">Posted on May 05, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12">
      <article className="prose prose-gray dark:prose-invert">
        <p>
        Siquijor, an island province in the Philippines, is a treasure trove of natural beauty and cultural heritage. When planning an itinerary to explore this enchanting destination, a visit to Paliton Beach is a must.
        Recognized as the best beach on the island, its serene ambiance and crystal-clear waters make it a perfect spot for relaxation and swimming. For those seeking adventure, the cliff diving experience at Salagdoong Beach is not to be missed. To witness the island's natural wonders, include a refreshing stop at Cambugahay Falls, a multi-tiered waterfall that is both enchanting and accessible, offering visitors the chance to swim in its cool, turquoise pools. For a glimpse into the underwater world, the Tulapos Marine Sanctuary provides an excellent diving experience with its vibrant marine life. To complete your day, a visit to the historical Lazi Church and Convent will immerse you in the island's rich religious heritage.

        </p>
        <blockquote>
          “Beauty of Nature is indeed here.”
        </blockquote>
       
        <p>Siquijor's charm extends beyond its natural attractions. The island's laid-back vibe is perfect for those looking to unwind and embrace a slower pace of life. When visiting, it's important to plan your trip between November and May to enjoy the dry season, making exploration more comfortable. Getting around the island is easy, with various transportation options available, and a range of accommodations catering to different budgets and preferences. Remember to bring </p>
        
        <p>
        Remember to bring enough cash, as the island is small and ATMs may be scarce. Respect local customs by dressing appropriately, especially when visiting religious sites. Lastly, don't forget to pack essentials like sunscreen and insect repellent to protect yourself in the tropical climate. By planning a balanced itinerary that includes beach time, cultural visits, and natural attractions, you can fully experience the beauty and tranquility of Siquijor.


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
                  src="/CambugahayBlog.png"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link to='/TouristSpot:Cambugahay' className="no-underline text-blue-500">
                  Tourist Spots Itinerary in Siquijor
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Embark on a comprehensive journey through Siquijor, a stunning island in the Philippines, as you uncover the hidden gems and experience the enchanting beauty it has to offer. 
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-md"
                  height={60}
                  src="/ConventBlog.png"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link to='/TravelHacks' className="no-underline text-blue-500">
                  Ultimate guide to renting cars in Siquijor 
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Embarking on a journey to the mystical island of Siquijor in the Philippines promises an adventure filled with enchanting landscapes and cultural landmarks. 
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-md"
                  height={60}
                  src="/RentalBlog.png"
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                  }}
                  width={80} />
              </div>
              <div>
                <h4 className="text-base font-medium">
                  <Link to='/Guide' className="no-underline text-blue-500"  >
                  Crucial Steps to Take After a Vehicle Accident in the Philippines: Your Comprehensive Guide
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Being involved in a vehicle accident can be a stressful and unsettling experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
