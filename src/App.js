import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header/header';
import Landing from './Components/Landing/landing';
import Blog from './Components/Blog/blog';
import NotFound from './Components/NotFound/notFound';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
