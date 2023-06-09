import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import styles from './contactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles['contact-form']} onSubmit={handleSubmit}>
      <label className={styles['contact-label']}>
        <input
          className={styles['phonebook-input']}
          type="text"
          placeholder="Name"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={styles['contact-label']}>
        <input
          className={styles['phonebook-input']}
          type="tel"
          placeholder="Number"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <button className={styles['add-contact-button']} type="submit">
        Create New Contact
      </button>
    </form>
  );
}

export default ContactForm;