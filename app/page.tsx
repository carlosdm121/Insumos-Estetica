import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { PaymentMethods } from "@/components/home/PaymentMethods";
import { OrderForm } from "@/components/home/OrderForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductGrid />
      <PaymentMethods />
      <OrderForm />
    </div>
  );
}
