import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <h1>Algorithm Visualizer</h1>
      <p>Select an algorithm below to visualize how it works step-by-step:</p>

      <div className="sorting_name_box">  
        <Link to="/bubble-sort" className="algo-card">
        <div className="card-body">
          <div className="card-image-box">
            <img 
              src="/floating-soap-bubbles-in-various-sizes-isolated-on-white-free-png.webp"
              className="card-img">
           </img>
           </div>
          <h2 className = "name"> Bubble Sort</h2>
          <p className = "subtitle"> mmm bubbles</p> 
          </div>
        </Link>
        </div>
        
        {/* other sorts */}
    </div>
    
  );
}

export default Home;