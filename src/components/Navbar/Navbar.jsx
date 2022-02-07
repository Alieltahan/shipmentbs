import logoRedAr from '../../media/icons/bosta_logo_ar_red.svg';
import arrowDown from '../../media/icons/arrow-down.svg';
import './Navbar.style.scss';
import { useRef, useState } from 'react';

const Navbar = ({ handleTrackNum }) => {
  // To Handle Show/Hide TrackShipment
  const [showInput, setShowInput] = useState(true);

  const inputRef = useRef(null);

  // Collapsing Track Shipment
  const showInputClass = () => {
    return showInput ? 'nav__list__track-input' : 'nav__list__track-input hide';
  };

  const handleArrowRotate = () => {
    return showInput ? 'nav__arrow nav__arrow-up' : 'nav__arrow';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guard Clause for white space input
    if (inputRef.current.value.trim() === '') return;
    handleTrackNum(inputRef.current.value);
  };

  const handleClick = () => {
    setShowInput(!showInput);
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
            <li onClick={() => handleClick()} className="nav__list__track">
              تتبع شحنتك
              <img
                className={handleArrowRotate()}
                src={arrowDown}
                alt="arrow"
              />
            </li>
            <div className={showInputClass()}>
              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="number"
                  name="trackNo-input"
                  placeholder="رقم الشحنة"
                />
                <button type="submit">تتبع الشحنة</button>
              </form>
            </div>
          </div>

          <li className="nav__separate">|</li>
          <li>تسجيل الدخول</li>
          <li className="nav__list-lang">ENG</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
