import './App.css';
import QrCode from 'react-qr-code';
import { useState } from 'react';

export default function App() {
  let [value, setValue] = useState("");
  let [bg, setBg] = useState("white");
  let [fg, setFg] = useState("black");
  let [size, setSize] = useState(100);
  return (
    <main id='main'>
      <h1>Qr Code generator</h1>
      <section id='inputs'>

        <input className='value-input' type="text" placeholder="Enter the value" onChange={(e) => setValue(e.target.value)} />

        <input className='size-input' type="number" placeholder="Enter the Size(Pixel)" onChange={(e) => setSize(e.target.value)} max={500} />
        <div className='colors-bg-fg'>

          <div className='Colors-div'>
            <label>Background Color</label>
            <input type="color" placeholder="Enter the Background color" onChange={(e) => setBg(e.target.value)} />
          </div>

          <hr id='hr' />

          <div className='Colors-div'>
            <label>Foreground Color</label>
            <input type="color" placeholder="Enter the fore ground color" onChange={(e) => setFg(e.target.value)} />
          </div>

        </div>
      </section>

      <hr id='hr2' />

      <div id='QR-Code'>
        <QrCode
          id='QR-Code-in'
          title="QR-Code"
          value={value}
          bgColor={bg}
          fgColor={fg}
          size={size === "" ? 0 : size}
        />
      </div>
    </main>
  )
}
