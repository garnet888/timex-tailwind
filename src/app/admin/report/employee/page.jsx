import Employee from './Employee';

const title = 'Топ ажилтан';
export const metadata = { title };

const EmployeePage = () => {
  return <Employee title={title} />;
};

export default EmployeePage;
