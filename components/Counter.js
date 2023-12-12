"use client"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>hai cliccato {count} volte</p>
            <button onClick={() => setCount(count+1)}>Cliccami</button>
        </div>
    )
}

export default Counter