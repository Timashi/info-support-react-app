import GetBack from "./Components/GetBack";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import useLocalStorage from "use-local-storage";

import { useSelector } from "react-redux";
import { selectUser } from "./feature/userSlice";


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const user = useSelector(selectUser)
  
  return (
    <div className="app" data-theme={theme} >
{user ? 
  <GetBack />
: <><Header switchTheme={switchTheme} /><Main /><Footer /></> }
</div>
  );
}

export default App;
