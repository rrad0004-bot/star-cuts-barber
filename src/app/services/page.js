export const metadata = {
  title: "Our Services | Star Cuts Barber Shop",
  description: "View our full list of barbering services including precision haircuts, beard grooming, and kids cuts.",
};

const ServicesPage = () => {
  const serviceCategories = [
    {
      name: "Haircuts",
      items: [
        { name: "Precision Haircut", price: "$35", description: "Standard cut including consultation, wash, and style." },
        { name: "Zero Fade", price: "$40", description: "Expert blending from skin to desired length." },
        { name: "Buzz Cut", price: "$25", description: "Single length clipper cut all over." },
        { name: "Senior Haircut", price: "$28", description: "Discounted rate for our senior gentleman." }
      ]
    },
    {
      name: "Kids",
      items: [
        { name: "Kids Haircut (Under 12)", price: "$25", description: "Patient and friendly service for the little ones." },
        { name: "School Student", price: "$30", description: "Sharp styles for students." }
      ]
    },
    {
      name: "Beard & Shaves",
      items: [
        { name: "Beard Trim & Shape", price: "$20", description: "Clippers and line-up for a sharp beard." },
        { name: "Hot Towel Shave", price: "$45", description: "The ultimate traditional straight razor shave experience." },
        { name: "The Works", price: "$75", description: "Haircut and Hot Towel Shave combo." }
      ]
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Our Services</h1>
        <p className="subtitle">High-quality grooming tailored to your style.</p>
        
        <div style={{ marginTop: '4rem' }}>
          {serviceCategories.map((category, idx) => (
            <div key={idx} style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--foreground-color)', display: 'inline-block' }}>
                {category.name}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontSize: '1.25rem' }}>{item.name}</h3>
                      <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.price}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
