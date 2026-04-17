import './RecentBookings.css';

const bookings = [
  { img: 'https://i.pravatar.cc/200?img=10', name: 'Ramnath Dubey', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=11', name: 'Ramnath Dubey', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=12', name: 'Ramnath Dubey', service: 'Ramleela' },
  { img: 'https://i.pravatar.cc/200?img=13', name: 'Suresh Sharma', service: 'Bhagwat Katha' },
  { img: 'https://i.pravatar.cc/200?img=14', name: 'Vikram Singh', service: 'Rudrabhishek' },
  { img: 'https://i.pravatar.cc/200?img=15', name: 'Vaibhav Gupta', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=16', name: 'Rajesh Kumar', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=17', name: 'Ankit Patel', service: 'Ramleela' },
];

const duplicateBookings = [
  { img: 'https://i.pravatar.cc/200?img=10', name: 'Rishabh Nigam', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=11', name: 'Ankit Dubey', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=12', name: 'Viku Bajpai', service: 'Ramleela' },
  { img: 'https://i.pravatar.cc/200?img=13', name: 'Ankit Sharma', service: 'Bhagwat Katha' },
  { img: 'https://i.pravatar.cc/200?img=14', name: 'Vikram Singh', service: 'Rudrabhishek' },
  { img: 'https://i.pravatar.cc/200?img=15', name: 'Anjali Gupta', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=16', name: 'Vikalp Bajpai', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=17', name: 'Priya Patel', service: 'Ramleela' },
];

const scrollItems = [...bookings, ...duplicateBookings];

function RecentBookings() {
  return (
    <section className="orders">
      <h2>Recent Bookings</h2>
      <div className="artist-container orders-container">
        <div className="scroll-wrapper orders-scroll">
          {scrollItems.map((item, index) => (
            <div className="artist-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentBookings;
