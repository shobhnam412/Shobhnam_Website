import './Artists.css';

const artists = [
  { img: '/images/artist1.png', name: 'Ramnath Dubey', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=5', name: 'Ramnath Dubey', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=7', name: 'Ramnath Dubey', service: 'Ramleela' },
  { img: 'https://i.pravatar.cc/200?img=8', name: 'Suresh Sharma', service: 'Bhagwat Katha' },
  { img: 'https://i.pravatar.cc/200?img=9', name: 'Vikram Singh', service: 'Rudrabhishek' },
  { img: 'https://i.pravatar.cc/200?img=10', name: 'Anjali Gupta', service: 'Bhajan Sandhya' },
  { img: 'https://i.pravatar.cc/200?img=11', name: 'Rajesh Kumar', service: 'Sunderkand' },
  { img: 'https://i.pravatar.cc/200?img=12', name: 'Priya Patel', service: 'Ramleela' },
];

const scrollItems = [...artists, ...artists];

function Artists() {
  return (
    <section className="artists">
      <h2>Featured Artists</h2>
      <div className="artist-container">
        <div className="scroll-wrapper">
          {scrollItems.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.img} alt={artist.name} />
              <h4>{artist.name}</h4>
              <p>{artist.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
