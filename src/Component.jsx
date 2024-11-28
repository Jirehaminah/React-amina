import { useContext } from "react"
import { HisName } from "./App"
function Component(){
const Name = useContext(HisName)
    return(
      <div className="rr">
        <h1>Eio this is my first react project</h1>
        <p>Umunyehirwe</p><br />
        <p>Class:{Name}</p>
        <p>&copy;A MI NA </p>
      </div>
      
    )
  }
  export default Component