const Discover = () => {
  return (
    <main className="flex-1 flex overflow-hidden">
      {/* Sidebar Navigation (Contextual SideNavBar) */}
      <aside className="fixed left-0 top-16 bottom-0 w-80 flex flex-col z-40 overflow-y-auto bg-surface-container-low dark:bg-surface-container border-r border-outline-variant">
        <div className="p-6 border-b border-outline-variant">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined text-3xl">location_city</span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Singapore</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">48 Experiences Available</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-outline-variant flex justify-between items-center shadow-sm">
            <span className="font-label-md text-label-md text-secondary">Selected</span>
            <span className="bg-primary px-2 py-0.5 rounded-full text-white text-xs font-bold" id="selection-count">0</span>
          </div>
        </div>
        <nav className="flex-1 py-4">
          <div className="px-6 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-outline font-bold">Categories</span>
          </div>
          <a className="flex items-center gap-4 px-6 py-3 text-primary dark:text-inverse-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-transform translate-x-1" href="#">
            <span className="material-symbols-outlined">explore</span>
            <span className="font-label-md text-label-md">Discover All</span>
          </a>
          {/* ... other nav items */}
        </nav>
        <div className="p-6">
          <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-outline-variant transition-colors">
            <span className="material-symbols-outlined">group_add</span>
            Invite Friends
          </button>
        </div>
      </aside>

      {/* Main Content (Discovery Canvas) */}
      <section className="flex-1 ml-80 overflow-y-auto hide-scrollbar bg-background flex">
        {/* Left Column: Experience Lists */}
        <div className="w-full lg:w-[45%] p-gutter border-r border-outline-variant">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-headline-lg text-headline-lg">Places by Interest</h3>
              <a className="text-primary font-label-md text-label-md hover:underline" href="#">View map view</a>
            </div>
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="group bg-white border border-outline-variant rounded-xl overflow-hidden flex shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXvhuwjxfQqizPZ6EdFrYqJDbvZd4B41-LaTFPGhsi-ISypoz2Wgv9IIRk3t6O9_uNfcRjxmETljGSYGHqL_LH6H6oe3bYM7mr2zrBoL1lUgrLhTU-EnCCiLNKYEgurSOo4kWzIwU2ALZeupcDEXoxK9_hi9l4R82akylaFFwG1kOXMr9H61Ih564QpfQF2o2FUfbmknWK03droICDHnDZKfPWXX67x5t3hxfj6lKAhjnEhnf88-5FvvvJd6b6hU80jvYUlP11zTAr" alt="Gardens by the Bay" />
                  <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-on-surface">Sightseeing</div>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  {/* ... card content */}
                </div>
              </div>
              {/* ... other cards */}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map */}
        <div className="hidden lg:block lg:w-[55%] relative h-full bg-map-water">
          {/* ... map content */}
        </div>
      </section>
    </main>
  );
};

export default Discover;
