import ProductComponent from "@/components/ProductComponent";

export const metadata = {
  title: 'Products: Your One-Stop Shop for All Your Tech Needs',
  description: 'Explore Chill Academy, your trusted partner in the tech world. We offer a comprehensive range of services, from web & mobile app development to SEO & learning solutions. Empower your vision, solve problems, and unlock your tech potential with us.',
};

export default function Home() {

    return (
      <div >
      <ProductComponent />
    </div>
    )
  }