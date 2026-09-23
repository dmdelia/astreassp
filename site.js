(() => {
  const root = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  const preferredLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'en'];
  const isGerman = preferredLanguages.some((language) => String(language).toLowerCase().startsWith('de'));
  const lang = isGerman ? 'de' : 'en';
  root.lang = lang;

  const translations = {
    en: {
      nav_overview:'Overview', nav_projects:'Projects', nav_about:'About', nav_discord:'Discord ↗', nav_github:'GitHub ↗', menu:'MENU',
      home_aria:'ASTREA SSP home', open_nav:'Open navigation',
      hero_eyebrow:'ASTREA SOLO SPACE PROGRAM / GERMANY', hero_title:'Engineering systems<br>for the edge of flight.',
      hero_lead:'Independent aerospace technology and astrophysics research across autonomous flight systems, avionics, guidance and scientific data processing.',
      explore:'Explore projects <span>→</span>', source:'View source on GitHub ↗', status:'STATUS: ACTIVE DEVELOPMENT',
      program:'01 / PROGRAM', intro_title:'Two disciplines.<br>One engineering approach.', intro_copy:'ASTREA combines physical flight hardware with scientific computation. The program currently spans the ICARUS-RLV autonomous reentry testbed and JOANUS, an exoplanet detection and validation pipeline.',
      ic_caption:'ICARUS-RLV / CONCEPT', flight_systems:'01 - FLIGHT SYSTEMS', ic_desc:'Autonomous stratospheric reentry vehicle hardware testbed for guidance, navigation, control and recovery.',
      compute:'COMPUTE', control:'CONTROL', recovery:'RECOVERY', project_details:'Project details <span>↗</span>',
      astrophysics:'02 - ASTROPHYSICS', jo_desc:'A headless exoplanet discovery and validation pipeline built around relative photometry, BLS period searches and automated false-positive checks.', data:'DATA', method:'METHOD', output:'OUTPUT', jo_caption:'JOANUS / SIGNAL ANALYSIS',
      roadmap:'02 / ROADMAP', roadmap_title:'From bench testing<br>to near-space flight.', phase0:'PHASE 0', phase1:'PHASE 1', phase2:'PHASE 2', phase3:'PHASE 3',
      arch:'Architecture & Bench', drops:'Local Drop Tests', strato:'Stratospheric Mission', pinnacle:'High-Altitude Pinnacle',
      phase0copy:'Flight software, sensor fusion, hardware interrupts and pipeline modularization.', phase1copy:'Controlled 1,000 m drops to validate flight state machines, grid fins and recovery.', phase2copy:'Up to approximately 35 km with the full science payload.', phase3copy:'Targeting approximately 40 km and ultra-thin atmospheric conditions.',
      why:'WHY ASTREA EXISTS', portfolio:'A portfolio with a purpose.', whycopy:'ASTREA started as a way to build something real, document the engineering journey, and create a serious portfolio for the educational path that could eventually lead toward an application to the European Space Agency.', cool:'And, honestly: because building rockets and hunting exoplanets is fucking cool. XD',
      public:'THE BUILD IS PUBLIC', discord_cta:'Follow the project on Discord.', join_discord:'Join Discord ↗', statement:'Build. Measure. Verify.', about_program:'About the program <span>→</span>',
      copyright:'© 2026 ASTREA SOLO SPACE PROGRAM',
      projects_eyebrow:'ASTREA SSP / PROJECTS', projects_title:'Systems under<br>development.', projects_lead:'Two active research tracks connect autonomous aerospace hardware with computational astrophysics.', open_project:'Open project ↗',
      about_eyebrow:'ASTREA SSP / ABOUT', about_title:'Independent research.<br>End to end.', about_lead:'ASTREA Solo Space Program is an independent aerospace technology and data science research initiative based in Germany.',
      approach:'01 / APPROACH', approach_title:'Hardware, software and analysis belong to the same system.', approach_copy:'The program focuses on building and testing complete technical loops rather than isolated demonstrations: embedded flight software connects to sensors and actuators; scientific payloads create data; analysis pipelines turn that data into measurable results.',
      portfolio_title:'Built to become a portfolio.', portfolio_copy:'ASTREA is a long-form engineering portfolio: not a collection of claims, but a record of systems, experiments, software, failures and iterations. The long-term idea is to carry that body of work into the next stages of my education and, eventually, into an application to the European Space Agency.', cool2:'And yes - because it is fucking cool.',
      measure:'MEASURE', measure_copy:'Instrument the system and preserve useful telemetry.', verify:'VERIFY', verify_copy:'Use controlled tests and independent validation wherever possible.', iterate:'ITERATE', iterate_copy:'Use every test to reduce uncertainty in the next design cycle.', current:'02 / ROADMAP', current_title:'Current development', current_copy:'ICARUS-RLV is progressing through architecture, bench validation and planned controlled drop testing. JOANUS continues pipeline modularization, validation and data-processing development.', view_all:'View all projects ↗',
      system01:'SYSTEM / 01', close_loop:'Close the loop.', ic_long:'ICARUS is designed as an end-to-end avionics and flight-control testbed. The architecture combines deterministic embedded software on ESP32/FreeRTOS with active attitude and aerodynamic control, telemetry and a return-to-launch concept.', avionics:'AVIONICS', avionics_copy:'Deterministic task scheduling, sensor fusion and hardware interrupt paths.', gnc:'GNC', gnc_copy:'Active control architecture combining RCS and aerodynamic grid-fin actuation.', science:'SCIENCE', science_copy:'Radiation, astrobiology and optical payload concepts create measurable mission data.', next:'NEXT SYSTEM', open_jo:'Open project →',
      pipeline01:'PIPELINE / 01', search_validate:'Search first.<br>Validate independently.', jo_long:'JOANUS processes public space-telescope photometry with a relative-first approach, searches for periodic transit signatures and exports structured candidate telemetry for further validation.', photometry:'PHOTOMETRY', photometry_copy:'Relative measurements keep the search focused on observable transit depth and periodicity.', search:'SEARCH', search_copy:'Box Least Squares identifies candidate periods across batches of targets.', validate:'VALIDATE', validate_copy:'Odd/even and secondary-event checks help reject common false positives.'
    },
    de: {
      nav_overview:'Übersicht', nav_projects:'Projekte', nav_about:'Über ASTREA', nav_discord:'Discord ↗', nav_github:'GitHub ↗', menu:'MENÜ',
      home_aria:'ASTREA SSP Startseite', open_nav:'Navigation öffnen',
      hero_eyebrow:'ASTREA SOLO SPACE PROGRAM / DEUTSCHLAND', hero_title:'Engineering-Systeme<br>an der Grenze des Flugs.',
      hero_lead:'Unabhängige Forschung an Raumfahrttechnologie und Astrophysik - von autonomen Flugsystemen und Avionik über Flugregelung bis zur wissenschaftlichen Datenverarbeitung.',
      explore:'Projekte ansehen <span>→</span>', source:'Quellcode auf GitHub ↗', status:'STATUS: AKTIVE ENTWICKLUNG',
      program:'01 / PROGRAMM', intro_title:'Zwei Disziplinen.<br>Ein Engineering-Ansatz.', intro_copy:'ASTREA verbindet reale Flughardware mit wissenschaftlicher Datenverarbeitung. Das Programm umfasst derzeit den autonomen Wiedereintritts-Testträger ICARUS-RLV und JOANUS, eine Pipeline zur Entdeckung und Validierung von Exoplaneten.',
      ic_caption:'ICARUS-RLV / KONZEPT', flight_systems:'01 - FLUGSYSTEME', ic_desc:'Autonomer stratosphärischer Wiedereintritts-Testträger für Führung, Navigation, Regelung und Bergung.',
      compute:'RECHENWERK', control:'REGELUNG', recovery:'BERGUNG', project_details:'Projektdetails <span>↗</span>',
      astrophysics:'02 - ASTROPHYSIK', jo_desc:'Eine automatisierte Pipeline zur Entdeckung und Validierung von Exoplaneten auf Basis relativer Photometrie, BLS-Periodensuchen und automatisierter False-Positive-Prüfungen.', data:'DATEN', method:'METHODE', output:'AUSGABE', jo_caption:'JOANUS / SIGNALANALYSE',
      roadmap:'02 / ROADMAP', roadmap_title:'Vom Bench-Test<br>bis zum Near-Space-Flug.', phase0:'PHASE 0', phase1:'PHASE 1', phase2:'PHASE 2', phase3:'PHASE 3',
      arch:'Architektur & Bench', drops:'Lokale Falltests', strato:'Stratosphärenmission', pinnacle:'Höhenflug',
      phase0copy:'Flugsoftware, Sensorfusion, Hardware-Interrupts und Modularisierung der Datenpipeline.', phase1copy:'Kontrollierte Abwürfe aus 1.000 m zur Validierung von Flugzuständen, Grid Fins und Bergung.', phase2copy:'Bis etwa 35 km mit vollständiger wissenschaftlicher Nutzlast.', phase3copy:'Zielbereich etwa 40 km unter Bedingungen extrem dünner Atmosphäre.',
      why:'WARUM ASTREA EXISTIERT', portfolio:'Ein Portfolio mit einem Zweck.', whycopy:'ASTREA entstand, um etwas Reales zu bauen, den technischen Weg zu dokumentieren und ein ernstzunehmendes Portfolio für meinen Bildungsweg aufzubauen - mit dem langfristigen Ziel, mich eines Tages bei der European Space Agency bewerben zu können.', cool:'Und ganz ehrlich: weil Raketen bauen und Exoplaneten jagen einfach fucking geil ist. XD',
      public:'DER BUILD IST ÖFFENTLICH', discord_cta:'Verfolge das Projekt auf Discord.', join_discord:'Discord beitreten ↗', statement:'Bauen. Messen. Verifizieren.', about_program:'Über das Programm <span>→</span>',
      copyright:'© 2026 ASTREA SOLO SPACE PROGRAM',
      projects_eyebrow:'ASTREA SSP / PROJEKTE', projects_title:'Systeme in<br>Entwicklung.', projects_lead:'Zwei aktive Forschungsbereiche verbinden autonome Raumfahrthardware mit computergestützter Astrophysik.', open_project:'Projekt öffnen ↗',
      about_eyebrow:'ASTREA SSP / ÜBER ASTREA', about_title:'Unabhängige Forschung.<br>Ende zu Ende.', about_lead:'Das ASTREA Solo Space Program ist eine unabhängige Forschungsinitiative für Raumfahrttechnologie und Data Science mit Sitz in Deutschland.',
      approach:'01 / ANSATZ', approach_title:'Hardware, Software und Analyse gehören zum selben System.', approach_copy:'Der Fokus liegt auf dem Bau und Test vollständiger technischer Kreisläufe statt isolierter Demonstrationen: Eingebettete Flugsoftware verbindet Sensoren und Aktoren; wissenschaftliche Nutzlasten erzeugen Daten; Analysepipelines verwandeln diese Daten in messbare Ergebnisse.',
      portfolio_title:'Gebaut, um ein Portfolio zu werden.', portfolio_copy:'ASTREA ist ein langfristiges Engineering-Portfolio: keine Sammlung großer Behauptungen, sondern eine Dokumentation von Systemen, Experimenten, Software, Fehlschlägen und Iterationen. Die langfristige Idee ist, diese Arbeit in die nächsten Stationen meines Bildungswegs mitzunehmen und mich eines Tages damit bei der European Space Agency zu bewerben.', cool2:'Und ja - weil es fucking geil ist.',
      measure:'MESSEN', measure_copy:'Das System instrumentieren und verwertbare Telemetrie erhalten.', verify:'VERIFIZIEREN', verify_copy:'Wo möglich kontrollierte Tests und unabhängige Validierung einsetzen.', iterate:'ITERIEREN', iterate_copy:'Jeden Test nutzen, um die Unsicherheit im nächsten Entwicklungszyklus zu reduzieren.', current:'02 / ROADMAP', current_title:'Aktuelle Entwicklung', current_copy:'ICARUS-RLV durchläuft Architektur, Bench-Validierung und geplante kontrollierte Falltests. JOANUS wird bei Modularisierung, Validierung und Datenverarbeitung weiterentwickelt.', view_all:'Alle Projekte ansehen ↗',
      system01:'SYSTEM / 01', close_loop:'Den Regelkreis schließen.', ic_long:'ICARUS ist als Ende-zu-Ende-Testträger für Avionik und Flugregelung ausgelegt. Die Architektur verbindet deterministische Embedded-Software auf ESP32/FreeRTOS mit aktiver Lage- und Aerodynamikregelung, Telemetrie und einem Return-to-Launch-Konzept.', avionics:'AVIONIK', avionics_copy:'Deterministisches Task-Scheduling, Sensorfusion und Hardware-Interrupt-Pfade.', gnc:'GNC', gnc_copy:'Aktive Regelungsarchitektur aus RCS und aerodynamischer Grid-Fin-Steuerung.', science:'WISSENSCHAFT', science_copy:'Strahlungs-, Astrobiologie- und optische Nutzlasten erzeugen messbare Missionsdaten.', next:'NÄCHSTES SYSTEM', open_jo:'Projekt öffnen →',
      pipeline01:'PIPELINE / 01', search_validate:'Zuerst suchen.<br>Unabhängig validieren.', jo_long:'JOANUS verarbeitet öffentliche Photometriedaten von Weltraumteleskopen mit einem Relative-First-Ansatz, sucht nach periodischen Transitsignaturen und exportiert strukturierte Kandidaten-Telemetrie zur weiteren Validierung.', photometry:'PHOTOMETRIE', photometry_copy:'Relative Messungen konzentrieren die Suche auf beobachtbare Transit-Tiefe und Periodizität.', search:'SUCHE', search_copy:'Box Least Squares identifiziert Kandidatenperioden über viele Targets hinweg.', validate:'VALIDIERUNG', validate_copy:'Odd/Even- und Sekundärereignis-Prüfungen helfen dabei, typische False Positives auszusortieren.'
    }
  };

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    if (attr && t[key] !== undefined) el.setAttribute(attr, t[key]);
  });

  const page = document.body.dataset.page;
  const titles = {
    index: ['ASTREA SSP - Independent Aerospace Research', 'ASTREA SSP - Unabhängige Raumfahrtforschung'],
    projects: ['Projects - ASTREA SSP', 'Projekte - ASTREA SSP'],
    about: ['About - ASTREA SSP', 'Über ASTREA - ASTREA SSP'],
    icarus: ['ICARUS-RLV - ASTREA SSP', 'ICARUS-RLV - ASTREA SSP'],
    joanus: ['JOANUS - ASTREA SSP', 'JOANUS - ASTREA SSP']
  };
  if (titles[page]) document.title = titles[page][lang === 'de' ? 1 : 0];

  navToggle?.setAttribute('aria-label', t.open_nav);
  navToggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = document.querySelectorAll('.reveal');
  if (reducedMotion) {
    reveal.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach((element) => observer.observe(element));
  }
})();
