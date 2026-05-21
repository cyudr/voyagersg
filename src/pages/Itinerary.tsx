import { Link } from "react-router-dom";
import { itineraryData } from "../data/itineraryData";

const Itinerary = () => {
  const budgetPercentage = (itineraryData.budget.spent / itineraryData.budget.estimatedTotal) * 100;

  const getIcon = (type: string) => {
    switch (type) {
      case "ACCOMMODATION":
        return "hotel";
      case "ART & CULTURE":
        return "palette";
      case "DINING":
        return "restaurant";
      case "SIGHTSEEING":
        return "photo_camera";
      case "LEISURE":
        return "directions_boat";
      case "SHOPPING":
        return "storefront";
      case "NEIGHBORHOOD":
        return "map";
      default:
        return "place";
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 bottom-0 w-80 flex flex-col z-40 overflow-y-auto bg-surface-container-low border-r border-outline-variant p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              explore
            </span>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">{itineraryData.tripName}</h2>
            <p className="font-body-sm text-body-sm text-secondary">{itineraryData.duration} • {itineraryData.time}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 mb-8">
          <Link
            to="/itinerary"
            className="flex items-center gap-3 p-3 rounded-lg text-primary font-bold border-r-4 border-primary bg-primary-container/10 transition-transform translate-x-1"
          >
            <span className="material-symbols-outlined">event_note</span>
            <span className="font-label-md text-label-md">Itinerary</span>
          </Link>
          {/* ... other nav links */}
        </nav>
        <div className="mt-auto bg-white p-4 rounded-xl border border-outline-variant shadow-sm">
          <h3 className="font-label-md text-label-md mb-2 text-secondary">BUDGET SUMMARY</h3>
          <div className="flex justify-between items-center mb-1">
            <span className="text-body-sm">Estimated Total</span>
            <span className="font-bold text-primary">€{itineraryData.budget.estimatedTotal}</span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-2 mb-4">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${budgetPercentage}%` }}></div>
          </div>
          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-container transition-colors font-label-md text-label-md active:scale-95">
            Finalize Itinerary
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-80 flex-1 p-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="font-headline-xl text-headline-xl mb-2">Your Personal Journey</h1>
              <p className="text-body-lg font-body-lg text-secondary max-w-2xl">
                We've curated a balanced mix of iconic landmarks, hidden gems, and leisurely breaks to ensure your Paris
                experience is truly unforgettable.
              </p>
            </div>
            <Link
              to="/preferences"
              className="flex items-center gap-2 border border-outline text-on-surface-variant px-6 py-3 rounded-full hover:bg-surface-container transition-colors font-label-md text-label-md"
            >
              <span className="material-symbols-outlined">tune</span>
              Adjust Preferences
            </Link>
          </header>
          
          {/* Itinerary Day Cards */}
          <div className="space-y-8">
            {itineraryData.days.map((day) => (
              <div key={day.day} className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline-lg text-headline-lg text-primary">Day {day.day}</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">{day.theme}</h2>
                </div>
                
                {/* Activities */}
                <div className="space-y-4">
                  {day.activities.map((activity) => (
                    <div key={activity.title} className="flex gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{getIcon(activity.type)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-on-surface">{activity.title}</h4>
                            <p className="text-sm text-secondary">{activity.time} • {activity.duration}</p>
                          </div>
                          <p className="font-bold text-primary">€{activity.cost}</p>
                        </div>
                        <p className="text-sm text-secondary mt-1">{activity.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Itinerary;
