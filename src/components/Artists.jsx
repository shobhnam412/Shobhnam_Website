import './Artists.css';

const artists = [
  { img: 'src/images/Ramleela.png', name: 'Ram Narayan Mishra', service: 'Ramleela' },
  { img: 'src/images/Sunderkand.jpeg', name: 'Pandit Anil Bajpai', service: 'Sunderkand' },
  { img: 'src/images/bhagwat.jpeg', name: 'Pandit Anil Dubey', service: 'Bhagwat Katha' },
  { img: 'src/images/Bhajan.png', name: 'Pandit Malay Pandey', service: 'Bhajan Sandhya' },
  { img: 'src/images/Rudrabhishek copy.jpeg', name: 'Pandit Rajan Bajpai', service: 'Rudrabhishek' },
  { img: 'src/images/bhagwat.jpeg', name: 'Pandit Rishabh', service: 'Bhagwat Katha' },
  { img: 'src/images/Sunderkand.jpeg', name: 'Pandit Anil Bajpai', service: 'Sunderkand' },
  { img: 'src/images/Ramleela.png', name: 'Pandit Ram Narayan Mishra', service: 'Ramleela' },
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
