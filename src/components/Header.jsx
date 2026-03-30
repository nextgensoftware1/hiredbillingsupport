import logo from '../assets/images/site_logo/logo_black.png';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  // React state for open dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  // Refs for cleanup and optimization
  const scrollTimeoutRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  // Router location to detect route changes
  const location = useLocation();
  
  // Memoized callbacks for better performance
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
    setActiveSubmenu(null);
  }, []);

  const handleSubmenuChange = useCallback((submenu) => {
    setActiveSubmenu(submenu);
  }, []);

  const handleDropdownEnter = useCallback((dropdown) => {
    // Clear any pending close timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // Only set if different to avoid unnecessary re-renders
    if (openDropdown !== dropdown) {
      setOpenDropdown(dropdown);
    }
  }, [openDropdown]);

  const handleDropdownLeave = useCallback(() => {
    // Delay closing to allow smooth transition
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const handleKeyDown = useCallback((e, dropdown) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const newState = openDropdown === dropdown ? null : dropdown;
      setOpenDropdown(newState);
      
      // Focus management for accessibility
      if (newState) {
        setTimeout(() => {
          const firstLink = document.querySelector(`#${dropdown}_menu a`);
          if (firstLink) firstLink.focus();
        }, 100);
      }
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
      // Return focus to trigger button
      const trigger = document.getElementById(`${dropdown}_submenu`);
      if (trigger) trigger.focus();
    } else if (e.key === 'ArrowDown' && openDropdown === dropdown) {
      e.preventDefault();
      const firstLink = document.querySelector(`#${dropdown}_menu a`);
      if (firstLink) firstLink.focus();
    }
  }, [openDropdown]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    const body = document.body;
    if (sidebarOpen) {
      body.classList.add('sidebar-open');
      // Prevent scroll chaining on mobile
      body.style.touchAction = 'none';
    } else {
      body.classList.remove('sidebar-open');
      body.style.touchAction = '';
    }
    
    // Cleanup on unmount
    return () => {
      body.classList.remove('sidebar-open');
      body.style.touchAction = '';
    };
  }, [sidebarOpen]);

  // Consolidated scroll handler with throttling
  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        // Header shadow effect
        const header = document.querySelector('.site_header_1');
        if (header) {
          if (window.scrollY > 10) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
        
        // Close dropdowns on scroll
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }
        setOpenDropdown(null);
        
        // Close mobile sidebar on scroll
        if (sidebarOpen) {
          handleSidebarClose();
        }
        
        // Close mobile menu dropdown on scroll
        const menu = document.getElementById('main_menu_dropdown');
        if (menu && menu.classList.contains('show')) {
          menu.classList.remove('show');
          const btn = document.querySelector('.mobile_menu_btn');
          if (btn) {
            btn.setAttribute('aria-expanded', 'false');
          }
          document.querySelectorAll('.mobile_menu_list .collapse.show').forEach(el => {
            el.classList.remove('show');
          });
        }
      }, 16); // ~60fps throttling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sidebarOpen, handleSidebarClose]);
  // Mobile menu collapse handler - optimized
  useEffect(() => {
    const menu = document.querySelector('.mobile_menu_list');
    if (!menu) return;
    
    const handler = (e) => {
      const target = e.target.closest('[data-bs-toggle="collapse"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId) {
          // Close all other submenus efficiently
          const allCollapses = document.querySelectorAll('.mobile_menu_list .collapse');
          allCollapses.forEach(el => {
            if ('#' + el.id !== targetId && el.classList.contains('show')) {
              el.classList.remove('show');
            }
          });
        }
      }
    };
    
    menu.addEventListener('click', handler);
    return () => menu.removeEventListener('click', handler);
  }, []);


  // Header height calculation with throttled resize
  useEffect(() => {
    const setHeaderOffset = () => {
      const headerEl = document.querySelector('.site_header_1');
      if (!headerEl) return;
      
      const height = headerEl.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-offset', `${height}px`);
    };
    
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(setHeaderOffset, 100);
    };
    
    // Initial calculation
    setHeaderOffset();
    
    window.addEventListener('resize', handleResize);
    
    // Also update on orientation change for mobile devices
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close any open dropdowns/sidebars when the route changes
  useEffect(() => {
    setOpenDropdown(null);
    setSidebarOpen(false);
    setActiveSubmenu(null);
    // clear any pending hover close
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, [location.pathname]);

  // Return the header JSX
  return (
    <>
      {/* Add CSS for animations */}
      <style>
        {`
          :root {
            --header-primary-color: #00BFA6;
            --header-secondary-color: #0091EA;
            --dropdown-border-radius: 24px;
            --dropdown-shadow: 0 8px 32px rgba(0,0,0,0.10);
            --dropdown-border: 1px solid #E3F0FF;
            --text-dark: #111827;
            --text-muted: #6b7280;
            --hover-bg: #f9fafb;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .dropdown-menu.show {
            animation: fadeIn 0.2s ease-out;
          }
          
          .mobile-sidebar * {
            user-select: none;
          }
          
          .mobile-sidebar a:hover {
            background-color: var(--hover-bg) !important;
          }
          
          body.sidebar-open {
            overflow: hidden;
          }
          
          html {
            overflow-x: hidden;
          }
          
          /* Responsive Navigation Optimization */
          .main_menu_list {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          
          .nav-item {
            flex-shrink: 0;
          }
          
          .nav-link {
            transition: all 0.2s ease;
            font-size: 14px;
            font-weight: 500;
            padding: 8px 10px !important;
            white-space: nowrap;
            color: var(--text-dark);
            text-decoration: none;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          
          @media (min-width: 1200px) {
            .nav-link {
              font-size: 15px;
              padding: 10px 14px !important;
              gap: 6px;
            }
          }
          
          @media (min-width: 1400px) {
            .nav-link {
              font-size: 16px;
              padding: 12px 16px !important;
            }
          }
          
          .nav-link {
            transition: all 0.2s ease;
          }
          
          .nav-link:focus {
            outline: 2px solid var(--header-primary-color);
            outline-offset: 2px;
          }
          
          .dropdown-container:hover .nav-link,
          .dropdown-container.active .nav-link {
            color: var(--header-primary-color);
            background-color: rgba(0, 191, 166, 0.1);
          }
          
          .mega-menu-wrapper,
          .standard-dropdown-menu {
            pointer-events: auto;
          }
          
          .mega-menu-wrapper a,
          .standard-dropdown-menu a {
            transition: all 0.2s ease;
          }
          
          .mega-menu-wrapper a:focus,
          .standard-dropdown-menu a:focus {
            outline: 2px solid var(--header-primary-color);
            outline-offset: -2px;
            background-color: var(--hover-bg);
          }

          /* CTA button - accessible, responsive, reduced-motion friendly */
          .cta-button {
            border-radius: 50px;
            /* Ensure consistent touch target and balanced visual height */
            min-height: 44px;
            padding: clamp(8px, 1.2vh, 12px) clamp(18px, 2.2vw, 30px);
            font-weight: 600;
            white-space: nowrap;
            font-size: clamp(14px, 1vw, 16px);
            line-height: 1;
            background: linear-gradient(135deg, #00BFA6 0%, #00ACC1 100%);
            border: none;
            box-shadow: 0 4px 12px rgba(0, 191, 166, 0.25);
            color: #fff;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
            -webkit-tap-highlight-color: transparent;
          }

          .cta-button:focus-visible {
            outline: 3px solid rgba(0,191,166,0.18);
            outline-offset: 4px;
            box-shadow: 0 0 0 4px rgba(0,191,166,0.06);
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,191,166,0.22);
          }

          .cta-button:active {
            transform: translateY(0);
            box-shadow: 0 4px 12px rgba(0,191,166,0.18);
          }

          /* Provider Portal button in top bar */
          .provider-portal-btn {
            display: inline-block;
            background: #ffffff;
            color: #007a6a;
            padding: 6px 12px;
            margin-right: clamp(16px, 2.5vw, 40px);
            border-radius: 999px;
            font-weight: 600;
            font-size: 13px;
            text-decoration: none;
            border: 1px solid rgba(255,255,255,0.16);
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: transform .14s ease, box-shadow .14s ease, opacity .14s ease;
          }

          .provider-portal-btn:hover,
          .provider-portal-btn:focus {
            transform: translateY(-1px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.12);
            color: #005a4d;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .provider-portal-btn { padding: 8px 10px; font-size: 14px; margin-right: 0; }
          }

          @media (hover: none) and (pointer: coarse) {
            .cta-button:hover { transform: none; box-shadow: 0 4px 12px rgba(0,191,166,0.25); }
            .cta-button { padding: 12px 18px; }
          }

          @media (prefers-reduced-motion: reduce) {
            .cta-button { transition: none; }
          }
        `}
      </style>
      
      {/* Back To Top */}
      <div className="backtotop">
        <button type="button" className="scroll" aria-label="Back to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>

      {/* Header */}
      <header className="site_header site_header_1">
        {/* Top Bar */}
        <div
          className="header_top"
          style={{
            background: 'linear-gradient(90deg, var(--header-primary-color) 0%, var(--header-secondary-color) 100%)',
            padding: '12px 0',
            color: 'white',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
                <div className="contact_info d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3">
                  <a
                    href="tel:+13213211740"
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <i className="fa-solid fa-phone me-2"></i>
                    <span className="d-none d-sm-inline">+1 321 321-1740</span>
                  </a>
                  <a
                    href="mailto:info@hiredbillingsupport.com"
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="d-none d-sm-inline">
                      info@hiredbillingsupport.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                
                  <Link
                    to="/provider-portal"
                    className="provider-portal-btn"
                    aria-label="Provider Portal"
                  >
                    Provider Portal
                  </Link>
                  {/* Social links (optional) can be re-enabled here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header_bottom" style={{ 
          minHeight: '80px',
          padding: '0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="site_logo" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
                  <a className="site_link" href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={logo}
                      alt="Hired Billing Support"
                      style={{ 
                        maxHeight: '45px',
                        height: 'auto',
                        width: 'auto',
                        maxWidth: '200px'
                      }}
                    />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-6 col-md-4 d-none d-lg-flex justify-content-center">
                <nav className="main_menu navbar navbar-expand-lg" style={{ 
                  position: 'relative',
                  width: '100%',
                  justifyContent: 'center'
                }}>
                  <div
                    className="main_menu_inner collapse navbar-collapse"
                    id="main_menu_dropdown"
                    style={{ 
                      flex: '1 1 auto',
                      justifyContent: 'center'
                    }}
                  >
                    <ul className="main_menu_list d-flex align-items-center justify-content-center mb-0" style={{ 
                      flexWrap: 'nowrap', 
                      gap: 'clamp(0.25rem, 1vw, 0.75rem)',
                      listStyle: 'none',
                      margin: 0,
                      padding: 0
                    }}>
                      {/* Hire Talent */}
                      <li
                        className={"nav-item dropdown-container" + (openDropdown === 'hire_talent' ? ' active' : '')}
                        onMouseEnter={() => handleDropdownEnter('hire_talent')}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          type="button"
                          className="nav-link dropdown-trigger"
                          id="hire_talent_submenu"
                          aria-expanded={openDropdown === 'hire_talent' ? 'true' : 'false'}
                          aria-haspopup="true"
                          aria-controls="hire_talent_menu"
                          onKeyDown={(e) => handleKeyDown(e, 'hire_talent')}
                          onFocus={() => handleDropdownEnter('hire_talent')}
                          style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                          Hire Talent
                          <i
                            className="fa-solid fa-chevron-down ms-1"
                            style={{ fontSize: '12px' }}
                          ></i>
                        </button>
                        <div
                          id="hire_talent_menu"
                          className={"mega-menu-wrapper" + (openDropdown === 'hire_talent' ? ' show' : '')}
                          role="menu"
                          aria-labelledby="hire_talent_submenu"
                          onMouseEnter={() => handleDropdownEnter('hire_talent')}
                          onMouseLeave={handleDropdownLeave}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: 'calc(100% + 8px)',
                            zIndex: 1050,
                            borderRadius: '16px',
                            margin: 0,
                            padding: '24px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                            border: '1px solid #E5E7EB',
                            background: '#fff',
                            minWidth: '600px',
                            maxWidth: 'min(800px, 90vw)',
                            width: 'max-content',
                            opacity: openDropdown === 'hire_talent' ? 1 : 0,
                            visibility: openDropdown === 'hire_talent' ? 'visible' : 'hidden',
                            transition: 'all 0.2s ease-out',
                          }}
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-3 col-md-6 mb-4">
                                <div className="mega-menu-section">
                                  <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                                    fontSize: '12px',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid #00BFA6',
                                    paddingBottom: '8px'
                                  }}>
                                    Clinical Roles
                                  </h6>
                                  <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '8px' }}>
                                      <a href="/medical-services" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Medical — Assistants, Scribes, Reception</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6 mb-4">
                                <div className="mega-menu-section">
                                  <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                                    fontSize: '12px',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid #0091EA',
                                    paddingBottom: '8px'
                                  }}>
                                    Dental Roles
                                  </h6>
                                  <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '8px' }}>
                                      <a href="/dental-services" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Dental — Assistants & Coordinators</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6 mb-4">
                                <div className="mega-menu-section">
                                  <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                                    fontSize: '12px',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid #FB8C00',
                                    paddingBottom: '8px'
                                  }}>
                                    Insurance & Billing
                                  </h6>
                                  <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '8px' }}>
                                      <a href="/insurance-services" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Insurance — CSR, Claims Processing</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-6 mb-4">
                                <div className="mega-menu-section">
                                  <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                                    fontSize: '12px',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid #8E24AA',
                                    paddingBottom: '8px'
                                  }}>
                                    Hiring Help
                                  </h6>
                                  <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '8px' }}>
                                      <a href="/contact" className="text-decoration-none d-block fw-semibold" style={{  fontSize: '14px', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#008C7A'} onMouseOut={(e)=>e.target.style.color='#00BFA6'}>Contact Hiring Team</a>
                                    </li>
                                    {/* <li style={{ marginBottom: '8px' }}>
                                      <a href="/about" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>About HBS</a>
                                    </li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Certification Footer */}
                            <div style={{ 
                              borderTop: '1px solid #E5E7EB',
                              marginTop: '16px',
                              paddingTop: '12px',
                              display: 'flex',
                              gap: '12px',
                              alignItems: 'center'
                            }}>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E0F7F4',
                                backgroundColor: '#F0FFFE'
                              }}>
                                <i className="fa-solid fa-shield" style={{ color: '#00BFA6', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00BFA6' }}>HIPAA Compliant</span>
                              </div>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E3F2FD',
                                backgroundColor: '#F8FCFF'
                              }}>
                                <i className="fa-solid fa-certificate" style={{ color: '#0091EA', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#0091EA' }}>SOC 2 Certified</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        className={"nav-item dropdown-container" + (openDropdown === 'solutions' ? ' active' : '')}
                        onMouseEnter={() => handleDropdownEnter('solutions')}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          type="button"
                          className="nav-link dropdown-trigger"
                          id="rcm_submenu"
                          aria-expanded={openDropdown === 'solutions' ? 'true' : 'false'}
                          aria-haspopup="true"
                          aria-controls="solutions_menu"
                          onFocus={() => handleDropdownEnter('solutions')}
                          style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                        Solutions
                          <i
                            className="fa-solid fa-chevron-down ms-1"
                            style={{ fontSize: '12px' }}
                          ></i>
                        </button>
                        <div 
                          id="solutions_menu"
                          className={"mega-menu-wrapper" + (openDropdown === 'solutions' ? ' show' : '')} 
                          role="menu"
                          aria-labelledby="rcm_submenu" 
                          onMouseEnter={() => handleDropdownEnter('solutions')}
                          onMouseLeave={handleDropdownLeave}
                          style={{
                          position: 'absolute',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          top: 'calc(100% + 8px)',
                          zIndex: 1051,
                          borderRadius: '16px',
                          margin: 0,
                          padding: '24px',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                          border: '1px solid #E5E7EB',
                          background: '#fff',
                          minWidth: '900px',
                          maxWidth: 'min(1200px, 95vw)',
                          width: 'max-content',
                          opacity: openDropdown === 'solutions' ? 1 : 0,
                          visibility: openDropdown === 'solutions' ? 'visible' : 'hidden',
                          transition: 'all 0.2s ease-out',
                        }}>
      <div className="container-fluid">
        <div className="row">
          {/* Columned link layout matching Who We Serve style */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mega-menu-section">
              <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '16px',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #00BFA6',
                paddingBottom: '8px'
              }}>
                Billing Services
              </h6>
              <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/rcm-management" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Revenue Cycle Management</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/medical-billing&rcm" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Medical Billing & RCM</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/ar-management" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>AR Management</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/ar-denial&fixation" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>AR Denial & Fixation</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link to="/old-aging-ar" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Old & Aging AR </Link>
                </li>

              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mega-menu-section">
              <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '16px',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #0091EA',
                paddingBottom: '8px'
              }}>
                Coding & Compliance
              </h6>
              <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/medical-coding" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Medical Coding</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/medical-audit" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Medical Auditing</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/compliance-reporting" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Compliance & Reporting</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/quality-assurance" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Quality Assurance</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mega-menu-section">
              <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '16px',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #FB8C00',
                paddingBottom: '8px'
              }}>
                Practice Management
              </h6>
              <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/provider-credential" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Provider Credentialing</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/payer-insurer-Enrolment" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Payer & Insurer Enrolment</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/practice-launch" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Practice Launch</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/operations-management" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Operations Management</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="mega-menu-section">
              <h6 className="mega-menu-title fw-bold text-uppercase" style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '16px',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #8E24AA',
                paddingBottom: '8px'
              }}>
                Advanced Solutions
              </h6>
              <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/marketing-patient-engagement" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Marketing & Patient Engagement</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/virtual-healthcare-solutions" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Virtual Healthcare Solutions</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/analytics-reporting" className="text-decoration-none d-block" style={{ color: '#374151', fontSize: '14px', fontWeight: '500', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#00BFA6'} onMouseOut={(e)=>e.target.style.color='#374151'}>Analytics & Reporting</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="/contact" className="text-decoration-none d-block fw-bold" style={{ color: '#00BFA6', fontSize: '14px', fontWeight: '600', padding: '4px 0' }} onMouseOver={(e)=>e.target.style.color='#008C7A'} onMouseOut={(e)=>e.target.style.color='#00BFA6'}>View All Solutions →</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Certification Footer */}
        <div style={{ 
          borderTop: '1px solid #E5E7EB',
          marginTop: '16px',
          paddingTop: '12px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #E0F7F4',
            backgroundColor: '#F0FFFE'
          }}>
            <i className="fa-solid fa-shield" style={{ color: '#00BFA6', fontSize: '12px' }}></i>
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#00BFA6' }}>HIPAA Compliant</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #E3F2FD',
            backgroundColor: '#F8FCFF'
          }}>
            <i className="fa-solid fa-certificate" style={{ color: '#0091EA', fontSize: '12px' }}></i>
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#0091EA' }}>SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </div>
  </li>
