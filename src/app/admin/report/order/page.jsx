import Order from './Order';

const title = 'Захиалгын тайлан';
export const metadata = { title };

const OrderPage = () => {
  return <Order title={title} />;
};

export default OrderPage;
