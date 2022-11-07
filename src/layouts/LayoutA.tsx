import { ReactNode } from 'react';
// module
import NavBar from 'components/NavBar';

interface IProps {
  children: ReactNode;
}

function LayoutA({children}: IProps) {
  return (
    <div>
      <NavBar />
      <div className='container'>
        {children}
      </div>
    </div>
  );
}

export default LayoutA;