import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import contactsService from '../../service/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await contactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar');
    }
  }

  return (
    <>
      <PageHeader
        title='Novo contato'
      />
      <ContactForm
        buttonLabel='Cadastrar'
        onSubmit={handleSubmit}
      />
    </>
  );
}
