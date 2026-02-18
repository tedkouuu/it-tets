"use client";

import { useState } from "react";

import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  contact: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  contact: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+359|0)\d{8,9}$/;

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onFieldChange = (field: keyof FormState, value: string) => {
    setState((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!state.name.trim()) {
      nextErrors.name = "Моля, въведете име.";
    }

    const contactValue = state.contact.trim();
    if (!contactValue) {
      nextErrors.contact = "Въведете имейл или телефон.";
    } else if (!emailRegex.test(contactValue) && !phoneRegex.test(contactValue)) {
      nextErrors.contact = "Въведете валиден имейл или телефонен номер.";
    }

    if (state.message.trim().length < 12) {
      nextErrors.message = "Моля, опишете запитването с поне 12 символа.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Име и фирма</label>
        <input
          id="name"
          name="name"
          type="text"
          value={state.name}
          onChange={(event) => onFieldChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p className={styles.error} id="name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact">Имейл или телефон</label>
        <input
          id="contact"
          name="contact"
          type="text"
          value={state.contact}
          onChange={(event) => onFieldChange("contact", event.target.value)}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
        />
        {errors.contact ? (
          <p className={styles.error} id="contact-error">
            {errors.contact}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Съобщение</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={state.message}
          onChange={(event) => onFieldChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p className={styles.error} id="message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className={styles.submit}>
        Изпратете запитване
      </button>

      {submitted ? (
        <p className={styles.success}>
          Благодарим ви! Запитването е подготвено успешно. Ще се свържем с вас възможно
          най-скоро.
        </p>
      ) : null}
    </form>
  );
}

