// @ts-nocheck
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, ChevronDown, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, Play, Pause, Zap, Shield, Users, Trophy,
  Target, CheckCircle, ArrowRight, Dumbbell, Timer, Award
} from 'lucide-react';
import { studioInfo, stats, classes, coaches, testimonials, pricing } from '@/lib/site-data';

/* ─── Intersection Observer hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Classes', 'Coaches', 'Schedule', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur border-b border-[#2A2A2A]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sk-red flex items-center justify-center">
            <span className="font-heading font-black text-white text-sm leading-none">S</span>
          </div>
          <span className="font-heading font-black text-xl tracking-widest text-white uppercase">Strike</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-[#9E9E9E] hover:text-white transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-sk-red hover:bg-[#C62828] text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-2.5 transition-colors"
        >
          Free Class
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#181818] border-t border-[#2A2A2A] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#9E9E9E] uppercase tracking-wide">
              {l}
            </a>
          ))}
          <a href="#contact" className="bg-sk-red text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-3 text-center">
            Book Free Class
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero (Video) ─── */
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Video BG */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
      {/* Red diagonal slash accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 w-[40%] h-full bg-sk-red/8 transform -skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sk-red/20 border border-sk-red/40 px-3 py-1.5 mb-6">
            <Zap size={12} className="text-sk-red" />
            <span data-cg-el="hero_eyebrow" className="text-sk-red font-heading font-bold text-xs uppercase tracking-[0.2em]">
              Miami's #1 Boxing Boutique
            </span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-4">
            WHERE<br />
            <span className="text-sk-red">FIGHTERS</span><br />
            ARE MADE
          </h1>

          <p data-cg-el="hero_subtitle" className="text-[#9E9E9E] text-lg mb-2 max-w-xl">
            {studioInfo.subheadline}
          </p>
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.2em] mb-8">
            — Fight Club Meets Nightclub —
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-sk-red hover:bg-[#C62828] text-white font-heading font-black text-base uppercase tracking-widest px-8 py-4 transition-colors"
            >
              Book Free Class <ArrowRight size={16} />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-heading font-bold text-base uppercase tracking-widest px-8 py-4 transition-colors"
            >
              See Classes
            </a>
          </div>

          {/* Quick social proof */}
          <div className="flex items-center gap-4 mt-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
            <span className="text-[#9E9E9E] text-sm">4.9 stars · 600+ Google reviews</span>
          </div>
        </div>
      </div>

      {/* Video play/pause */}
      <button
        onClick={toggle}
        className="absolute bottom-8 right-8 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
      >
        {playing ? <Pause size={14} className="text-white" /> : <Play size={14} className="text-white" />}
      </button>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  return (
    <section className="bg-sk-red py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-black text-4xl leading-none">{s.value}</div>
              <div className="text-red-200 text-sm uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Strike ─── */
function WhyStrike() {
  const features = [
    { icon: Trophy, title: 'Champion Coaches', desc: 'Every coach is a former competitive fighter with proven ring experience.' },
    { icon: Zap, title: 'High-Energy Classes', desc: 'Pulsing music, dim lighting, and an electric atmosphere every single class.' },
    { icon: Shield, title: 'All Levels Welcome', desc: 'From first-timers to seasoned fighters — we have a class for every level.' },
    { icon: Users, title: 'Tight Community', desc: 'Our members show up for each other. It\'s not just a gym — it\'s a crew.' },
    { icon: Target, title: 'Real Technique', desc: 'You don\'t just hit bags. You learn how to actually box — footwork, combos, defense.' },
    { icon: Award, title: 'Results Guaranteed', desc: 'Lose weight, gain confidence, reduce stress, build power. Results or your money back.' },
  ];
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Why Choose Us</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">THE STRIKE DIFFERENCE</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="reveal bg-[#181818] border border-[#2A2A2A] p-6 hover:border-sk-red/50 transition-colors group"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <f.icon size={28} className="text-sk-red mb-4" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">{f.title}</h3>
              <p className="text-[#9E9E9E] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Classes ─── */
function Classes() {
  return (
    <section id="classes" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Training Menu</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">OUR CLASSES</h2>
          <p className="text-[#9E9E9E] mt-4 max-w-xl mx-auto">Every class is coached, high-energy, and designed to push your limits.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c, i) => (
            <div key={c.name}
              className="reveal group relative bg-[#0D0D0D] border border-[#2A2A2A] hover:border-sk-red/60 overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="h-1.5 w-full" style={{ backgroundColor: c.color }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-black text-2xl text-white">{c.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border"
                    style={{ color: c.color, borderColor: c.color + '60' }}>
                    {c.level}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Timer size={13} className="text-[#9E9E9E]" />
                  <span className="text-[#9E9E9E] text-xs uppercase tracking-wide">{c.duration}</span>
                </div>
                <p className="text-[#9E9E9E] text-sm leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 reveal">
          <a href="#contact" className="inline-flex items-center gap-2 bg-sk-red hover:bg-[#C62828] text-white font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
            Book a Class <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Coaches ─── */
function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">The Team</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">LEARN FROM FIGHTERS</h2>
          <p className="text-[#9E9E9E] mt-4 max-w-xl mx-auto">Not personal trainers who learned boxing. Real fighters who became coaches.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((c, i) => (
            <div key={c.name} className="reveal group" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-0.5 w-8 bg-sk-red mb-3" />
                  <h3 className="font-heading font-black text-xl text-white leading-tight">{c.name}</h3>
                  <p className="text-sk-red font-heading font-bold text-xs uppercase tracking-wide mt-1">{c.title}</p>
                </div>
              </div>
              <p className="text-[#9E9E9E] text-sm leading-relaxed">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Schedule Callout ─── */
function ScheduleCallout() {
  const schedule = [
    { day: 'Monday', classes: ['6:00 AM — Cardio Box', '12:00 PM — Rumble', '6:00 PM — Power Hour', '7:30 PM — 12 Rounds'] },
    { day: 'Tuesday', classes: ['6:00 AM — Rumble', '12:00 PM — Cardio Box', '5:30 PM — Sparring Lab', '7:00 PM — Rumble'] },
    { day: 'Wednesday', classes: ['6:00 AM — Power Hour', '12:00 PM — Rumble', '6:00 PM — Cardio Box', '7:30 PM — 12 Rounds'] },
    { day: 'Thursday', classes: ['6:00 AM — Cardio Box', '5:30 PM — Sparring Lab', '6:30 PM — Rumble', '7:30 PM — Power Hour'] },
    { day: 'Friday', classes: ['6:00 AM — 12 Rounds', '12:00 PM — Power Hour', '5:30 PM — Rumble', '7:00 PM — Cardio Box'] },
    { day: 'Saturday', classes: ['8:00 AM — Kids Boxing', '9:00 AM — Rumble', '10:30 AM — Power Hour', '12:00 PM — 12 Rounds'] },
    { day: 'Sunday', classes: ['9:00 AM — Cardio Box', '10:30 AM — Rumble'] },
  ];
  return (
    <section id="schedule" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Weekly Schedule</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">FIND YOUR CLASS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {schedule.map((day, i) => (
            <div key={day.day} className="reveal bg-[#0D0D0D] border border-[#2A2A2A] p-4"
              style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="font-heading font-black text-sk-red text-sm uppercase tracking-wider mb-3 pb-2 border-b border-[#2A2A2A]">
                {day.day}
              </div>
              {day.classes.map((cls) => (
                <div key={cls} className="text-[#9E9E9E] text-xs leading-relaxed py-1 border-b border-[#1A1A1A] last:border-0">
                  {cls}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-[#9E9E9E] text-sm mt-6 reveal">
          Schedule subject to change. Book via app or front desk to reserve your spot.
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Member Stories</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">THE PROOF IS IN THE RING</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal bg-[#181818] border border-[#2A2A2A] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-base leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-sk-red flex items-center justify-center font-heading font-black text-white text-sm">
                  {t.name[0]}
                </div>
                <span className="font-heading font-bold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Membership</p>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white">CHOOSE YOUR CORNER</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative ${p.highlight
                ? 'bg-sk-red border-2 border-sk-red'
                : 'bg-[#0D0D0D] border border-[#2A2A2A]'} p-8`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-sk-red font-heading font-black text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-black text-2xl text-white uppercase mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-black text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 ${p.highlight ? 'text-red-200' : 'text-[#9E9E9E]'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className={p.highlight ? 'text-red-200' : 'text-sk-red'} />
                    <span className={`text-sm ${p.highlight ? 'text-red-100' : 'text-[#9E9E9E]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-heading font-black text-sm uppercase tracking-widest py-3 transition-colors ${
                  p.highlight
                    ? 'bg-white text-sk-red hover:bg-red-50'
                    : 'bg-sk-red text-white hover:bg-[#C62828]'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact / CTA ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-sk-red font-heading font-bold text-sm uppercase tracking-[0.3em] mb-3">Get Started</p>
            <h2 className="font-heading font-black text-5xl md:text-6xl text-white mb-6">YOUR FREE CLASS IS WAITING</h2>
            <p className="text-[#9E9E9E] leading-relaxed mb-8 max-w-md">
              No experience needed. No long-term commitment. Come in, take a class, and see for yourself why hundreds of Miamians call Strike their second home.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: studioInfo.address },
                { icon: Phone, label: studioInfo.phone },
                { icon: Mail, label: studioInfo.email },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={16} className="text-sk-red flex-shrink-0" />
                  <span className="text-[#9E9E9E] text-sm">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {Object.entries(studioInfo.hours).map(([day, hrs]) => (
                <div key={day} className="flex items-center gap-3">
                  <Clock size={14} className="text-[#9E9E9E] flex-shrink-0" />
                  <span className="text-[#9E9E9E] text-sm"><strong className="text-white">{day}:</strong> {hrs}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <div className="reveal bg-[#181818] border border-[#2A2A2A] p-8">
            <h3 className="font-heading font-black text-2xl text-white mb-6 uppercase">Claim Your Free Class</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9E9E9E] text-xs uppercase tracking-wide mb-1.5">First Name</label>
                  <input type="text" placeholder="Marcus"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-sk-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#555]" />
                </div>
                <div>
                  <label className="block text-[#9E9E9E] text-xs uppercase tracking-wide mb-1.5">Last Name</label>
                  <input type="text" placeholder="Rivera"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-sk-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#555]" />
                </div>
              </div>
              <div>
                <label className="block text-[#9E9E9E] text-xs uppercase tracking-wide mb-1.5">Email</label>
                <input type="email" placeholder="marcus@email.com"
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-sk-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#555]" />
              </div>
              <div>
                <label className="block text-[#9E9E9E] text-xs uppercase tracking-wide mb-1.5">Phone</label>
                <input type="tel" placeholder="(305) 555-0000"
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-sk-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#555]" />
              </div>
              <div>
                <label className="block text-[#9E9E9E] text-xs uppercase tracking-wide mb-1.5">Interested In</label>
                <select className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-sk-red text-white text-sm px-4 py-3 outline-none transition-colors">
                  <option value="">Select a class...</option>
                  {classes.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <button type="submit"
                className="w-full bg-sk-red hover:bg-[#C62828] text-white font-heading font-black text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Book My Free Class <ArrowRight size={15} />
              </button>
              <p className="text-[#555] text-xs text-center">No credit card required. We'll contact you within 24h to confirm.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#2A2A2A] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sk-red flex items-center justify-center">
                <span className="font-heading font-black text-white text-sm">S</span>
              </div>
              <span className="font-heading font-black text-xl tracking-widest text-white uppercase">Strike Boxing</span>
            </div>
            <p className="text-[#9E9E9E] text-sm leading-relaxed max-w-xs mb-4">
              Miami's most electrifying boxing boutique. Real coaches, real technique, real results.
            </p>
            <div className="flex gap-3">
              <a href={studioInfo.instagram} className="w-9 h-9 bg-[#181818] border border-[#2A2A2A] hover:border-sk-red flex items-center justify-center transition-colors">
                <Instagram size={15} className="text-[#9E9E9E]" />
              </a>
              <a href={studioInfo.facebook} className="w-9 h-9 bg-[#181818] border border-[#2A2A2A] hover:border-sk-red flex items-center justify-center transition-colors">
                <Facebook size={15} className="text-[#9E9E9E]" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">Classes</h4>
            <ul className="space-y-2">
              {classes.slice(0, 5).map(c => (
                <li key={c.name}>
                  <a href="#classes" className="text-[#9E9E9E] hover:text-white text-sm transition-colors">{c.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">Studio</h4>
            <div className="space-y-2 text-[#9E9E9E] text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-sk-red" />
                <span>{studioInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="flex-shrink-0 text-sk-red" />
                <span>{studioInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2A2A2A] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#555] text-xs">© 2026 Strike Boxing Miami. All rights reserved.</p>
          <p className="text-[#555] text-xs">Powered by <span className="text-sk-red">Garrison365 Sites</span></p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <WhyStrike />
      <Classes />
      <Coaches />
      <ScheduleCallout />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
