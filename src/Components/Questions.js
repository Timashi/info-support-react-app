import IMAGE1 from "../img/girl.png"
import IMAGE2 from "../img/girl1.png"
import IMAGE3 from "../img/girl2.png"
import IMAGE4 from "../img/girl3.png"
import IMAGE5 from "../img/boy.png"
import IMAGE6 from "../img/boy1.png"
import Question from "./Question"
const Questions = () => {
  return (
    <section className="questions section" id="faqs">
    <h2 className="section__title questions__title container">
        Some common questions <br/> were often asked
    </h2>
    <div className="questions__container container grid">
        <div className="questions__group">
            <Question img ={IMAGE1} 
            question="Can I make a specific technician to be always the one who helps me" 
            answer="By add the technecian to fv technecian list you can high the chance of having s/him in contact "  />
            <Question img ={IMAGE6} 
            question="Why should we trust you" 
            answer="We have a hight secured connection with the best professional technicians" />
            <Question img ={IMAGE2} 
            question="What if the technician get my problem worst" 
            answer="In every deal the technician make s/he record id to be saved so if you find any problem after the deal you can report it and our board will trsck the problem" />
        </div>
        <div className="questions__group">
            <Question img ={IMAGE5} 
            question="Is it safe to let a technician controle my device" 
            answer="We have a hight secured connection with the best professional technicians" />
            <Question img ={IMAGE3} 
            question="Can I get my money back if the solution doesn't work" 
            answer="If you find any problem after getting the service you can easelly get your mony back" />
            <Question img ={IMAGE4} 
            question="How can a technician help remotly" 
            answer="there are two forms of solution that can the technician give you, either steps to follow yourself and fix the problem or give him the access to you device to fix it himself" />
        </div>
    </div>
</section>
  )

  
}




export default Questions