import { Wrapper } from '@/components/Wrapper';
import { Hero } from './component/Hero';
import { Choose } from './component/Choose';
import { Works } from './component/Works';
import { Services } from './component/Services';
import { BackgroundImage } from './component/BackgroundImage';
import Transition from '@/components/ui/Transition';
import { Websites } from './component/Websites';
import { ContactForm } from './component/ContactForm';
import { cookies } from 'next/headers';
import { About } from './component/About';
import { Header } from './component/Header';
import { Footer } from '@/components/Footer';
export default function Home() {
  const patientId = cookies().get('patientId')?.value;
  return (
    <Wrapper>
      <Header patientId={patientId} />
      <Transition />
      <Hero patientId={patientId} />
      <Choose />
      <Works />
      <Services />
      <About />
      <BackgroundImage />
      <Websites />
      <ContactForm />
      <Footer />
    </Wrapper>
  );
}
