import { useState } from "react";
const Question = ({img, question, answer}) => {

    const [show,setShow] = useState(false)

function toggle() {
  setShow (pervShow => !show )
}

  return (

    <>
    
    <div className={"questions__item " + (show? 'accordion-close':'')}>

      <header className="questions__header" onClick={toggle} >
        <img className="img"src={img}></img>
        <h3 className={'questions__item-title '}>{question}</h3>
      </header>
      
{show?
<div className=" questions__content " >
 <p className="questions__description" >
        {answer}
    </p>
     
    </div>: null
    
}
       
</div> 
    </>
  )
}

export default Question