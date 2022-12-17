import React from 'react'

const Signupcontainer = ({image,StepName,StepBody}) => {
  return (

    <article className="step__card">
        <div className="step__circle"></div>
        <img src={image} alt="" className="step__img"/>

        <h3 className="step__title">{StepName}</h3>
        <span className="step__details">{StepBody}</span>


        </article>



  )
}

export default Signupcontainer