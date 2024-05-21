import { Wrapper } from '@/components/Wrapper';
import { Hero } from './component/Hero';
import { Choose } from './component/Choose';
import { Works } from './component/Works';
import { Services } from './component/Services';
import { BackgroundImage } from './component/BackgroundImage';
import Transition from '@/components/ui/Transition';
import { Websites } from './component/Websites';
import { ContactForm } from './component/ContactForm';

import { About } from './component/About';
import { Header } from './component/Header';
import { Footer } from '@/components/Footer';
export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Transition />
      <Hero />
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
