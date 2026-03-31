"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { CheckCircle, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Serviços",
          id: "services",
        },
        {
          name: "Depoimentos",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="SmileDental"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Transforme seu sorriso hoje com tecnologia premium"
      description="Atendimento odontológico especializado com foco em conforto, tecnologia de ponta e resultados que elevam sua autoestima. Agende sua avaliação via WhatsApp agora mesmo."
      tag="Clínica Dental Referência"
      buttons={[
        {
          text: "Agendar via WhatsApp",
          href: "https://wa.me/55000000000",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-stylish-young-woman_158538-3957.jpg?_wi=1",
          imageAlt: "Dentista atendendo paciente",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-stylish-young-woman_158538-3957.jpg?_wi=2",
          imageAlt: "Clínica odontológica moderna",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/two-woman-look-tooth-picture-tablet-dentist-office_8353-1653.jpg?_wi=1",
          imageAlt: "Equipamento dental avançado",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-female-patient-with-tools_107420-74184.jpg?_wi=1",
          imageAlt: "Procedimento estético",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-cheerful-beautiful-african-girl-smiling-young-woman-happily-facing-her-future_176420-11233.jpg?_wi=1",
          imageAlt: "Consultório premium",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Mais de 500 pacientes satisfeitos"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Implantes Dentários",
          description: "Recupere a funcionalidade e estética do seu sorriso com segurança e durabilidade.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/two-woman-look-tooth-picture-tablet-dentist-office_8353-1653.jpg?_wi=2",
            imageAlt: "Implantes",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Materiais de alta qualidade",
            },
            {
              icon: CheckCircle,
              text: "Tecnologia guiada por computador",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-stylish-young-woman_158538-3957.jpg?_wi=3",
          imageAlt: "dentista profissional sorrindo consultório",
        },
        {
          id: "f2",
          title: "Clareamento Dental",
          description: "Obtenha um sorriso mais branco e radiante com tratamentos supervisionados.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-female-patient-with-tools_107420-74184.jpg?_wi=2",
            imageAlt: "Clareamento",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Seguro para o esmalte",
            },
            {
              icon: CheckCircle,
              text: "Resultados imediatos",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/two-woman-look-tooth-picture-tablet-dentist-office_8353-1653.jpg?_wi=3",
          imageAlt: "dental implant procedure close up",
        },
        {
          id: "f3",
          title: "Ortodontia",
          description: "Alinhamento preciso para um sorriso harmonioso e saúde bucal plena.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-cheerful-beautiful-african-girl-smiling-young-woman-happily-facing-her-future_176420-11233.jpg?_wi=2",
            imageAlt: "Ortodontia",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Aparelhos invisíveis",
            },
            {
              icon: CheckCircle,
              text: "Acompanhamento mensal",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-female-patient-with-tools_107420-74184.jpg?_wi=3",
          imageAlt: "teeth whitening procedure aesthetic dentistry",
        },
      ]}
      title="Nossos Especialistas Cuidam de Você"
      description="Oferecemos uma gama completa de tratamentos para manter sua saúde bucal impecável."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="A experiência foi incrível! Profissionais extremamente atenciosos e um consultório impecável. Recomendo de olhos fechados."
      rating={5}
      author="Mariana Santos"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/doctor-examining-female-patients-face_107420-73965.jpg",
          alt: "Mariana",
        },
        {
          src: "http://img.b2bpic.net/free-photo/joyful-man-white-tshirt-jacket-smiling-brown-background_197531-26657.jpg",
          alt: "João",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blonde-senior-woman-being-happy-against-blue-background_23-2149310406.jpg",
          alt: "Ana",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-female-posing_23-2148880191.jpg",
          alt: "Carlos",
        },
        {
          src: "http://img.b2bpic.net/free-photo/doctor-examining-female-patients-face_107420-73965.jpg",
          alt: "Beatriz",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Como agendar uma avaliação?",
          content: "Basta clicar no botão de WhatsApp em nossa página e falar diretamente com nossa equipe.",
        },
        {
          id: "q2",
          title: "Aceitam convênio?",
          content: "Trabalhamos com os principais planos de saúde. Entre em contato para confirmar o seu.",
        },
        {
          id: "q3",
          title: "Qual a duração do procedimento?",
          content: "Cada tratamento é personalizado. Avaliamos a duração durante sua primeira consulta.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-beautiful-stylish-young-woman_158538-3957.jpg?_wi=4"
      mediaAnimation="slide-up"
      title="Dúvidas Frequentes"
      description="Tudo o que você precisa saber antes da sua consulta."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "c1",
          title: "Atendem emergências?",
          content: "Sim, temos horários reservados para casos de emergência odontológica.",
        },
        {
          id: "c2",
          title: "Onde ficam localizados?",
          content: "Estamos no centro da cidade, com fácil acesso e estacionamento conveniado.",
        },
      ]}
      ctaTitle="Pronto para um novo sorriso?"
      ctaDescription="Nossa equipe está pronta para te atender. Clique abaixo e inicie sua conversa pelo WhatsApp."
      ctaButton={{
        text: "Agendar Agora",
        href: "https://wa.me/55000000000",
      }}
      ctaIcon={MessageCircle}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Início",
              href: "#hero",
            },
            {
              label: "Serviços",
              href: "#services",
            },
            {
              label: "Depoimentos",
              href: "#testimonials",
            },
          ],
        },
        {
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/55000000000",
            },
            {
              label: "Privacidade",
              href: "#",
            },
          ],
        },
      ]}
      logoText="SmileDental"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
