import logoRedAr from '../../media/icons/bosta_logo_ar_red.svg';
import arrowDown from '../../media/icons/arrow-down.svg';
import './Navbar.style.scss';
import { useRef, useState } from 'react';

const Navbar = () => {
  // To Handle Show/Hide TrackShipment
  const [showInput, setShowInput] = useState(true);

  const inputRef = useRef(null);

  // Collapsing Track Shipment
  const showInputClass = () => {
    return showInput ? 'nav__list__track-input' : 'nav__list__track-input hide';
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logoRedAr} alt="Bosta Logo" />
      </div>
      <div>
        <ul className="nav__list">
          <li>الرئيسية</li>
          <li>الأسعار</li>
          <li>كلم المبيعات</li>
        </ul>
      </div>
      <div>
        <ul className="nav__list">
          <div>
            <li
              onClick={() => setShowInput(!showInput)}
              className="nav__list__track"
            >
              تتبع شحنتك
            </li>
            <div className={showInputClass()}>
              <input
                ref={inputRef}
                type="number"
                name="trackNo-input"
                placeholder="رقم الشحنة"
              />
              <button onClick={() => console.log(inputRef.current.value)}>
                تتبع الشحنة
              </button>
            </div>
          </div>
          <img className="nav__arrow" src={arrowDown} alt="arrow" />

          <li className="nav__separate">|</li>
          <li>تسجيل الدخول</li>
          <li className="nav__list-lang">ENG</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;