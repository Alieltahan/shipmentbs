import { useState } from 'react';
import './ShipmentProgressBar.style.scss';

const ShipmentProgressBar = () => {
  const [step, setStep] = useState(3);

  const stepMap = [1, 2, 3, 4];

  const handleStyles = (i) => {
    return step > i
      ? 'step active complete  container'
      : step < i
      ? 'step container'
      : 'step active  container';
  };
  const handleProgress = () => {
    return ((step - 1) / (stepMap.length - 1)) * 100;
  };

  return (
    <div id="progress">
      <div style={{ width: `${handleProgress()}%` }} id="progress-bar"></div>
      <ul id="progress-num">
        {stepMap.map((s, i) => (
          <div className="container" key={i}>
            <li key={s} className={handleStyles(i + 1)}>
              {step <= s ? s : '✓'}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentProgressBar;
