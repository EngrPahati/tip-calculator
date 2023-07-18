import './App.css';
import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * (percentage1 + percentage2) * 0.5 / 100

  

  return (
    <div>
      <BillInput
        bill={bill}
        setBill={setBill}
      />
      <SelectPercentage
        percentage={percentage1}
        onSelect={setPercentage1}
      >How did you like the service?
      </SelectPercentage>
      
      <SelectPercentage
        percentage={percentage2}
        onSelect={setPercentage2}
      >How did your friend like the service?
      </SelectPercentage>

      <Output
        bill={bill}
        tip={tip}
      />
      <Reset
        setBill={setBill}
        setPercentage1={setPercentage1}
        setPercentage2={setPercentage2}
      />
    </div>
  );
}


function BillInput({setBill, bill}) {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input
        value={bill}
        id='bill'
        placeholder='Bill Value'
        onChange={e => setBill(Number(e.target.value))}
      />
    </div>
  )
}

function SelectPercentage({ children, onSelect, percentage}) {
  return (
    <div>
      <label>{ children }</label>
      <select
        value={percentage}
        onChange={e => onSelect(Number(e.target.value))}
      >
        <option selected={ percentage === 0 } value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip}) {
  const total = bill + tip;

  return (
    <div>
      <h2>You pay { total } (${bill} +  ${ tip } tip)</h2>
    </div>
  );
}

function Reset({setBill, setPercentage1, setPercentage2}) {
  return (
    <div>
      <button
        onClick={() => {
          setPercentage1(0);
          setPercentage2(0);
          setBill('')
      }}
      >Reset</button>
    </div>
  );
}