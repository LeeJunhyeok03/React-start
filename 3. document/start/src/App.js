import './App.css';


const Btn = () => {
  return (
    <button className='btn'>button</button>
  );
}

export default function App() {
  return (
    <div >
      <h1>Welcome to my app</h1>
      <Btn />
    </div>
  );
}



// ReactDOM.createRoot(document.querySelector('#root').render(<App />));
