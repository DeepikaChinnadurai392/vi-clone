import { FaGraduationCap, FaHandsHelping, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const buttonStyle = {
    padding: '22px 60px', // increased height & length
    fontSize: '1.35rem',  // bigger font
    fontWeight: '700',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: '10px',
    minWidth: '220px', // same length for all buttons
    height: '60px'      // same height for all buttons
  };

  return (
    <section style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>

        {/* Left side */}
        <div style={{
          width: '65%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 80px', // left padding
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ textAlign: 'left', width: '100%', color: '#333', marginTop: '-50px' }}>
            
            {/* Heading in 3 lines */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '30px',
              lineHeight: '1.2',
              fontFamily: '"Poppins", sans-serif'
            }}>
              The only platform that <br />
              <strong style={{ color: '#008B8B' }}>guarantees</strong> real-world work <br />
              experience across the globe
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '1.75rem', fontWeight: '500', marginBottom: '40px', color: '#666' }}>
              Shaping tomorrow’s workforce: one internship at a time
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <button style={{ ...buttonStyle, backgroundColor: '#FF8C00', color: 'white', border: 'none' }}>
                  <FaGraduationCap /> Company: Hire
                </button>
                <button style={{ ...buttonStyle, backgroundColor: 'white', color: '#333', border: '2px solid #333' }}>
                  <FaHandsHelping /> Educators: Partner
                </button>
              </div>
              <button style={{ ...buttonStyle, backgroundColor: '#008B8B', color: 'white', border: 'none', alignSelf: 'flex-start' }}>
                <FaCalendarAlt /> Interns: Apply
              </button>
            </div>

          </div>
        </div>

        {/* Right side */}
        <div style={{ width: '35%', height: '100vh', position: 'relative', overflow: 'visible' }}>
          {/* Big circle behind girl */}
          <div style={{
            position: 'absolute',
            bottom: '200px',
            left: '-50px',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle at center, #008B8B 0%, #00CED1 100%)',
            borderRadius: '50%',
            zIndex: 0,
          }} />

          {/* Girl Image */}
          <div style={{ position: 'absolute', bottom: '0', right: '0', width: '88%', height: '97%', zIndex: 1 }}>
            <Image
              src="/image.png"
              alt="Girl studying"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
