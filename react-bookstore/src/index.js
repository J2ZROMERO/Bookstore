import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Headerelem from './components/Header';

class App extends React.Component {
  static showApp() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
          <Router>
            <Routes>
            <Route path="/" element={<Headerelem />} />
              <Route path="/books" element={<Books />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </Router>

        </React.StrictMode>,
    );
  }
}

App.showApp();