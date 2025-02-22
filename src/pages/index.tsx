import { LinkComponent } from '@/components/atoms/LinkComponent';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <>
      <div className='text-3xl font-bold underline'>This is about page.</div>
      <div>
        <LinkComponent href={'/auth/login'} text='ログイン画面' />
      </div>
      <div>
        <LinkComponent href={'/auth/signup'} text='サインアップ画面' />
      </div>
      <div>
        <LinkComponent href={'/main'} text='メイン画面' />
      </div>
    </>
  );
};

export default Index;
