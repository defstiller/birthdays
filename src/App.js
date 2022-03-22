import React, {useState} from 'react'
import './App.css';

function App() {

  let birthdays = [{
    name: "Bertie Yates",
    age: 29,
    imgUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    id: 1
  },
  {
    name: "Hester Hagan",
    age: 32,
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    id: 2
  },]
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
  return (
    <div className="App">
      <main>
        <h1>number birthdays today</h1>
        {
          currentBd.map(birthday => {
            const {name, age, imgUrl, id} = birthday
            return <div className="birthdayPerson" key={id}>
              <img src={imgUrl} alt={`${name}'s portrait`}/>
              <div>
              <h1>{name}</h1>
              <h4>{age}</h4>
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
