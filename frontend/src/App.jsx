import React, { useState, useEffect } from 'react';

const S = [
  {
    n: 'PM Surya Ghar: Muft Bijli Yojana',
    by: 'Ministry of New and Renewable Energy (MNRE)',
    for: ['home', 'society'],
    sum: 'Central subsidy for rooftop solar on homes. Launched in February 2024 with a ₹75,021 crore outlay. It aims to reach 1 crore households and give up to 300 free units a month.',
    f: [
      'Subsidy: ₹30,000 for 1 kW, ₹60,000 for 2 kW, ₹78,000 for 3 kW or more',
      'Who can apply: Indian citizens who own a house with a suitable roof and have a valid electricity connection',
      'You must not have claimed a solar subsidy before, and panels must be on the ALMM approved list',
      'Subsidy is credited about 30 days after commissioning',
      'Housing societies and RWAs can get support for shared facilities. Check the portal for the current rate.',
      'Progress: more than 20 lakh household installations reported by spring 2026',
      'Helpline: 15555. Expected to run until March 2027',
    ],
    u: 'https://pmsuryaghar.gov.in',
  },
  {
    n: 'Net metering',
    by: 'Your electricity company (DISCOM) and state regulator',
    for: ['home', 'society'],
    sum: 'Owners of rooftop solar are credited for extra power they send to the grid. It is set up with your DISCOM as part of the PM Surya Ghar process.',
    f: [
      'Credit rules and rates differ from state to state',
      'Fixed charges and night-time use can still appear on your bill',
      'Ask your DISCOM for the current net metering rules in your state',
    ],
    u: 'https://pmsuryaghar.gov.in',
  },
  {
    n: 'PM-KUSUM',
    by: 'MNRE, run through state nodal agencies',
    for: ['farmer'],
    sum: 'Solar pumps and solar plants for farmers. Launched in 2019 with a ₹34,422 crore central outlay and extended to 31 March 2027. A second phase (2.0) had not been notified as of mid-2026.',
    f: [
      'Component A: 10,000 MW of small solar plants on farm or barren land',
      'Component B: 20 lakh stand-alone solar pumps up to 7.5 HP',
      'Component C: solarising 15 lakh grid-connected pumps',
      'Typical support: about 30% central and 30% state, with the farmer paying the rest or part by loan. Shares differ by state',
      'More than 21 lakh farmers had benefited by March 2026',
      'Apply through your state renewable energy agency or district office',
    ],
    u: 'https://mnre.gov.in',
  },
  {
    n: 'National Bioenergy Programme and biogas',
    by: 'MNRE; GOBARdhan is under the Ministry of Jal Shakti',
    for: ['rural', 'society'],
    sum: 'Support for family and community biogas plants that turn cattle dung and kitchen waste into cooking gas and manure.',
    f: [
      'The National Bioenergy Programme ran from April 2021 to March 2026 with ₹858 crore in Phase I. Check whether a new phase has been announced',
      'About 43 lakh family-type biogas plants have been built in India',
      'Subsidy depends on plant size and state. Ask your state renewable energy agency for the current amount',
      'GOBARdhan promotes village and community biogas plants',
    ],
    u: 'https://mnre.gov.in',
  },
  {
    n: 'Options if you rent or live in an apartment',
    by: 'Based on PM Surya Ghar eligibility',
    for: ['tenant', 'society'],
    sum: 'A tenant cannot claim the PM Surya Ghar subsidy alone, because it is meant for people who own the house.',
    f: [
      'Ask your landlord to apply and share the savings',
      'Ask your housing society to look at solar for common areas such as lifts, lights and pumps',
      'Join the community solar plan on the Join page of this portal',
      'Cut your own bill first with the energy-saving tips on the How to apply page',
    ],
    u: 'https://pmsuryaghar.gov.in',
  },
];

const GUIDE = {
  'PM Surya Ghar: Muft Bijli Yojana': {
    d: [
      'Aadhaar card and Aadhaar-linked mobile number',
      'Latest electricity bill with your consumer number',
      'Proof of house ownership, such as a property tax receipt',
      'Bank passbook or cancelled cheque',
      'Passport-size photograph',
      'Email address (needed to register)',
    ],
    st: [
      ['Check you are eligible', 'You must own the house, have a suitable shadow-free roof and a valid electricity connection, and not have claimed a solar subsidy before.'],
      ['Know your usage', 'Look at 6 to 12 months of electricity bills. This tells you what size system (1, 2 or 3 kW) you need. Use the Savings calculator in this portal.'],
      ['Register on the portal', 'Go to pmsuryaghar.gov.in. Choose your state and electricity company (DISCOM), then enter your consumer number, mobile number and email.'],
      ['Log in and apply', 'Log in with your consumer number and mobile number. Fill in the rooftop solar application form.'],
      ['Wait for DISCOM approval', 'Your DISCOM checks whether your connection and roof are suitable. You will get the approval on the portal. Do not buy or install anything before this.'],
      ['Choose a registered vendor', 'Pick a vendor listed on the portal. Ask for a written quote, and confirm the panels are on the ALMM approved list.'],
      ['Get it installed', 'The vendor installs the system. Enter the installation details and the plant details on the portal.'],
      ['Get the net meter fitted', 'Apply for net metering on the portal. The DISCOM fits the meter and inspects the system.'],
      ['Download the commissioning certificate', 'Once inspection is passed, the portal issues a commissioning report. Keep a copy.'],
      ['Claim your subsidy', 'Upload your bank account details and a cancelled cheque. The subsidy is credited to your account in about 30 days. Helpline: 15555.'],
    ],
  },
  'Net metering': {
    d: [
      'Latest electricity bill with consumer number',
      'Sanctioned load details (on your bill)',
      'Installer details and system capacity',
      'Identity proof and address proof',
      'Passport-size photograph',
    ],
    st: [
      ['Ask your DISCOM about the rules', 'Rates, fees and limits differ by state. Ask your electricity office or look on its website for the current net metering rules.'],
      ['Check your sanctioned load', 'The solar system size is usually limited by your sanctioned load. Find it on your bill.'],
      ['Submit the application', 'Apply on the DISCOM portal. If you are applying for the PM Surya Ghar subsidy, the net meter request is part of that process on pmsuryaghar.gov.in.'],
      ['Wait for technical approval', 'The DISCOM checks that the grid can take your system. Install only after you get approval.'],
      ['Install the system', 'Use a registered vendor and get a written bill for the system.'],
      ['Inspection and meter change', 'The DISCOM inspects the system, replaces your meter with a two-way meter and may ask you to sign an agreement.'],
      ['Check your first bills', 'Your bill should show units sent to the grid and units drawn from it. If the numbers look wrong, complain to the DISCOM with a copy of your agreement.'],
    ],
  },
  'PM-KUSUM': {
    d: [
      'Aadhaar card',
      'Land ownership record or lease document (for example Khasra or Khatauni)',
      'Bank passbook or cancelled cheque',
      'Passport-size photograph',
      'Details of your existing pump or electricity connection, if any',
      'PAN card, if your state asks for it',
    ],
    st: [
      ['Pick your component', 'Component A is a small solar plant on your land. Component B is a new stand-alone solar pump, for example to replace diesel. Component C is solarising a pump that is already on the grid. Applying under the wrong one is a common reason for rejection.'],
      ['Find your state agency', 'PM-KUSUM runs through a state nodal agency or the state DISCOM. The official site mnre.gov.in has the details. Ask at your district agriculture or energy office if you are unsure.'],
      ['Check if applications are open', 'Some states take applications all year, others open them in batches. Ask your state agency for the current dates.'],
      ['Keep your documents ready', 'Collect everything on the list below before you apply.'],
      ['Register and apply', 'Apply on the state portal or at the agency office. You usually verify your Aadhaar with an OTP.'],
      ['Note your application number', 'Write it down or take a screenshot. You need it to track your application.'],
      ['Wait for verification', 'The agency checks your land and pump details. In some states the selection is done in batches or by lottery.'],
      ['Pay your share', 'If you are selected, you get a letter with your share of the cost. The farmer’s share is usually 10% to 30% and varies by state, and a bank loan may cover part of it.'],
      ['Installation by an approved vendor', 'Only a vendor approved by the state agency can install a subsidised pump. Get a receipt and the warranty papers.'],
      ['Inspection and handover', 'The agency inspects the pump. The subsidy is generally adjusted in the pump cost, so you pay only your share.'],
    ],
  },
  'National Bioenergy Programme and biogas': {
    d: [
      'Aadhaar card or other identity proof',
      'Proof of residence or land',
      'Bank passbook',
      'Details of the number of cattle you keep',
      'Passport-size photograph',
    ],
    st: [
      ['Check you have enough waste', 'A family biogas plant needs cattle dung (or kitchen and farm waste) every day. Count your cattle and ask what size plant they can feed.'],
      ['Ask about the current subsidy', 'Subsidy depends on plant size and state. Ask your state renewable energy agency, district office or Gram Panchayat what is open now and how much it is.'],
      ['Choose an approved design and builder', 'Ask the agency which designs and trained masons or companies are approved. Do not hire anyone who is not on the agency list.'],
      ['Apply before you build', 'Submit the application with your documents. Ask if approval is needed before construction starts. If it is, wait for it.'],
      ['Get the approval or sanction letter', 'Keep it safe. You may need it for the subsidy claim.'],
      ['Build the plant', 'The approved builder constructs it. Keep bills and photos at each stage.'],
      ['Inspection', 'The agency inspects the plant. Ask when and how this will happen.'],
      ['Claim the subsidy', 'Submit the completion papers, bills and your bank details. Follow up with the agency if the money has not come in the time they gave you.'],
      ['Use and maintain it', 'Feed it regularly, keep the pipes and burner clean, and use the leftover slurry as manure on your fields.'],
    ],
  },
  'Options if you rent or live in an apartment': {
    d: [
      'Landlord’s consent or a written agreement to share savings',
      'Society or RWA resolution for common-area solar',
      'Last 12 months of common-area electricity bills',
      'Quotes from registered vendors',
    ],
    st: [
      ['Cut your own bill first', 'Switch to LED bulbs and star-rated appliances. Set the AC to 24–26 °C. This helps now and needs no permission.'],
      ['Talk to your landlord', 'Explain the PM Surya Ghar subsidy and offer to share the savings. Only the house owner can claim it.'],
      ['If the landlord agrees, they apply', 'Ask them to follow the steps for PM Surya Ghar on this page. You can help with the paperwork and keep the bills.'],
      ['Talk to your society or RWA', 'Ask the committee to look at solar for common areas such as lifts, lights and water pumps.'],
      ['Collect quotes', 'Get written quotes from 2 or 3 registered vendors. Ask for the savings estimate and the payback time.'],
      ['Get the society to approve', 'Present the numbers at a general body meeting and record the resolution.'],
      ['Apply for support', 'The society applies at pmsuryaghar.gov.in for common-facility support. Check the current rate and rules there.'],
      ['Join the community plan', 'Use the Join page of this portal to register your interest.'],
    ],
  },
};

