import React from 'react';
import faker from 'faker';
import './App.css';

function App() {

  const [value, setValue] = React.useState(1000);
  const [sTime, setSTime] = React.useState();
  const [eTime, setETime] = React.useState();

  const createRecord = () => ({
    firstName: faker.name.firstName(),
    city: faker.address.city()
  });
  const [record, setRecord] = React.useState([]);
  const SettingRecord = () => {

    var tempDate = new Date();
    setSTime(tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds());
    setRecord(Array.from({ length: value }, createRecord));
    tempDate = new Date();
    setETime(tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds());

  };
  React.useEffect(() => {
    localStorage.setItem('Records', JSON.stringify(record));
  }, [record]);

  return (
    <div>
      <h1> React with Local Storage!</h1>
      <select id="records" value={value} onChange={e => setValue(e.currentTarget.value)}>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="3000">3000</option>
        <option value="4000">4000</option>
        <option value="5000">5000</option>
        <option value="6000">6000</option>
        <option value="7000">7000</option>
        <option value="8000">8000</option>
        <option value="9000">9000</option>
        <option value="10000">10000</option>
      </select>
      <button onClick={SettingRecord}>Insert Record</button>
      <br></br>
      <p>{sTime}</p>
      <p>{eTime}</p>
    </div>
  );
}

export default App;
