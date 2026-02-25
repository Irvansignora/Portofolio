import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const portfolioData = [
  {
    id: 'portfolio-1',
    tag: 'Data Analysis',
    title: 'Sales Analytics Dashboard',
    description: 'Developed comprehensive sales tracking and analysis system using WordPress, enabling real-time monitoring of team performance and revenue trends.',
    tech: ['WordPress', 'Data Analysis', 'Reporting'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    alt: 'Sales Analytics Dashboard',
    liveUrl: '/sales-dashboard.html',
    noGallery: true,
  },
  {
    id: 'portfolio-2',
    tag: 'Tax Management',
    title: 'Tax Performance & Compliance',
    description: 'Managing VAT, income tax, and multi-branch reporting across multiple corporate entities with data-driven accuracy and operational efficiency.',
    tech: ['Tax Reporting', 'Compliance', 'Reconciliation'],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80',
    alt: 'Tax Compliance System',
    liveUrl: '/tax-dashboard.html',
    images: ['porto-2-1.jpg','porto-2-2.jpg','porto-2-3.jpg','porto-2-4.jpg','porto-2-5.jpg','porto-2-6.jpg'],
  },
  {
    id: 'portfolio-3',
    tag: 'Sales Leadership',
    title: 'Sales Team Development',
    description: 'Successfully supervised and trained multiple sales teams, consistently achieving and exceeding quarterly sales targets through effective coaching.',
    tech: ['Team Training', 'Sales Strategy', 'Performance'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    alt: 'Sales Team Development',
    liveUrl: null,
    images: ['porto-3-1.jpg','porto-3-2.jpg','porto-3-3.jpg','porto-3-4.jpg','porto-3-5.jpg','porto-3-6.jpg'],
  },
  {
    id: 'portfolio-4',
    tag: 'Web Development',
    title: 'Project Development',
    description: 'A modern web application project that has been developed and deployed live. Built with robust architecture for optimal performance and user experience.',
    tech: ['Web App', 'Development', 'Firebase'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80',
    alt: 'MonFlow V2',
    liveUrl: '#project-page',
    noGallery: true,
  },
  {
    id: 'portfolio-5',
    tag: 'Professional Development',
    title: 'Credentials & Recognition',
    description: 'A portfolio of credentials and recognitions highlighting professional excellence, cross-cultural communication, and meaningful community contribution.',
    tech: ['Certifications', 'Awards', 'Community Service'],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80',
    alt: 'Credentials & Recognition',
    liveUrl: null,
    isCert: true,
    images: [
      { src: 'nihongo.jpg', title: 'Japanese Language Proficiency', caption: 'JLPT Certification — Basic Japanese proficiency for daily conversation' },
      { src: 'deutsch.jpg', title: 'German Language Certificate', caption: 'Deutsch Zertifikat — Elementary German language competency' },
      { src: 'hlc1.jpg', title: 'HLC Award 1', caption: 'Recognition of excellence and outstanding contribution' },
      { src: 'hlc-2.jpg', title: 'HLC Award 2', caption: 'Recognition of excellence and outstanding contribution' },
      { src: 'msexcel1.jpg', title: 'Microsoft Excel Certification', caption: 'Advanced spreadsheet & data analysis proficiency' },
      { src: 'msExcel2.jpg', title: 'Microsoft Excel — Advanced', caption: 'Expert-level Excel skills for financial reporting' },
    ],
  },
  {
    id: 'portfolio-6',
    tag: 'Business Development',
    title: 'Partner Network Expansion',
    description: 'Built and maintained strategic relationships with sales partners, expanding market reach and increasing revenue streams across regions.',
    tech: ['Partnership', 'Networking', 'Growth'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80',
    alt: 'Partner Network Expansion',
    liveUrl: null,
    images: ['porto-6-1.jpg','porto-6-2.jpg','porto-6-3.jpg','porto-6-4.jpg','porto-6-5.jpg','porto-6-6.jpg'],
  },
]

const skillsData = [
  { icon: '💼', title: 'Sales & Business', chips: ['Team Leadership', 'Sales Strategy', 'Business Dev', 'Client Relations', 'Negotiation'] },
  { icon: '💰', title: 'Finance & Tax', chips: ['Tax Management', 'Financial Reports', 'Receivables', 'Bookkeeping', 'Budget Planning'] },
  { icon: '📊', title: 'Data & Analytics', chips: ['Data Analysis', 'Sales Analytics', 'Reporting', 'WordPress', 'Optimization'] },
  { icon: '💻', title: 'Technical Tools', chips: ['MS Office', 'MS Excel', 'MS Word', 'PowerPoint', 'Outlook'] },
  { icon: '🎯', title: 'Management', chips: ['Team Management', 'Planning', 'Time Management', 'Problem Solving', 'Decision Making'] },
  { icon: '🤝', title: 'Soft Skills', chips: ['Communication', 'Teamwork', 'Fast Learner', 'Motivated', 'Adaptable', 'Resilient'] },
]

const socialData = [
  {
    emoji: '🕌', date: 'Nov 2018', category: 'Community Service', title: 'Cleaning Places of Worship',
    description: 'Participated in regular cleaning and maintenance activities at local places of worship, ensuring clean and welcoming spaces for the community.',
    images: ['social-1-img1.jpg', 'social-1-img2.jpg', 'social-1-img3.jpg'],
  },
  {
    emoji: '🆘', date: '2019', category: 'Disaster Relief', title: 'Disaster Relief Assistance',
    description: 'Supported disaster relief efforts by providing aid to communities affected by natural disasters, helping with distribution and support coordination.',
    images: ['social-2-img1.jpg', 'social-2-img2.jpg', 'social-2-img3.jpg'],
  },
  {
    emoji: '👶', date: '2019–2020', category: 'Child Welfare', title: 'Supporting Orphanages',
    description: 'Regular visits and support to orphanages, providing assistance and spending time with underprivileged children to brighten their days.',
    images: ['social-3-img1.jpg', 'social-3-img2.jpg', 'social-3-img3.jpg'],
  },
  {
    emoji: '🤲', date: '2018–2020', category: 'Social Welfare', title: 'Community Welfare Programs',
    description: 'Active participation in various social welfare activities including food drives, educational programs, and community development initiatives.',
    images: ['social-4-img1.jpg', 'social-4-img2.jpg', 'social-4-img3.jpg'],
  },
  {
    emoji: '📚', date: '2019', category: 'Education Support', title: 'Educational Programs',
    description: 'Contributed to educational initiatives by tutoring underprivileged students and organizing learning activities to promote literacy and skill development.',
    images: ['social-5-img1.jpg', 'social-5-img2.jpg', 'social-5-img3.jpg'],
  },
  {
    emoji: '🌿', date: '2018–2019', category: 'Environmental Care', title: 'Environmental Clean-Up',
    description: 'Participated in environmental conservation activities including beach clean-ups, tree planting, and awareness campaigns for sustainable living practices.',
    images: ['social-6-img1.jpg', 'social-6-img2.jpg', 'social-6-img3.jpg'],
  },
]

export default function Home() {
  const [activePage, setActivePage] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle | sent
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: '' })
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  // Cursor
  useEffect(() => {
    if (window.innerWidth <= 768) return
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    const animate = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Scroll events
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct((scrollTop / docH) * 100)
      setShowTop(scrollTop > 400)
      setHeaderScrolled(scrollTop > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Parallax orbs on mouse move
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      document.querySelectorAll('.glow-orb').forEach((orb, i) => {
        const speed = (i + 1) * 18
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Intersection observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [activePage])

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('[data-target]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target
          const target = parseInt(el.dataset.target)
          let current = 0
          const step = Math.ceil(target / 90)
          const timer = setInterval(() => {
            current += step
            if (current >= target) { current = target; clearInterval(timer) }
            el.textContent = current
          }, 16)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    counters.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [activePage])

  // Lightbox keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.open) return
      if (e.key === 'Escape') setLightbox(l => ({ ...l, open: false }))
      if (e.key === 'ArrowLeft') setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }))
      if (e.key === 'ArrowRight') setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox.open, lightbox.images.length])

  const openLightbox = (images, title, index = 0) => {
    const normalized = images.map(img => {
      if (typeof img === 'object') {
        const src = img.src.startsWith('http') || img.src.startsWith('/') ? img.src : `/${img.src}`
        return { src, title: img.title || title, caption: img.caption || '' }
      }
      const src = img.startsWith('http') || img.startsWith('/') ? img : `/${img}`
      return { src, title, caption: '' }
    })
    setLightbox({ open: true, images: normalized, index, title })
    document.body.style.overflow = 'hidden'
  }
  
  const closeLightbox = () => {
    setLightbox(l => ({ ...l, open: false }))
    document.body.style.overflow = ''
  }

  const changeImage = (dir) => {
    setLightbox(l => ({ ...l, index: (l.index + dir + l.images.length) % l.images.length }))
  }

  const navigate = (page) => {
    setActivePage(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sent')
    setTimeout(() => { setFormStatus('idle'); e.target.reset() }, 3000)
  }

  const addHover = () => document.body.classList.add('cursor-hover')
  const removeHover = () => document.body.classList.remove('cursor-hover')

  return (
    <>
      <Head>
        <title>Muhamad Irpan Yasin — Professional Portfolio</title>
      </Head>

      {/* Cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Scroll progress */}
      <div className="progress-bar" style={{ width: `${scrollPct}%` }} />

      {/* Back to top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >↑</button>

      {/* Tech Background */}
      <div className="tech-bg" aria-hidden="true">
        <div className="tech-grid" />
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
        <div className="glow-orb orb-4" />
        <div className="scan-line" />
      </div>

      {/* Header */}
      <header className={headerScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav>
            <div className="logo" onClick={() => navigate('home')} style={{ cursor: 'none' }}>
              <Image src="/logo.png" alt="Logo" width={48} height={48} priority style={{ height: '100%', width: 'auto' }} />
            </div>
            <ul className="nav-menu">
              {['home', 'portfolio', 'skills', 'social', 'contact'].map(page => (
                <li key={page}>
                  <a
                    href={`#${page}`}
                    className={`nav-link ${activePage === page ? 'active-nav' : ''}`}
                    onClick={(e) => { e.preventDefault(); navigate(page) }}
                    onMouseEnter={addHover} onMouseLeave={removeHover}
                  >
                    {page === 'social' ? 'Social Experience' : page.charAt(0).toUpperCase() + page.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="download-cv-link" onClick={(e) => { e.preventDefault(); alert('CV will be available soon!') }}
                  onMouseEnter={addHover} onMouseLeave={removeHover}>
                  📄 GET CV
                </a>
              </li>
            </ul>
            <button className={`hamburger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {['home', 'portfolio', 'skills', 'social', 'contact'].map(page => (
          <a key={page} href={`#${page}`} onClick={(e) => { e.preventDefault(); navigate(page) }}>
            {page === 'social' ? 'Social Experience' : page.charAt(0).toUpperCase() + page.slice(1)}
          </a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); alert('CV will be available soon!') }} style={{ color: 'var(--neon-cyan)' }}>
          📄 GET CV
        </a>
      </div>

      {/* ===== HERO ===== */}
      {activePage === 'home' && (
        <section className="hero page-section active" id="home">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <span className="hero-label">
                  <span className="hero-label-dot" />
                  Professional Portfolio
                </span>
                <h1 className="hero-title">Muhamad<br />Irpan Yasin</h1>
                <div className="hero-subtitle">Multi-Disciplinary <span>Expert</span></div>
                <p className="hero-description">
                  A versatile professional with 15+ years of comprehensive experience spanning Sales Management,
                  Financial Administration, Data Analysis, and Tax Management. Proven track record of driving results,
                  leading teams, and delivering excellence across diverse industries.
                </p>
                <div className="cta-group">
                  <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); navigate('contact') }}
                    onMouseEnter={addHover} onMouseLeave={removeHover}>
                    Get In Touch
                  </a>
                  <a href="#portfolio" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('portfolio') }}
                    onMouseEnter={addHover} onMouseLeave={removeHover}>
                    View Portfolio
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <div className="profile-frame">
                  <div className="profile-ring" />
                  <div className="frame-corners">
                    <div className="corner corner-tl" /><div className="corner corner-tr" />
                    <div className="corner corner-bl" /><div className="corner corner-br" />
                  </div>
                  <div className="profile-img-wrapper">
                    <Image src="/irvan.jpg" alt="Muhamad Irpan Yasin" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-bar">
              {[
                { target: 15, suffix: '+', label: 'Years Experience' },
                { target: 8, suffix: '+', label: 'Different Positions' },
                { target: 4, suffix: '', label: 'Languages' },
              ].map((s) => (
                <div key={s.label} className="stat-box fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}>
                  <span className="stat-value" data-target={s.target}>0</span>
                  {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
                  <span className="stat-title">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="hero-languages">
              <h3 className="languages-title">🌐 Language Proficiency</h3>
              <div className="language-badges">
                {[
                  { flag: 'id', name: 'Indonesian', level: 'native', label: 'Native' },
                  { flag: 'gb', name: 'English', level: 'elementary', label: 'Elementary' },
                  { flag: 'de', name: 'German', level: 'elementary', label: 'Elementary' },
                  { flag: 'jp', name: 'Japanese', level: 'elementary', label: 'Elementary' },
                ].map((lang) => (
                  <div key={lang.name} className="lang-badge fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}>
                    <img
                      src={`https://flagcdn.com/w80/${lang.flag}.png`}
                      alt={lang.name}
                      width={48}
                      height={32}
                      style={{ borderRadius: '4px', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
                    />
                    <span className="lang-name">{lang.name}</span>
                    <span className={`lang-level ${lang.level}`}>{lang.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== PORTFOLIO ===== */}
      {activePage === 'portfolio' && (
        <section className="section page-section active" id="portfolio">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Work Showcase</span>
              <h2 className="section-title">Portfolio</h2>
              <p className="section-description">
                Selected achievements and key projects that demonstrate my expertise across different domains and industries.
              </p>
            </div>
            <div className="portfolio-grid">
              {portfolioData.map((item) => (
                <div key={item.id} className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}>
                  <div className="portfolio-image">
                    <img src={item.img} alt={item.alt} loading="lazy" />
                    <div className="portfolio-overlay">
                      {/* Live button — hanya jika ada liveUrl */}
                      {item.liveUrl && (
                        item.liveUrl === '#project-page'
                          ? <a href="#" className="view-btn" style={{ marginBottom: item.images ? '0.7rem' : '0' }}
                              onClick={(e) => { e.preventDefault(); navigate('project-page') }}>
                              <span>🚀</span> View Live
                            </a>
                          : <a href={item.liveUrl} className="view-btn" style={{ marginBottom: item.images ? '0.7rem' : '0' }} target="_blank" rel="noopener">
                              <span>🚀</span> View Live
                            </a>
                      )}
                      {/* Gallery / Certificate button — hanya jika ada images */}
                      {item.images && (
                        <a href="#" className="view-btn"
                          onClick={(e) => { e.preventDefault(); openLightbox(item.images, item.title) }}>
                          <span>{item.isCert ? '🏆' : '📸'}</span>
                          {item.isCert ? 'View Certificates' : 'View Gallery'}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="portfolio-tag">{item.tag}</span>
                    <h3 className="portfolio-title">{item.title}</h3>
                    <p className="portfolio-description">{item.description}</p>
                    <div className="portfolio-tech">
                      {item.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}
      {/* ===== PROJECTS PAGE ===== */}
      {activePage === 'projects' && (
        <section className="section page-section active" id="projects" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
          <div className="container">

            {/* Back button */}
            <div style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => navigate('portfolio')}
                onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(0,255,136,0.35)',
                  color: 'var(--neon-cyan)',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '6px',
                  cursor: 'none',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                ← Back to Portfolio
              </button>
            </div>

            {/* Header */}
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <span className="section-label">Live & Deployed</span>
              <h2 className="section-title">Project Development</h2>
              <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Real-world web applications — designed, built, and shipped. Each project solves a
                real problem, from managing your money to planning a holy month or showcasing someone's story online.
              </p>
            </div>

            {/* Projects Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem',
            }}>

              {/* MonFlow V2 */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=500&fit=crop&q=80"
                    alt="MonFlow V2" loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <a href="https://monflow-v2.web.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> View Live
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #00ff88, #00cc66)',
                    color: '#0a0e17', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>💰 Finance</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">Finance Tool</span>
                  <h3 className="portfolio-title">MonFlow V2</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    A smart personal finance manager — track income, expenses, and cash flow in real-time.
                    Built for clarity, speed, and everyday use.
                  </p>
                  <div className="portfolio-tech">
                    {['Firebase', 'React', 'Realtime DB'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>

              {/* Ramadhan Planner */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&q=80"
                    alt="Ramadhan Planner" loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <a href="https://ramadhan-planner2.vercel.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> View Live
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>🌙 Lifestyle</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">Lifestyle App</span>
                  <h3 className="portfolio-title">Ramadhan Planner</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    Plan your most meaningful month with purpose. Track ibadah, set daily goals,
                    and stay consistent throughout Ramadhan — all in one beautiful app.
                  </p>
                  <div className="portfolio-tech">
                    {['Next.js', 'Vercel', 'LocalStorage'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>

              {/* Web Sekolah PAUD */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop&q=80"
                    alt="Web Sekolah PAUD" loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <a href="https://paud-fajar-pagi.vercel.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> View Live
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#0a0e17', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>🏫 Education</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">School Website</span>
                  <h3 className="portfolio-title">Web Sekolah PAUD Fajar Pagi</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    A clean, welcoming website for an early childhood school. Built to help parents
                    learn about the school, its programs, and how to enroll their little ones.
                  </p>
                  <div className="portfolio-tech">
                    {['Next.js', 'Tailwind', 'Vercel'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>

              {/* Portfolio M. Nazar */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80"
                    alt="Portfolio M Nazar" loading="lazy"
                  />
                  <div className="portfolio-overlay" style={{ gap: '0.6rem' }}>
                    <a href="https://m-nazar.vercel.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> Nazar Portfolio
                    </a>
                    <a href="https://portofolio-anisa.vercel.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>✨</span> Anisa Portfolio
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                    color: '#0a0e17', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>🎨 Portfolio</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">Personal Portfolio</span>
                  <h3 className="portfolio-title">Portfolio Sites</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    Custom-built portfolio websites for real clients — designed to make strong first impressions,
                    showcase their skills, and open doors to new opportunities.
                  </p>
                  <div className="portfolio-tech">
                    {['Next.js', 'CSS', 'Vercel', 'Custom Design'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>


              {/* Machine Learning */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80"
                    alt="Sales ML Analytics" loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <a href="https://sales-ml-analytics.streamlit.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> View Live
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>🤖 AI / ML</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">Machine Learning</span>
                  <h3 className="portfolio-title">Sales ML Analytics</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    An AI-powered analytics platform that uses machine learning to uncover sales patterns,
                    forecast trends, and deliver actionable business insights — all in real-time.
                  </p>
                  <div className="portfolio-tech">
                    {['Python', 'Streamlit', 'Machine Learning', 'Data Science'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>

              {/* Online Store */}
              <div className="portfolio-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="portfolio-image" style={{ position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop&q=80"
                    alt="FreshMarket Online Store" loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <a href="https://ecommerce-freshmarket.vercel.app/" className="view-btn" target="_blank" rel="noopener">
                      <span>🚀</span> View Live
                    </a>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.05em'
                  }}>🛒 E-Commerce</div>
                </div>
                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="portfolio-tag">Online Store</span>
                  <h3 className="portfolio-title">FreshMarket Online Store</h3>
                  <p className="portfolio-description" style={{ flex: 1 }}>
                    A fully functional e-commerce store for fresh groceries — complete with product catalog,
                    cart system, and a smooth, intuitive checkout experience.
                  </p>
                  <div className="portfolio-tech">
                    {['Next.js', 'E-Commerce', 'Vercel', 'Tailwind'].map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div style={{
              marginTop: '4rem', textAlign: 'center',
              padding: '2.5rem 2rem',
              background: 'rgba(0,255,136,0.04)',
              border: '1px solid rgba(0,255,136,0.12)',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>⚡</div>
              <h3 style={{ fontFamily: 'inherit', fontSize: '1.2rem', color: '#fff', marginBottom: '0.6rem' }}>
                Got a project in mind?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                Whether it's a web app, a landing page, or something completely new —
                let's turn your idea into something real.
              </p>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); navigate('contact') }}
                onMouseEnter={addHover} onMouseLeave={removeHover}
              >
                Let's Work Together 🚀
              </a>
            </div>

          </div>
        </section>
      )}

      {activePage === 'skills' && (
        <section className="section page-section active" id="skills">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Core Competencies</span>
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="section-description">
                A comprehensive skill set developed through diverse professional experiences, combining technical proficiency with strong leadership and interpersonal abilities.
              </p>
            </div>
            <div className="skills-container">
              {skillsData.map((skill) => (
                <div key={skill.title} className="skill-module fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}>
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.title}</h3>
                  <div className="skill-items">
                    {skill.chips.map(chip => <span key={chip} className="skill-chip">{chip}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SOCIAL EXPERIENCE ===== */}
      {activePage === 'social' && (
        <section className="section page-section active" id="social">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Community Impact</span>
              <h2 className="section-title">Social Experience</h2>
              <p className="section-description">
                Dedicated to making a positive impact through volunteer work and community engagement. Here are highlights from my social activities and the communities I&apos;ve served.
              </p>
            </div>
            <div className="social-news-grid">
              {socialData.map((item) => (
                <div key={item.title} className="news-card fade-in" onMouseEnter={addHover} onMouseLeave={removeHover}>
                  <div className="news-image">
                    <div className="news-image-placeholder">{item.emoji}</div>
                    <div className="news-date">{item.date}</div>
                    <div className="portfolio-overlay">
                      <a
                        href="#"
                        className="view-btn"
                        onClick={(e) => { e.preventDefault(); openLightbox(item.images, item.title) }}
                      >
                        <span>📸</span> View Gallery
                      </a>
                    </div>
                  </div>
                  <div className="news-content">
                    <span className="news-category">{item.category}</span>
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* ===== CONTACT ===== */}
      {activePage === 'contact' && (
        <section className="section page-section active" id="contact">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Let&apos;s Connect</span>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Interested in collaboration or have an exciting opportunity? Feel free to reach out and let&apos;s discuss how we can work together.
              </p>
            </div>
            <div className="contact-layout">
              <div className="contact-panel fade-in">
                <h3>Contact Information</h3>
                {[
                  { icon: '📧', label: 'Email', value: 'irpanyasin@gmail.com', href: 'mailto:irpanyasin@gmail.com' },
                  { icon: '📱', label: 'Phone / WhatsApp', value: '+62 857-7607-7292', href: 'tel:+6285776077292' },
                  { icon: '📍', label: 'Location', value: 'Bandung, West Java, Indonesia', href: null },
                ].map((detail) => (
                  <div key={detail.label} className="contact-detail" onMouseEnter={addHover} onMouseLeave={removeHover}>
                    <div className="contact-icon-box">{detail.icon}</div>
                    <div className="contact-text">
                      <h4>{detail.label}</h4>
                      {detail.href
                        ? <a href={detail.href}>{detail.value}</a>
                        : <p>{detail.value}</p>
                      }
                    </div>
                  </div>
                ))}
                <div className="social-grid">
                  <a href="https://wa.me/6285776077292" className="social-btn" title="WhatsApp" target="_blank" rel="noopener" onMouseEnter={addHover} onMouseLeave={removeHover}>💬</a>
                  <a href="mailto:irpanyasin@gmail.com" className="social-btn" title="Email" onMouseEnter={addHover} onMouseLeave={removeHover}>✉️</a>
                </div>
              </div>

              <div className="contact-form-panel fade-in">
                <h3>Send Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="your@email.com" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Message subject" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Write your message here..." required />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      background: formStatus === 'sent' ? 'linear-gradient(135deg, #00ff88, #00cc66)' : undefined,
                    }}
                    onMouseEnter={addHover} onMouseLeave={removeHover}
                  >
                    {formStatus === 'sent' ? '✓ Message Sent!' : 'Send Message 🚀'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer>
        <div className="container">
          <Image src="/logo.png" alt="Logo" width={36} height={36} className="footer-logo" />
          <p>&copy; 2025 Muhamad Irpan Yasin. All Rights Reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.82rem', opacity: 0.6 }}>Crafted with precision and professionalism</p>
        </div>
      </footer>

      {/* ===== LIGHTBOX PORTAL — rendered langsung ke document.body ===== */}
      {lightbox.open && typeof document !== 'undefined' && createPortal(
        (() => {
          const current = lightbox.images[lightbox.index]
          const src = typeof current === 'object' ? current.src : current
          const slideTitle = typeof current === 'object' ? current.title : lightbox.title
          const slideCaption = typeof current === 'object' ? current.caption : ''
          return (
            <div
              style={{
                position: 'fixed', inset: 0, zIndex: 99999,
                background: 'rgba(0,0,0,0.96)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
              }}
              onClick={(e) => { if (e.currentTarget === e.target) closeLightbox() }}
            >
              {/* Close button */}
              <div
                onClick={closeLightbox}
                onMouseEnter={addHover} onMouseLeave={removeHover}
                style={{
                  position: 'fixed', top: '20px', right: '30px',
                  width: '50px', height: '50px', zIndex: 100000,
                  background: 'rgba(255,0,234,0.2)',
                  border: '2px solid #ff00ea', borderRadius: '50%',
                  color: '#ff00ea', fontSize: '2rem', fontWeight: 'bold',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'none', transition: 'all 0.3s',
                }}
              >×</div>

              {/* Image + nav */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 80px' }}>
                <div
                  onClick={() => changeImage(-1)}
                  onMouseEnter={addHover} onMouseLeave={removeHover}
                  style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: '54px', height: '54px', background: 'rgba(0,240,255,0.18)',
                    border: '2px solid #00f0ff', borderRadius: '50%', color: '#00f0ff',
                    fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'none', zIndex: 100000,
                  }}
                >‹</div>
                <img
                  src={src} alt={slideTitle}
                  style={{
                    maxWidth: '100%', maxHeight: '70vh', width: 'auto', height: 'auto',
                    objectFit: 'contain', borderRadius: '12px',
                    border: '3px solid rgba(0,240,255,0.45)',
                    boxShadow: '0 0 80px rgba(0,240,255,0.35)',
                    display: 'block',
                  }}
                />
                <div
                  onClick={() => changeImage(1)}
                  onMouseEnter={addHover} onMouseLeave={removeHover}
                  style={{
                    position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
                    width: '54px', height: '54px', background: 'rgba(0,240,255,0.18)',
                    border: '2px solid #00f0ff', borderRadius: '50%', color: '#00f0ff',
                    fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'none', zIndex: 100000,
                  }}
                >›</div>
              </div>

              {/* Counter */}
              <div style={{ marginTop: '0.8rem', color: 'rgba(0,240,255,0.6)', fontSize: '0.78rem', letterSpacing: '0.12em', fontFamily: 'Orbitron, sans-serif' }}>
                {lightbox.index + 1} / {lightbox.images.length}
              </div>

              {/* Title & caption */}
              <div style={{ marginTop: '0.6rem', textAlign: 'center', padding: '0 1rem' }}>
                <div style={{ color: '#00f0ff', fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{slideTitle}</div>
                {slideCaption && <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', fontStyle: 'italic' }}>{slideCaption}</div>}
              </div>

              {/* Dots */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {lightbox.images.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setLightbox(l => ({ ...l, index: i }))}
                    onMouseEnter={addHover} onMouseLeave={removeHover}
                    style={{
                      width: '10px', height: '10px', borderRadius: '50%', cursor: 'none',
                      background: i === lightbox.index ? '#00f0ff' : 'rgba(255,255,255,0.25)',
                      boxShadow: i === lightbox.index ? '0 0 10px rgba(0,240,255,0.7)' : 'none',
                      transform: i === lightbox.index ? 'scale(1.4)' : 'scale(1)',
                      transition: 'all 0.3s', display: 'inline-block', flexShrink: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          )
        })(),
        document.body
      )}
    </>
  )
}
