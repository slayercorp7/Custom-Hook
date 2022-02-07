import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [counter, setcounter] = useState(initialState);

    const increment = () =>{
        setcounter(counter + 1);
    }
    const decrement = () =>{
        setcounter(counter - 1);
    }
    const reset = () => {
        setcounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}

 