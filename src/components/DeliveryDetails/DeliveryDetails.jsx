import confused from '../../media/confused.jpg';

import './DeliveryDetails.style.scss';
const DeliveryDetails = () => {
  return (
    <div className="delivery__details">
      <h2>عنوان التسليم</h2>
      <div>TO BE ADDED</div>
      <div className="delivery__issue">
        <img src={confused} alt="issue question" />
        <div>
          <p>هل لديك مشكلة فى شحنتك ؟!</p>
          <div className="delivery__report">إبلاغ عن مشكلة</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
