import React from 'react';
import './App.css';
import { Modal } from './components/Modal/index';
//
//
//
//
//
//
//
function App() {
  const [active, setActive] = React.useState();

  return (
    <div className="app">
      <>
        <button className="open-btn" onClick={() => setActive(true)}>
          Open Nodal Window
        </button>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab vel molestiae,
          possimus est saepe sapiente cumque facere ducimus ipsa dicta cum numquam eaque unde in
          impedit quidem eos libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab vel molestiae,
          possimus est saepe sapiente cumque facere ducimus ipsa dicta cum numquam eaque unde in
          impedit quidem eos libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab vel molestiae,
          possimus est saepe sapiente cumque facere ducimus ipsa dicta cum numquam eaque unde in
          impedit quidem eos libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab vel molestiae,
          possimus est saepe sapiente cumque facere ducimus ipsa dicta cum numquam eaque unde in
          impedit quidem eos libero.
        </p>
      </>

      <Modal active={active} setActive={setActive}>
        {/* внизу і буде children */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos architecto
          quod necessitatibus ex labore, velit qui laborum quam eius fuga dolorum maxime impedit
          repellat provident deserunt tempora id atque.
        </p>
      </Modal>
    </div>
  );
}

export default App;
