import { useState } from "react"
import CounterUseState from "../react-lessons/CounterUseState"
import TypeProp, { type TypePropInterface } from "../react-lessons/TypeProp"
import FetchData from "../react-lessons/FetchData"

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
