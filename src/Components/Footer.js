import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"
import Img4 from "../img/logo.png"



const Footer = () => {
  return (
    <footer class="footer section">
    <div class="footer__container container grid">
        <div class="footer__content">
            <a href="#" class="footer__logo">
            <img src={Img4} class="ri-leaf-line nav__logo-icon nav_img"></img>Nfo support
            </a>

            <h3 class="footer__title">
                Subscribe to our newsletter <br/> to stay update
            </h3>

            <div class="footer__subscribe">
                <input type="email" placeholder="Enter your email" class="footer__input"/>

                <button class="button button--flex footer__button">
                    Subscribe
                    <i class="ri-arrow-right-up-line button__icon"></i>
                </button>
            </div>
        </div>

        <div class="footer__content">
            <h3 class="footer__title">Our Address</h3>

            <ul class="footer__data">
                <li class="footer__information">1234 - Address</li>
                <li class="footer__information">Address - 43210</li>
                <li class="footer__information">123-456-789</li>
            </ul>
        </div>

        <div class="footer__content">
            <h3 class="footer__title">Contact Us</h3>

            <ul class="footer__data">
                <li class="footer__information">+212600000000</li>
                
                <div class="footer__social">
                    <a href="https://www.facebook.com/" class="footer__social-link">
                        <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" class="footer__social-link">
                        <i class="ri-instagram-line"></i>
                    </a>
                    <a href="https://twitter.com/" class="footer__social-link">
                        <i class="ri-twitter-fill"></i>
                    </a>
                </div>
            </ul>
        </div>

        <div class="footer__content">
            <h3 class="footer__title">
                We accept all credit cards
            </h3>

            <div class="footer__cards">
                <img src={card1} alt="" class="footer__card"/>
                <img src={card2} alt="" class="footer__card"/>
                <img src={card3} alt="" class="footer__card"/>
                <img src={card4} alt="" class="footer__card"/>
            </div>
        </div>
    </div>

    <p class="footer__copy">&#169; Info support. All rigths reserved</p>
</footer>
  )
}

export default Footer