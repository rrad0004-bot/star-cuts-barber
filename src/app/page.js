import Hero from '@/components/Hero/Hero';
import ServicesPreview from '@/components/Services/ServicesPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      
      {/* About CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="title" style={{ color: 'white' }}>Ready for a Sharp New Look?</h2>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Experience the best grooming service in Taylors Hill. We cater to all styles and ages.
          </p>
          <Link href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}>
            Book Your Seat Now
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 className="title">Visit Us</h2>
              <p className="subtitle">Conveniently located in the heart of Taylors Hill.</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Address</h4>
                <p>Shop 3A/2-14 Calder Park Dr,<br />Taylors Hill VIC 3037</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Contact</h4>
                <p>Email: hello@starcutsbarber.com.au</p>
                <p>Phone: (03) 1234 5678</p>
              </div>
            </div>
            <div style={{ backgroundColor: '#eee', height: '400px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#888' }}>[ Interactive Map Placeholder ]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
