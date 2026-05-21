import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Preferences = () => {
  const navigate = useNavigate();
  const [budgetValue, setBudgetValue] = useState(250);

  const handleContinue = () => {
    // Logic to save preferences can be added here
    navigate('/discover');
  };

  return (
    <main className="flex-1 ml-80 p-margin-desktop bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">What interests you?</h1>
          <p className="font-body-lg text-body-lg text-secondary">
            Tailor your Singapore experience by selecting your primary travel vibes.
          </p>
        </header>
        <section className="space-y-12">
          {/* Interest Cards (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Culture Card */}
            <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-white hover:border-primary transition-all cursor-pointer shadow-sm active:scale-[0.98]">
              <img
                alt="Culture"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUL_LzHb0JvSPJuP6P1YZ-pH8wHiILGwkcKAzO9Y8_TJjiOd0CrUq8FAYSEzoWoiIbuXjRSdOAKLUhlPFga5P6-4Gdv1XkQ8A3KwwqcX5zbY0nCpHo7p2CROnuzLZbM8m56o55gaeJMWsacx8i0GdLZoGMCITNZOv7gRVa4byggDUOsI1kpJF-j4OryUYA79rf3cNPJh-CdU-8700F6EUmi0HbhY_nCicKFzB8l9xfzofJW8f_bQEHvyjTpn2JnvMRxES4qF8U7Vbk"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">temple_buddhist</span>
                  <input
                    className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                    type="checkbox"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Culture</h3>
                <p className="text-body-sm text-secondary">Temples, heritage trails, and local neighborhood stories.</p>
              </div>
            </div>
            {/* Nature Card */}
            <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-white hover:border-primary transition-all cursor-pointer shadow-sm active:scale-[0.98]">
              <img
                alt="Nature"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4lR-oe6OD_M6ozDNWeFqVRqALIRzRuvoSTkzUFXvboa5Pz6O_jpSbBINJQVwlaJg5aPu_UpzVYKF3P4ULWp-2rqokB0JIOn2Lz1H-eSABBOI1pbPm-qc4Z9rcvtiGf4Uoz5C0ony65XDOiIlgf_rmp84kBzV5uGrh0W8aroLAei4wg55hQv0_8Lt76hQp8Up-NPc2oLIbDIolLfjBny5LYnSyK3fiZPEIuvxYF7Y0z4fIo5LULBczzHsuu3bZ788OV-FdxsR7j5yc"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">park</span>
                  <input
                    className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                    type="checkbox"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Nature</h3>
                <p className="text-body-sm text-secondary">Botanical gardens, island trekking, and wildlife encounters.</p>
              </div>
            </div>
            {/* Modern Card */}
            <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-white hover:border-primary transition-all cursor-pointer shadow-sm active:scale-[0.98]">
              <img
                alt="Modern"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmMfE6L7oYB002nRozqDW5apXyIHwg9zmokWZvDSKVf7vFIj4XOp3UqDHnSHDvXmBvXFuEwxF0Rd4JsGPISMrkTokvxfNngbojxCSGKdYi9Of2IkO6DafVo1R1UZWtA4lqljbj654GBf4Q_qxi1U1dn74YYBCet7pc8Nn3fWakLLbp2xVxgMsP6hIOt0NaHnw-EtSC2vq-taUiWg2X07d2UYrNQhNJgafRr1ukBo7QeZ3X-ORaGUlLYgkdH_PabUFEbKw0P5imc6Fl"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">apartment</span>
                  <input
                    className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
                    type="checkbox"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Modern</h3>
                <p className="text-body-sm text-secondary">Architecture, luxury shopping, and rooftop dining.</p>
              </div>
            </div>
          </div>
          {/* Budget & Dietary Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
            {/* Budget Slider */}
            <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant">
              <div className="flex justify-between items-center mb-6">
                <label className="font-headline-md text-headline-md text-on-surface">Daily Budget</label>
                <span className="font-bold text-primary text-xl" id="budget-value">${budgetValue}</span>
              </div>
              <input
                className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer custom-slider"
                max="1000"
                min="50"
                onInput={(e) => setBudgetValue(e.currentTarget.valueAsNumber)}
                step="50"
                type="range"
                value={budgetValue}
              />
              <div className="flex justify-between mt-4 text-label-sm text-secondary">
                <span>Budget Friendly</span>
                <span>Luxury Travel</span>
              </div>
            </div>
            {/* Dietary Preferences */}
            <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant">
              <label className="font-headline-md text-headline-md text-on-surface block mb-6">Dietary Preferences</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface hover:border-primary transition-all text-label-md dietary-chip">Vegetarian</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface hover:border-primary transition-all text-label-md dietary-chip">Halal</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface hover:border-primary transition-all text-label-md dietary-chip">Gluten Free</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface hover:border-primary transition-all text-label-md dietary-chip">Seafood Allergy</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface hover:border-primary transition-all text-label-md dietary-chip">No Beef</button>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-16 flex justify-end items-center gap-6 border-t border-outline-variant pt-10">
          <button className="text-secondary hover:text-on-surface font-label-md text-label-md px-4 py-2">Skip for now</button>
          <button
            onClick={handleContinue}
            className="bg-primary text-white px-12 py-4 rounded-xl font-headline-md text-headline-md shadow-lg hover:bg-primary-container hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
          >
            Continue
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Preferences;
