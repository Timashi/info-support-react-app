import Img1 from "../img/number-one.png"
import Img2 from "../img/number-2.png"
import Img3 from "../img/number-3.png"
import SignupStep from "./signupStep"

const SignupSteps = () => {
  return (
    <section className="section container" id="SignupSteps">
    <h2 className="section__title-center">
    Our sign up <br/> process
    </h2>

    <p className="step__description">
    When you are new we gonna need to take some setting to setup your 
    technician generator default to choose the right technician for you.
    so make sure to set the setting correctly.
    </p>


    <div className="step__container grid"> 

<SignupStep image= {Img1} StepName="step1" StepBody="Shoose your language" />
<SignupStep image= {Img2} StepName="step2" StepBody="insert your information" />
<SignupStep image= {Img3} StepName="step3" StepBody="insert you email and create a password" />

</div>


</section>
  )
}

export default SignupSteps