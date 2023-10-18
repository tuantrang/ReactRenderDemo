import React,{useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    console.log("UseState Render")
  return (
    <div>
      <button onClick={() => setCount(count=> count + 1)}>Count  - {count}</button>
      <button onClick={() => setCount(0)}>Set Count 0</button>
      <button onClick={() => setCount(5)}>Set Count 5</button>
    </div>
  )
}

export default UseState

 /*
Re-render scenario
Render phase and Commit Phase

Render Phase -
1.  Find all elements flagged for update
2.  For each flagged component, convert JSX to React element and store the result
3.  Perform reconciliation - Diff old and new tree of React elements (a.k.a Virtual DOM)
4.  Hand over the changes to the next phase.

Commit Phase -
1.  Apply changes to the DOM


useState and Render
The setter function from a useState hook will cause the component to re-render.
The exception is when you update a State Hook to the same value as the current state
Same value after the initial render?  The component will not re-render
Same value after re-renders?  React will render that specific component one more time and then bails out from any subsequent renders.
 */