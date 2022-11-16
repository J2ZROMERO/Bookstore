import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Headerelem from './components/Header';
import store from './redux/configureStore';

class App extends React.Component {
  static showApp() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
      <Provider store={store}>
          <Router>
            <Routes>
            <Route path="/" element={<Headerelem />} />
              <Route path="/books" element={<Books />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </Router>
          </Provider>
        </React.StrictMode>,
    );
  }
}

App.showApp();