import React from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";

const Testimonials = () => {
 return (
        <div>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-8 px-4 md:px-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Renters Say</h2>
          <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="@username" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Rented on 4/15/2023</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                The Acme Roadster was an absolute joy to drive. It handled like a dream and the amenities made the
                trip even more enjoyable.
              </p>
            </div>
            <div
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="@username" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Rented on 5/1/2023</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                I was blown away by the performance and style of the Acme Roadster. It made my road trip an
                unforgettable experience.
              </p>
            </div>
            <div
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="@username" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Alex Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Rented on 6/1/2023</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                The Acme Roadster was a great rental, but I did have some minor issues with the infotainment system.
                Overall, a solid choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Testimonials;

function StarIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>)
    );
  }