import logoRedAr from '../../media/icons/bosta_logo_ar_red.svg';
import arrowDown from '../../media/icons/arrow-down.svg';
import menuIcon from '../../media/icons/menu.svg';
import './Navbar.style.scss';
import { useRef, useState } from 'react';

const Navbar = ({ handleTrackNum }) => {
  // To Handle Show/Hide TrackShipment
  const [showInput, setShowInput] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const inputRef = useRef(null);

  // Collapsing Track Shipment
  const showInputClass = () => {
    return showInput
      ? 'nav__list__track-input'
      : 'nav__list__track-input hide ';
  };
  // Collapsing Menu
  const showMenuClass = () => {
    return showMenu ? 'nav__list' : 'nav__list collapse';
  };

  const handleArrowRotate = () => {
    return showInput ? 'nav__arrow nav__arrow-up' : 'nav__arrow';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guard Clause for white space input
    if (inputRef.current.value.trim() === '') return;
    setShowModal(false);
    handleTrackNum(inputRef.current.value);
    // #TODO Enable After Development
    // setShowInput(!showInput);
    // inputRef.current.value = '';
  };

  const handleShowTrackInput = () => {
    setShowInput(!showInput);
    setShowModal(true);
  };

  const handleModal = () => {
    setShowInput(false);
    setShowMenu(false);
    setShowModal(false);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && <div onClick={handleModal} className="modal"></div>}
      <div className="nav show">
        <div className="nav__logo">
          <img src={logoRedAr} alt="Bosta Logo" />
        </div>
        <div className="nav__main">
          <img
            onClick={handleShowMenu}
            className="nav__menu-icon"
            src={menuIcon}
            alt="menu Icon"
          />
          <ul className={showMenuClass()}>
            <li>الرئيسية</li>
            <li>الأسعار</li>
            <li>كلم المبيعات</li>
          </ul>
        </div>

        <div className="nav__util">
          <ul className={showMenuClass()}>
            <li onClick={handleShowTrackInput} className="nav__list__track">
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

            <li className="nav__separate">|</li>
            <li>تسجيل الدخول</li>
            <li className="nav__list-lang">ENG</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
