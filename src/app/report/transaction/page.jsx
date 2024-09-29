import Transaction from './Transaction';

const title = 'Гүйлгээний тайлан';
export const metadata = { title };

const TransactionPage = () => {
  return <Transaction title={title} />;
};

export default TransactionPage;
