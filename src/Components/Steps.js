import Step from "./Step"
const Steps = () => {
  return (
    <section class="steps section container">
    <div class="steps__bg">
        <h2 class="section__title-center steps__title">
            Steps to start using <br/>Info support up
        </h2>

        <div class="steps__container grid">
            <Step text="Get the app by click GET APP button and open it " title="Get the app" num="01" 
            element={<div className="buttonDev"><a href="#about" class="buttonstep">Get App</a></div>} />
            <Step text="you need to login/sign up to start the service " title="signup/signin" num="02"
            element={<div className="buttonDev">
              <a href="#about" class="buttonstep2">log in</a>
              <a href="#about" class="buttonstep">sign up </a>
            </div>} />
            <Step text="By clicking the contact button the app will conect you with a technician" title="Click contact" num="03"  />
            <Step text="explain you problem to the technicain using the chat or starting a call, and
The technician will offer for you the solution " title="Get the solution" num="04"  />


        </div>
    </div>
</section>
  )
}

export default Steps