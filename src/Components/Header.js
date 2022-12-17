import Img4 from "../img/logo.png"
const Header = ({switchTheme}) => {
    const click = () => {
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}




  return (
    <header class="header" id="header" >

    <nav class="nav container">
        <a href="#" class="nav__logo">
            {/* <i class="ri-leaf-line nav__logo-icon"></i> Plantex */}
            <img src={Img4} class="ri-leaf-line nav__logo-icon nav_img"></img>Nfo support
        </a>

        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="#home" class="nav__link active-link">Home</a>
                </li>
                <li class="nav__item">
                    <a href="#about" class="nav__link">About</a>
                </li>
                <li class="nav__item">
                    <a href="#SignupSteps" class="nav__link">new</a>
                </li>
                <li class="nav__item">
                    <a href="#faqs" class="nav__link">FAQs</a>
                </li>
                <li class="nav__item">
                    <a href="#contact" class="nav__link">Contact Us</a>
                </li>
            </ul>

            <div class="nav__close" id="nav-close">
                <i class="ri-close-line"></i>
            </div>
        </div>

        <div class="nav__btns">

            <i class="ri-moon-line change-theme" id="theme-button" onClick={switchTheme}></i>

            <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-line" onClick={click}></i>
            </div>
        </div>
    </nav>
</header>

  )
}

export default Header
