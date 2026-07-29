import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <h1>Algorithm Visualizer</h1>
      <p>Select an algorithm below to visualize how it works step-by-step:</p>

      <div className="sorting_name_box">
        <Link to="/bubble-sort" className="algo-card">
          <div className="card-image-box">
            <img 
              src="/floating-soap-bubbles-in-various-sizes-isolated-on-white-free-png.webp"
              className="card-img">
           </img>
           </div>
          <h2>Bubble Sort</h2>
          <p className = "subtitle"> mmm bubbles</p> 
        </Link>
        
        {/* We can easily add Quick Sort, Merge Sort, etc. here later! */}
      </div>
    </div>
  );
}

export default Home;