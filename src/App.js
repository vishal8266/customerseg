import logo from './logo.svg';
import './App.css';
import TableauDashboard from './components/tableau';
import PlotlyDashboard from './components/plotlyDash';
import FullheightIframe from './components/clusterDashboard';


function App() {
  return (
    <div className="App">
      Hello World
    <TableauDashboard/>
    <FullheightIframe/>
        
    </div>
  );
}

export default App;
