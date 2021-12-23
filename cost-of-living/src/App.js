import Header from './components/Header'
import SearchBar from './components/SearchBar'
import People from './data.json'

function App() {

  return (
    <div className="container">
      <Header/>
      <SearchBar placeholder = "Enter a city name.." data = {People} />
    </div>
  );
}

export default App;
