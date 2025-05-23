import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactFormGroup from '../groups/ContactFormGroup';
import TextInput from '../inputs/TextInput';
import MainButton from '../buttons/MainButton';

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'seu_service_id',
      'seu_template_id',
      formRef.current,
      'sua_public_key'
    ).then(
      () => {
        alert("Mensagem enviada com sucesso!");
        formRef.current.reset();
      },
      (error) => {
        alert("Erro ao enviar. Tente novamente.");
        console.error(error);
      }
    );
  };

  return (
    <ContactFormGroup>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className='contact-form-group-row'>
          <TextInput label="Nome" type="text" name="nome" placeholder="Digite seu nome completo" required />
          <TextInput label="E-mail" type="email" name="email" placeholder="exemplo@dominio.com" required />

        </div>
        <TextInput label="Telefone" type="tel" name="telefone" placeholder="(99) 99999-9999" />
        <TextInput label="Mensagem" type="textarea" name="mensagem" placeholder="Escreva sua mensagem aqui..." required />
        <MainButton label="Enviar" type="submit" />
      </form>
    </ContactFormGroup>
  );
}
