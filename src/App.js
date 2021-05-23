import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//            testEdit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//       >
//      Learn React
//        </a>
//      </header>
//    </div>
// );
//}
const App = () => {
    const profiles = [
        { name: "Taro", age: 10 },
        { name: "Hanako", age: 5 },
    ]
    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>Hi, I am {props.name}! and {props.age} years old! </div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
