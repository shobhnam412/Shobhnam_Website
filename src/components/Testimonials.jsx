import './Testimonials.css';

const testimonials = [
  { quote: '"Shobhnam se Ramleela booking bahut easy thi. Artists professional the aur program bahut achha hua."', name: 'Rohit Sharma', city: 'Lucknow' },
  { quote: '"Sunderkand mandali time par aayi aur poora event smoothly complete hua."', name: 'Amit Verma', city: 'Kanpur' },
  { quote: '"Bhajan Sandhya booking experience bahut achha raha. Support team bhi helpful thi."', name: 'Priya Singh', city: 'Delhi' },
  { quote: '"Rudrabhishek pandit ji bahut knowledgeable the. Pooja bahut achhe se hui."', name: 'Vikas Tiwari', city: 'Varanasi' },
  { quote: '"Bhagwat Katha ka program bahut spiritual tha. Family ko bahut pasand aaya."', name: 'Neha Gupta', city: 'Ayodhya' },
];

const scrollItems = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say (Testimonial)</h2>
      <div className="testimonial-container">
        <div className="testimonial-scroll">
          {scrollItems.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p>{item.quote}</p>
              <h4>{item.name}</h4>
              <span>{item.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
