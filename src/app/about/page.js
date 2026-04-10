export const metadata = {
  title: "About Us | Star Cuts Barber Shop",
  description: "Learn more about the story and vibe of Star Cuts Barber Shop in Taylors Hill.",
};

const AboutPage = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="title">Our Story</h1>
          <p className="subtitle">Established with a passion for classic barbering and modern style.</p>
          
          <div style={{ margin: '3rem 0' }}>
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200" 
              alt="Barber Shop Interior" 
              style={{ borderRadius: '8px', marginBottom: '2rem' }}
            />
            <h2 style={{ marginBottom: '1.5rem' }}>Traditional Service, Modern Vibe</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At Star Cuts Barber Shop, we believe that a haircut is more than just a trim—it's an experience. 
              Located in the heart of Taylors Hill, our shop was built on the foundation of providing high-quality, 
              consistent grooming services in a welcoming and friendly environment.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Whether you're looking for a sharp fade, a classic gentleman's cut, or a patient environment for 
              your child's first haircut, our experienced team is here to help. We take pride in our attention 
              to detail and our commitment to our local community.
            </p>
            
            <h2 style={{ margin: '3rem 0 1.5rem' }}>Why Choose Star Cuts?</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Experienced Barbers</h3>
                <p style={{ color: 'var(--text-muted)' }}>Our team has years of experience in all styles of barbering, from classic to contemporary.</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Family Friendly</h3>
                <p style={{ color: 'var(--text-muted)' }}>We've created a welcoming space where both men and kids feel comfortable and relaxed.</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Products</h3>
                <p style={{ color: 'var(--text-muted)' }}>We use only the best grooming products to ensure your hair and skin get the treatment they deserve.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
