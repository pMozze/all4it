import { FC } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';

import FormWrapper from './form-wrapper/FormWrapper';
import { fetchContacts } from '../api';

import styles from './ContactPage.module.css';

const ContactPage: FC = async () => {
  const contacts = await fetchContacts();

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <div>
        <h1 className={styles.title}>{contacts.title}</h1>
        <div className={styles.description}>{parse(contacts.content)}</div>
      </div>
      <FormWrapper className={styles.formWrapper} />
    </div>
  );
};

export default ContactPage;
