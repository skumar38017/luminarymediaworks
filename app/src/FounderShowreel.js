import React from 'react';

const FounderShowreel = () => {
  const styles = {
    founderPage: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0B0B1E, #000000)',
      color: 'white',
      padding: '2rem',
    },

    founderSection: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '4rem',
      animation: 'fadeIn 0.8s ease-out forwards',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
      },
    },

    founderImageContainer: {
      flex: 1,
      position: 'relative',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom right, #2a2a2a, #1a1a1a)',
    },

    founderImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    founderContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      paddingTop: '2rem',
      position: 'relative',
    },

    founderLabel: {
      display: 'block',
      fontSize: '1.125rem',
      color: '#ffffff',
      marginBottom: '0.75rem',
      fontWeight: '300',
    },

    founderName: {
      fontSize: '4.5rem',
      fontWeight: '800',
      margin: 0,
      letterSpacing: '2px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
      },
    },

    founderRoles: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '1.25rem',
      color: '#ffffff',
      letterSpacing: '1px',
      lineHeight: '1.2',
      gap: '0.5rem',
    },

    roleText: {
      margin: 0,
      fontWeight: '500',
    },

    contentWrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginTop: '2rem',
    },

    leftContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '60%',
        position: 'relative',
        paddingLeft: '2.5rem', // Added to accommodate vertical line and margin
      },

      verticalLine: {
        width: '3px',
        height: '100%',
        background: '#2f7bf5',
        borderRadius: '4px',
        position: 'absolute',
        left: 0,  // Changed from -2rem to 0
        top: '0',
        marginRight: '8px', // Added margin-right
      },

    companyDescription: {
      fontSize: '1.125rem',
      color: '#ffffff',
      lineHeight: '1.6',
      opacity: '0.9',
      marginBottom: '1.5rem',
    },

    connectButton: {
      alignSelf: 'flex-start',
      background: 'transparent',
      color: 'white',
      padding: '0.75rem 2rem',
      border: '1.5px solid rgba(255,255,255,0.3)',
      borderRadius: '4px',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(255,255,255,0.5)',
      },
    },

    experienceCounter: {
      textAlign: 'right',
    },

    years: {
      fontSize: '5rem',
      fontWeight: '700',
      lineHeight: '1',
      background: 'linear-gradient(45deg, #fff, #a0a0a0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },

    experienceText: {
      fontSize: '1rem',
      color: '#ffffff',
      opacity: '0.8',
      marginTop: '0.5rem',
      textAlign: 'right',
    },

    showreelSection: {
      marginTop: '8rem',
      animation: 'fadeIn 0.8s ease-out forwards',
    },

    showreelTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '3rem',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },

    showreelGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },

    showreelCard: {
      background: 'rgba(40, 40, 40, 0.3)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.02)',
      },
    },

    showreelImage: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
    },
  };

  const keyframes = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div style={styles.founderPage}>
      <div style={styles.founderSection}>
        <div style={styles.founderImageContainer}>
          <img
            src="/api/placeholder/800/600"
            alt="Founder with camera equipment"
            style={styles.founderImage}
          />
        </div>

        <div style={styles.founderContent}>
          <div>
            <span style={styles.founderLabel}>Meet our Founder,</span>
            <h2 style={styles.founderName}>SHREERAJ KUMBHAR</h2>
          </div>

          <div style={styles.founderRoles}>
            <p style={styles.roleText}>DOP || CINEMATOGRAPHER || EDITOR || AI ARTIST</p>
            <p style={styles.roleText}>PROJECTION MAPPING ARTIST</p>
            <p style={styles.roleText}>LIVE STREAMING ENGINEER</p>
            <p style={styles.roleText}>360 VR PRODUCTIONS || AERIALS CINEMATOGRAPHER</p>
            <p style={styles.roleText}>MOTION GRAPHICS DESIGNER || CREATIVE GENERALIST</p>
            <p style={styles.roleText}>TECH ENTHUSIAST</p>
          </div>

          <div style={styles.contentWrapper}>
            <div style={styles.leftContent}>
              <div style={styles.verticalLine}></div>
              <div style={styles.companyDescription}>
                At Luminary Media Works, we specialize in cutting-edge
                visual storytelling, combining advanced technology with
              </div>
              <button style={styles.connectButton}>
                Let's connect
              </button>
            </div>

            <div style={styles.experienceCounter}>
              <div style={styles.years}>07+</div>
              <div style={styles.experienceText}>
                Year's<br />Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.showreelSection}>
        <h2 style={styles.showreelTitle}>WORK SHOWREEL</h2>
        
        <div style={styles.showreelGrid}>
          <div style={styles.showreelCard}>
            <img
              src="/api/placeholder/600/400"
              alt="Behind the scenes shot 1"
              style={styles.showreelImage}
            />
          </div>
          
          <div style={styles.showreelCard}>
            <img
              src="/api/placeholder/600/400"
              alt="Behind the scenes shot 2"
              style={styles.showreelImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderShowreel;