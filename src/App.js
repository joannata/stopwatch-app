import { useEffect, useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Button";


const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    let stopwatch = null;

    if(start) {
      stopwatch = setInterval(() => {
        setTime(preValue => preValue + 1)
      }, 1)
    }

    return() => {
      if(stopwatch) clearInterval(stopwatch)
    };
  }, [start]);


  return (
    <div>
        <FormattedTime time={time} />
        <Button setTime={setTime} setStart={setStart}></Button>
    </div>
  );
}

export default App;
