import "./App.css";
import Button from "./components/Button";
import Count from "./components/Count";
// import Profile from "./components/Profile";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((dataResponse) => {
        setData(dataResponse)
        console.log(dataResponse);
      })
      .catch((err) => console.error(err));
  },[isClick]);


  return (
    <section className="App flex flex-col justify-center items-center">
      <Count name="Program setCounter" />
      <div>
        { isClick &&
          data.map((item, i) => 
            <li key={item.id}>
              {item.nama}
            </li>
          )
        }
      </div>
      {/* <Profile/> */}
      <Button button="Tampilkan Data dari BE" onClick={() => setIsClick((prev) => !prev)}/> 
    </section>
  );
}

export default App;
