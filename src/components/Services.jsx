import './Services.css';

const services = [
  { id: 'ramleela-service', name: 'Ramleela' },
  { id: 'sunderkand-service', name: 'Sunderkand' },
  { id: 'bhajan-service', name: 'Bhajan Sandhya' },
  { id: 'bhagwat-service', name: 'Bhagwat Katha' },
  { id: 'rudrabhishek-service', name: 'Rudrabhishek' },
  { id: 'other-service', name: 'Other Services' },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service) => (
          <div className="service" id={service.id} key={service.id}>
            {service.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
