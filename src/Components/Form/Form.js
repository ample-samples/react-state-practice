
function Form({ state, setState }) {
  const handleClick = (event) => {
    event.preventDefault()
    const userInput = event.target[0].value
    const newState = state.map((el) => el)
    newState.push(userInput)
    setState(newState)
    event.target.reset()
  }
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="">
        Add a to do
        <input type="text"></input>
      </label>
      <button>Add</button>
    </form>
  )
}

export default Form
