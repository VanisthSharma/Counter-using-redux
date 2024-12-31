import { useSelector } from "react-redux";
import Control from "./Comps/control";
export default function App() {
  const countVal = useSelector((store) => store.count);
  return (
    <center>
      <h1>Counter</h1>
      <h2>Counts are : {countVal}</h2>
      <Control />
    </center>
  );
}
