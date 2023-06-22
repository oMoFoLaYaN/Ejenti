

const Hero = () => {
  return (
    <section className="home section" id="home">
  <div className="home__container container grid">
    <div className="home__data">
      <h1 className="home__title">
        Discover <br /> Most Suitable <br /> Property
      </h1>
      <p className="home__description">
        Find a variety of properties that suit you very easily, forget all
        difficulties in finding a residence for you
      </p>
      <form action="" className="home__search">
        <i className="bx bxs-map" />
        <input
          type="search"
          placeholder="Search by location..."
          className="home__search-input"
        />
        <button className="button" type="button">
          Search
        </button>
      </form>
      <div className="home__value">
        <div>
          <h1 className="home__value-number">
            9K <span>+</span>
          </h1>
          <span className="home__value-description">
            Premium <br /> Product
          </span>
        </div>
        <div>
          <h1 className="home__value-number">
            2K <span>+</span>
          </h1>
          <span className="home__value-description">
            Happy <br /> Customer
          </span>
        </div>
        <div>
          <h1 className="home__value-number">
            28K <span>+</span>
          </h1>
          <span className="home__value-description">
            Awards <br /> Winning
          </span>
        </div>
      </div>
    </div>
    <div className="home__images">
      <div className="home__orbe" />
      <div className="home__img">
        <img src="assets/img/home.jpg" alt="" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero