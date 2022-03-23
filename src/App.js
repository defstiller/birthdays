import React, {useState} from 'react'
import './App.css';

function App() {

  let birthdays = []
  const [currentBd, setCurrentBd] = useState(birthdays)

  function handleFormSubmit(e) {
    e.preventDefault()
    const formName = document.getElementById("formName").value
    const formLink = document.getElementById("formLink").value
    const formAge = document.getElementById("formAge").value
    const personLenght = currentBd.length + 1
    const newPerson = {
      name: formName,
      age: formAge,
      imgUrl: formLink,
      id: personLenght
    }
    console.log(formName)
    setCurrentBd([...currentBd, newPerson])  
  }
  function handleBirthdayDelete(id) {
    setCurrentBd(currentBd.filter(birthday => birthday.id !== id))
  }
  return (
    <div className="App">
      <main>
        <h1>{currentBd.length} birthdays today</h1>
        {
          currentBd.map(birthday => {
            const {name, age, imgUrl, id} = birthday
            return <div className="birthdayPerson" key={id}>
              <img src={imgUrl} alt={`${name}'s portrait`}/>
              <div>
              <h1>{name}</h1>
              <h4>{age}</h4>
              <button onClick={() => handleBirthdayDelete(id)}>remove</button>
              </div>
            </div>
          })
        }
        <form id='newForm'>
          <input type="text" id="formName"></input>
          <input type="text" id="formLink"></input>
          <input type="text" id="formAge"></input>
          <input type="submit" onClick={(e) => handleFormSubmit(e)}></input>
        </form>
      </main>
    </div>
  );
}

export default App;
