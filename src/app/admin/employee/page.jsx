import Employee from './Employee';

const title = 'Ажилтан';
export const metadata = { title };

const EmployeePage = () => {
  return <Employee title={title} />;
};

export default EmployeePage;
