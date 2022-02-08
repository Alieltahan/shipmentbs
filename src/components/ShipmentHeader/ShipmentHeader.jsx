import { timeFormat } from '../utils/timeFormat';
import { TransitState } from '../utils/TransitStateAr';
import './ShipmentHeader.Style.scss';

/**
 * @param {data} Object of shipment details.
 * @returns
 */
const ShipmentHeader = ({ data }) => {
  // Getting the last timestamp
  const lastUpdate =
    data?.TransitEvents[data.TransitEvents.length - 1]?.timestamp;

  // Getting last Tranist State
  const { state } = data?.CurrentStatus;

  const transitStateClasses = () => {
    if (state === 'DELIVERED' || state === 'DELIVERED_TO_SENDER')
      return 'shipment__header-details delivered';
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
          {timeFormat(lastUpdate).completeDateTime}
        </div>
      </div>
      <div>
        <div>أسم التاجر</div>
        <div className="shipment__header-details">--AUTO--</div>
      </div>
      <div>
        <div>موعد التسليم خلال</div>
        <div className="shipment__header-details">
          {data.PromisedDate
            ? timeFormat(data.PromisedDate).completeDateTime
            : '-'}
        </div>
      </div>
    </div>
  );
};

export default ShipmentHeader;
