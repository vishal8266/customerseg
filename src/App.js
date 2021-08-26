import logo from './logo.svg';
import './App.css';
import TableauDashboard from './components/tableau';
import PlotlyDashboard from './components/plotlyDash';


function App() {
  return (
    <div className="App">
      Hello World
    <TableauDashboard/>
    <PlotlyDashboard/>
        
    </div>
  );
}

export default App;
