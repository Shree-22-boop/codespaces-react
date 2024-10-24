import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./component/header.jsx"
import UserCard from "./component/userCard.jsx"
import Footer from './component/footer.jsx';
import './styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>
    <div className='container'>
    <Header />
    <UserCard />
    <Footer />
    </div>
  </div>
);


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
