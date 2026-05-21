import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBifIRtCIykO0AE4gQVjX0N8Yc9KduLN4vVlcMF7UmZqHDcwZl4ZNLHHQFZnv28cgeXffykFxVRJwy1FFzPCBAwLHUK3VSan0K5LZtNm44UIBeFoi4Pe3D6i5Q-yVUBAYOvfpFOECRg7_gW2NuYdMqezBESfKGaW86Q9h5bjtKmRWvUlU0-09_GUmQIo28zsUmxuNMwg5vZKwlimg_EjVnxBDvYe614FgT3XUukp2auD9cpelOKUNO-EvSAx1mjeSiZ-j9lkyLYhEWM"
            alt="A breathtaking high-angle view of Singapore's Marina Bay Sands and Gardens by the Bay during the golden hour."
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 w-full max-w-4xl px-margin-mobile text-center">
          <h1 className="font-headline-xl text-headline-xl text-white mb-8 drop-shadow-lg">Where to next?</h1>
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-outline-variant">
              <span className="material-symbols-outlined text-secondary mr-3">search</span>
              <input
                className="w-full py-4 border-none focus:ring-0 text-body-lg font-body-lg text-on-surface"
                placeholder="Enter destination (e.g. Singapore, Paris...)"
                type="text"
              />
            </div>
            <Link
              to="/preferences"
              className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-primary-container transition-all active:scale-95"
            >
              Start Planning
            </Link>
          </div>
          <p className="text-white mt-6 font-body-md text-body-md drop-shadow">
            Personalized itineraries powered by local insights
          </p>
        </div>
      </section>

      {/* Popular Destinations (Bento Grid) */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Popular Destinations</h2>
            <p className="text-secondary font-body-md mt-2">Curated by our community of travelers</p>
          </div>
          <Link to="/discover" className="text-primary font-label-md text-label-md flex items-center hover:underline">
            View all <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </Link>
        </div>
        <div className="bento-grid">
          <div className="bento-item-1 relative group overflow-hidden rounded-xl border border-outline-variant">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBdIIz3XwqAY0zl_nop-u5wWKLPcEBWJ37RWos0BHJgKyG-VdL-1Kr_uWDPqo5Vpq-MgvVNxhRCWTvURq6LXwC4odyEQQtbIY6IFZ2TzgJVeeaE_onnQK4cbkhoPHnainJigPMfXJeGwoPSpItOVav452fSRIHZf2e7As9ghuvWyIOLQsPcWw7xXwbP9j4apsuFgwyjfD-rvd_aRTAFXpeVozbWkD46FM2mURVjndwLKteePRiW6dCkbHLffPiRx-1vKTltkb5CnUj"
              alt="A vibrant street scene in Tokyo at night, filled with glowing neon signs..."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="text-white/80 font-label-sm text-label-sm uppercase tracking-widest mb-2">Japan</span>
              <h3 className="text-white font-headline-md text-headline-md">Tokyo Chronicles</h3>
            </div>
          </div>
          <div className="bento-item-2 relative group overflow-hidden rounded-xl border border-outline-variant">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Es9kXdbITqINxChdooQdJzjtRLqHp-QTHvpoecIKS1IkrRjFNvUTF2_qzoxzU207_ZLR_gV2MA1WSQLDgH-1gtv9fXXBvklnUE-A3RAF9K7GATNH7iFi_d5erCeIHfhrfeVUTbLSPd6Af1HPUTPyZNbrinkezzm0BQ3B0BSrxCBTCDM8IE356tUMc6qa0PT_X5QsrteBNt787djuRK5tcb94sqmxdhIAH5yc9RNUAv_uyQp7qWktSz2y7M3k9C_iDlcNINu_vQ5t"
              alt="An elegant afternoon view of the Eiffel Tower seen from a quiet Parisian side street..."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-white/80 font-label-sm text-label-sm uppercase tracking-widest mb-1">France</span>
              <h3 className="text-white font-headline-md text-headline-md">Parisian Dreams</h3>
            </div>
          </div>
          <div className="bento-item-3 relative group overflow-hidden rounded-xl border border-outline-variant">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQ67cteP0d7MGKbta6WUrO47foOkrj-bDkWWdpF51K2Auk1N8RuBHOuir1SixMh5D8cPlJEQ2qSSKhZ1oMT-_cGs3WgMNSbF3dMG5Kh2OfZqzQfplVA7nnRz1R2yU2-8iyypE56feyuNlo8bYY2V64Xt5vQI746tGJMsDCweQ17QIi0UGsTH9TRSZyzAkJBIPuufNKWovSjZlswZG3P8rheVYURCMSYhzllK0pvGkdX4Fnuq34vPjtcZch9Z_8PsnpuikDVnVMA6f"
              alt="The crystal-clear turquoise waters of a secluded bay in Amalfi, Italy..."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-label-md text-label-md">Amalfi Coast</h3>
            </div>
          </div>
          <div className="bento-item-4 relative group overflow-hidden rounded-xl border border-outline-variant">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxAh6cSQivaYPC5-yMmvZVUH8e0FmGwhE9KunfVXkcTwI9rbGip8nD_G057P4WZWrixV3mbfuOfsPCoxBEyFWfLN4ZFhrTyR0Kdtb3mSzvYgXQB2xkfN8AYJcogGAXPCsU7YaLQRMlPYwPxoJD9w8NRq7J6LmJQjCV3rVVpaKFkl4QjkbnD9qHS2Rk6IK3g1QIGg01KForBT_AqfRMH09LEMUoCBELaysp-RLyS1kzscpdkCqBUYu4seIyVCy_z75lJxpoiyK6LeTu"
              alt="Modern high-rise skyscrapers in Dubai Marina under a clear blue sky..."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-label-md text-label-md">Dubai Skyline</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-surface-container-low py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">How it Works</h2>
          <p className="text-secondary font-body-md max-w-2xl mx-auto">
            From a blank map to a detailed schedule in three simple steps. We handle the logistics, you enjoy the journey.
          </p>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">interests</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Choose Interests</h3>
            <p className="text-secondary font-body-sm text-body-sm">
              Select from categories like Art, Food, Adventure, or Nightlife to help our engine understand your vibe.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">payments</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Set Budget</h3>
            <p className="text-secondary font-body-sm text-body-sm">
              From budget-friendly backpacking to ultra-luxury escapes, we tailor every recommendation to your wallet.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">map</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Get Itinerary</h3>
            <p className="text-secondary font-body-sm text-body-sm">
              Receive a minute-by-minute plan with maps, booking links, and local tips ready to go.
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/preferences"
            className="bg-primary text-white px-12 py-4 rounded-lg font-headline-md text-headline-md shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free Trip
          </Link>
        </div>
      </section>

      {/* Newsletter / Community Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary-container rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-20 md:w-3/5">
            <h2 className="font-headline-xl text-headline-xl text-on-primary-container mb-6">Join 50,000+ Voyagers</h2>
            <p className="text-on-primary-container/80 font-body-lg text-body-lg mb-8">
              Get weekly travel guides, hidden gem discoveries, and exclusive travel deals delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-white text-body-md"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="md:w-2/5 h-64 md:h-full min-h-[400px] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYkcK6iyh2gxHtjtRumf5HlSuzpapLr7I80OP4_Z6m77iQY749MUVWbbNZ98e1lWO95U4WLKeBEsiCBp74R2O_fiyjQ7SD60kJJGWXK0P48hp_uktz6u7FRGnkQzMH34QKQk3LY774BaOWQ1t0Vz0cwuo9lBPqVQVaB0Mc3LWvnbbkeqZDJIRbS6GAusqlJnFXGQhuDHV-3ihk2k5ndXRZKirbit2LDmNCy992n6abHrjp10tUOUS-AVCJplbpaZHcJy5tHWXB8zk"
              alt="A close-up of a person's hands holding a classic vintage film camera..."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
