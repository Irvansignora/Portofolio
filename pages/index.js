import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const portfolioData = [
  {
    id: 'portfolio-1',
    tag: 'Data Analysis',
    title: 'Sales Analytics Dashboard',
    description: 'Developed comprehensive sales tracking and analysis system using WordPress, enabling real-time monitoring of team performance and revenue trends.',
    tech: ['WordPress', 'Data Analysis', 'Reporting'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    alt: 'Sales Analytics Dashboard',
    liveUrl: 'https://lookerstudio.google.com/u/1/navigation/reporting',
    noGallery: true,
  },
  {
    id: 'portfolio-2',
    tag: 'Tax Management',
    title: 'Tax Compliance System',
    description: 'Streamlined VAT and income tax reporting processes, ensuring 100% compliance and accuracy in all tax documentation and submissions.',
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
    liveUrl: 'https://monflow-v2.web.app/',
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
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.dataset.scrollY = scrollY
    document.body.classList.add('lightbox-open')
  }
  
  const closeLightbox = () => {
    const scrollY = parseInt(document.body.dataset.scrollY || '0')
    document.body.style.overflow = ''
    document.body.style.top = ''
    document.body.style.width = ''
    delete document.body.dataset.scrollY
    document.body.classList.remove('lightbox-open')
    setLightbox(l => ({ ...l, open: false }))
    window.scrollTo({ top: scrollY, behavior: 'instant' })
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
                        <a href={item.liveUrl} className="view-btn" style={{ marginBottom: item.images ? '0.7rem' : '0' }} target="_blank" rel="noopener">
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

          {/* Lightbox Portfolio */}
          {lightbox.open && (() => {
            const current = lightbox.images[lightbox.index]
            const src = typeof current === 'object' ? current.src : current
            const slideTitle = typeof current === 'object' ? current.title : lightbox.title
            const slideCaption = typeof current === 'object' ? current.caption : ''
            return (
              <div className="lightbox active" onClick={(e) => { if (e.target.classList.contains('lightbox')) closeLightbox() }}>
                <div className="lightbox-close" onClick={closeLightbox}>×</div>
                <div className="lightbox-content">
                  <div className="lightbox-image-wrapper">
                    <div className="lightbox-nav lightbox-prev" onClick={() => changeImage(-1)}>‹</div>
                    <img className="lightbox-image" src={src} alt={slideTitle} />
                    <div className="lightbox-nav lightbox-next" onClick={() => changeImage(1)}>›</div>
                  </div>
                  <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
                  <div className="lightbox-slide-info">
                    <div className="lightbox-slide-title">{slideTitle}</div>
                    {slideCaption && <div className="lightbox-slide-caption">{slideCaption}</div>}
                  </div>
                  {/* Dot indicators */}
                  <div className="lightbox-dots">
                    {lightbox.images.map((_, i) => (
                      <span
                        key={i}
                        className={`lightbox-dot ${i === lightbox.index ? 'active' : ''}`}
                        onClick={() => setLightbox(l => ({ ...l, index: i }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
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

          {/* Lightbox */}
          {lightbox.open && (() => {
            const current = lightbox.images[lightbox.index]
            const src = typeof current === 'object' ? current.src : current
            const slideTitle = typeof current === 'object' ? current.title : lightbox.title
            const slideCaption = typeof current === 'object' ? current.caption : ''
            return (
              <div className="lightbox active" onClick={(e) => { if (e.target.classList.contains('lightbox')) closeLightbox() }}>
                <div className="lightbox-close" onClick={closeLightbox}>×</div>
                <div className="lightbox-content">
                  <div className="lightbox-image-wrapper">
                    <div className="lightbox-nav lightbox-prev" onClick={() => changeImage(-1)}>‹</div>
                    <img className="lightbox-image" src={src} alt={slideTitle} />
                    <div className="lightbox-nav lightbox-next" onClick={() => changeImage(1)}>›</div>
                  </div>
                  <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
                  <div className="lightbox-slide-info">
                    <div className="lightbox-slide-title">{slideTitle}</div>
                    {slideCaption && <div className="lightbox-slide-caption">{slideCaption}</div>}
                  </div>
                  <div className="lightbox-dots">
                    {lightbox.images.map((_, i) => (
                      <span
                        key={i}
                        className={`lightbox-dot ${i === lightbox.index ? 'active' : ''}`}
                        onClick={() => setLightbox(l => ({ ...l, index: i }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
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
    </>
  )
}
