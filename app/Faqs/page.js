import FaqsComponent from '@/components/FaqsComponent'

export const metadata = {
  title: 'Faqs',
  description: 'Explore our comprehensive FAQ section to find answers to commonly asked questions about Chill Academy, providing valuable insights and information to enhance your understanding of our offerings and services...',
};

export default function Home() {

    return (
      <div className='bg-blue-100 dark:bg-gray-800'>
      <FaqsComponent />
    </div>
    )
  }