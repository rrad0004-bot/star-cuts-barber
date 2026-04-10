import Hero from '@/components/Hero/Hero';
import ServicesPreview from '@/components/Services/ServicesPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* SERVICES */}
      <ServicesPreview />

      {/* STRONG CALL TO ACTION */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--secondary-color)',
          color: 'white',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="title" style={{ color: 'white' }}>
            Fresh Cuts. Clean Fades. No Waiting Around.
          </h2>

          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Walk into Star Cuts Barber Shop for professional haircuts, beard grooming, and kids cuts in Taylors Hill.
          </p>

          <div className="ctaButtons">
            <Link
              href="/contact"
              className="btn"
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
              }}
            >
              Book Appointment
            </Link>

            <a
              href="tel:+61312345678"
              className="btn"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid white',
                color: 'white',
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="section">
        <div className="container">
          <div className="locationGrid">

            {/* TEXT */}
            <div>
              <h2 className="title">Visit Star Cuts Barber Shop</h2>
              <p className="subtitle">
                Your local barber in Taylors Hill – clean cuts, friendly service, and walk-ins welcome.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Address</h4>
                <p>
                  Shop 3A/2-14 Calder Park Dr,
                  <br />
                  Taylors Hill VIC 3037
                </p>
              </div>

              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Contact</h4>
                <p>Email: hello@starcutsbarber.com.au</p>
                <p>Phone: (03) 1234 5678</p>
              </div>
            </div>

            {/* MAP CARD (OPTION 2 FIXED) */}
            <a
              href="https://www.google.com/maps/place/Star+Cuts+Barber+Shop"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  height: '400px',
                  borderRadius: '12px',
                  backgroundImage:
                    "url('https://maps.googleapis.com/maps/api/staticmap?center=Taylors+Hill+VIC+3037&zoom=14&size=800x400&maptype=roadmap')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  backgroundColor: '#ddd',
                }}
              >
                📍 Open in Google Maps
              </div>
            </a>

          </div>
        </div>
      </section>
    </>
  );
}