import React, { useRef, useEffect, useState } from 'react';
import YouTube from "react-youtube";


export default function FutureOfWork() {
  const videos = [
    { id: "QT9TK0Udhx4", title: "Internship Journey", description: "Explore how our internship program has shaped careers and opened new doors." },
    { id: "HLmPf0WXKqU", title: "Student Transformation", description: "See real examples of students enhancing their skills and employability through internships." },
    { id: "GgcQNDvQoBw", title: "Educator Experience", description: "Learn how educators are integrating internships into curricula for better student outcomes." },
    { id: "o8Px4fe2BmY", title: "Career Boost", description: "Discover how hands-on experience propels interns toward rewarding career paths." },
    { id: "GgcQNDvQoBw", title: "Educator Experience Again", description: "Further insights from educators driving practical learning experiences." },
    { id: "8oFEN7c313E", title: "Global Internship Insights", description: "Understand how global opportunities are reshaping the education-to-career pathway." },
    { id: "imL_BkR93qo", title: "Learning with Purpose", description: "See how purposeful learning experiences impact both students and organizations alike." },
    { id: "_X1AoQcvmvs", title: "Path to Success", description: "Follow success stories and career trajectories of interns who started with us." },
  ];
 const mediaCards = [
  { title: "Company A", image: "/image copy 3.png", },
  { title: "Company B", image: "/image copy.png" },
  { title: "Educator C", image: "/image3.png" },
  { title: "Intern D", image: "/image4.png" },
  { title: "Company E", image: "/image5.png" },
  { title: "Educator F", image: "/image6.png" },
  { title: "Intern G", image: "/image8.png" },
  { title: "Company H", image: "/image9.png" },
  { title: "Company i", image: "/image10.png" },
  { title: "Company j", image: "/image11.png" },
  { title: "Company k", image: "/image12.png" },
];


  const scrollRef = useRef(null);
  const mediaRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [mediaScrollPos, setMediaScrollPos] = useState(0);

  useEffect(() => {
  const container = mediaRef.current;
  if (!container) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDownHandler = (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };

  const mouseLeaveHandler = () => {
    isDown = false;
    container.classList.remove('active');
  };

  const mouseUpHandler = () => {
    isDown = false;
    container.classList.remove('active');
  };

  const mouseMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener('mousedown', mouseDownHandler);
  container.addEventListener('mouseleave', mouseLeaveHandler);
  container.addEventListener('mouseup', mouseUpHandler);
  container.addEventListener('mousemove', mouseMoveHandler);

  return () => {
    container.removeEventListener('mousedown', mouseDownHandler);
    container.removeEventListener('mouseleave', mouseLeaveHandler);
    container.removeEventListener('mouseup', mouseUpHandler);
    container.removeEventListener('mousemove', mouseMoveHandler);
  };
}, []);

  return (
    <div>
      {/* Dark section */}
      <section style={{
        width: '100%',
        backgroundColor: '#0D1B2A',
        color: 'white',
        padding: '100px 50px',
        boxSizing: 'border-box',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-165px',
          left: '-165px',
          width: '400px',
          height: '450px',
          backgroundColor: '#00ccff',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          top: '-165px',
          right: '-165px',
          width: '450px',
          height: '370px',
          backgroundColor: '#FFD700',
          borderRadius: '50%',
        }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 5vw, 4rem)',
            fontWeight: '900',
            marginBottom: '30px',
            lineHeight: '1.2',
          }}>
            The Future of Work is,<br />
            Changing.
          </h2>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '2',
            fontWeight: '500',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ccc',
          }}>
            As AI technology reshapes industries, work-based learning is more essential than ever.
            Real-world experience not only empowers learners but also equips employers with fresh
            talent ready to drive innovation.
          </p>
        </div>
      </section>

      {/* Solution section */}
      
      <section style={{
        width: '100%',
        backgroundColor: '#fff',
        textAlign: 'center',
        padding: '80px 20px',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: 'clamp(2.9rem, 5vw, 3.9rem)',
          fontWeight: '900',
          marginBottom: '20px',
          color: '#000',
        }}>
          The Solution: <span style={{ color: '#00ccff' }}>Virtual <br />Internships</span>
        </h2>
        <p style={{
          fontSize: '1.8rem',
          lineHeight: '1.8',
          fontWeight: '600',
          maxWidth: '800px',
          margin: '0 auto 60px auto',
          color: '#555',
        }}>
          Connecting educators, companies, and interns to create lasting, meaningful impact.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}>
          {["Companies", "Educators", "Interns"].map((heading, index) => (
            <div key={index} style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              width: '450px',
              height: '350px',
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'blue',
              }}>{heading}</h3>
              <p style={{
                fontSize: '1.7rem',
                color: '#0a1118ff',
                lineHeight: '1.7',
              }}>
                {heading === "Companies" ? "Access remote, pre-vetted interns to drive growth and strengthen your future talent pipeline."
                : heading === "Educators" ? "Seamlessly embed internships into your curriculum, enhancing student employability and practical skills."
                : "Launch your career with global experience, valuable skills, and professional connections."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proven Results section */}
      <section style={{
        width: '100%',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        padding: '70px 20px',
        boxSizing: 'border-box',
        marginTop: '40px',
      }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: '900',
          marginBottom: '40px',
        }}>
          <span style={{ color: '#000' }}>Proven Results: </span>
          <span style={{ color: '#008B8B' }}>Global Impact</span>
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '110px',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}>
          {[ 
            { number: "250k+", title: "Global Internships", description: "Available now and growing", color: "brown"  },
            { number: "80+", title: "Countries", description: "Offering real world experience", color: "blue" },
            { number: "95%", title: "Intern Satisfaction", description: "Developing essential career skills", color: "red" },
            { number: "1 in 3", title: "Interns Hired", description: "Post-program completion", color: "goldenrod" },
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '5.5rem', fontWeight: '900', color: item.color }}>
                {item.number}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: '400', color: '#555' }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* Real Stories Section */}
      <section style={{
        width: '100%',
        backgroundColor: '#fff',
        textAlign: 'center',
        padding: '70px 20px',
        boxSizing: 'border-box',
        marginTop: '40px',
      }}>
        <h2 style={{
          fontSize: 'clamp(4rem, 5vw, 3.5rem)',
          fontWeight: '1000',
          marginBottom: '30px',
          color: '#3fa891ff',
        }}>
          Real Stories. Real Impact
        </h2>
        <p style={{
          fontSize: '1.8rem',
          fontWeight: '400',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#555',
          lineHeight: '1.7',
        }}>
          Success stories from companies, educators, and interns who have benefitted from our program.
          Join our global network of alumni who have landed prestigious jobs worldwide.
        </p>
      </section>


      {/* Video Cards Section */}
      <section style={{
        width: "100%",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
        padding: "50px 20px",
        boxSizing: "border-box",
        marginTop: "50px",
      }}>
        <h2 style={{
          fontSize: "clamp(3rem, 5vw, 4rem)",
          fontWeight: "900",
          marginBottom: "30px",
          color: "#333",
        }}>
          Watch Our Stories
        </h2>
        <div ref={scrollRef} style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px 20px",
          scrollBehavior: "smooth",
        }}>
          {videos.map((video, index) => (
            <div key={index} style={{
              minWidth: "350px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              flexShrink: 0,
              height: "420px",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
              <YouTube videoId={video.id} opts={{ width: "100%", height: "250" }} />
              <h3 style={{
                fontSize: "1.3rem",
                marginTop: "15px",
                color: "cyan",
                fontWeight: "700",
              }}>{video.title}</h3>
              <p style={{
                fontSize: "1rem",
                marginTop: "5px",
                color: "#555",
                lineHeight: "1.4",
                textAlign: 'center',
              }}>{video.description}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}>
          {videos.map((_, index) => (
            <div key={index} style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: scrollPos * videos.length >= index && scrollPos * videos.length < index + 1 ? "#00ccff" : "#ccc",
              transition: "background-color 0.3s ease",
            }} />
          ))}
        </div>
      </section>

      {/* Media Cards Section */}
     {/* Media Cards Section with Drag to Scroll */}
<section style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#186a75ff' }}>
  <h2 style={{ fontSize: '2.5rem', color: '#e6eff1ff', marginBottom: '30px' }}>
    Trusted by Educators and Employers Worldwide
  </h2>
  <p style={{ fontSize: '1.2rem', color: '#ebddddff', marginBottom: '20px' }}>
    We connect educators and employers worldwide to provide ambitious interns with access to guaranteed remote internships. Our educational partners enable their students to boost their employability, whilst employers gain access to top-tier talent eager to contribute to their business to gain experience.
  </p>
  <div 
    ref={mediaRef} 
    style={{ 
      overflow: 'hidden', // hide scrollbar
      display: 'flex', 
      gap: '60px', 
      padding: '20px 0', 
      cursor: 'grab', 
    }}
  >
    {mediaCards.map((card, index) => (
      <div key={index} style={{
        minWidth: '400px',
        minHeight: '300px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
      }}>
        <img src={card.image} alt={card.title} style={{
          maxWidth: '300px',
          maxHeight: '300px',
          objectFit: 'contain'
          
        }} />
      </div>
    ))}
  </div>
</section>


     {/* Final CTA Section with Image - Corrected Version */}
<section style={{
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#c7d4d8ff",
  padding: "50px 10px",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",
  minHeight: "100vh",
}}>
  {/* Left side */}
  <div style={{
    width: '60%',
    maxWidth: '900px',
    textAlign: 'left',
    padding: "20px",
  }}>
    <h2 style={{
      fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
      fontWeight: "900",
      color: "#004466",
      marginBottom: "40px",
    }}>
      The only platform that <br />
      <strong style={{ color: '#008B8B' }}>guarantees</strong> real-world work <br />
      experience across the globe
    </h2>
    <p style={{
      fontSize: "1.8rem",
      color: "#070606ff",
      marginBottom: "40px",
    }}>
      Shaping tomorrow’s workforce: one internship at a time
    </p>
    <div style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    }}>
      <button style={{
        padding: "12px 25px",
        fontSize: "1.8rem",
        fontWeight: "700",
        backgroundColor: "#dd8d16ff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>Company: Hire</button>
      <button style={{
        padding: "12px 25px",
        fontSize: "1.8rem",
        fontWeight: "700",
        backgroundColor: "#dfdad6ff",
        color: "#1f1b1bff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>Educators: Partner</button>
      <button style={{
        padding: "12px 25px",
        fontSize: "1.8rem",
        fontWeight: "700",
        backgroundColor: "#2b9486ff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>Interns: Apply</button>
    </div>
  </div>

  {/* Right side */}
  <div style={{
    width: '35%',
    height: '100vh',
    position: 'relative',
    overflow: 'visible',
  }}>
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
    <div style={{
      position: 'absolute',
      bottom: '0',
      right: '0',
      width: '88%',
      height: '97%',
      zIndex: 1,
    }}>
      <img src="/image.png" alt="Girl studying" style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }} />
    </div>
  </div>
</section>

    </div>
  );
}
