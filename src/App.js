import './App.css';
import Easy from './components/veryEasy.js';
import EasyMedium from './components/easyMedium.js';
import Hard from './components/Hard.js';

const people = [
  {
    name: "John",
    age: 25,
    occupation: "Engineer"
  },
  {
    name: "Emily",
    age: 32,
    occupation: "Teacher"
  },
  {
    name: "Michael",
    age: 40,
    occupation: "Lawyer"
  },
  {
    name: "Sarah",
    age: 28,
    occupation: "Doctor"
  },
  {
    name: "David",
    age: 37,
    occupation: "Architect"
  }
];

function App() {
  return (
    <div className="App">
      <h1 className='title'>Very Easy</h1>
      <Easy/>
      <h1 className='title'>Easy/Medium</h1>
      <EasyMedium name='juan' age='23' occupation='Coding apprentice'/>
      <h1 className='title'>Hard</h1>
      <Hard people={people}/>
    </div>
  );
}

export default App;
