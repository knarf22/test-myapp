
interface Counter {
    // setCount: () => void;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    increment:  () => void;
    descrement:  () => void;
    count: number;
}


const CounterUseState = (props: Counter) => {
    return (
        <>
            <h1>The count is {props.count}</h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
                onClick={props.increment}>
                Count me in
            </button>

            <button
                className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
                onClick={props.descrement}>
                Count me out
            </button>
        </>
    )
}

export default CounterUseState
