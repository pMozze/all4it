'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';

import { type FormData } from '../model';
import { postFeedbackForm } from '../api';

import { useGlobalStore } from '@/shared/store';
import { Button } from '@/shared/ui';

import styles from './FeedbackForm.module.css';

const FeedbackForm: FC = () => {
  const {
    contacts: { email }
  } = useGlobalStore();

  const {
    register,
    reset,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>();

  const submitHandler: SubmitHandler<FormData> = async formData => {
    const response = await postFeedbackForm(formData)!;

    if (response.success) {
      reset();
      alert('Форма отправлена');
    } else {
      response?.errors?.name && setError('name', { message: response?.errors?.name?.[0] });
      response?.errors?.email && setError('email', { message: response?.errors?.email?.[0] });
      response?.errors?.comment && setError('comment', { message: response?.errors?.comment?.[0] });
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(submitHandler)}>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>Ваше имя</div>
        <input
          className={classNames(styles.formControl, errors.name && styles.formControl_invalid)}
          type='text'
          placeholder='Максим'
          {...register('name', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>E-Mail</div>
        <input
          className={classNames(styles.formControl, errors.email && styles.formControl_invalid)}
          type='email'
          placeholder='maxim2008@all4it.org'
          {...register('email', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>Чем мы можем Вам помочь?</div>
        <textarea
          className={classNames(styles.formControl, errors.comment && styles.formControl_invalid)}
          rows={4}
          placeholder='Здравствуйте! Я хотел бы заказать проект разработки веб-сайта для моего бизнеса и обсудить возможные идеи и сроки выполнения.'
          {...register('comment')}
        ></textarea>
      </label>
      <div className={styles.formRow}>
        <span className={styles.email}>
          Вы так же можете связаться с нами через электронную почту <a href={`mailto:${email}`}>{email}</a>
        </span>
        <Button className={styles.submitButton} type='submit' variant='dark' text='Отправить' />
      </div>
    </form>
  );
};

export default FeedbackForm;
