import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactFormUI from "./ContactFormUI";
import { contactFormSchema, type FormDataProps } from "../../schemas/contact-formSchema";
import ThankYouPopover from "./ThankYou";
import type { ContactMessage } from "../../types/contact_form";
import { useContactMessage } from "../../hooks/useContactMessage";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { addContactMessage, loading } = useContactMessage()

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<FormDataProps>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: { name: "", email: "", message: "" },
    });

  const onSubmit = async (data: FormDataProps) => {
    console.log("Submitting:", data);

    // get userId from localStorage (parse to number safely)
    const storedUserId = localStorage.getItem("userId");
    const userId = storedUserId ? Number(storedUserId) : 0;

    const newMessage: ContactMessage = {
      id: 0, // backend assigns actual id
      userId,
      name: data.name,
      email: data.email,
      message: data.message,
      status: "New",
    };

    try {
      await addContactMessage(newMessage);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Failed to submit contact message:", error);
    }
  };

  return (
    <>
      <ContactFormUI
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        disabled={loading}
      />
      {submitted && <ThankYouPopover onClose={() => setSubmitted(false)} />}
    </>
  );
};

export default ContactForm;
