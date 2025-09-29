import type { FormDataProps } from "../schemas/contact-formSchema";

export type ThankYouProps = {
  onClose: () => void;
};

export type ContactFormUIProps = {
  register: any; // React Hook Form register function
  errors: Partial<Record<keyof FormDataProps, { message?: string }>>;
  onSubmit: (e: React.FormEvent) => void;
};


export type ContactMessage = {
  id: number;
  userId: number;
  name: string;
  email: string;
  message: string;
  status: string;
};