const SQ = [
  'Have you heard of rooftop solar?',
  'Do you know about the PM Surya Ghar subsidy?',
  'Do you know how many units your home uses each month?',
  'Would you install solar if you got a subsidy?',
  'Do you take any steps to save electricity?',
];

const MIX = [
  ['Solar', 164.59],
  ['Wind', 58.14],
  ['Hydro', 57.24],
  ['Bio-power', 11.75],
  ['Nuclear', 8.78],
];

const DOCS = [
  'Aadhaar card and Aadhaar-linked mobile number',
  'Latest electricity bill showing your consumer number',
  'Proof that you own the house, such as a property tax receipt',
  'Bank passbook or cancelled cheque',
  'Passport-size photograph',
  'A photo of your roof, if your installer asks for one',
];

const QUIZ_QUESTIONS = [
  ['Which source is used by rooftop panels?', ['Sunlight', 'Coal', 'Diesel'], 0],
  ['What does net metering do?', ['Stores power in a battery', 'Credits extra power you send to the grid', 'Cuts off the grid'], 1],
  ['Which usually costs the least to run once built?', ['Diesel generator', 'Solar panels', 'Coal plant'], 1],
  ['Maximum central subsidy under PM Surya Ghar?', ['₹30,000', '₹78,000', '₹1,50,000'], 1],
  ['India’s 2030 target for non-fossil power capacity?', ['500 GW', '100 GW', '1,000 GW'], 0],
  ['Can a tenant claim the PM Surya Ghar subsidy alone?', ['Yes, always', 'No, it is meant for house owners', 'Only in winter'], 1],
  ['What is the PM Surya Ghar helpline number?', ['1800', '15555', '100'], 1],
  ['Who is PM-KUSUM mainly for?', ['Farmers', 'Car makers', 'Airlines'], 0],
  ['Which panels qualify for the PM Surya Ghar subsidy?', ['Any imported panel', 'Panels on the ALMM approved list', 'Used panels'], 1],
  ['Which habit saves electricity?', ['Leaving devices on standby', 'Using LED bulbs', 'Running the AC at 16 °C'], 1],
];

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : d;
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  },
};

