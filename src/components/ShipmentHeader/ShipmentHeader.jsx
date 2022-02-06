import './ShipmentHeader.Style.scss';

const ShipmentHeader = () => {
  return (
    <div className="shipment__header grid grid--1x4">
      <div>
        <div>رقم الشحنة</div>
        <div className="shipment__header-details">AUTO</div>
      </div>
      <div>
        <div> أخر تحديث</div>
        <div className="shipment__header-details">AUTO</div>
      </div>
      <div>
        <div>أسم التاجر</div>
        <div className="shipment__header-details">AUTO</div>
      </div>
      <div>
        <div>موعد التسليم خلال</div>
        <div className="shipment__header-details">AUTO</div>
      </div>
    </div>
  );
};

export default ShipmentHeader;
