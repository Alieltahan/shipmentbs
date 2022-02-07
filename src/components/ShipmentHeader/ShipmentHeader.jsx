import { dateOfLastUpdate } from '../utils/timeFormat';
import './ShipmentHeader.Style.scss';

/**
 * @param {data} Object of shipment details.
 * @returns
 */
const ShipmentHeader = ({ data }) => {
  // console.log();

  const lastUpdate =
    data?.TransitEvents[data.TransitEvents.length - 1]?.timestamp;
  const { state } = data?.CurrentStatus;
  const transitStateClasses = () => {
    if (state === 'DELIVERED') return 'shipment__header-details delivered';
    else if (state === 'CANCELLED') return 'shipment__header-details cancelled';
    else return 'shipment__header-details pending';
  };
  return (
    <div className="shipment__header grid grid--1x4">
      <div>
        <div> رقم الشحنة {data.TrackingNumber} </div>
        <div className={transitStateClasses()}>{TransitState[state]}</div>
      </div>
      <div>
        <div> أخر تحديث</div>
        <div className="shipment__header-details">
          {dateOfLastUpdate(lastUpdate)}
        </div>
      </div>
      <div>
        <div>أسم التاجر</div>
        <div className="shipment__header-details">--AUTO--</div>
      </div>
      <div>
        <div>موعد التسليم خلال</div>
        <div className="shipment__header-details">
          {data.PromisedDate ? dateOfLastUpdate(data.PromisedDate) : '-'}
        </div>
      </div>
    </div>
  );
};

export default ShipmentHeader;

const TransitState = {
  TICKET_CREATED: 'تم انشاءالشحنة',
  PACKAGE_RECEIVED: 'تم استلام الشحنة',
  IN_TRANSIT: 'جارى النقل',
  NOT_YET_SHIPPED: 'لم يتم الشحن بعد',
  OUT_FOR_DELIVERY: 'الشحنة خرجت للستليم',
  WAITING_FOR_CUSTOMER_ACTION: 'فى إنتظار رد العميل',
  DELIVERED: 'تم التسليم',
};
