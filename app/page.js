// import Image from 'next/image'
import Section from '@/components/Section';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <Section />
    </div>
  )
}