const fmt = (n) => Math.round(n).toLocaleString('en-IN');

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');
  const cname = 'AECS Layout Community';

  useEffect(() => {
    document.title = 'C.R.E.A.M. Portal – Community Renewable Energy';
    const handleHash = () => {
      const h = window.location.hash.slice(1);
      const valid = ['learn', 'awareness', 'schemes', 'apply', 'calculator', 'tracker', 'dashboard', 'register', 'issues'];
      if (valid.includes(h)) {
        setActiveTab(h);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changeTab = (tab) => {
    window.location.hash = '#' + tab;
    setActiveTab(tab);
  };

  return (
    <div>
      <header>
        <div className="wrap">
          <div className="hero">
            <div>
              <h1>Power our neighbourhood with the sun.</h1>
              <div style={{
                display: 'inline-block',
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '0.03em',
                color: 'var(--leaf)',
                background: 'rgba(47, 125, 91, 0.12)',
                padding: '4px 12px',
                borderRadius: '6px',
                marginBottom: '12px'
              }}>
                C.R.E.A.M. &bull; Community Renewable Energy Awareness &amp; Management Portal
              </div>
              <p>
                Learn what solar can do for your home, check your savings, and join the community plan.
              </p>
            </div>
            <svg className="sun-svg" viewBox="0 0 200 200" aria-hidden="true">
              <g stroke="#f2b705" strokeWidth="8" strokeLinecap="round">
                <path d="M100 14v22M100 164v22M14 100h22M164 100h22M39 39l15 15M146 146l15 15M161 39l-15 15M54 146l-15 15" />
              </g>
              <circle cx="100" cy="100" r="42" fill="#f2b705" />
            </svg>
          </div>
          <nav className="portal-nav" aria-label="Portal sections">
            {[
              ['learn', 'Learn'],
              ['awareness', 'Awareness drive'],
              ['schemes', 'Government schemes'],
              ['apply', 'How to apply'],
              ['calculator', 'Savings calculator'],
              ['tracker', 'Usage tracker'],
              ['dashboard', 'Community dashboard'],
              ['register', 'Join'],
              ['issues', 'Issues'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeTab === id}
                onClick={(e) => {
                  e.preventDefault();
                  changeTab(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">
        {activeTab === 'learn' && <LearnSection />}
        {activeTab === 'awareness' && <AwarenessSection cname={cname} />}
        {activeTab === 'schemes' && <SchemesSection />}
        {activeTab === 'apply' && <ApplySection />}
        {activeTab === 'calculator' && <CalculatorSection />}
        {activeTab === 'tracker' && <TrackerSection />}
        {activeTab === 'dashboard' && <DashboardSection />}
        {activeTab === 'register' && <RegisterSection />}
        {activeTab === 'issues' && <IssuesSection />}
      </main>
    </div>
  );
}

/* ────────────── SECTION 1: LEARN ────────────── */
function LearnSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoreText, setScoreText] = useState('');

  const handleOptionChange = (qi, val) => {
    setAnswers((prev) => ({ ...prev, [qi]: val }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    let un = 0;
    QUIZ_QUESTIONS.forEach(([_, __, correctIdx], qi) => {
      const selected = answers[qi];
      if (selected === undefined) {
        un++;
      } else if (Number(selected) === correctIdx) {
        score++;
      }
    });

    const pct = score / QUIZ_QUESTIONS.length;
    let feedback = `Your score: ${score} out of ${QUIZ_QUESTIONS.length}${
      un ? ` (${un} not answered)` : ''
    }. `;
    feedback +=
      pct >= 0.8
        ? 'Excellent!'
        : pct >= 0.5
        ? 'Good effort. Read the Learn page and try again.'
        : 'Read the Learn page and Government schemes page, then try again.';

    setScoreText(feedback);
    setSubmitted(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setScoreText('');
  };

  return (
    <section id="learn">
      <h2>Renewable energy basics</h2>
      <div className="grid">
        <div className="card">
          <h3>Solar</h3>
          <p>Rooftop panels turn sunlight into electricity. India gets 4–5 peak sun hours a day in most regions.</p>
        </div>
        <div className="card">
          <h3>Wind</h3>
          <p>Turbines suit open, windy sites. Small turbines can add to rooftop solar in coastal and hilly areas.</p>
        </div>
        <div className="card">
          <h3>Biomass and biogas</h3>
          <p>Kitchen, farm and garden waste can produce cooking gas and power.</p>
        </div>
        <div className="card">
          <h3>Hydro</h3>
          <p>Flowing water drives generators. Mostly large-scale, with small micro-hydro in some villages.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '20px', alignItems: 'stretch', marginBottom: '18px' }}>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3>India’s clean power today</h3>
          <p>
            Non-fossil power capacity reached 300.5 GW on 31 July 2026. That is over 60% of India’s 500 GW target for 2030,
            and more than 54% of the country’s roughly 552 GW total. India added a record 55.29 GW in 2025–26, and ranks
            third in the world for renewable capacity.
          </p>
          <div id="mix" role="img" aria-label="Installed capacity by source in gigawatts">
            {MIX.map(([label, val]) => (
              <div className="bar" key={label}>
                <span>{label}</span>
                <i style={{ width: `${(val / 164.59) * 100}%` }}></i>
                <span>{val} GW</span>
              </div>
            ))}
          </div>
          <p className="note">
            Source: Ministry of New and Renewable Energy, as of 31 July 2026. Capacity is not the same as generation:
            non-fossil sources supplied 29.2% of India’s electricity in 2025–26, so there is still a long way to go.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 0 }}>
          <h3>Myths and facts</h3>
          <details>
            <summary>Solar does not work on cloudy days.</summary>
            <p>Panels still produce power under clouds, just less. Monthly output averages out over the year.</p>
          </details>
          <details>
            <summary>Solar is too expensive for ordinary homes.</summary>
            <p>Central and state subsidies, plus bank loans, cut the upfront cost. Most homes recover the cost in several years.</p>
          </details>
          <details>
            <summary>Tenants can claim the solar subsidy.</summary>
            <p>PM Surya Ghar is meant for people who own the house. A tenant cannot claim it alone, but can ask the owner to apply or join a community installation.</p>
          </details>
          <details>
            <summary>Any panel qualifies for the subsidy.</summary>
            <p>Only panels on the government’s approved list (ALMM) qualify, so use a registered vendor.</p>
          </details>
          <details>
            <summary>Panels need constant maintenance.</summary>
            <p>Cleaning every few weeks and an annual inspection is usually enough.</p>
          </details>
          <details>
            <summary>Go solar and you will never pay an electricity bill.</summary>
            <p>Net metering offsets your units, but fixed charges and night-time use may still appear on the bill.</p>
          </details>
        </div>
      </div>

      <div className="card">
        <h3>How rooftop solar works</h3>
        <ol>
          <li>Sunlight falls on the panels on your roof and they produce direct current (DC) electricity.</li>
          <li>An inverter changes it to alternating current (AC), the kind your home appliances use.</li>
          <li>Your home uses the solar power first. Any extra goes to the grid through a net meter.</li>
          <li>The meter records what you send out and what you draw in, and your bill is reduced by the difference.</li>
        </ol>
      </div>

      <div className="card">
        <h3>Why it matters</h3>
        <div className="grid">
          <div>
            <h3>For your household</h3>
            <p>Lower electricity bills for years, and protection from future tariff rises. Use the savings calculator to see your own numbers.</p>
          </div>
          <div>
            <h3>For the community</h3>
            <p>Shared solar for common areas cuts society maintenance costs. Local installation and servicing also create jobs. PM Surya Ghar has reported about 38,500 direct jobs.</p>
          </div>
          <div>
            <h3>For the environment</h3>
            <p>Solar produces no smoke or fumes while generating power. Each unit of solar replaces a unit made from coal, which cuts CO₂ and air pollution. India aims for net zero emissions by 2070.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Did you know?</h3>
        <ul>
          <li>India’s solar capacity grew from about 2.8 GW in 2014 to 164.59 GW in July 2026.</li>
          <li>India installed a record 44.6 GW of solar in 2025–26 alone.</li>
          <li>A 1 kW rooftop system gives roughly 4 units a day (about 120 a month), depending on sunlight.</li>
          <li>Solar panels typically keep working for 25 years or more with basic cleaning.</li>
          <li>More than 1.4 crore diesel pumps run on Indian farms, burning about 6 billion litres of diesel a year. Solar pumps under PM-KUSUM replace them.</li>
          <li>Switching to LED bulbs is the cheapest way to start saving energy today.</li>
        </ul>
        <p className="note">Sources: MNRE and PIB statements and 2026 news reports. Pump figures are approximate.</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ margin: 0 }}>Quick quiz</h3>
            <p className="note" style={{ margin: '4px 0 0' }}>
              Test your knowledge on rooftop solar, government subsidies, and renewable energy in India.
            </p>
          </div>
          <button
            onClick={() => setIsQuizOpen(!isQuizOpen)}
            style={{ margin: 0, padding: '10px 22px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            {isQuizOpen ? 'Close Quiz ✕' : 'Take Quiz →'}
          </button>
        </div>

        {isQuizOpen && (
          <div id="quiz" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            <p className="note" style={{ marginBottom: '16px' }}>
              Answer all 10 questions, then press <b>Submit answers</b>. Correct answers turn green and wrong answers turn red.
            </p>
            <div className="quiz-grid">
              {QUIZ_QUESTIONS.map(([question, options, correctIdx], qi) => {
                const userChoice = answers[qi];
                let feedback = null;
                if (submitted) {
                  if (userChoice === undefined) {
                    feedback = <p className="fb no">Not answered. Correct answer: {options[correctIdx]}</p>;
                  } else if (Number(userChoice) === correctIdx) {
                    feedback = <p className="fb ok">✓ Correct</p>;
                  } else {
                    feedback = <p className="fb no">✗ Wrong. Correct answer: {options[correctIdx]}</p>;
                  }
                }

                return (
                  <fieldset className="q" key={qi}>
                    <legend>{qi + 1}. {question}</legend>
                    <div className="q-options">
                      {options.map((optText, optIdx) => {
                        let chClass = 'ch';
                        if (submitted) {
                          if (optIdx === correctIdx) chClass += ' ok';
                          else if (Number(userChoice) === optIdx) chClass += ' no';
                        }

                        return (
                          <label className={chClass} key={optIdx}>
                            <input
                              type="radio"
                              name={`q${qi}`}
                              value={optIdx}
                              disabled={submitted}
                              checked={userChoice === String(optIdx) || userChoice === optIdx}
                              onChange={(e) => handleOptionChange(qi, e.target.value)}
                            />
                            <span>{optText}</span>
                          </label>
                        );
                      })}
                    </div>
                    {feedback}
                  </fieldset>
                );
              })}
            </div>

            {!submitted ? (
              <button onClick={handleSubmitQuiz}>Submit answers</button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button disabled>Submit answers</button>
                <button className="ghost" onClick={handleResetQuiz} style={{ marginTop: '14px' }}>
                  Try again
                </button>
              </div>
            )}

            {scoreText && (
              <p className="score" role="status">
                {scoreText}
              </p>
            )}
          </div>
        )}
      </div>
      <p className="note">Subsidy schemes such as PM Surya Ghar change over time. Check the official portal before applying.</p>
    </section>
  );
}

/* ────────────── SECTION 2: AWARENESS DRIVE ────────────── */
function AwarenessSection({ cname }) {
  const [slink, setSlink] = useState(() => store.get('sharelink', window.location.href.split('#')[0]));
  const defaultMsg = () =>
    `☀️ ${cname.trim() || 'Our community'} is going solar! Check how much you can save, see the government subsidy (up to ₹78,000) and join our community plan:`;
  const [smsgtxt, setSmsgtxt] = useState(() => store.get('sharemsg', defaultMsg()));
  const [shmsg, setShmsg] = useState('');

  // Practical campaign tracker
  const CAMPAIGN_TASKS = [
    { id: 1, title: 'Form 3-member volunteer drive team', cat: 'Setup', tip: 'Assign a lead for student/elder outreach.' },
    { id: 2, title: 'Print & pin 10 notices on Community Hall & Gate boards', cat: 'Collateral', tip: 'Use the one-click printable notice below.' },
    { id: 3, title: 'Send digital invite to Society WhatsApp groups', cat: 'Digital', tip: 'Use the 1-click WhatsApp button below.' },
    { id: 4, title: 'Conduct Baseline Survey (20+ sample households)', cat: 'Fieldwork', tip: 'Record baseline responses using the survey tool below.' },
    { id: 5, title: 'Host 30-min Weekend Awareness Session with Solar Vendor', cat: 'Event', tip: 'Demonstrate the savings calculator live on projector.' },
    { id: 6, title: 'Collect Post-Drive Survey to measure awareness increase', cat: 'Evaluation', tip: 'Demonstrate measurable knowledge growth for the project.' },
  ];

  const [completedTasks, setCompletedTasks] = useState(() => store.get('campaign_tasks', [1, 2]));

  const toggleTask = (id) => {
    setCompletedTasks((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      store.set('campaign_tasks', next);
      return next;
    });
  };

  // Survey
  const [sphase, setSphase] = useState('before');
  const [surveyVals, setSurveyVals] = useState(() => SQ.map(() => 'Yes'));
  const [surveyList, setSurveyList] = useState(() => {
    const existing = store.get('survey', null);
    if (existing && existing.length) return existing;
    // Provide realistic baseline community data if empty
    return [
      { p: 'before', a: ['Yes', 'No', 'No', 'Yes', 'No'] },
      { p: 'before', a: ['Yes', 'No', 'Yes', 'No', 'Yes'] },
      { p: 'before', a: ['No', 'No', 'No', 'Yes', 'No'] },
      { p: 'before', a: ['Yes', 'No', 'No', 'Yes', 'No'] },
      { p: 'after', a: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
      { p: 'after', a: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
      { p: 'after', a: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
    ];
  });
  const [smsg, setSmsg] = useState('');

  // Printable Notice State
  const [showNoticePreview, setShowNoticePreview] = useState(false);

  useEffect(() => {
    store.set('sharelink', slink);
  }, [slink]);

  useEffect(() => {
    store.set('sharemsg', smsgtxt);
  }, [smsgtxt]);

  const fullShareText = () => smsgtxt.trim() + (slink.trim() ? '\n' + slink.trim() : '');

  const copyToClipboard = async (text, msg) => {
    try {
      await navigator.clipboard.writeText(text);
      setShmsg(msg);
    } catch {
      setShmsg('Copy did not work. Please select the text manually.');
    }
  };

  const handleSaveSurvey = () => {
    const next = [...surveyList, { p: sphase, a: [...surveyVals] }];
    setSurveyList(next);
    store.set('survey', next);
    setSmsg(`Response recorded successfully. Total responses: ${next.length}.`);
  };

  const handleClearSurvey = () => {
    setSurveyList([]);
    store.set('survey', []);
    setSmsg('Survey data reset.');
  };

  const bf = surveyList.filter((r) => r.p === 'before');
  const af = surveyList.filter((r) => r.p === 'after');
  const pcVal = (arr, i) => (arr.length ? Math.round((arr.filter((r) => r.a[i] === 'Yes').length / arr.length) * 100) : 0);
  const pc = (arr, i) => (arr.length ? `${pcVal(arr, i)}%` : '–');

  const E = encodeURIComponent;
  const progressPct = Math.round((completedTasks.length / CAMPAIGN_TASKS.length) * 100);

  return (
    <section id="awareness">
      <h2>Awareness drive toolkit</h2>
      <p>
        Action-oriented operational toolkit designed to educate {cname}, run community door-to-door outreach, and measure adoption impact.
      </p>

      {/* 1. PRACTICAL CAMPAIGN ROADMAP */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
          <div>
            <h3 style={{ margin: 0 }}>Community Campaign Execution Checklist</h3>
            <p className="note" style={{ margin: '2px 0 0' }}>Step-by-step field execution guide for student volunteers and RWA committee.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--leaf)' }}>{progressPct}%</span>
            <small style={{ display: 'block', color: 'var(--mute)' }}>{completedTasks.length} of {CAMPAIGN_TASKS.length} completed</small>
          </div>
        </div>

        <div style={{ height: '8px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden', marginBottom: '18px' }}>
          <div style={{ height: '100%', width: `${progressPct}%`, background: 'var(--leaf)', transition: 'width 0.3s ease' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {CAMPAIGN_TASKS.map((t) => {
            const isDone = completedTasks.includes(t.id);
            return (
              <label
                key={t.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px 14px',
                  background: isDone ? 'rgba(47, 125, 91, 0.06)' : 'var(--bg)',
                  border: `1px solid ${isDone ? 'var(--leaf)' : 'var(--line)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  margin: 0
                }}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggleTask(t.id)}
                  style={{ width: 'auto', marginTop: '3px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 700, color: isDone ? 'var(--leaf)' : 'var(--ink)', textDecoration: isDone ? 'line-through' : 'none' }}>
                      {t.title}
                    </span>
                    <span className="tag" style={{ fontSize: '0.75rem', padding: '1px 8px' }}>{t.cat}</span>
                  </div>
                  <div className="note" style={{ fontSize: '0.85rem', marginTop: '2px' }}>💡 {t.tip}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. ONE-CLICK NOTICE & PAMPHLET GENERATOR */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ margin: 0 }}>Community Notice Board Pamphlet</h3>
            <p className="note" style={{ margin: '4px 0 0' }}>
              Standard print-ready circular for apartment notice boards, elevators, and local WhatsApp distribution.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="ghost"
              onClick={() => setShowNoticePreview(!showNoticePreview)}
              style={{ marginTop: 0 }}
            >
              {showNoticePreview ? 'Hide Preview' : 'Preview Notice 👁️'}
            </button>
            <button
              onClick={() => {
                setShowNoticePreview(true);
                setTimeout(() => window.print(), 200);
              }}
              style={{ marginTop: 0, padding: '9px 18px' }}
            >
              🖨️ Print Notice
            </button>
          </div>
        </div>

        {showNoticePreview && (
          <div
            style={{
              marginTop: '16px',
              padding: '24px',
              background: '#ffffff',
              border: '2px solid var(--ink)',
              borderRadius: '8px',
              color: '#14313b',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ textAlign: 'center', borderBottom: '2px solid #14313b', paddingBottom: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#566b73', fontWeight: 700 }}>
                Official Resident Community Circular
              </span>
              <h2 style={{ fontSize: '1.5rem', margin: '6px 0', color: '#14313b' }}>
                ☀️ Go Solar &amp; Save Up To ₹78,000 on Electricity
              </h2>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--leaf)' }}>
                {cname} &bull; PM Surya Ghar: Muft Bijli Yojana Initiative
              </p>
            </div>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.5 }}>
              Dear Residents, our community is participating in the clean solar transition. Rooftop solar offers lifelong power bill reductions and guaranteed central subsidies:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '14px 0', textAlign: 'center' }}>
              <div style={{ padding: '10px', background: 'var(--sky)', borderRadius: '6px' }}>
                <b style={{ display: 'block', fontSize: '1.2rem', color: '#14313b' }}>₹30,000</b>
                <span style={{ fontSize: '0.85rem' }}>1 kW Subsidy</span>
              </div>
              <div style={{ padding: '10px', background: 'var(--sky)', borderRadius: '6px' }}>
                <b style={{ display: 'block', fontSize: '1.2rem', color: '#14313b' }}>₹60,000</b>
                <span style={{ fontSize: '0.85rem' }}>2 kW Subsidy</span>
              </div>
              <div style={{ padding: '10px', background: 'var(--sky)', borderRadius: '6px' }}>
                <b style={{ display: 'block', fontSize: '1.2rem', color: 'var(--leaf)' }}>₹78,000</b>
                <span style={{ fontSize: '0.85rem' }}>3+ kW Max Subsidy</span>
              </div>
            </div>

            <ul style={{ fontSize: '0.92rem', paddingLeft: '20px', lineHeight: 1.6 }}>
              <li><b>Zero Electricity Bills:</b> Net metering credits excess day units back to DISCOM.</li>
              <li><b>25-Year Life:</b> Panels operate trouble-free with simple periodic water rinsing.</li>
              <li><b>Official Portal:</b> Apply transparently at <u>pmsuryaghar.gov.in</u> or call Toll-Free Helpline: <b>15555</b>.</li>
            </ul>

            <div style={{ marginTop: '16px', padding: '10px 14px', background: '#f5f8f9', borderRadius: '6px', fontSize: '0.88rem', borderLeft: '4px solid var(--sun)' }}>
              📌 <b>Scan / Visit the Community Portal:</b> Open <u>{slink || window.location.href}</u> to calculate your exact monthly savings, track house usage, and join our group installation.
            </div>
          </div>
        )}
      </div>

      {/* 3. DIGITAL SHARING HUB */}
      <div className="card" id="sharebox">
        <h3>1-Click WhatsApp &amp; Social Broadcast</h3>
        <p>Send the live portal link directly into neighbourhood society groups and family chats:</p>
        <label htmlFor="slink">Portal web link</label>
        <input
          id="slink"
          type="url"
          value={slink}
          onChange={(e) => setSlink(e.target.value)}
          spellCheck="false"
        />

        <label htmlFor="smsgtxt" style={{ marginTop: '12px' }}>Broadcast message template</label>
        <textarea
          id="smsgtxt"
          maxLength={500}
          value={smsgtxt}
          onChange={(e) => setSmsgtxt(e.target.value)}
          style={{ minHeight: '80px' }}
        />

        <div className="shbtns" style={{ marginTop: '12px' }}>
          <a
            className="sh wa"
            href={`https://wa.me/?text=${E(fullShareText())}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .600l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.600-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.400.1.100.1.700-.1 1.300z" />
            </svg>
            Broadcast to WhatsApp
          </a>
          <button onClick={() => copyToClipboard(slink.trim(), 'Portal link copied to clipboard.')}>
            Copy Link
          </button>
          <button
            className="ghost"
            onClick={() =>
              copyToClipboard(
                fullShareText(),
                slink.trim() ? 'Message + link copied to clipboard.' : 'Message copied.'
              )
            }
          >
            Copy Message Text
          </button>
          {typeof navigator !== 'undefined' && navigator.share && (
            <button
              className="ghost"
              onClick={() => {
                navigator.share({
                  title: document.title,
                  text: smsgtxt.trim(),
                  url: slink.trim(),
                }).catch(() => {});
              }}
            >
              System Share…
            </button>
          )}
        </div>
        {shmsg && <p className="note" role="status" style={{ color: 'var(--leaf)', fontWeight: 600, marginTop: '8px' }}>✓ {shmsg}</p>}
      </div>

      {/* 4. PRACTICAL SURVEY RECORDER & ANALYTICS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
        <div className="card" style={{ marginBottom: 0 }}>
          <h3 style={{ margin: 0 }}>Field Survey Data Logger</h3>
          <p className="note" style={{ margin: '4px 0 14px' }}>Record a resident interview response in real-time:</p>
          
          <label htmlFor="sphase">Survey Cohort</label>
          <select id="sphase" value={sphase} onChange={(e) => setSphase(e.target.value)}>
            <option value="before">Baseline (Before Awareness Drive)</option>
            <option value="after">Impact Test (After Awareness Drive)</option>
          </select>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            {SQ.map((q, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '6px 0', borderBottom: '1px solid var(--line)' }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{i + 1}. {q}</span>
                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  {['Yes', 'No'].map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      className={surveyVals[i] === choice ? '' : 'ghost'}
                      onClick={() => {
                        const copy = [...surveyVals];
                        copy[i] = choice;
                        setSurveyVals(copy);
                      }}
                      style={{
                        margin: 0,
                        padding: '4px 12px',
                        fontSize: '0.85rem',
                        background: surveyVals[i] === choice ? (choice === 'Yes' ? 'var(--leaf)' : 'var(--bad)') : 'transparent',
                        color: surveyVals[i] === choice ? '#fff' : 'var(--ink)',
                        borderColor: surveyVals[i] === choice ? 'transparent' : 'var(--line)'
                      }}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button id="sadd" onClick={handleSaveSurvey} style={{ width: '100%', marginTop: '16px' }}>
            + Record Household Interview
          </button>
          {smsg && <p className="note" role="status" style={{ color: 'var(--leaf)', fontWeight: 600 }}>✓ {smsg}</p>}
        </div>

        {/* 5. MEASURABLE RESULTS WITH VISUAL PROGRESS BARS */}
        <div className="card" style={{ marginBottom: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0 }}>Awareness Growth Impact</h3>
            <span className="tag" style={{ background: 'rgba(47, 125, 91, 0.15)', color: 'var(--leaf)' }}>
              {bf.length} Before &bull; {af.length} After
            </span>
          </div>
          <p className="note" style={{ margin: '4px 0 16px' }}>Comparative % of residents responding "Yes" before vs. after outreach:</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {SQ.map((q, i) => {
              const bPct = pcVal(bf, i);
              const aPct = pcVal(af, i);
              const diff = aPct - bPct;

              return (
                <div key={i} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
                    <span>{q}</span>
                    <span style={{ color: diff >= 0 ? 'var(--leaf)' : 'var(--bad)' }}>
                      {diff >= 0 ? `+${diff}%` : `${diff}%`}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 45px', gap: '8px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--mute)' }}>
                    <span>Before:</span>
                    <div style={{ height: '8px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${bPct}%`, height: '100%', background: 'var(--mute)' }}></div>
                    </div>
                    <b>{bPct}%</b>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 45px', gap: '8px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--leaf)', marginTop: '4px' }}>
                    <span>After:</span>
                    <div style={{ height: '8px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${aPct}%`, height: '100%', background: 'var(--leaf)' }}></div>
                    </div>
                    <b>{aPct}%</b>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <small className="note">Data auto-saves locally for Societal Project report.</small>
            <button className="ghost" onClick={handleClearSurvey} style={{ fontSize: '0.85rem' }}>
              Reset Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────── SECTION 3: GOVERNMENT SCHEMES ────────────── */
function SchemesSection() {
  const [who, setWho] = useState('all');
  const [stepticks, setStepticks] = useState(() => store.get('stepticks', {}));

  const filteredSchemes = S.filter((item) => who === 'all' || item.for.includes(who));

  const toggleStep = (schemeName, stepIdx) => {
    setStepticks((prev) => {
      const cur = prev[schemeName] || [];
      const updated = cur.includes(stepIdx)
        ? cur.filter((x) => x !== stepIdx)
        : [...cur, stepIdx];
      const next = { ...prev, [schemeName]: updated };
      store.set('stepticks', next);
      return next;
    });
  };

  return (
    <section id="schemes">
      <h2>Government schemes</h2>
      <p className="note">
        Checked against government statements and 2026 news reports. Schemes change, so confirm on the official site before you apply.
      </p>
      <div className="card">
        <label htmlFor="who">Show schemes for</label>
        <select id="who" value={who} onChange={(e) => setWho(e.target.value)}>
          <option value="all">Everyone (all schemes)</option>
          <option value="home">I own a house with a roof</option>
          <option value="tenant">I rent or live in an apartment</option>
          <option value="society">My housing society or RWA</option>
          <option value="farmer">I am a farmer</option>
          <option value="rural">I live in a rural household with cattle</option>
        </select>
      </div>

      <div id="slist">
        {filteredSchemes.map((s) => {
          const g = GUIDE[s.n];
          const done = stepticks[s.n] || [];
          return (
            <div className="card" key={s.n}>
              <h3>{s.n}</h3>
              <p className="note">{s.by}</p>
              <p>{s.sum}</p>
              <ul>
                {s.f.map((feat, fi) => (
                  <li key={fi}>{feat}</li>
                ))}
              </ul>
              <a href={s.u} target="_blank" rel="noopener noreferrer">
                Official website
              </a>

              {g && (
                <div className="stp">
                  <h4>Step-by-step: {s.n}</h4>
                  <p className="note" role="status" style={{ margin: '0 0 6px' }}>
                    {done.length} of {g.st.length} steps done. Tick each step as you finish it.
                  </p>
                  {g.st.map(([t, d], i) => {
                    const isDone = done.includes(i);
                    return (
                      <label className={isDone ? 'done' : ''} key={i}>
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleStep(s.n, i)}
                        />
                        <span>
                          <b>Step {i + 1}: {t}. </b>
                          {d}
                        </span>
                      </label>
                    );
                  })}
                  <details className="dl">
                    <summary>Documents to keep ready</summary>
                    <ul>
                      {g.d.map((doc, di) => (
                        <li key={di}>{doc}</li>
                      ))}
                    </ul>
                    <p className="note">
                      This is a typical list. Your state agency, DISCOM or installer may ask for more.
                    </p>
                  </details>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="note">
        Sources: MNRE and PIB statements, official scheme portals (pmsuryaghar.gov.in, mnre.gov.in) and 2026 news reports. Last checked November 2026.
      </p>
    </section>
  );
}

/* ────────────── SECTION 4: HOW TO APPLY ────────────── */
function ApplySection() {
  const [ticks, setTicks] = useState(() => store.get('ticks', []));

  const toggleDoc = (idx) => {
    setTicks((prev) => {
      const next = prev.includes(idx) ? prev.filter((x) => x !== idx) : [...prev, idx];
      store.set('ticks', next);
      return next;
    });
  };

  return (
    <section id="apply">
      <h2>How to get rooftop solar with the subsidy</h2>
      <div className="card">
        <h3>Steps for PM Surya Ghar</h3>
        <ol>
          <li>
            Register on the national portal,{' '}
            <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer">
              pmsuryaghar.gov.in
            </a>
            . Choose your state and electricity company (DISCOM) and enter your consumer number and mobile number.
          </li>
          <li>Apply for a rooftop solar system and wait for your DISCOM’s approval.</li>
          <li>Have it installed by a registered vendor, using panels from the ALMM approved list.</li>
          <li>Get the net meter fitted and the system inspected. The DISCOM issues a commissioning report.</li>
          <li>Upload the report with your bank details. The subsidy arrives in your bank account in about 30 days.</li>
        </ol>
        <p className="note">
          The whole process usually takes 2 to 4 months. You pay the full cost first and receive the subsidy afterwards. Solar loans exist: one published example is about ₹1,098 a month for a ₹1 lakh loan over 10 years at 5.75%. Rates change, so ask your bank. Helpline: 15555.
        </p>
      </div>

      <div className="card">
        <h3>Documents checklist</h3>
        <div id="docs">
          {DOCS.map((doc, i) => (
            <label
              key={i}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                fontWeight: 400,
                margin: '6px 0',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={ticks.includes(i)}
                onChange={() => toggleDoc(i)}
                style={{ width: 'auto' }}
              />
              <span>{doc}</span>
            </label>
          ))}
        </div>
        <p className="note" role="status">
          {ticks.length} of {DOCS.length} documents ready.
        </p>
        <p className="note">This is a typical list. Your DISCOM or installer may ask for more.</p>
      </div>

      <div className="card">
        <h3>Save energy first</h3>
        <ul>
          <li>Switch to LED bulbs and star-rated appliances.</li>
          <li>Set the AC to 24–26 °C and use a fan with it.</li>
          <li>Unplug chargers and switch off standby devices.</li>
          <li>Use a solar water heater instead of an electric geyser.</li>
          <li>Smaller bills also mean a smaller, cheaper solar system.</li>
        </ul>
      </div>
    </section>
  );
}

function CalculatorSection() {
  // Pre-configured state electricity boards with typical average residential tariffs
  const DISCOMS = [
    { name: 'BESCOM (Bengaluru / Karnataka)', tariff: 7.2, sunHours: 4.5, region: 'South' },
    { name: 'GESCOM (Kalaburagi / North Karnataka)', tariff: 7.0, sunHours: 4.8, region: 'South' },
    { name: 'HESCOM (Hubballi / Karnataka)', tariff: 7.1, sunHours: 4.6, region: 'South' },
    { name: 'UPPCL (Uttar Pradesh - PVVNL / DVVNL / MVVNL)', tariff: 7.5, sunHours: 4.3, region: 'North' },
    { name: 'BSES / Tata Power (Delhi NCR)', tariff: 6.8, sunHours: 4.4, region: 'North' },
    { name: 'PSPCL (Punjab)', tariff: 7.3, sunHours: 4.5, region: 'North' },
    { name: 'DHBVN / UHBVN (Haryana / Gurgaon / Faridabad)', tariff: 7.1, sunHours: 4.5, region: 'North' },
    { name: 'JVVNL (Rajasthan - Jaipur / Jodhpur)', tariff: 7.6, sunHours: 5.2, region: 'North/West' },
    { name: 'Other DISCOM / Custom Tariff', tariff: 7.0, sunHours: 4.5, region: 'All India' },
  ];

  const [selectedDiscom, setSelectedDiscom] = useState(0);
  const [bill, setBill] = useState(3000);
  const [tariff, setTariff] = useState(7.2);
  const [costPerKw, setCostPerKw] = useState(60000);

  const handleDiscomChange = (idx) => {
    setSelectedDiscom(idx);
    setTariff(DISCOMS[idx].tariff);
  };

  // Calculations based on standard Indian MNRE benchmarking
  const monthlyUnits = Math.round((Number(bill) || 0) / (Number(tariff) || 1));
  const suggestedKw = Math.max(1, Math.min(10, Math.ceil(monthlyUnits / 120)));
  const systemCost = suggestedKw * (Number(costPerKw) || 60000);

  // PM Surya Ghar Central Subsidy rules
  const subsidy = suggestedKw >= 3 ? 78000 : suggestedKw === 2 ? 60000 : 30000;
  const netCustomerPays = Math.max(0, systemCost - subsidy);

  // Generation: 1 kW generates approx 120 units (kWh) per month (~4 units/day in India)
  const monthlyGeneratedUnits = suggestedKw * 120;
  const monthlySavings = Math.min(monthlyUnits, monthlyGeneratedUnits) * Number(tariff);
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? (netCustomerPays / annualSavings) : 0;
  const roofAreaSqFt = suggestedKw * 100; // ~100 sq ft per kW
  const co2AvoidedKg = monthlyGeneratedUnits * 12 * 0.82;

  // Quick preset bill buttons for convenience
  const billPresets = [1500, 2500, 3500, 5000, 8000];

  return (
    <section id="calculator">
      <h2>Solar Savings &amp; Subsidy Calculator</h2>
      <p>
        Easily estimate your rooftop solar system size, official central government subsidy, and monthly electricity bill savings for your home.
      </p>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* STEP 1: SELECT YOUR ELECTRICITY PROVIDER */}
          <div>
            <label htmlFor="discom-select" style={{ fontSize: '1rem' }}>
              1. Your Electricity Board (DISCOM)
            </label>
            <select
              id="discom-select"
              value={selectedDiscom}
              onChange={(e) => handleDiscomChange(Number(e.target.value))}
              style={{ fontWeight: 600, padding: '11px' }}
            >
              {DISCOMS.map((d, i) => (
                <option key={i} value={i}>
                  {d.name} &bull; (Avg ₹{d.tariff}/unit)
                </option>
              ))}
            </select>
            <small className="note" style={{ display: 'block', marginTop: '6px' }}>
              Auto-sets your region’s typical power rate per unit.
            </small>
          </div>

          {/* STEP 2: MONTHLY BILL WITH ONE-CLICK PRESETS */}
          <div>
            <label htmlFor="bill" style={{ fontSize: '1rem' }}>
              2. Average Monthly Electricity Bill (₹)
            </label>
            <input
              id="bill"
              type="number"
              min="0"
              step="100"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              style={{ fontWeight: 700, fontSize: '1.1rem', padding: '10px' }}
            />
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--mute)', alignSelf: 'center' }}>Quick pick:</span>
              {billPresets.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={bill === b ? '' : 'ghost'}
                  onClick={() => setBill(b)}
                  style={{
                    margin: 0,
                    padding: '4px 10px',
                    fontSize: '0.82rem',
                    borderRadius: '4px',
                    background: bill === b ? 'var(--sun)' : 'transparent'
                  }}
                >
                  ₹{fmt(b)}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: TARIFF & BENCHMARK COST ADJUSTER */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label htmlFor="tariff">Tariff (₹/unit)</label>
                <input
                  id="tariff"
                  type="number"
                  min="1"
                  step="0.1"
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="cost">Cost / kW (₹)</label>
                <input
                  id="cost"
                  type="number"
                  min="40000"
                  step="2000"
                  value={costPerKw}
                  onChange={(e) => setCostPerKw(Number(e.target.value))}
                />
              </div>
            </div>
            <small className="note" style={{ display: 'block', marginTop: '6px' }}>
              Avg units used: <b>~{monthlyUnits} kWh / month</b>.
            </small>
          </div>
        </div>

        {/* HIGHLIGHTED RESULTS DASHBOARD */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '2px solid var(--line)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Your Recommended Solar Plan</h3>
            <span className="tag" style={{ background: 'var(--leaf)', color: '#fff', padding: '4px 12px', fontSize: '0.88rem' }}>
              PM Surya Ghar Subsidy Eligible
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '14px',
              background: 'var(--bg)',
              padding: '18px',
              borderRadius: '8px',
              border: '1px solid var(--line)'
            }}
          >
            <div className="stat">
              <div className="big" style={{ fontSize: '2rem', color: 'var(--leaf)' }}>{suggestedKw} kW</div>
              <small><b>System Size Needed</b><br />Generates ~{fmt(monthlyGeneratedUnits)} units/mo</small>
            </div>

            <div className="stat">
              <div className="big" style={{ fontSize: '2rem', color: 'var(--ink)' }}>₹{fmt(systemCost)}</div>
              <small><b>Estimated Market Cost</b><br />Before government subsidy</small>
            </div>

            <div className="stat">
              <div className="big" style={{ fontSize: '2rem', color: 'var(--leaf)' }}>-₹{fmt(subsidy)}</div>
              <small><b>Govt. Subsidy (Direct)</b><br />Directly into your bank in 30 days</small>
            </div>

            <div className="stat">
              <div className="big" style={{ fontSize: '2.1rem', color: '#14313b', background: 'var(--sun)', padding: '2px 8px', borderRadius: '4px', display: 'inline-block' }}>
                ₹{fmt(netCustomerPays)}
              </div>
              <small><b>Your Net Upfront Cost</b><br />Solar loans available from ~₹1,100/mo</small>
            </div>

            <div className="stat">
              <div className="big" style={{ fontSize: '2rem', color: 'var(--leaf)' }}>₹{fmt(annualSavings)}</div>
              <small><b>Savings per year</b><br />~₹{fmt(monthlySavings)} saved every month</small>
            </div>

            <div className="stat">
              <div className="big" style={{ fontSize: '2rem', color: 'var(--ink)' }}>{paybackYears.toFixed(1)} yrs</div>
              <small><b>Full Payback Period</b><br />Free electricity for remaining ~20 years</small>
            </div>
          </div>

          {/* PLAIN LANGUAGE EXPLANATION / HINDI-ENGLISH GUIDANCE */}
          <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '0.88rem' }}>
              <b>📐 Roof Space Required:</b> You need approximately <b>{roofAreaSqFt} sq. ft.</b> of shadow-free rooftop space ({suggestedKw} kW &times; 100 sq ft).
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '0.88rem' }}>
              <b>🌱 Clean Environment Impact:</b> Avoids <b>{fmt(co2AvoidedKg)} kg of CO₂</b> emissions annually (equivalent to planting {Math.round(co2AvoidedKg / 21)} trees).
            </div>
            <div style={{ padding: '12px 14px', background: 'rgba(242, 183, 5, 0.12)', border: '1px solid rgba(242, 183, 5, 0.3)', borderRadius: '6px', fontSize: '0.88rem' }}>
              <b>💡 सरल समझ (Simple Explanation):</b> Under PM Surya Ghar, the central government gives ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW+. Surplus electricity is sent to your DISCOM via net metering.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────── SECTION 6: USAGE TRACKER ────────────── */
function TrackerSection() {
  const [readings, setReadings] = useState(() => store.get('readings', []));
  const [month, setMonth] = useState(() => new Date().toISOString().slice(0, 7));
  const [units, setUnits] = useState('');
  const [msg, setMsg] = useState('');

  const handleSaveReading = () => {
    const u = Number(units);
    if (!month || !(u > 0)) {
      setMsg('Choose a month and enter units above 0.');
      return;
    }
    const filtered = readings.filter((x) => x.m !== month);
    const updated = [...filtered, { m: month, u }];
    setReadings(updated);
    store.set('readings', updated);
    setMsg(`Saved reading for ${month}.`);
    setUnits('');
  };

  const sorted = [...readings].sort((a, b) => a.m.localeCompare(b.m)).slice(-12);
  const mx = sorted.length ? Math.max(...sorted.map((x) => x.u)) : 0;
  const avg = sorted.length ? sorted.reduce((a, b) => a + b.u, 0) / sorted.length : 0;
  const barW = 56;

  return (
    <section id="tracker">
      <h2>Household usage tracker</h2>
      <div className="card">
        <div className="grid">
          <div>
            <label htmlFor="tm">Month</label>
            <input
              id="tm"
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tu">Units used (kWh)</label>
            <input
              id="tu"
              type="number"
              min="0"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
          </div>
        </div>

        <button id="tadd" onClick={handleSaveReading}>Save reading</button>
        {msg && <p className="note" role="status">{msg}</p>}

        <div style={{ marginTop: '20px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px' }}>
          {!sorted.length ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <p className="note" style={{ fontSize: '1rem', margin: 0 }}>
                📊 No usage readings logged yet. Select a month and enter units (kWh) from your electricity bill above to generate your chart.
              </p>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>Monthly Consumption (kWh)</span>
                <span className="tag" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  Avg: {fmt(avg)} kWh &bull; Peak: {fmt(mx)} kWh
                </span>
              </div>

              <div className="scroll" style={{ width: '100%', overflowX: 'auto', paddingBottom: '6px' }}>
                <svg
                  viewBox={`0 0 ${Math.max(600, sorted.length * 75 + 40)} 260`}
                  style={{
                    width: '100%',
                    minWidth: `${Math.max(500, sorted.length * 70)}px`,
                    height: '260px',
                    display: 'block'
                  }}
                  role="img"
                  aria-label="Monthly electricity use"
                >
                  {/* Background guide lines */}
                  <line x1="30" y1="40" x2="100%" y2="40" stroke="var(--line)" strokeDasharray="3 3" />
                  <line x1="30" y1="120" x2="100%" y2="120" stroke="var(--line)" strokeDasharray="3 3" />
                  <line x1="30" y1="200" x2="100%" y2="200" stroke="var(--line)" strokeWidth="1.5" />

                  {sorted.map((x, i) => {
                    const stepW = 75;
                    const posX = 40 + i * stepW;
                    const maxBarH = 150;
                    const h = mx ? (x.u / mx) * maxBarH : 0;
                    const isPeak = x.u === mx;

                    return (
                      <g key={x.m}>
                        {/* Bar */}
                        <rect
                          x={posX}
                          y={200 - h}
                          width={44}
                          height={Math.max(4, h)}
                          rx={5}
                          fill={isPeak ? '#e59400' : 'var(--sun)'}
                          style={{ transition: 'all 0.2s ease' }}
                        />
                        {/* Value label on top of bar */}
                        <text
                          x={posX + 22}
                          y={200 - h - 8}
                          textAnchor="middle"
                          fontSize="13"
                          fontWeight="700"
                          fill="var(--ink)"
                        >
                          {x.u}
                        </text>
                        {/* Month label below axis */}
                        <text
                          x={posX + 22}
                          y={225}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="var(--mute)"
                        >
                          {x.m}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <p className="note" style={{ marginTop: '10px', fontSize: '0.85rem' }}>
                💡 Tip: If your average monthly consumption exceeds 250–300 kWh, a 3 kW solar rooftop system is recommended to offset your bills completely.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ────────────── SECTION 7: COMMUNITY DASHBOARD ────────────── */
function DashboardSection() {
  const regs = store.get('regs', []);
  const issues = store.get('issues', []);
  const tariff = store.get('tariff', 7);

  const base = { hh: 48, kw: 126 };
  const kw = base.kw + regs.reduce((a, r) => a + (Number(r.k) || 0), 0);
  const hh = base.hh + regs.length;
  const gen = kw * 120 * 12;
  const co2 = gen * 0.82;
  const trees = co2 / 21;
  const money = gen * (Number(tariff) || 7);
  const openIssues = issues.filter((i) => i.s === 'Open').length;

  const items = [
    ['Households participating', fmt(hh)],
    ['Installed capacity', `${fmt(kw)} kW`],
    ['Energy generated per year', `${fmt(gen)} kWh`],
    ['CO₂ avoided per year', `${fmt(co2 / 1000)} tonnes`],
    ['Equivalent trees planted', fmt(trees)],
    ['Bills saved per year', `₹${fmt(money)}`],
    ['Open issues', openIssues],
  ];

  return (
    <section id="dashboard">
      <h2>Community dashboard</h2>
      <p className="note">Sample figures until real data is added. New sign-ups on the Join page update these numbers.</p>
      <div className="grid">
        {items.map(([label, val]) => (
          <div className="card stat" key={label}>
            <div className="big">{val}</div>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────── SECTION 8: REGISTER / JOIN ────────────── */
function RegisterSection() {
  const [regs, setRegs] = useState(() => store.get('regs', []));
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [interest, setInterest] = useState('Rooftop solar on my home');
  const [kw, setKw] = useState(2);
  const [msg, setMsg] = useState('');

  const handleRegister = () => {
    const n = name.trim();
    const h = house.trim();
    if (!n || !h) {
      setMsg('Enter your name and house number to register.');
      return;
    }
    const updated = [...regs, { n, h, i: interest, k: Number(kw) || 1 }];
    setRegs(updated);
    store.set('regs', updated);
    setMsg(`Registered. Thank you, ${n}.`);
    setName('');
    setHouse('');
  };

  return (
    <section id="register">
      <h2>Join the community solar plan</h2>
      <div className="card">
        <label htmlFor="rn">Name</label>
        <input
          id="rn"
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="rh">House or flat number</label>
        <input
          id="rh"
          maxLength={20}
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />

        <label htmlFor="ri">I am interested in</label>
        <select id="ri" value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>Rooftop solar on my home</option>
          <option>Shared community installation</option>
          <option>Learning more first</option>
        </select>

        <label htmlFor="rk">Capacity needed (kW)</label>
        <input
          id="rk"
          type="number"
          min="1"
          max="20"
          value={kw}
          onChange={(e) => setKw(e.target.value)}
        />

        <button id="radd" onClick={handleRegister}>Register interest</button>
        {msg && <p className="note" role="status">{msg}</p>}
      </div>

      <div className="card scroll">
        <h3>Registered households</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>House</th>
              <th>Interest</th>
              <th>kW</th>
            </tr>
          </thead>
          <tbody>
            {regs.map((r, i) => (
              <tr key={i}>
                <td>{r.n}</td>
                <td>{r.h}</td>
                <td>{r.i}</td>
                <td>{r.k}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!regs.length && (
          <p className="note">No sign-ups yet. Use the form above to add the first household.</p>
        )}
      </div>
    </section>
  );
}

/* ────────────── SECTION 9: ISSUES ────────────── */
function IssuesSection() {
  const [issues, setIssues] = useState(() => store.get('issues', []));
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');

  const handleAddIssue = () => {
    const d = desc.trim();
    if (!d) return;
    const updated = [{ d, l: loc.trim(), s: 'Open' }, ...issues];
    setIssues(updated);
    store.set('issues', updated);
    setDesc('');
    setLoc('');
  };

  const toggleIssueStatus = (index) => {
    const updated = issues.map((item, i) => {
      if (i === index) {
        return { ...item, s: item.s === 'Open' ? 'Resolved' : 'Open' };
      }
      return item;
    });
    setIssues(updated);
    store.set('issues', updated);
  };

  return (
    <section id="issues">
      <h2>Maintenance and complaints</h2>
      <div className="card">
        <label htmlFor="id">Describe the issue</label>
        <input
          id="id"
          maxLength={120}
          placeholder="e.g. Panel on block B roof is cracked"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="il">Location</label>
        <input
          id="il"
          maxLength={40}
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
        />

        <button id="iadd" onClick={handleAddIssue}>Report issue</button>
      </div>

      <div className="card scroll">
        <table>
          <thead>
            <tr>
              <th>Issue</th>
              <th>Location</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {issues.map((x, i) => (
              <tr key={i}>
                <td>{x.d}</td>
                <td>{x.l || '–'}</td>
                <td>
                  <span className={`tag${x.s === 'Open' ? ' open' : ''}`}>{x.s}</span>
                </td>
                <td>
                  <button className="ghost" onClick={() => toggleIssueStatus(i)}>
                    {x.s === 'Open' ? 'Mark resolved' : 'Reopen'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!issues.length && (
          <p className="note">No issues reported. Anything you report will appear here with its status.</p>
        )}
      </div>
    </section>
  );
}
