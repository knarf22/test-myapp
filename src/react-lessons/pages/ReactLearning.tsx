import { useState } from "react"
import CounterUseState from "../CounterUseState"
import TypeProp, { type TypePropInterface } from "../TypeProp"
import FetchData from "../FetchData"

const ReactLearning = () => {

  const user: TypePropInterface = {
    name: "frank",
    age: 27,
    message: "nice one idol",
    isLogin: true
  }

  const [counter, setCounter] = useState(0);

  return (
    <>
      <TypeProp
        {...user}
      />
      <hr />
      <CounterUseState
        count={counter}
        increment={() => setCounter(prev => prev + 1)}
        descrement={() => setCounter(prev => prev - 1)}
      />
      <FetchData />
    </>
  )
}

export default ReactLearning
