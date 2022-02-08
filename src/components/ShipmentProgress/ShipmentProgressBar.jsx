import { useState } from 'react';
import deliveryCar from '../../media/icons/delivery-car.svg';
import deliveryPackage from '../../media/icons/package-delivered.svg';
import './ShipmentProgressBar.style.scss';

/**
 * @param {TransitEvents} Array of Objects for Transit Events
 * @returns UI
 */
const ShipmentProgressBar = ({ TransitEvents }) => {
  const [step, setStep] = useState(3);

  const handleStyles = (i) => {
    return step > i
      ? 'step active complete  container'
      : step < i
      ? 'step container'
      : 'step active  container';
  };
  const handleProgress = () => {
    return state === 'DELIVERED' || state === 'DELIVERED_TO_SENDER' ? 100 : 75;
  };
  const { state } = TransitEvents[TransitEvents.length - 1];

  const progressBarClasses = () => {
    if (state === 'DELIVERED' || state === 'DELIVERED_TO_SENDER')
      return 'progress-bar delivered';
    else if (state === 'CANCELLED') return 'progress-bar cancelled';
  };

  const stepClasses = (specialClass) => {
    let classes = 'step ';
    if (state === 'DELIVERED' || state === 'DELIVERED_TO_SENDER')
      return (classes += ' delivered');
    else if (state === 'CANCELLED')
      return (classes += ` cancelled ${specialClass}`);
    else return (classes += `pending ${specialClass}`);
  };

  return (
    <div className="grid container-bar">
      <div className="progress">
        <div
          style={{ width: `${handleProgress()}%` }}
          className={progressBarClasses()}
          id="progress-bar"
        ></div>
        <ul className="progress-num">
          <div className="container">
            <li className={stepClasses()}>✓</li>
          </div>
          <div className="container">
            <li className={stepClasses()}>✓</li>
          </div>
          <div className="container">
            <li className={stepClasses('active')}>
              {!state === 'DELIVERED' ? (
                <img src={deliveryCar} alt="Delivery Car" />
              ) : (
                '✓'
              )}
            </li>
          </div>
          <div className="container">
            <li className={stepClasses('nonDelivered')}>
              {!state === 'DELIVERED' ? (
                <img id="package" src={deliveryPackage} alt="Delivery Car" />
              ) : (
                '✓'
              )}
            </li>
          </div>
        </ul>
      </div>
      <div className="progress text">
        <ul className="progress-num">
          <li>تم انشاء الشحنة</li>
          <li>تم استلام الشحنة من التاجر</li>
          <li>الشحنة خرجت للتسليم</li>
          <li>تم التسليم</li>
        </ul>
      </div>
    </div>
  );
};

export default ShipmentProgressBar;
