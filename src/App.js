import './App.css';
import Quote from './components/Quotes';
import QuotesData from './components/QuotesData';


function App() {
  return (
    <div className="App">
      <Quote data = {QuotesData} />
    </div>
  );
}

export default App;
