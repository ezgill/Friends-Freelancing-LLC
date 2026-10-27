import React, { useState, useRef } from 'react';
import {
  Phone,
  ShieldCheck,
  Check,
  Sparkles,
  Clock,
  Star,
  X,
  Menu,
  ArrowRight,
  DollarSign,
  Scissors,
  Droplets,
  Layers,
  Wrench,
  CheckCircle2,
  Calendar,
  Camera,
  Tag,
  Truck,
  Sprout,
  Hammer,
  Paintbrush,
  Trash2,
} from 'lucide-react';

export default function App() {
  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Before & After comparison slider state (percentage: 0 - 100)
  const [sliderPos, setSliderPos] = useState(50);
  const isDraggingSlider = useRef(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Quote Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Weekly / Bi-Weekly Lawn Mowing & Edging');
  const [modalNotes, setModalNotes] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  // Slider drag listeners
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(Math.round(pct));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Open modal with preselected parameters
  const openQuoteWithDetails = (serviceName?: string, customNote?: string, code?: string) => {
    if (serviceName) setModalService(serviceName);
    if (customNote) setModalNotes(customNote);
    if (code) setPromoCode(code);
    setIsModalOpen(true);
  };

  // Photo upload handling
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit quote form
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
        setPhotoPreview(null);
        setPhotoName(null);
        setFormData({ name: '', phone: '', address: '', notes: '' });
      }, 3500);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-emerald selection:text-white">
      {/* ================= 1. TOP ANNOUNCEMENT BAR ================= */}
      <div className="bg-brand-forest text-brand-cream/90 text-xs py-2 px-4 border-b border-brand-moss">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-emerald/20 text-brand-lime border border-brand-emerald/30">
              🌱 Now Booking
            </span>
            <span>
              Spring & Summer Lawn Maintenance ·{' '}
              <strong className="text-white">15% Off</strong> First Month for Recurring Clients!
            </span>
          </div>
          <div className="flex items-center gap-6 text-[12px]">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
              Licensed & Insured LLC
            </span>
            <a
              href="tel:8038160682"
              className="hover:text-brand-lime font-bold transition-colors flex items-center gap-1 text-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-lime" />
              Call/Text: (803) 816-0682
            </a>
          </div>
        </div>
      </div>

      {/* ================= 2. STICKY TOP NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Bespoke Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-forest flex items-center justify-center p-2 text-brand-emerald shadow-md shadow-brand-forest/10 group-hover:bg-brand-moss transition-colors">
              <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#4ADE80" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
                <path d="M14 36C18 31 24 33 28 35L36 39C40 41 45 37 49 32" stroke="#F7F5EE" strokeWidth="3" strokeLinecap="round" />
                <path d="M22 28L30 35C33 37.5 37 36 39 34L45 28" stroke="#F7F5EE" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M32 12C32 12 42 18 42 27C42 33 37 37 32 37C27 37 22 33 22 27C22 18 32 12 32 12Z" fill="#22C55E" />
                <path d="M32 14V34" stroke="#0E2919" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 48L22 42L25 48" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29 48L32 40L35 48" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M39 48L42 42L46 48" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="block font-serif font-bold text-xl sm:text-2xl text-brand-forest tracking-tight leading-none whitespace-nowrap">
                Friends Freelancing
              </span>
              <span className="text-[11px] font-semibold text-brand-moss uppercase tracking-widest block mt-0.5">
                Landscaping & Property Services LLC
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-brand-charcoal/80">
            <a href="#services" className="hover:text-brand-emerald transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#transformations" className="hover:text-brand-emerald transition-colors whitespace-nowrap">
              Transformations
            </a>
            <a href="#reviews" className="hover:text-brand-emerald transition-colors whitespace-nowrap">
              Reviews
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8038160682"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-brand-forest/20 text-brand-forest text-xs font-bold hover:bg-brand-sand transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brand-emerald" />
              (803) 816-0682
            </a>
            <button
              onClick={() => openQuoteWithDetails()}
              className="px-5 py-2.5 rounded-xl bg-brand-forest text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-forest/20 hover:bg-brand-moss transition-all hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-4 h-4 text-brand-lime" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-brand-forest hover:bg-brand-sand transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-cream border-t border-brand-sand px-6 py-6 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-brand-forest"
            >
              Services
            </a>
            <a
              href="#transformations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-brand-forest"
            >
              Before & After Transformations
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-brand-forest"
            >
              Reviews & Proof
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:8038160682"
                className="w-full py-3 text-center rounded-xl border border-brand-forest font-bold text-brand-forest text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-emerald" />
                Call/Text: (803) 816-0682
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteWithDetails();
                }}
                className="w-full py-3 text-center rounded-xl bg-brand-forest text-white font-bold text-sm shadow-md"
              >
                Request 15-Minute Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= 3. HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden grass-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Copy & Value Proposition */}
            <div className="lg:col-span-7">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-sand shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-emerald animate-pulse"></span>
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">
                  Reliable Local Neighborhood Crew
                </span>
                <span className="text-brand-charcoal/30">|</span>
                <div className="flex items-center text-brand-amber text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current text-brand-amber mr-1" />
                  4.9/5 <span className="ml-1 text-brand-charcoal/70 font-normal text-[11px]">(180+ Yards)</span>
                </div>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-forest leading-[1.1] tracking-tight">
                Your lawn’s best friends.{' '}
                <span className="italic font-normal text-brand-moss underline decoration-brand-emerald/50 decoration-wavy">
                  Honest work
                </span>
                , crisp lines.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-brand-charcoal/75 max-w-2xl font-normal leading-relaxed">
                Founded by two dedicated local friends who take genuine pride in every yard. From weekly precision
                striped mowing, weed eating, and razor edging to mulch spreading, gutter flushes, and odd jobs.
              </p>

              {/* Quick Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => openQuoteWithDetails()}
                  className="px-8 py-4 rounded-xl bg-brand-forest text-white font-bold text-base shadow-xl shadow-brand-forest/20 hover:bg-brand-moss transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <span>Get Free 15-Min Estimate</span>
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <a
                  href="#transformations"
                  className="px-6 py-4 rounded-xl bg-white border border-brand-sand font-bold text-brand-forest text-base hover:bg-brand-sand/60 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-brand-emerald" />
                  See Before & Afters
                </a>
              </div>

              {/* Feature Highlights Bar */}
              <div className="mt-10 pt-8 border-t border-brand-sand grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/15 flex items-center justify-center text-brand-forest font-bold">
                    <Check className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-forest">Always On Time</h4>
                    <p className="text-xs text-brand-charcoal/60">Guaranteed cut days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/15 flex items-center justify-center text-brand-forest font-bold">
                    <DollarSign className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-forest">Zero Hidden Fees</h4>
                    <p className="text-xs text-brand-charcoal/60">Transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/15 flex items-center justify-center text-brand-forest font-bold">
                    <ShieldCheck className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-forest">Gate Safe Policy</h4>
                    <p className="text-xs text-brand-charcoal/60">Latches checked for pets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Stylized Art Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white p-4 sm:p-6 shadow-2xl border border-brand-sand">
                <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-[#bbf7d0]/40 via-[#86efac]/20 to-[#f0fdf4] relative border border-brand-sand/80 flex items-center justify-center">
                  <svg viewBox="0 0 500 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="420" cy="80" r="45" fill="#FEF08A" opacity="0.8" />
                    <circle cx="420" cy="80" r="60" fill="#FEF08A" opacity="0.3" />

                    <path
                      d="M-20 250 C40 210, 100 240, 160 210 C220 180, 280 230, 360 190 C420 160, 480 200, 520 180 L520 400 L-20 400 Z"
                      fill="#14532D"
                      opacity="0.25"
                    />
                    <path
                      d="M-20 270 C60 230, 140 260, 220 230 C300 200, 380 250, 520 220 L520 400 L-20 400 Z"
                      fill="#166534"
                      opacity="0.4"
                    />

                    <path d="M-20 280 L520 260 L520 400 L-20 400 Z" fill="#15803D" />

                    <polygon points="50,400 120,400 260,270 200,270" fill="#16A34A" opacity="0.65" />
                    <polygon points="170,400 240,400 380,270 320,270" fill="#16A34A" opacity="0.65" />
                    <polygon points="290,400 360,400 500,270 440,270" fill="#16A34A" opacity="0.65" />
                    <polygon points="410,400 480,400 540,340 540,300" fill="#16A34A" opacity="0.65" />

                    <path d="M-10 370 Q140 330 240 370 T510 350 L510 400 L-10 400 Z" fill="#451A03" opacity="0.85" />
                    <circle cx="80" cy="380" r="14" fill="#78716C" />
                    <circle cx="105" cy="385" r="11" fill="#A8A29E" />
                    <circle cx="130" cy="378" r="16" fill="#78716C" />
                    <circle cx="160" cy="382" r="13" fill="#D6D3D1" />
                    <circle cx="190" cy="385" r="15" fill="#78716C" />

                    <circle cx="430" cy="290" r="35" fill="#166534" />
                    <circle cx="455" cy="275" r="28" fill="#22C55E" />
                    <circle cx="410" cy="275" r="25" fill="#4ADE80" />

                    <g transform="translate(180, 210) scale(0.85)">
                      <circle cx="60" cy="95" r="24" fill="#1E293B" />
                      <circle cx="60" cy="95" r="14" fill="#94A3B8" />
                      <circle cx="165" cy="95" r="16" fill="#1E293B" />
                      <circle cx="165" cy="95" r="8" fill="#94A3B8" />
                      <rect x="50" y="80" width="130" height="20" rx="6" fill="#0F172A" />
                      <rect x="40" y="55" width="90" height="30" rx="8" fill="#15803D" />
                      <path d="M70 55 L85 25 L105 25 L105 55 Z" fill="#334155" />
                      <path d="M55 55 L55 5 L65 5 L65 55" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
                      <line x1="95" y1="40" x2="115" y2="20" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                    </g>
                  </svg>

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-brand-sand flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald"></span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-brand-forest">Fast Quotes</div>
                      <div className="text-xs font-semibold text-brand-charcoal">Under 15 Mins</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-brand-forest text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-emerald/20 flex items-center justify-center text-brand-lime font-bold">
                      ★
                    </div>
                    <div>
                      <div className="text-xs font-bold">Clean Edge Guarantee</div>
                      <div className="text-[10px] text-brand-cream/70">Surfaces blown spotless every visit</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-brand-cream rounded-xl border border-brand-sand flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-brand-forest text-brand-lime flex items-center justify-center font-bold text-xs">
                      LLC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-forest">Friends Freelancing LLC</p>
                      <p className="text-[11px] text-brand-charcoal/60">Marcus & Leo · Owner-Operated</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openQuoteWithDetails()}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-emerald text-brand-forest font-bold text-xs hover:bg-brand-lime transition-colors"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. COMPREHENSIVE SERVICES GRID ================= */}
      <section id="services" className="py-20 bg-white border-y border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-emerald/15 text-brand-moss border border-brand-emerald/20">
              Complete Property Care
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-forest mt-4">
              Everything Your Lawn Needs, Handled by People You Can Count On.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70">
              Straight from our neighborhood flyer to your yard. We combine scheduled recurring turf maintenance with
              flexible outdoor freelance odd jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand hover:border-brand-emerald/50 transition-all hover:shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Scissors className="w-7 h-7 text-brand-lime" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-2">Mowing, Trimming & Edging</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Precision striped mowing at proper seasonal heights, string-trimming fence lines, razor-sharp hard edging
                  along sidewalks and curbs, and complete blower debris clearance.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-brand-sand text-xs font-semibold text-brand-forest">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Weekly or bi-weekly scheduled routing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Razor vertical curb & sidewalk edging
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> 100% grass clippings blown off driveways
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand hover:border-brand-emerald/50 transition-all hover:shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Layers className="w-7 h-7 text-brand-lime" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-2">Mulch & Flowerbed Care</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Revitalize your home's curb appeal. We trench sharp spade borders, pull weeds, install commercial fabric,
                  and deliver & spread fresh premium hardwood mulch or long-leaf pine straw.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-brand-sand text-xs font-semibold text-brand-forest">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Dark brown, black, red, or natural cedar
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Hand-cut trench edging prevents washouts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Weed barrier and soil dressing available
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand hover:border-brand-emerald/50 transition-all hover:shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Sparkles className="w-7 h-7 text-brand-lime" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-2">Hedge & Shrub Shaping</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Keep your ornamental shrubs, boxwoods, and privacy hedges neatly sculpted and healthy. We remove deadwood,
                  shape growth cleanly, and haul away all trimmings.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-brand-sand text-xs font-semibold text-brand-forest">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Precision geometric or natural rounded shaping
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Low branch tree elevation (up to 12ft)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Complete tarp collection & green waste disposal
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand hover:border-brand-emerald/50 transition-all hover:shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Calendar className="w-7 h-7 text-brand-lime" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-2">Spring & Fall Cleanups</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Heavy seasonal leaf clearing, storm stick collection, thatch removal, core aeration prep, and winter garden
                  cutbacks to prepare your turf for peak springtime vitality.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-brand-sand text-xs font-semibold text-brand-forest">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> High-powered leaf vacuuming & bagging
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Deep bed blowouts removing buried debris
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Curbside pickup or on-site hauling
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand hover:border-brand-emerald/50 transition-all hover:shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-forest text-brand-lime flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Droplets className="w-7 h-7 text-brand-lime" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-forest mb-2">Pressure Washing</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  Blast away slippery green moss, mildew, oil drips, and dirt buildup. We restore driveways, concrete
                  walkways, brick patios, stone pavers, and wooden decks.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-brand-sand text-xs font-semibold text-brand-forest">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Commercial rotating surface cleaner (no streaks)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Eco-friendly biodegradable cleaning solutions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0" /> Safe for pets, plants, and grass borders
                </li>
              </ul>
            </div>

            {/* Service 6: Freelance Odd Jobs */}
            <div className="p-8 rounded-3xl bg-brand-forest text-white border border-brand-forest transition-all hover:shadow-2xl group flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-brand-emerald/20 rounded-full blur-2xl"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-brand-lime border border-white/20 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Wrench className="w-7 h-7 text-brand-lime" />
                </div>
                <span className="text-xs font-bold text-brand-lime uppercase tracking-widest">
                  Neighborhood Favorite
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 mt-1">Freelance Property Handyman</h3>
                <p className="text-sm text-brand-cream/80 leading-relaxed mb-6">
                  Got a job other companies say is "too small"? Need an extra set of hands? We tackle gutter cleanouts,
                  yard junk & branch hauling, minor fence repairs, and outdoor odd jobs.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-white/15 text-xs font-semibold text-brand-cream/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-lime shrink-0" /> Gutter clearing & downspout flushing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-lime shrink-0" /> Yard junk, branch & old furniture hauling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-lime shrink-0" /> Storm preparation & emergency yard tidy-up
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Flyer Callout Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-brand-sand/70 border border-brand-sand flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-emerald text-brand-forest flex items-center justify-center font-bold text-xl shrink-0">
                <Tag className="w-6 h-6 text-brand-forest" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest text-base">Have our neighborhood flyer in hand?</h4>
                <p className="text-xs text-brand-charcoal/70">
                  Mention "FLYER-FRIENDS" when you call or request an estimate for an extra $10 off any service.
                </p>
              </div>
            </div>
            <button
              onClick={() => openQuoteWithDetails('Flyer Special', 'Claiming $10 flyer coupon', 'FLYER-FRIENDS')}
              className="px-5 py-2.5 rounded-xl bg-brand-forest text-white font-bold text-xs hover:bg-brand-moss transition-colors whitespace-nowrap"
            >
              Claim Flyer Discount
            </button>
          </div>
        </div>
      </section>

      {/* ================= 5. INTERACTIVE BEFORE & AFTER SLIDER ================= */}
      <section id="transformations" className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-forest text-white">
                Visual Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-forest mt-3">
                Real Transformations. Real Pride.
              </h2>
            </div>
            <p className="text-brand-charcoal/70 max-w-md mt-4 md:mt-0 text-sm">
              Drag the interactive slider below to see how Friends Freelancing turns overgrown, neglected lawns into
              crisp, clean neighborhood showpieces.
            </p>
          </div>

          {/* Slider Widget */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none bg-brand-forest">
            <div
              ref={sliderContainerRef}
              onMouseMove={(e) => {
                if (isDraggingSlider.current || e.buttons === 1) handleSliderMove(e.clientX);
              }}
              onTouchMove={handleTouchMove}
              className="relative h-80 sm:h-[460px] w-full overflow-hidden cursor-ew-resize"
            >
              {/* "AFTER" (Full width under layer) */}
              <div className="absolute inset-0 w-full h-full">
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="1000" height="600" fill="#E0F2FE" />
                  <circle cx="850" cy="120" r="80" fill="#FDE047" opacity="0.6" />
                  <rect x="550" y="140" width="350" height="220" fill="#F8FAFC" />
                  <polygon points="530,140 725,50 920,140" fill="#334155" />
                  <rect x="0" y="240" width="1000" height="80" fill="#15803D" />
                  <rect x="0" y="300" width="1000" height="300" fill="#16A34A" />
                  <polygon points="100,600 220,600 480,300 360,300" fill="#22C55E" />
                  <polygon points="340,600 460,600 720,300 600,300" fill="#22C55E" />
                  <polygon points="580,600 700,600 960,300 840,300" fill="#22C55E" />
                  <path d="M0 500 Q 250 420, 500 500 T 1000 480 L 1000 600 L 0 600 Z" fill="#271810" />
                  <circle cx="150" cy="460" r="45" fill="#15803D" />
                  <circle cx="210" cy="470" r="35" fill="#22C55E" />
                  <circle cx="750" cy="460" r="45" fill="#15803D" />
                  <circle cx="810" cy="470" r="35" fill="#4ADE80" />
                </svg>
                <span className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-brand-forest/90 text-brand-lime font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-brand-lime/30">
                  AFTER: Friends Freelancing LLC
                </span>
              </div>

              {/* "BEFORE" (Clipped overlay controlled by sliderPos) */}
              <div
                className="absolute inset-0 h-full overflow-hidden border-r-2 border-white pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-[1000px] h-full" style={{ width: '1000px' }}>
                  <svg
                    className="w-full h-full object-cover"
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="1000" height="600" fill="#CBD5E1" />
                    <rect x="550" y="140" width="350" height="220" fill="#94A3B8" />
                    <polygon points="530,140 725,50 920,140" fill="#475569" />
                    <rect x="0" y="240" width="1000" height="360" fill="#71717A" />
                    <rect x="0" y="280" width="1000" height="320" fill="#78716C" />
                    <path
                      d="M50 350 L80 300 L110 360 L140 290 L170 370"
                      stroke="#A8A29E"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <path
                      d="M300 450 L320 380 L350 460 L380 370 L420 450"
                      stroke="#57534E"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <path d="M0 480 Q 250 420, 500 490 T 1000 460 L 1000 600 L 0 600 Z" fill="#57534E" />
                    <circle cx="150" cy="450" r="55" fill="#44403C" />
                    <circle cx="230" cy="440" r="45" fill="#57534E" />
                    <circle cx="120" cy="380" r="8" fill="#FACC15" />
                    <circle cx="280" cy="420" r="6" fill="#FACC15" />
                    <circle cx="450" cy="390" r="7" fill="#FACC15" />
                  </svg>
                </div>
                <span className="absolute bottom-6 left-6 px-4 py-1.5 rounded-full bg-black/75 text-white/90 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                  BEFORE: Overgrown & Patchy
                </span>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none -ml-0.5"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-forest shadow-xl flex items-center justify-center text-brand-forest font-bold text-xs">
                  ↔
                </div>
              </div>

              {/* Native Range input layered for seamless dragging & accessible keyboard control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                onMouseDown={() => (isDraggingSlider.current = true)}
                onMouseUp={() => (isDraggingSlider.current = false)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after transformation slider"
              />
            </div>
          </div>

          {/* Quick Transformation Stat Strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-sm">
              <div className="text-3xl font-serif font-bold text-brand-forest">500+</div>
              <div className="text-xs text-brand-charcoal/60 font-semibold mt-1">Yards Serviced</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-sm">
              <div className="text-3xl font-serif font-bold text-brand-emerald">100%</div>
              <div className="text-xs text-brand-charcoal/60 font-semibold mt-1">Satisfaction Guarantee</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-sm">
              <div className="text-3xl font-serif font-bold text-brand-forest">0</div>
              <div className="text-xs text-brand-charcoal/60 font-semibold mt-1">Missed Scheduled Cuts</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-sm">
              <div className="text-3xl font-serif font-bold text-brand-forest">15 Min</div>
              <div className="text-xs text-brand-charcoal/60 font-semibold mt-1">Avg. Quote Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. ABOUT / THE "FRIENDS FREELANCING" STORY ================= */}
      <section className="py-24 bg-white border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Custom Graphic / Founder Seal */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl bg-brand-cream border border-brand-sand p-8 text-center relative overflow-hidden">
                <div className="w-32 h-32 mx-auto rounded-full bg-brand-forest text-brand-emerald flex items-center justify-center p-4 shadow-xl mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    <circle cx="50" cy="50" r="46" stroke="#4ADE80" strokeWidth="3" strokeDasharray="4 4" />
                    <path
                      d="M25 55 C35 45 42 48 50 52 L65 58 C72 61 78 54 82 46"
                      stroke="#F7F5EE"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50 18 C50 18 64 27 64 40 C64 48 58 55 50 55 C42 55 36 48 36 40 C36 27 50 18 50 18Z"
                      fill="#22C55E"
                    />
                  </svg>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-forest">Two Friends, One Promise</h3>
                <p className="text-xs font-bold text-brand-emerald uppercase tracking-widest mt-1">
                  Established LLC · Local Crew
                </p>

                <p className="text-sm text-brand-charcoal/70 mt-4 leading-relaxed">
                  "We didn't start Friends Freelancing to be a faceless corporate franchise. We started it because we love
                  working outdoors, doing honest work we're proud of, and being the crew our neighbors can count on week
                  after week."
                </p>

                <div className="mt-6 pt-6 border-t border-brand-sand flex justify-center items-center gap-6">
                  <div>
                    <div className="font-serif font-bold text-lg text-brand-forest">Marcus & Leo</div>
                    <div className="text-[11px] text-brand-charcoal/60">Co-Founders & Operators</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy and Guarantees */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-sand text-brand-forest">
                Our Neighborhood Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-forest">
                Why Neighbors Call Friends Freelancing First.
              </h2>
              <p className="text-base text-brand-charcoal/75 leading-relaxed">
                Big lawn care conglomerates treat yards like numbers on a spreadsheet. They show up late, damage sprinkler
                heads, leave gates unlatched for dogs to run out, and blow grass clippings into your freshly planted flower beds.
              </p>
              <p className="text-base text-brand-charcoal/75 leading-relaxed">
                At <strong>Friends Freelancing LLC</strong>, the owners are directly on the mowers. We know your name,
                we remember how high you like your turf cut, and we treat your property like our own family's home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-sand">
                  <div className="font-bold text-brand-forest text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Always Closed Gate Check
                  </div>
                  <p className="text-xs text-brand-charcoal/60 mt-1">We photograph the shut latch before our truck pulls away.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-sand">
                  <div className="font-bold text-brand-forest text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Sharp Blades Every Monday
                  </div>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Clean knife cuts prevent brown grass tip tearing.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-sand">
                  <div className="font-bold text-brand-forest text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Direct Text Communication
                  </div>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Weather delay? We text you directly with the rescheduled time.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-sand">
                  <div className="font-bold text-brand-forest text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Flexible Odd-Job Help
                  </div>
                  <p className="text-xs text-brand-charcoal/60 mt-1">Need bags of soil moved or limbs hauled? Just ask our crew.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. TESTIMONIALS / NEIGHBORHOOD REVIEWS ================= */}
      <section id="reviews" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center text-brand-amber text-lg mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-brand-amber" />
              ))}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
              Word on the Street
            </h2>
            <p className="text-sm text-brand-charcoal/70 mt-2">
              Read what your actual neighbors say on Google and Nextdoor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-brand-sand shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-brand-amber text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-amber" />
                  ))}
                </div>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed italic">
                  "These young men did a wonderful job for me. They showed up when they said they would, they did what was asked and worked very hard in this heat. I highly recommend!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-sand flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-lime font-bold flex items-center justify-center text-xs">
                  NL
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-forest">Nanette Ward Lourie</h4>
                  <p className="text-[11px] text-brand-charcoal/60">Neighborhood Homeowner · Yard Maintenance</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-sand shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-brand-amber text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-amber" />
                  ))}
                </div>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed italic">
                  "They moved some furniture for me today and they did a fantastic job. They have good manners and go above and beyond. I highly recommend this group!!!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-sand flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-emerald text-brand-forest font-bold flex items-center justify-center text-xs">
                  PF
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-forest">Pam Fields</h4>
                  <p className="text-[11px] text-brand-charcoal/60">Local Resident · Freelance Moving & Property Help</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-sand shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-brand-amber text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-amber" />
                  ))}
                </div>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed italic">
                  "Marcus and Leo did an unbelievable job on our lawn and flower beds. Razor-sharp edging along the driveway, fresh pine straw spread, and not a single stray clipping left behind. Punctual, polite, and very reasonable rates!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-sand flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-lime font-bold flex items-center justify-center text-xs">
                  DV
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-forest">Darrell & Karen Vance</h4>
                  <p className="text-[11px] text-brand-charcoal/60">West Meadows · Lawn Care & Pine Straw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. FINAL HIGH-CONVERTING CTA BANNER ================= */}
      <section className="py-16 bg-brand-forest text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-emerald/20 text-brand-lime border border-brand-emerald/30 mb-4">
            Ready for a Clean Yard?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold max-w-2xl mx-auto">
            Let Friends Handle the Heavy Lifting This Season.
          </h2>
          <p className="text-brand-cream/80 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Get an upfront quote in under 15 minutes. No hassle, no contract lock-in, just beautiful outdoor spaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => openQuoteWithDetails()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-emerald text-brand-forest font-extrabold text-sm shadow-xl hover:bg-brand-lime transition-all"
            >
              Request Fast Free Quote
            </button>
            <a
              href="tel:8038160682"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-lime" />
              Call/Text (803) 816-0682
            </a>
          </div>
        </div>
      </section>

      {/* ================= 9. FOOTER ================= */}
      <footer className="bg-brand-charcoal text-brand-cream/80 py-16 border-t border-brand-moss">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald flex items-center justify-center text-brand-forest font-bold">
                  FL
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-white block leading-tight">Friends Freelancing</span>
                  <span className="text-[10px] text-brand-lime uppercase tracking-widest font-semibold">
                    LLC · Landscaping
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-cream/60 leading-relaxed">
                Registered LLC providing residential & commercial landscaping, lawn care, pressure washing, and outdoor
                freelance property maintenance.
              </p>
              <div className="text-xs font-semibold text-brand-lime flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-lime" /> Fully Licensed & Insured
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-brand-lime transition-colors">
                    All Lawn Services
                  </a>
                </li>
                <li>
                  <a href="#transformations" className="hover:text-brand-lime transition-colors">
                    Before & After Showcase
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-brand-lime transition-colors">
                    Reviews & Proof
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-xs text-brand-cream/70">
                <li>Mulching</li>
                <li>Lawn Care</li>
                <li>Moving</li>
                <li>Flower beds</li>
                <li>Deck Repair</li>
                <li>Hedge Trimming</li>
                <li>Painting</li>
                <li>Junk Removal</li>
                <li>And more....</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Contact Our Crew</h4>
              <p className="text-xs text-brand-cream/70 mb-2">Have a question or need emergency storm cleanup?</p>
              <p className="text-sm font-bold text-white mb-1">Phone: (803) 816-0682</p>
              <p className="text-xs text-brand-cream/70 mb-3">Email: crew@friendsfreelancing.com</p>
              <p className="text-[11px] text-brand-cream/50">
                Hours: Mon - Sat: 7:00 AM – 7:30 PM
                <br />
                Sunday: Emergency & Quotes
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/50">
            <div>© {new Date().getFullYear()} Friends Freelancing LLC. All Rights Reserved.</div>
            <div className="flex gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Neighbor Guarantee</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= 10. INTERACTIVE PHOTO ESTIMATE MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-forest/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-brand-sand">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-brand-charcoal/50 hover:text-brand-forest p-1 rounded-lg"
              aria-label="Close quote modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">Quick Response</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest mt-1">
                Get Your 15-Minute Quote
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-1">
                Fill out the details or snap a quick photo of your yard from your phone!
              </p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Miller"
                  className="w-full px-4 py-3 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                    Phone Number (For Text Quote) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(803) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                    Street Address / Neighborhood *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Oak St, Suburb"
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                  Services Needed
                </label>
                <select
                  value={modalService}
                  onChange={(e) => setModalService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none text-brand-forest font-semibold"
                >
                  <option value="Mulching">Mulching (Hardwood & Pine Straw)</option>
                  <option value="Lawn Care">Lawn Care (Mowing, Trimming & Edging)</option>
                  <option value="Moving">Moving (Furniture & Heavy Lifting)</option>
                  <option value="Flower beds">Flower beds (Planting & Trench Edging)</option>
                  <option value="Deck Repair">Deck Repair (Boards & Railings)</option>
                  <option value="Hedge Trimming">Hedge Trimming (Shrubs & Bushes)</option>
                  <option value="Painting">Painting (Fences, Decks & Exterior)</option>
                  <option value="Junk Removal">Junk Removal (Debris & Clutter Hauling)</option>
                  <option value="And more....">And more.... (Custom Property Odd Jobs)</option>
                  <option value="Flyer Special">Flyer Special ($10 Off)</option>
                </select>
              </div>

              {/* Promo code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                  Flyer / Discount Code
                </label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. FLYER-FRIENDS"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none uppercase font-mono"
                />
              </div>

              {/* Photo Upload with live preview */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                  Optional: Upload Yard Photo for Instant Assessment
                </label>
                <label className="border-2 border-dashed border-brand-sand rounded-xl p-4 text-center hover:bg-brand-cream/50 cursor-pointer block relative transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoSelect}
                    className="hidden"
                  />
                  <Camera className="w-8 h-8 mx-auto text-brand-emerald mb-1" />
                  <span className="text-xs font-semibold text-brand-forest block">
                    {photoName ? `✓ Attached: ${photoName}` : 'Tap to upload photos from phone or computer'}
                  </span>
                  <span className="text-[10px] text-brand-charcoal/50">Helps us price within 10-15 minutes</span>
                  {photoPreview && (
                    <div className="mt-3 mx-auto max-w-[120px] rounded-lg overflow-hidden border border-brand-sand shadow-sm">
                      <img src={photoPreview} alt="Uploaded yard preview" className="w-full h-20 object-cover" />
                    </div>
                  )}
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-forest mb-1">
                  Any specifics? (Gates, pet alerts, custom instructions)
                </label>
                <textarea
                  rows={2}
                  value={modalNotes || formData.notes}
                  onChange={(e) => {
                    setModalNotes(e.target.value);
                    setFormData({ ...formData, notes: e.target.value });
                  }}
                  placeholder="e.g. Dog in backyard, side gate is on left side, have the flyer coupon"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-sand text-sm focus:border-brand-forest focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-forest text-white font-extrabold text-sm shadow-xl hover:bg-brand-moss transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Send Quote Request →</span>
                )}
              </button>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-brand-emerald/20 border border-brand-emerald text-brand-forest text-xs font-bold text-center">
                  🎉 Thank you! Marcus or Leo will review your property and text/call your estimate within 15 minutes!
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
