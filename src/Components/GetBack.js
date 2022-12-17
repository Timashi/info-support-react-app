import { getBack, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

const GetBack = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser) 
    const getback =(e) => {
       dispatch(getBack())
    }
  return (
    <div className="container section getbacksection">
      <span></span>
        <h1>Thank you <span className="user">{user.name}</span>. We will send you an answer as soon as posible</h1>
        <button className="button" onClick={(e) => getback(e)}>Get back</button>
        </div>
  )
}

export default GetBack