<li
  className={"nav-item dropdown-container" + (openDropdown === 'who_we_serve' ? ' active' : '')}
  onMouseEnter={() => handleDropdownEnter('who_we_serve')}
  onMouseLeave={handleDropdownLeave}
>
  <button
    type="button"
    className="nav-link dropdown-trigger"
    id="who_we_serve_submenu"
    aria-expanded={openDropdown === 'who_we_serve' ? 'true' : 'false'}
    aria-haspopup="true"
    aria-controls="who_we_serve_menu"
    onFocus={() => handleDropdownEnter('who_we_serve')}
    style={{background: 'none', border: 'none', cursor: 'pointer'}}>
    Who We Serve
    <i
      className="fa-solid fa-chevron-down ms-1"
      style={{ fontSize: '12px' }}
    ></i>
  </button>
  <div 
    id="who_we_serve_menu"
    className={"mega-menu-wrapper" + (openDropdown === 'who_we_serve' ? ' show' : '')} 
    role="menu"
    aria-labelledby="who_we_serve_submenu" 
    onMouseEnter={() => handleDropdownEnter('who_we_serve')}
    onMouseLeave={handleDropdownLeave}
    style={{
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 'calc(100% + 8px)',
    zIndex: 1052,
    borderRadius: '16px',
    margin: 0,
    padding: '32px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
    border: '1px solid #E5E7EB',
    background: '#fff',
    minWidth: '1000px',
    maxWidth: 'min(1400px, 95vw)',
    width: 'max-content',
    opacity: openDropdown === 'who_we_serve' ? 1 : 0,
    visibility: openDropdown === 'who_we_serve' ? 'visible' : 'hidden',
    transition: 'all 0.2s ease-out',
  }}>
    <div className="container-fluid">
      <div className="row">
        {/* Provider Organizations */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="mega-menu-section">
            <h6 className="mega-menu-title fw-bold text-uppercase" style={{
              fontSize: '12px',
              color: '#6B7280',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              borderBottom: '2px solid #00BFA6',
              paddingBottom: '8px'
            }}>
              Provider Organizations
            </h6>
            <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/start-ups" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Startup Practices
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/small-medical-practices" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Small Medical Practices
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/medium-large-medical-practices" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Medium to Large Medical Groups
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/enterprise-medical-operation" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Enterprises & Health Systems
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/fqhc" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Federally Qualified Health Centers (FQHCs)
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/member-centric-care" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Member-centric Care Organizations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Specialties */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="mega-menu-section">
            <h6 className="mega-menu-title fw-bold text-uppercase" style={{
              fontSize: '12px',
              color: '#6B7280',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              borderBottom: '2px solid #0091EA',
              paddingBottom: '8px'
            }}>
              Medical 
            </h6>
            <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/psychiatry" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Psychiatry 
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/orthopedic" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Orthopedics 
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/obgyn" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Obgyn 
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/cardiology" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Cardiology 
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/endocrinology" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Endocrinology 
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/neurology" 
                  className="text-decoration-none d-block fw-bold"
                  style={{
                    color: '#00BFA6',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#008C7A'}
                  onMouseOut={(e) => e.target.style.color = '#00BFA6'}
                >
                  Neurology 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Organizations */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="mega-menu-section">
            <h6 className="mega-menu-title fw-bold text-uppercase" style={{
              fontSize: '12px',
              color: '#6B7280',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              borderBottom: '2px solid #FB8C00',
              paddingBottom: '8px'
            }}>
              Other Organizations
            </h6>
            <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/payers" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Healthcare Payers
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/medical-order-transmission" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Labs and Imaging Centers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="mega-menu-section">
            <h6 className="mega-menu-title fw-bold text-uppercase" style={{
              fontSize: '12px',
              color: '#6B7280',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              borderBottom: '2px solid #8E24AA',
              paddingBottom: '8px'
            }}>
              Partners
            </h6>
            <ul className="list-unstyled mb-0" style={{ lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/hbs-marketing" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Marketplace Partners
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a 
                  href="/developer-portal" 
                  className="text-decoration-none d-block"
                  style={{
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#00BFA6'}
                  onMouseOut={(e) => e.target.style.color = '#374151'}
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Certification Footer */}
      <div style={{ 
        borderTop: '1px solid #E5E7EB',
        marginTop: '16px',
        paddingTop: '12px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '6px',
          border: '1px solid #E0F7F4',
          backgroundColor: '#F0FFFE'
        }}>
          <i className="fa-solid fa-shield" style={{ color: '#00BFA6', fontSize: '12px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#00BFA6' }}>HIPAA Compliant</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '6px',
          border: '1px solid #E3F2FD',
          backgroundColor: '#F8FCFF'
        }}>
          <i className="fa-solid fa-certificate" style={{ color: '#0091EA', fontSize: '12px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#0091EA' }}>SOC 2 Certified</span>
        </div>
      </div>
    </div>
  </div>
</li>

                      {/* Resources */}
                      <li
                        className={"nav-item dropdown-container" + (openDropdown === 'resources' ? ' active' : '')}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => handleDropdownEnter('resources')}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button 
                          type="button" 
                          className="nav-link dropdown-trigger" 
                          id="resources_submenu" 
                          aria-expanded={openDropdown === 'resources' ? 'true' : 'false'} 
                          aria-haspopup="true"
                          aria-controls="resources_menu"
                          onFocus={() => handleDropdownEnter('resources')}
                          style={{background: 'none', border: 'none', cursor: 'pointer'}}
                        >
                          Resources
                          <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i>
                        </button>
                        <div 
                          id="resources_menu"
                          className={"mega-menu-wrapper" + (openDropdown === 'resources' ? ' show' : '')}
                          role="menu"
                          aria-labelledby="resources_submenu"
                          onMouseEnter={() => handleDropdownEnter('resources')}
                          onMouseLeave={handleDropdownLeave}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: 'calc(100% + 8px)',
                            zIndex: 1053,
                            borderRadius: '16px',
                            margin: 0,
                            padding: '24px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                            border: '1px solid #E5E7EB',
                            background: '#fff',
                            minWidth: '600px',
                            maxWidth: 'min(900px, 95vw)',
                            width: 'max-content',
                            opacity: openDropdown === 'resources' ? 1 : 0,
                            visibility: openDropdown === 'resources' ? 'visible' : 'hidden',
                            transition: 'all 0.2s ease-out',
                          }}
                        >
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 mb-4">
                                <h6 className="fw-bold small text-uppercase" style={{ borderBottom: '2px solid #00BFA6', paddingBottom: '8px' }}>Case Studies</h6>
                                <ul className="list-unstyled mb-0" style={{ marginTop: '12px' }}>
                                  <li><a href="/case-study" className="text-decoration-none" style={{ color: '#374151' }}>Case Study</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-6 col-md-6 mb-4">
                                <h6 className="fw-bold small text-uppercase" style={{ borderBottom: '2px solid #0091EA', paddingBottom: '8px' }}>Insights</h6>
                                <ul className="list-unstyled mb-0" style={{ marginTop: '12px' }}>
                                  <li><a href="/blog" className="text-decoration-none" style={{ color: '#374151' }}>Blogs</a></li>
                                </ul>
                              </div>
                            
                            
                            </div>
                            {/* Certification Footer */}
                            <div style={{ 
                              borderTop: '1px solid #E5E7EB',
                              marginTop: '16px',
                              paddingTop: '12px',
                              display: 'flex',
                              gap: '12px',
                              alignItems: 'center'
                            }}>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E0F7F4',
                                backgroundColor: '#F0FFFE'
                              }}>
                                <i className="fa-solid fa-shield" style={{ color: '#00BFA6', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00BFA6' }}>HIPAA Compliant</span>
                              </div>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E3F2FD',
                                backgroundColor: '#F8FCFF'
                              }}>
                                <i className="fa-solid fa-certificate" style={{ color: '#0091EA', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#0091EA' }}>SOC 2 Certified</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* Company */}
                      <li
                        className={"nav-item dropdown-container" + (openDropdown === 'company' ? ' active' : '')}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => handleDropdownEnter('company')}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button type="button" className="nav-link dropdown-trigger" id="company_submenu" aria-expanded={openDropdown === 'company' ? 'true' : 'false'} aria-haspopup="true" aria-controls="company_menu" onFocus={() => handleDropdownEnter('company')} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                          Company
                          <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i>
                        </button>
                        <div
                          id="company_menu"
                          className={"mega-menu-wrapper" + (openDropdown === 'company' ? ' show' : '')}
                          role="menu"
                          aria-labelledby="company_submenu"
                          onMouseEnter={() => handleDropdownEnter('company')}
                          onMouseLeave={handleDropdownLeave}
                          style={{
                          position: 'absolute',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          top: 'calc(100% + 8px)',
                          zIndex: 1054,
                          borderRadius: '16px',
                          margin: 0,
                          padding: '24px',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                          border: '1px solid #E5E7EB',
                          background: '#fff',
                          minWidth: '600px',
                          maxWidth: 'min(900px, 95vw)',
                          width: 'max-content',
                          opacity: openDropdown === 'company' ? 1 : 0,
                          visibility: openDropdown === 'company' ? 'visible' : 'hidden',
                          transition: 'all 0.2s ease-out',
                        }}>
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 mb-4">
                                <h6 className="fw-bold small text-uppercase" style={{ borderBottom: '2px solid #00BFA6', paddingBottom: '8px' }}>About</h6>
                                <ul className="list-unstyled mb-0" style={{ marginTop: '12px' }}>
                                  <li><a href="/about" className="text-decoration-none" style={{ color: '#374151' }}>About Us</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-4 col-md-6 mb-4">
                                <h6 className="fw-bold small text-uppercase" style={{ borderBottom: '2px solid #0091EA', paddingBottom: '8px' }}>Get Started</h6>
                                <ul className="list-unstyled mb-0" style={{ marginTop: '12px' }}>
                                  <li><a href="/pricing" className="text-decoration-none" style={{ color: '#374151' }}>Book Now</a></li>
             
                                </ul>
                              </div>
                            
                              <div className="col-lg-4 col-md-6 mb-4">
                                <h6 className="fw-bold small text-uppercase" style={{ borderBottom: '2px solid #8E24AA', paddingBottom: '8px' }}>Guides</h6>
                                <ul className="list-unstyled mb-0" style={{ marginTop: '12px' }}>
                                  <li><a href="/article-28-facilities" className="text-decoration-none" style={{ color: '#374151' }}>Article 28 Facilities</a></li>
                                </ul>
                              </div>
                            </div>
                            {/* Certification Footer */}
                            <div style={{ 
                              borderTop: '1px solid #E5E7EB',
                              marginTop: '16px',
                              paddingTop: '12px',
                              display: 'flex',
                              gap: '12px',
                              alignItems: 'center'
                            }}>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E0F7F4',
                                backgroundColor: '#F0FFFE'
                              }}>
                                <i className="fa-solid fa-shield" style={{ color: '#00BFA6', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#00BFA6' }}>HIPAA Compliant</span>
                              </div>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #E3F2FD',
                                backgroundColor: '#F8FCFF'
                              }}>
                                <i className="fa-solid fa-certificate" style={{ color: '#0091EA', fontSize: '12px' }}></i>
                                <span style={{ fontSize: '11px', fontWeight: '600', color: '#0091EA' }}>SOC 2 Certified</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* CTA Button */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-6 d-flex justify-content-end align-items-center">
                <ul className="header_btns_group d-flex align-items-center justify-content-end mb-0" style={{ 
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  gap: '0.5rem'
                }}>
                  <li className="d-flex d-lg-none">
                    <button 
                      className="mobile_menu_btn" 
                      type="button" 
                      onClick={() => setSidebarOpen(true)}
                      aria-label="Toggle navigation"
                      aria-expanded={sidebarOpen}
                      style={{
                        background: 'none',
                        border: '2px solid #E5E7EB',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        cursor: 'pointer',
                        color: '#333',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i className="fa-solid fa-bars" style={{ fontSize: '18px' }}></i>
                    </button>
                  </li>
                  <li className="d-none d-lg-flex">
                    <div
                      className={"nav-item dropdown-container" + (openDropdown === 'consultation' ? ' active' : '')}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => handleDropdownEnter('consultation')}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        type="button"
                        className="nav-link dropdown-trigger cta-button"
                        id="consultation_submenu"
                        aria-expanded={openDropdown === 'consultation' ? 'true' : 'false'}
                        aria-haspopup="true"
                        aria-controls="consultation_menu"
                        onKeyDown={(e) => handleKeyDown(e, 'consultation')}
                        onFocus={() => handleDropdownEnter('consultation')}
                        style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #00ACC1 100%)', padding: '10px 18px', borderRadius: '50px', color: '#fff', border: 'none', cursor: 'pointer' }}
                      >
                        Consultation
                        <i className="fa-solid fa-chevron-down ms-2" style={{ fontSize: '12px' }} />
                      </button>

                      <div
                        id="consultation_menu"
                        className={"standard-dropdown-menu" + (openDropdown === 'consultation' ? ' show' : '')}
                        role="menu"
                        aria-labelledby="consultation_submenu"
                        onMouseEnter={() => handleDropdownEnter('consultation')}
                        onMouseLeave={handleDropdownLeave}
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: 'calc(100% + 8px)',
                          zIndex: 1060,
                          borderRadius: '12px',
                          margin: 0,
                          padding: '8px',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                          border: '1px solid #E5E7EB',
                          background: '#fff',
                          minWidth: '200px',
                          width: 'max-content',
                          opacity: openDropdown === 'consultation' ? 1 : 0,
                          visibility: openDropdown === 'consultation' ? 'visible' : 'hidden',
                          transition: 'all 0.16s ease-out',
                        }}
                      >
                        <a href="/explore-partnership" className="d-block" role="menuitem" onClick={() => setOpenDropdown(null)} style={{ padding: '8px 12px', color: '#374151', textDecoration: 'none', display: 'block' }}>Explore Partnership</a>
                        <a href="/find-service" className="d-block" role="menuitem" onClick={() => setOpenDropdown(null)} style={{ padding: '8px 12px', color: '#374151', textDecoration: 'none', display: 'block' }}>Find Service</a>
                        <a href="/contact" className="d-block" role="menuitem" onClick={() => setOpenDropdown(null)} style={{ padding: '8px 12px', color: '#00BFA6', fontWeight: 600, textDecoration: 'none', display: 'block' }}>Hire Talent</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Mobile Sidebar Navigation */}
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="sidebar-backdrop d-lg-none"
              onClick={handleSidebarClose}
              onTouchEnd={handleSidebarClose}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 9998,
                animation: 'fadeIn 0.3s ease-out',
                touchAction: 'none'
              }}
            />
            
            {/* Sidebar */}
            <div 
              className="mobile-sidebar d-lg-none"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100vw',
                height: '100vh',
                minHeight: '100dvh', // Dynamic viewport height for mobile
                maxHeight: '100vh',
                backgroundColor: '#fff',
                zIndex: 9999,
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
                transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                overflowY: 'hidden'
              }}
            >
              {/* Sidebar Header */}
              <div 
                style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {activeSubmenu && (
                  <button
                    onClick={() => handleSubmenuChange(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '8px',
                      cursor: 'pointer',
                      color: '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    Back
                  </button>
                )}
               
                <button
                  onClick={handleSidebarClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    color: '#6b7280',
                    fontSize: '16px'
                  }}
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>

              {/* Sidebar Content */}
              <div style={{ 
                flex: 1, 
                overflowY: 'auto', 
                overflowX: 'hidden',
                padding: '0',
                width: '100%',
                maxWidth: '100vw'
              }}>
                {!activeSubmenu ? (
                  /* Main Menu */
                  <nav style={{ padding: '0' }}>
                    {/* Hire Talent */}
                    <div 
                      onClick={() => handleSubmenuChange('Hire Talent')}
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background-color 0.2s',
                        ':hover': { backgroundColor: '#f9fafb' }
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '500', color: '#111827' }}>Hire Talent</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px', color: '#6b7280' }}></i>
                    </div>

                    {/* Solutions */}
                    <div 
                      onClick={() => handleSubmenuChange('Solutions')}
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '500', color: '#111827' }}>Solutions</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px', color: '#6b7280' }}></i>
                    </div>

                    {/* Who We Serve */}
                    <div 
                      onClick={() => handleSubmenuChange('Who We Serve')}
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '500', color: '#111827' }}>Who We Serve</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px', color: '#6b7280' }}></i>
                    </div>

                    {/* Company */}
                    <div 
                      onClick={() => handleSubmenuChange('Company')}
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '500', color: '#111827' }}>Company</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px', color: '#6b7280' }}></i>
                    </div>

                    {/* Resources */}
                    <div 
                      onClick={() => handleSubmenuChange('Resources')}
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <span style={{ fontWeight: '500', color: '#111827' }}>Resources</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px', color: '#6b7280' }}></i>
                    </div>
                  </nav>
                ) : (
                  /* Submenu Content */
                  <div style={{ padding: '16px 0' }}>
                    {activeSubmenu === 'Hire Talent' && (
                      <div>
                        <a href="/medical-services" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Clinical Roles</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Medical Assistant, Medical Scribe, Reception</div>
                        </a>

                        <a href="/dental-services" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Dental Roles</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Dental Assistant, Treatment Coordinator</div>
                        </a>

                        <a href="/insurance-services" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Insurance & Billing</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Claims Processing, CSR, Underwriting</div>
                        </a>

                        <a href="/contact" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Hiring Help</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Contact our hiring team or learn about HBS</div>
                        </a>
                      </div>
                    )}

                    {activeSubmenu === 'Solutions' && (
                      <div>
                        <a href="/rcm-management" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Revenue Cycle Management</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Maximize reimbursements through optimized claims and payments.</div>
                        </a>
                        <a href="/medical-billing&rcm" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Medical Billing & RCM</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>End-to-end claims processing and posting.</div>
                        </a>
                        <a href="/medical-coding" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Medical Coding</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Accurate coding and compliance.</div>
                        </a>
                        <a href="/medical-audit" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Medical Auditing</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Quality review and compliance audits.</div>
                        </a>
                        <a href="/compliance-reporting" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Compliance & Reporting</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Regulatory compliance and reporting solutions.</div>
                        </a>
                        <a href="/quality-assurance" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Quality Assurance</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Ensure highest standards in all processes.</div>
                        </a>
                        <a href="/ar-denial&fixation" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>AR Denial & Fixation</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Appeals, denial recovery and analysis.</div>
                        </a>
                        <a href="/ar-management" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>AR Management</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Aging analysis and payer follow-up.</div>
                        </a>
                        <a href="/provider-credential" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Provider Credentialing</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Provider enrollment with payers.</div>
                        </a>
                        <a href="/payer-insurer-Enrolment" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Payer & Insurer Enrolment</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Payer enrolment and contracts.</div>
                        </a>
                        <a href="/practice-launch" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Practice Launch</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Full operational and billing setup.</div>
                        </a>
                        <a href="/operations-management" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Operations Management</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Optimize clinical and administrative workflows.</div>
                        </a>
                        <a href="/marketing-patient-engagement" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Marketing & Patient Engagement</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Engage patients effectively with targeted marketing strategies.</div>
                        </a>
                        <a href="/virtual-healthcare-solutions" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #f3f4f6' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Virtual Healthcare Solutions</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Innovative solutions for remote patient care.</div>
                        </a>
                        <a href="/analytics-reporting" onClick={handleSidebarClose} style={{ display: 'block', padding: '12px 24px', textDecoration: 'none', color: 'inherit' }}>
                          <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>Analytics & Reporting</div>
                          <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.4' }}>Data-driven insights for business growth.</div>
                        </a>
                      </div>
                    )}

                    {activeSubmenu === 'Who We Serve' && (
                      <div>
                        {/* Provider Organizations */}
                        <div style={{ padding: '12px 24px', borderBottom: '2px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                          <div style={{ fontWeight: '600', color: '#00BFA6', marginBottom: '12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                           Provider Organizations
                          </div>
                          <div style={{ paddingLeft: '12px' }}>
                            <a href="/start-ups" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Startup Practices
                            </a>
                            <a href="/small-medical-practices" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Small Medical Practices
                            </a>
                            <a href="/medium-large-medical-practices" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Medium to Large Medical Groups
                            </a>
                            <a href="/enterprise-medical-operation" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Enterprises & Health Systems
                            </a>
                            <a href="/fqhc" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Federally Qualified Health Centers (FQHCs)
                            </a>
                            <a href="/member-centric-care" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500' }}>
                              Member-centric Care Organizations
                            </a>
                          </div>
                        </div>

                        {/* Medical Specialties */}
                        <div style={{ padding: '12px 24px', borderBottom: '2px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                          <div style={{ fontWeight: '600', color: '#0091EA', marginBottom: '12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Medical Specialties
                          </div>
                          <div style={{ paddingLeft: '12px' }}>
                            <a href="/psychiatry" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Psychiatry
                            </a>
                            <a href="/orthopedic" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Orthopedics
                            </a>
                            <a href="/obgyn" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Obgyn
                            </a>
                            <a href="/cardiology" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Cardiology
                            </a>
                            <a href="/endocrinology" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Endocrinology
                            </a>
                            <a href="/neurology" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#00BFA6', fontSize: '14px', fontWeight: '600' }}>
                              View All Specialties →
                            </a>
                          </div>
                        </div>

                        {/* Other Organizations */}
                        <div style={{ padding: '12px 24px', borderBottom: '2px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                          <div style={{ fontWeight: '600', color: '#FB8C00', marginBottom: '12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                           Other Organizations
                          </div>
                          <div style={{ paddingLeft: '12px' }}>
                            <a href="/payers" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Healthcare Payers
                            </a>
                            <a href="/medical-order-transmission" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500' }}>
                              Labs and Imaging Centers
                            </a>
                          </div>
                        </div>

                        {/* Partners */}
                        <div style={{ padding: '12px 24px', backgroundColor: '#f9fafb' }}>
                          <div style={{ fontWeight: '600', color: '#8E24AA', marginBottom: '12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                           Partners
                          </div>
                          <div style={{ paddingLeft: '12px' }}>
                            <a href="/hbs-marketing" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500', borderBottom: '1px solid #f3f4f6' }}>
                              Marketplace Partners
                            </a>
                            <a href="/developer-portal" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: '500' }}>
                              Developers
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubmenu === 'Company' && (
                      <div>
                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#8E24AA', marginBottom: '8px', fontSize: '13px' }}>About</div>
                          <a href="/about" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>About Us</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#0091EA', marginBottom: '8px', fontSize: '13px' }}>Get Started</div>
                          <a href="/pricing" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Book Now</a>
                          <a href="/contact" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Contact</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#FB8C00', marginBottom: '8px', fontSize: '13px' }}>Programs</div>
                          <a href="/hbs-marketing" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>HBS Marketing</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#8E24AA', marginBottom: '8px', fontSize: '13px' }}>Guides</div>
                          <a href="/article-28-facilities" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Article 28 Facilities</a>
                        </div>
                      </div>
                    )}

                    {activeSubmenu === 'Resources' && (
                      <div>
                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#00BFA6', marginBottom: '8px', fontSize: '13px' }}>Case Studies</div>
                          <a href="/case-study" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Case Study</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#0091EA', marginBottom: '8px', fontSize: '13px' }}>Insights</div>
                          <a href="/blog" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Blogs</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#FB8C00', marginBottom: '8px', fontSize: '13px' }}>Programs</div>
                          <a href="/hbs-marketing" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>HBS Marketing</a>
                        </div>

                        <div style={{ padding: '12px 0' }}>
                          <div style={{ fontWeight: '600', color: '#8E24AA', marginBottom: '8px', fontSize: '13px' }}>Guides</div>
                          <a href="/article-28-facilities" onClick={handleSidebarClose} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: '#374151' }}>Article 28 Facilities</a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

      </header>
    </>
  );
}
export default Header;