import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path="*" element={<Error404/>} />

          {/* Home display */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
