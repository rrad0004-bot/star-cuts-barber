import ContactForm from '@/components/Contact/ContactForm';

export const metadata = {
  title: "Contact Us | Star Cuts Barber Shop",
  description: "Get in touch with Star Cuts Barber Shop in Taylors Hill. Find our location, phone number, and send us an inquiry.",
};

const ContactPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Get in Touch</h1>
        <p className="subtitle">Book an appointment or ask us a question.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', marginTop: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Contact Information</h2>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Our Location</h3>
              <p>Shop 3A/2-14 Calder Park Dr,<br />Taylors Hill VIC 3037</p>
            </div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Phone</h3>
              <p>(03) 1234 5678</p>
            </div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Email</h3>
              <p>hello@starcutsbarber.com.au</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Trading Hours</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Mon - Fri</span>
                  <span>9:00am - 6:00pm</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Saturday</span>
                  <span>9:00am - 4:00pm</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Sunday</span>
                  <span style={{ fontWeight: 600 }}>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Send an Inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
