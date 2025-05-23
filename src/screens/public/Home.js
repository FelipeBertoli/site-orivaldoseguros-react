import React, { useState } from 'react';
import { CardGrid, ContactFormGroup, HeroSection, IconCard, IconText, MainButton, PageContainer, PageHighlight, PageMain, PageSection, TextInput } from '../../components/ComponentsModule';
import './style.css';
import emailjs from 'emailjs-com';

export default function HomePublic() {
  const cards = [
    { header: 'Seguro de Vida', icon: 'life', text: 'Proteção financeira para sua família em momentos inesperados.' },
    { header: 'Seguro de Automóvel', icon: 'car', text: 'Segurança contra acidentes, furtos e imprevistos no trânsito.' },
    { header: 'Seguro Residencial', icon: 'home', text: 'Tranquilidade para seu lar contra danos, incêndios e roubos.' },
    { header: 'Seguro Empresarial', icon: 'building', text: 'Proteja seu negócio de imprevistos e garanta a continuidade.' },
    { header: 'Seguro de Saúde', icon: 'hand-holding-medical', text: 'Cuide do seu bem-estar com cobertura médica sob medida.' },
    { header: 'Seguro de Implementos Agrícolas', icon: 'tractor', text: 'Segurança para seus equipamentos e máquinas no campo.' },
    { header: 'Seguro de Implementos Florestais', icon: 'forest', text: 'Proteção especializada para maquinário de manejo florestal.' },
    { header: 'Seguro de Implementos Industriais', icon: 'tools', text: 'Cobertura completa para máquinas e equipamentos da sua indústria.' },
  ]

  const [form, setForm] = useState({
    nome: '',
    email: '',
    phone: '',
    mensagem: ''
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault(); 

    setLoading(true);

    try {
      await emailjs.send(
        'service_ybkf819',
        'template_e77f5kj',
        {
  
          name: form.nome,
          email: form.email,
          phone: form.phone,
          message: form.mensagem
        },
        'tb7LIS2lvDcP2wbmZ'
      );

      alert('Mensagem enviada com sucesso!');
      // setForm({
      //   nome: '',
      //   email: '',
      //   phone: '',
      //   assunto: '',
      //   mensagem: ''
      // });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    }

    setLoading(false);
  };

  return (
    <PageMain>
      <PageContainer>
        <HeroSection id="inicio" text="Proteção feita sob medida para você, sua família e seu patrimônio. Com soluções personalizadas e atendimento próximo, garantimos segurança e tranquilidade em cada etapa da sua vida." imagePath="/assets/herosection-image.png" />
        <PageSection id="seguros" title="Nossos seguros" text="Confira os tipos de proteção que oferecemos para você." backgroundColor='contrast' backgroundImage="grey">
          <CardGrid>
            {cards.map((card, index) => (
              <IconCard key={index} header={card.header} icon={card.icon} text={card.text} />
            ))}
          </CardGrid>
        </PageSection>
        <PageSection id="sobre" title="Sobre nós" backgroundColor='alt' backgroundImage="pinstriped">
          <PageHighlight>
            <h4>Quem somos?</h4>
            <div className="highlight-content">
              <p>
                Com mais de 40 anos de atuação no mercado, Orivaldo Bertoli é um corretor de seguros reconhecido por sua seriedade, dedicação e compromisso com cada cliente. A partir de sua ampla experiência e da busca por um atendimento ainda mais próximo e personalizado, nasceu nosso escritório: uma empresa familiar que une tradição, confiança e o cuidado em oferecer as melhores soluções de proteção para você e seu patrimônio.
              </p>
              <img src="/assets/orivaldo-foto.jpeg" alt="" />
            </div>

          </PageHighlight>
          <PageHighlight>
            <div className='highlight-container'>
              <div className="highlight-content">
                <h4>Onde Estamos</h4>
                <IconText icon="rs-map-marker" normalText="Escritório:" boldText="Rua Equador, 140 - Assaí, PR - 86220-000" />
              </div>
              <div className="highlight-content">
                <h4>Informações de Contato</h4>
                <div className='highlight-column'>
                  <IconText icon="brands-instagram" normalText="Instagram:" boldText="@orivaldo.seguros" />
                  <IconText icon="brands-whatsapp" normalText="Whatsapp:" boldText="(43) 99110-3077" />
                  <IconText icon="brands-whatsapp" normalText="Whatsapp:" boldText="(43) 99855-6668" />
                  <IconText icon="rs-envelope" normalText="E-mail:" boldText="orivaldoobertoli@gmail.com" />
                </div>
              </div>
            </div>
            <img src="/assets/escritorio.jpeg" alt="" />
          </PageHighlight>
        </PageSection>
        <PageSection id="contato" title="Fale conosco" text="Entre em contato para tirar dúvidas, solicitar sua cotação ou agendar um atendimento." backgroundColor='contrast' backgroundImage="grey">
          <ContactFormGroup onSubmit={handleSubmit}>
            <div className='contact-form-group-row'>
              
            <TextInput
              label="Nome"
              type="text"
              name="nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Digite seu nome completo"
              required
            />
              <TextInput
                label="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="exemplo@dominio.com"
                required
              />

              <TextInput
                label="Telefone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(xx) xxxxx-xxxx"
                required
              />
            </div>

            <TextInput
              label="Mensagem"
              type="textarea"
              name="mensagem"

              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Escreva sua mensagem aqui..."
              required
            />

            <MainButton
              label={loading ? 'Enviando...' : 'Enviar'}
              showShadow={true}
              state={loading ? 'disabled' : 'enabled'}
              type="submit" 
            />
          </ContactFormGroup>

          <p className='bottom-text'>Ou, se preferir, fale conosco diretamente pelo <a href="https://api.whatsapp.com/send/?phone=5543991103077&text&type=phone_number&app_absent=0">WhatsApp</a>
          </p>

        </PageSection>
      </PageContainer>

    </PageMain >

  );
}
