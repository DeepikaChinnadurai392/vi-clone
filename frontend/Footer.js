import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Main Footer Section */}
      <footer style={{
        backgroundColor: '#001f3f', // dark blue
        color: 'white',
        padding: '40px 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
          {/* Left Side - Logos vertically */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px',
          }}>
            <img src="/logo.png" alt="Logo " style={{ width: '200px', height: '150px' }} />
            <img src="/logo2.png" alt="Logo 2" style={{ width: '110px', height: '110px' }} />
            <img src="/logo3.png" alt="Logo 3" style={{ width: '110px', height: '110px' }} />
            <img src="/logo4.png" alt="Logo 4" style={{ width: '110px', height: '110px' }} />
            <img src="/logo5.png" alt="Logo 5" style={{ width: '110px', height: '110px' }} />
            <img src="/logo6.png" alt="Logo 6" style={{ width: '110px', height: '110px' }} />
          </div>

          {/* Right Side - Links in columns */}
          <div style={{
            display: 'flex',
            gap: '80px',
            padding: '20px',
            fontSize: "1.6rem",
          }}>
            {/* First Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <a href="https://www.virtualinternships.com/companies/" style={{ color: 'white', textDecoration: 'none' }}>Companies</a>
              <a href="https://www.virtualinternships.com/universities/" style={{ color: 'white', textDecoration: 'none' }}>Educators</a>
              <a href="https://www.virtualinternships.com/interns/" style={{ color: 'white', textDecoration: 'none' }}>Interns</a>
            </div>

            {/* Second Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              <a href="https://www.virtualinternships.com/our-mission/" style={{ color: 'white', textDecoration: 'none' }}>Our Mission</a>
              <a href="https://www.virtualinternships.com/our-team/" style={{ color: 'white', textDecoration: 'none' }}>Our Team</a>
              <a href="https://www.virtualinternships.com/join-us/" style={{ color: 'white', textDecoration: 'none' }}>Join Us</a>
              <a href="https://www.virtualinternships.com/press/" style={{ color: 'white', textDecoration: 'none' }}>Press</a>
              <a href="https://blog.virtualinternships.com/?_gl=1*1y0taw6*_gcl_au*MjQ1NDQ4ODgwLjE3NTc1MjExNDA.*_ga*MTc1OTc5NzIyOS4xNzU3NTIxMTQ5*_ga_SFQLTTJMF5*czE3NTc5MjQxMTkkbzM0JGcxJHQxNzU3OTI2Nzc3JGoyMyRsMCRoMA.." style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
              <a href="https://www.virtualinternships.com/contact-us/" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
            </div>

            {/* Third Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              <a href="https://www.facebook.com/virtualintern/" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
              <a href="https://www.instagram.com/virtualinternships/" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
              <a href="https://x.com/onlineinterns" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
              <a href="https://www.linkedin.com/company/virtual-internships" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://www.tiktok.com/@virtual_internships" style={{ color: 'white', textDecoration: 'none' }}>TikTok</a>
              <a href="https://www.youtube.com/VirtualInternships" style={{ color: 'white', textDecoration: 'none' }}>YouTube</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Below Footer Section */}
      <div style={{
        backgroundColor: '#001f3f', // same dark blue
        color: 'white',
        borderTop: '1px solid #e9e0e0ff',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <div style={{
            padding: '10px',
            fontSize: "1.8rem",
          }}>
            © 2025 Virtual Internships. All rights reserved.
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            padding: '10px',
            fontSize: "1.5rem",
          }}>
            <a href="https://www.virtualinternships.com/policies/privacy" style={{ color: 'white', textDecoration: 'none',gap:'35px' }}>Privacy Policy</a>
            <a href="https://www.virtualinternships.com/policies/" style={{ color: 'white', textDecoration: 'none' ,gap:'35px'}}>Terms of Service</a>
            <a href="https://www.virtualinternships.com/" style={{ color: 'white', textDecoration: 'none',gap:'35px' }}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
}
