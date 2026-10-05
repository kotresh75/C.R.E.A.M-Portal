import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import EnergyCalculator from '../components/EnergyCalculator';
import CreamLogo from '../components/CreamLogo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef();

  useGSAP(() => {
    
    let mm = gsap.matchMedia();

    // ═══════ HERO INTRO ANIMATION ═══════
    mm.add("(min-width: 768px)", () => {
      const heroTl = gsap.timeline({ delay: 0.3 });
      gsap.set(".ream-text-container", { maxWidth: 0 });
      gsap.set(".hero-text-full", { opacity: 0, y: 60 });
      gsap.set(".logo-group", { scale: 1.5 });

      heroTl
        .to(".logo-group", { scale: 1, duration: 2.2, ease: "power3.inOut" })
        .to(".ream-text-container", { maxWidth: 800, duration: 2.2, ease: "power3.inOut" }, "<")
        .to(".logo-group", { scale: 0.75, y: -200, duration: 1.8, ease: "power3.inOut" }, "-=0.6")
        .to(".hero-text-full", { opacity: 1, y: 0, duration: 1.8, ease: "power3.out" }, "<0.4");
    });

    mm.add("(max-width: 767px)", () => {
      const heroTl = gsap.timeline({ delay: 0.3 });
      gsap.set(".ream-text-container", { maxWidth: 0 });
      gsap.set(".hero-text-full", { opacity: 0, y: 30 });
      gsap.set(".logo-group", { scale: 1 });

      heroTl
        .to(".logo-group", { scale: 0.55, duration: 2, ease: "power3.inOut" })
        .to(".ream-text-container", { maxWidth: 400, duration: 2, ease: "power3.inOut" }, "<")
        .to(".logo-group", { y: -200, duration: 1.5, ease: "power3.inOut" }, "-=0.5")
        .to(".hero-text-full", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "<0.4");
    });

    // ═══════ SCROLL-TRIGGERED SECTION REVEALS ═══════
    
    // Each section gets a unique entrance
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach((section) => {
      gsap.fromTo(section,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            end: 'top 50%',
          }
        }
      );
    });

    // Section headers — fade up with slight delay
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      const children = header.children;
      gsap.fromTo(children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: header, start: 'top 85%' }
        }
      );
    });

    // Feature cards — cascading reveal
    gsap.fromTo('.feature-card',
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
      }
    );

    // Module cards — slide from alternating sides
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach((card, i) => {
      gsap.fromTo(card,
        { x: i % 2 === 0 ? -80 : 80, opacity: 0, rotateY: i % 2 === 0 ? 5 : -5 },
        {
          x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' }
        }
      );
    });

    // Stat items — counter-like bounce in
    gsap.fromTo('.stat-item',
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.stats-section', start: 'top 82%' }
      }
    );

    // Quote cards — slide from left
    gsap.fromTo('.quote-card',
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1.2, stagger: 0.25, ease: 'power3.out',
        scrollTrigger: { trigger: '.survey-section', start: 'top 82%' }
      }
    );

    // Tech pills — pop in with bounce
    gsap.fromTo('.tech-pill',
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.tech-section', start: 'top 82%' }
      }
    );

    // Calculator — scale up reveal
    gsap.fromTo('.calc-section .card-minimal',
      { y: 80, opacity: 0, scale: 0.96 },
      {
        y: 0, opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.calc-section', start: 'top 80%' }
      }
    );

    // CTA — fade up
    gsap.fromTo('.cta-inner',
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 85%' }
      }
    );

  }, { scope: container });

  return (
    <main ref={container} style={{ width: '100%', position: 'relative' }}>
      
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="scroll-hero-trigger" style={{ width: '100%' }}>
        <div className="scroll-hero-pin" style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
          
          <div className="logo-group" style={{ display: 'flex', alignItems: 'center', height: '240px', transformOrigin: 'center center' }}>
            <CreamLogo className="hero-logo" style={{ width: '240px', height: '240px', flexShrink: 0 }} />
            <div className="ream-text-container" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              <h1 className="ream-text h-display" style={{ margin: 0, whiteSpace: 'nowrap', paddingLeft: '8px', color: 'var(--sys-color-on-background)' }}>
                .R.E.A.M
              </h1>
            </div>
          </div>
          
          <div className="hero-text-full" style={{ position: 'absolute', top: '42%', textAlign: 'center', padding: '0 32px', width: '100%', maxWidth: '900px' }}>
            <div className="tag green" style={{ marginBottom: '24px' }}>
              ESR Societal Project · 2026
            </div>
            <h2 className="h-section" style={{ marginBottom: '24px', color: 'var(--sys-color-on-background)' }}>
              Community Renewable Energy <br/>
              <span className="gradient-text">Awareness & Management</span>
            </h2>
            <p className="text-body-large" style={{ marginBottom: '48px', maxWidth: '750px', margin: '0 auto 48px' }}>
              Bridging the knowledge gap between local communities and sustainable energy adoption. Educate, calculate, and transition — all in one platform.
            </p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="m3-button" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                ⚡ Try the Calculator
              </button>
              <Link to="/education" className="m3-button m3-button--outlined" style={{ textDecoration: 'none' }}>
                Explore Knowledge Base →
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════ THE PROBLEM ═══════════════ */}
      <section className="reveal-section" style={{ maxWidth: '1000px', width: '100%', padding: `var(--section-gap) 5vw 80px`, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-header">
            <div className="tag yellow" style={{ marginBottom: '24px' }}>The Problem</div>
            <div className="section-divider"></div>
            <h2 className="h-section" style={{ marginBottom: '32px' }}>
              Communities Want Renewable Energy.<br/>
              <span className="gradient-text">They Just Don't Know Where to Start.</span>
            </h2>
          </div>
          <p className="text-body-large" style={{ maxWidth: '780px', margin: '0 auto', lineHeight: '1.85' }}>
            Despite the growing urgency of climate change and the long-term cost benefits of sustainable energy, 
            urban and semi-urban communities face significant barriers — a <strong>lack of accessible, trusted, 
            and localized information</strong>, confusion about initial setup costs versus long-term ROI, and a 
            disconnect between consumers and verified renewable energy solutions.
          </p>
        </div>
      </section>


      {/* ═══════════════ SURVEY STATS ═══════════════ */}
      <section className="stats-section reveal-section" style={{ maxWidth: '1200px', width: '100%', padding: '80px 5vw', margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="tag green" style={{ marginBottom: '24px' }}>Community Survey · AECS Layout, Bangalore</div>
          <div className="section-divider"></div>
          <h2 className="h-section">What the Data Tells Us</h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Insights from 50 residents and 5 in-depth stakeholder interviews.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { number: '85%', label: 'Aware of renewable energy', sub: 'but only 12% currently use it at home', gradient: 'linear-gradient(135deg, #34D399, #059669)' },
            { number: '60%', label: 'Cite high upfront cost', sub: 'as the biggest barrier to adoption', gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)' },
            { number: '90%', label: 'Would use a free tool', sub: 'to estimate savings & read energy guides', gradient: 'linear-gradient(135deg, #60A5FA, #3B82F6)' },
            { number: '25%', label: 'Lack trusted vendors', sub: 'and reliable localized information', gradient: 'linear-gradient(135deg, #A78BFA, #8B5CF6)' }
          ].map((stat, i) => (
            <div key={i} className="stat-item card-minimal" style={{ textAlign: 'center', padding: '48px 28px' }}>
              <div style={{ 
                fontSize: '3.2rem', fontWeight: '800', fontFamily: 'var(--font-display)', 
                lineHeight: 1, marginBottom: '16px',
                background: stat.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--sys-color-on-background)', marginBottom: '8px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--sys-color-muted)', lineHeight: 1.5 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════════ CORE MODULES ═══════════════ */}
      <section className="modules-section reveal-section" style={{ maxWidth: '1200px', width: '100%', padding: `var(--section-gap) 5vw`, margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="tag green" style={{ marginBottom: '24px' }}>Platform Architecture</div>
          <div className="section-divider"></div>
          <h2 className="h-section">Three Modules. <span className="gradient-text">One Mission.</span></h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
            C.R.E.A.M. is structured around three interactive modules designed to take users from awareness to action.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {[
            { 
              icon: '⚡', title: 'Energy Calculator', badge: 'The "Action" Module', 
              borderColor: '#34D399', badgeBg: 'rgba(52, 211, 153, 0.12)', badgeColor: '#059669',
              desc: 'Input your average monthly BESCOM bill and receive a personalized financial breakdown — recommended solar kW capacity, estimated installation cost, government subsidies, and a projected ROI timeline.'
            },
            { 
              icon: '📚', title: 'Educational Hub', badge: 'The "Awareness" Module', 
              borderColor: '#60A5FA', badgeBg: 'rgba(96, 165, 250, 0.12)', badgeColor: '#3B82F6',
              desc: 'A curated repository of articles on solar panel maintenance, wind energy basics, Karnataka government subsidies — neutral, unbiased, and designed for everyday users.'
            },
            { 
              icon: '📊', title: 'User Dashboard', badge: 'The "Management" Module', 
              borderColor: '#A78BFA', badgeBg: 'rgba(167, 139, 250, 0.12)', badgeColor: '#8B5CF6',
              desc: 'Secure JWT-authenticated accounts let users save calculation history, set energy goals, and bookmark educational articles. Track your long-term energy transition progress.'
            }
          ].map((mod, i) => (
            <div key={i} className="module-card card-minimal" style={{ padding: '48px 36px', borderTop: `3px solid ${mod.borderColor}`, perspective: '1000px' }}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '20px', marginBottom: '28px',
                background: `linear-gradient(135deg, ${mod.borderColor}22, ${mod.borderColor}11)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
                border: `1px solid ${mod.borderColor}33`
              }}>
                {mod.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--sys-color-on-background)' }}>
                {mod.title}
              </h3>
              <span className="tag" style={{ marginBottom: '20px', display: 'inline-block', background: mod.badgeBg, color: mod.badgeColor, border: `1px solid ${mod.badgeColor}22` }}>{mod.badge}</span>
              <p style={{ fontSize: '1rem', color: 'var(--sys-color-muted)', lineHeight: '1.75', margin: 0 }}>
                {mod.desc}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ═══════════════ WHY C.R.E.A.M. ═══════════════ */}
      <section className="features-grid reveal-section" style={{ maxWidth: '1300px', width: '100%', padding: `var(--section-gap) 5vw`, margin: '0 auto' }}>
        
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="tag yellow" style={{ marginBottom: '24px' }}>Competitive Advantage</div>
          <div className="section-divider"></div>
          <h2 className="h-section">Why <span className="gradient-text">C.R.E.A.M.</span>?</h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
            Existing tools are too technical, too commercial, or too generic. C.R.E.A.M. fills the missing middle ground.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {[
            { tag: 'NEUTRALITY', tagColor: 'green', title: 'Unbiased Information', 
              desc: 'Unlike vendor apps locked into their ecosystem (Tata Power Solar, Luminous), our portal provides neutral educational content — we\'re not selling panels.' },
            { tag: 'SIMPLICITY', tagColor: 'yellow', title: 'Accessible to Everyone', 
              desc: 'Government portals like MNRE have accurate data but outdated, overly technical UIs. We abstract the complex mathematics into a beautiful, intuitive interface.' },
            { tag: 'COMMUNITY', tagColor: 'green', title: 'Localized for Bangalore', 
              desc: 'Designed specifically for AECS Layout using BESCOM tariff rates, Karnataka subsidy structures, and local irradiation data.' },
            { tag: 'SDG 7', tagColor: 'green', title: 'Affordable & Clean Energy', 
              desc: 'Directly supports UN SDG 7 by making clean energy information accessible and empowering communities to make informed decisions.' },
            { tag: 'SDG 11', tagColor: 'yellow', title: 'Sustainable Cities', 
              desc: 'Promotes sustainable urban living by encouraging measurable shifts toward renewable energy among local homeowners and businesses.' },
            { tag: 'SDG 15', tagColor: 'green', title: 'Life on Land', 
              desc: 'Track and reduce your community\'s carbon footprint. Every kWh offset from fossil fuels contributes to healthier ecosystems.' }
          ].map((card, i) => (
            <div key={i} className="feature-card card-minimal" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: 'auto' }}>
                <span className={`tag ${card.tagColor}`} style={{ marginBottom: '28px' }}>{card.tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--sys-color-on-background)' }}>{card.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--sys-color-muted)', lineHeight: '1.75', margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════════ STAKEHOLDER VOICES ═══════════════ */}
      <section className="survey-section reveal-section" style={{ maxWidth: '1000px', width: '100%', padding: `var(--section-gap) 5vw`, margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="tag green" style={{ marginBottom: '24px' }}>Stakeholder Voices</div>
          <div className="section-divider"></div>
          <h2 className="h-section">Real People. <span className="gradient-text">Real Problems.</span></h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Direct feedback from AECS Layout residents that shaped our platform.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '28px' }}>
          {[
            { quote: '"I want to install rooftop solar, but I don\'t know who the trusted vendors are in Bangalore, or how to calculate the ROI."',
              name: 'Mr. Ramesh', role: 'Homeowner, AECS Layout', initial: 'R', gradient: 'linear-gradient(135deg, #34D399, #3B82F6)', border: '#34D399' },
            { quote: '"My commercial electricity bills are very high. I don\'t know if solar panels can support my heavy equipment or how much space they require."',
              name: 'Mrs. Anitha', role: 'Small Bakery Owner, AECS Layout', initial: 'A', gradient: 'linear-gradient(135deg, #60A5FA, #A78BFA)', border: '#60A5FA' }
          ].map((q, i) => (
            <div key={i} className="quote-card card-minimal" style={{ padding: '48px', borderLeft: `4px solid ${q.border}` }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--sys-color-on-background)', lineHeight: '1.85', margin: '0 0 28px 0' }}>
                {q.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: q.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '1rem', flexShrink: 0 }}>{q.initial}</div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--sys-color-on-background)' }}>{q.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--sys-color-muted)' }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════════ TECH STACK ═══════════════ */}
      <section className="tech-section reveal-section" style={{ maxWidth: '1000px', width: '100%', padding: `var(--section-gap) 5vw`, margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="tag" style={{ marginBottom: '24px', background: 'rgba(167, 139, 250, 0.12)', color: '#8B5CF6', border: '1px solid rgba(167,139,250,0.25)' }}>Architecture</div>
          <div className="section-divider"></div>
          <h2 className="h-section">Built on <span className="gradient-text">Modern, Scalable Tech</span></h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
            A decoupled full-stack architecture that can be scaled for other neighborhoods and cities.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          {[
            { label: 'React', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.08)' },
            { label: 'FastAPI', color: '#009688', bg: 'rgba(0, 150, 136, 0.08)' },
            { label: 'MongoDB', color: '#4DB33D', bg: 'rgba(77, 179, 61, 0.08)' },
            { label: 'GSAP', color: '#88CE02', bg: 'rgba(136, 206, 2, 0.08)' },
            { label: 'JWT Auth', color: '#D63AFF', bg: 'rgba(214, 58, 255, 0.08)' },
            { label: 'Python', color: '#3776AB', bg: 'rgba(55, 118, 171, 0.08)' },
            { label: 'REST API', color: '#FF6C37', bg: 'rgba(255, 108, 55, 0.08)' },
            { label: 'Render', color: '#46E3B7', bg: 'rgba(70, 227, 183, 0.08)' },
          ].map((tech, i) => (
            <div key={i} className="tech-pill" style={{
              padding: '14px 28px',
              borderRadius: '999px',
              background: tech.bg,
              backdropFilter: 'blur(12px)',
              border: `1px solid ${tech.color}22`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
              fontSize: '0.92rem',
              fontWeight: '600',
              color: tech.color,
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'default'
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'; e.currentTarget.style.boxShadow = `0 12px 28px ${tech.color}22`; e.currentTarget.style.borderColor = `${tech.color}55`; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = `${tech.color}22`; }}
            >
              {tech.label}
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════════ CALCULATOR ═══════════════ */}
      <section id="calculator" className="calc-section reveal-section" style={{ maxWidth: '1400px', width: '100%', padding: `var(--section-gap) 5vw`, margin: '0 auto' }}>
        <div className="section-header" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div className="tag green" style={{ marginBottom: '24px' }}>Interactive Tool</div>
          <div className="section-divider"></div>
          <h2 className="h-section">Solar Energy <span className="gradient-text">Calculator</span></h2>
          <p className="text-body-large" style={{ marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
            Input your monthly electricity consumption and instantly see your recommended solar capacity, 
            estimated costs, annual savings, and CO₂ reduction.
          </p>
        </div>

        <div className="card-minimal" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ 
            height: '56px', borderBottom: '1px solid rgba(0,0,0,0.05)', 
            display: 'flex', alignItems: 'center', padding: '0 32px', 
            background: 'linear-gradient(90deg, rgba(52,211,153,0.06), rgba(96,165,250,0.06))'
          }}>
             <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', marginRight: '12px', animation: 'pulse-dot 2s infinite' }}></div>
             <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--sys-color-on-background)', fontFamily: 'var(--font-mono)' }}>C.R.E.A.M. Calculator Engine</span>
             <span style={{ fontSize: '0.75rem', color: 'var(--sys-color-muted)', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>v1.0 · BESCOM Baseline</span>
          </div>
          
          <div style={{ padding: '48px' }}>
            <EnergyCalculator />
          </div>
        </div>

        <div className="card-minimal" style={{ marginTop: '24px', padding: '28px 36px', borderLeft: '3px solid #34D399' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700', color: 'var(--sys-color-on-background)', margin: '0 0 10px 0' }}>
            📐 Calculation Methodology
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--sys-color-muted)', lineHeight: '1.75', margin: 0 }}>
            <strong>System Sizing:</strong> 1 kW ≈ 120 kWh/month &nbsp;·&nbsp; 
            <strong>Cost:</strong> ₹60,000/kW &nbsp;·&nbsp; 
            <strong>Grid Tariff:</strong> ₹8/unit &nbsp;·&nbsp; 
            <strong>CO₂ Factor:</strong> 0.82 kg/kWh
          </p>
        </div>
      </section>


      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="cta-section" style={{ width: '100%', padding: `var(--section-gap) 5vw 200px`, textAlign: 'center' }}>
        <div className="cta-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-divider"></div>
          <h2 className="h-section" style={{ marginBottom: '24px' }}>
            Ready to Make <span className="gradient-text">the Switch</span>?
          </h2>
          <p className="text-body-large" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
            Join a growing community of AECS Layout residents making data-driven decisions about their energy future.
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="m3-button" style={{ textDecoration: 'none', padding: '16px 44px', fontSize: '1.05rem' }}>
              Create Free Account
            </Link>
            <Link to="/education" className="m3-button m3-button--outlined" style={{ textDecoration: 'none', padding: '16px 44px', fontSize: '1.05rem' }}>
              Browse Articles →
            </Link>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--sys-color-muted)', marginTop: '32px', fontFamily: 'var(--font-mono)' }}>
            ₹0 cost · Open-source · React + FastAPI + MongoDB
          </p>
        </div>
      </section>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
      
    </main>
  );
};

export default Home;
