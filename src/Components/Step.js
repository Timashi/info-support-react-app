const Step = ({text, num,title,element}) => {
  return (
    <div class="steps__card">
    <div class="steps__card-number">{num}</div>
    <h3 class="steps__card-title">{title}</h3>
    <p class="steps__card-description">
    {text}
    </p>
    {element}
</div>
  )
}

export default Step