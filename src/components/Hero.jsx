import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>
        <span className="raised-text1">India's First Artist Booking Platform</span>
      </h1>

      <p>
        Book Ramleela, Sunderkand, Bhajan Sandhya, Bhagwat Katha
        and many cultural programs easily.
      </p>

      <div className="hero-description">
        <p>
          Shobhnam ek spiritual artist booking platform hai jahan se aap Ramleela,
          Sunderkand, Bhajan Sandhya, Bhagwat Katha aur Rudrabhishek jaise
          dharmik aur sanskritik programs ke liye professional artists aur pandit
          easily book kar sakte hain.
        </p>

        <p>
          Agar aap apne ghar, mandir, society, ya kisi event me Ramleela karvana
          chahte hain to hum aapko complete Ramleela team provide karte hain.
          Sunderkand paath ke liye trained mandali available hai.
          Bhajan Sandhya aur Bhagwat Katha ke liye experienced artists aur
          kathavachak provide kiye jate hain.
        </p>

        <p>
          Rudrabhishek aur anya pooja paath ke liye aap humse directly contact
          kar sakte hain. Hum aapko trusted pandit aur artist provide karte hain
          jo aapke event ko spiritual aur memorable banate hain.
        </p>

        <p className="download-line">
          Apne event ki booking karne ke liye hamare app ko download kare aur
          easily artist book kare.
        </p>
      </div>
    </section>
  );
}

export default Hero;
