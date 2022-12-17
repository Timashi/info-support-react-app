import image from "../img/info.png"

const Home = () => {
  return (
    <section className="home" id="home">
    <div className="home__container container grid">
        <img src={image} alt="" class="home__img"/>

        <div className="home__data">
            <h1 className="home__title">
            Online technology support <br/> makes your life easier
            </h1>
            <p className="home__description">
            Put your technology in a safe hande and fix your problems.
            </p>
            <a href="#about" className="button button--flex">
                Get App
            </a>
            <a href="#about" className="exploreBTN BTN button--flex">
                Explore <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
        </div>

        <div className="home__social">
            <span className="home__social-follow">Follow Us</span>

            <div className="home__social-links">
                <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                    <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                    <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" class="home__social-link">
                    <i className="ri-twitter-fill"></i>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home