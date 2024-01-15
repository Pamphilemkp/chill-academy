import { useRouter } from 'next/navigation';
import  { FC } from 'react';
import  style from'./SwitchLang.module.css';

const SwitchLang = () => {
  const router = useRouter();

  const switchLang = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <div>
      <button className={style.button} onClick={() => switchLang('en')}>
        English
      </button>
      <button className={style.button} onClick={() => switchLang('de')}>
        Deutch
      </button>
      <button className={style.button} onClick={() => switchLang('cn')}>
        Chinese
      </button>
    </div>
  );
};

module.exports = SwitchLang;
