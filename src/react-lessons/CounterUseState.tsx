
interface Counter {
    // setCount: () => void;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    count: number;
}


const CounterUseState = (props: Counter) => {
    return (
        <>
            <h1>The count is {props.count}</h1>
            <button

                className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
                onClick={() => props.setCount(prev=>prev + 1)}>
                Count me in
            </button>
        </>
    )
}

export default CounterUseState
