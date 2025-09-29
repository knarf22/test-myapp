import React from "react";
import type { ContactFormUIProps } from "../../types/contact_form";

const ContactFormUI: React.FC<ContactFormUIProps & { disabled?: boolean }> = ({
  register,
  errors,
  onSubmit,
  disabled = false,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          {...register("name")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
          disabled={disabled}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
          disabled={disabled}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
          disabled={disabled}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={disabled}
        className="cursor-pointer w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
      >
        {disabled ? (
          <div className=" w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactFormUI;
