import { TransitState } from '../utils/TransitStateAr';
import { timeFormat } from '../utils/timeFormat';
import './ShipmentDetails.style.scss';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const ShipmentDetails = ({ TransitEvents }) => {
  return (
    <div className=" grid grid--1x2 shipment__details">
      <div>
        <h2>تفاصيل الشحنة</h2>
        <table>
          <tbody>
            <tr>
              <th>الفرع</th>
              <th>التاريخ</th>
              <th className="hide-time">الوقت</th>
              <th>تفاصيل</th>
            </tr>
            {TransitEvents.map((el, i) => (
              <tr key={i}>
                <td>أسم الفرع</td>
                <td>{timeFormat(el.timestamp).dateOnly}</td>
                <td className="hide-time">{timeFormat(el.timestamp).time}</td>
                <td>{TransitState[el.state]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeliveryDetails />
    </div>
  );
};

export default ShipmentDetails;
