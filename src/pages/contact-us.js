import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import FaqOne from '@components/faq/FaqOne';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout title="Contact Us" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader/>
      <ContactCard />
      <ContactForm />
      <FaqOne />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
