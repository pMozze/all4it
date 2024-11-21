'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputMask } from '@react-input/mask';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import { type FormData } from '../model';
import { postFeedbackForm } from '../api';

import { useGlobalStore } from '@/shared/store';
import { Button } from '@/shared/ui';

import styles from './FeedbackForm.module.css';

const FeedbackForm: FC = () => {
  const t = useTranslations('contacts');

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
      response?.errors?.phonenumber && setError('phonenumber', { message: response?.errors?.phonenumber?.[0] });
      response?.errors?.phonenumber && setError('companyName', { message: response?.errors?.companyName?.[0] });
      response?.errors?.comment && setError('comment', { message: response?.errors?.comment?.[0] });
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(submitHandler)}>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>
          {t('name.title')} <span>*</span>
        </div>
        <input
          className={classNames(styles.formControl, errors.name && styles.formControl_invalid)}
          type='text'
          placeholder={t('name.placeholder')}
          {...register('name', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>
          {t('email.title')} <span>*</span>
        </div>
        <input
          className={classNames(styles.formControl, errors.email && styles.formControl_invalid)}
          type='email'
          placeholder={t('email.placeholder')}
          {...register('email', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>
          {t('phonenumber.title')} <span>*</span>
        </div>
        <InputMask
          className={classNames(styles.formControl, errors.phonenumber && styles.formControl_invalid)}
          type='tel'
          mask='+7 (XXX) XXX XX-XX'
          replacement={{ X: /\d/ }}
          placeholder={t('phonenumber.placeholder')}
          {...register('phonenumber', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>
          {t('company.title')} <span>*</span>
        </div>
        <input
          className={classNames(styles.formControl, errors.companyName && styles.formControl_invalid)}
          type='text'
          placeholder={t('company.placeholder')}
          {...register('companyName', { required: true })}
        />
      </label>
      <label className={styles.formControlLabel}>
        <div className={styles.formControlTitle}>
          {t('comment.title')} <span>*</span>
        </div>
        <textarea
          className={classNames(styles.formControl, errors.comment && styles.formControl_invalid)}
          rows={4}
          placeholder={t('comment.placeholder')}
          {...register('comment', { required: true })}
        ></textarea>
      </label>
      <div className={styles.formRow}>
        <span className={styles.email}>
          {t('emailText')} <a href={`mailto:${email}`}>{email}</a>
        </span>
        <Button className={styles.submitButton} type='submit' variant='dark' text={t('submitButton')} />
      </div>
    </form>
  );
};

export default FeedbackForm;
