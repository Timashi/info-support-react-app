import AboutDetails from "./AboutDetails"
import image from "../img/info3.png"

const About = () => {
  return (
    <section class="about section container" id="about">
    <div class="about__container grid">
        <img src={image}alt="" class="about__img"/>

        <div class="about__data">
            <h2 class="section__title about__title">
                Who we really are & <br/> why choose us
            </h2>

            <p class="about__description">
            Info support is an online support that allow you to conntact
             with the best profecionals technician to solve your technology problems.
            </p>

            <div class="about__details">
                <AboutDetails text= "we akways have avaible technicians." />
                <AboutDetails text= "We give you efficient guides to fix your device." />
                <AboutDetails text= "We always have the right solution for you" />
                <AboutDetails text= "100% money back guaranteed." />
            </div>

            <a href="#" class="BTN button--flex ">
                How to use <i class="ri-arrow-right-down-line button__icon"></i>
            </a>
        </div>
    </div>
</section>
  )
}

export default About