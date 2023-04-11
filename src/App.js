import { useState } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import AddForm from "./Input/AddForm";

function App() {
  const [userData, setUserData] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const submissionHandler = (data) => {
    const newData = { ...data };
    console.log(data);
    const total = userData.length;
    newData.id = total + 1;
    setUserData([...userData, newData]);
    setShowCard(false);
  };

  const handleButtonClick = () => {
    setShowCard(!showCard);
  };

  const deletetionHandler = (id) => {
    console.log(id);
    userData.splice(id-1, 1);
    setUserData([...userData]);
  }; 

  return (
    <div className="app">
      <Navbar
        submissionHandler={submissionHandler}
        handleButtonClick={handleButtonClick}
      />
      {showCard && <AddForm submissionHandler={submissionHandler}/>}
      <Card
        userData={userData}
        deletetionHandler={deletetionHandler}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
