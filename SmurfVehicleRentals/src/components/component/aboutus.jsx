
export function ABOUTUS() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Smurf Vehicle Rentals</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            SMURF Rentals and Tours operates as a top-tier rental agency in Siquijor, offering a variety of vehicles like cars and motorcycles for locals and tourists alike. In addition to rentals, SMURF curates immersive tours, providing a deeper exploration of the island's hidden gems. The agency's mission centers around safety, comfort, affordability, and facilitating meaningful connections for memorable travel experiences.
            </p>
         
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6">
        <img src="4.png" alt="AboutUsPicture" className="w-full h-auto object-cover lg:w-3/4 lg:h-auto lg:mx-auto"/>
       </div>
      </div>
      
    </section>)
  );
}
