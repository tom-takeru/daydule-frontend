import { ReactNode } from 'react';
import FooterComponent from '@/components/utils/FooterComponent';
import HeaderComponent from '@/components/utils/HeaderComponent';

type Props = {
  children: ReactNode;
};

const LayoutComponent = (props: Props) => {
  return (
    <div className='bg-white w-full h-screen border border-white'>
      <HeaderComponent />
      <div className='w-[calc(100%_-_2rem)] h-[calc(100%_-_7rem)] mt-20 mb-8 mx-4 border border-white'>
        {props.children}
      </div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
