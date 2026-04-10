import FAQAccordion from '@/components/FAQ/FAQAccordion';

export const metadata = {
  title: "FAQ | Star Cuts Barber Shop",
  description: "Frequently asked questions about Star Cuts Barber Shop in Taylors Hill. Learn about appointments, walk-ins, and services.",
};

const FAQPage = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="title">Frequently Asked Questions</h1>
          <p className="subtitle">Everything you need to know about our services and policies.</p>
        </div>
        
        <FAQAccordion />
        
        <div style={{ marginTop: '5rem', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '3rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Still have questions?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            We're here to help! Feel free to give us a call or send us a message through our contact page.
          </p>
          <a href="/contact" className="btn">Contact Us Today</a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
