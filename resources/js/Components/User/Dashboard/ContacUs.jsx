import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.submit'), {
      onSuccess: () => {
        reset();
        setSubmitted(true);
      },
    });
  };

  return (
    <div className="bg-secondary/10 rounded-lg py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-5xl font-bold text-center text-text mb-8">Contact Us</h2>
    <p className="text-lg text-center text-text mb-8">
    Leave us your information and our customer team will contact you as soon as possible.
    </p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-title focus:ring focus:ring-title focus:ring-opacity-50"
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-title focus:ring focus:ring-title focus:ring-opacity-50"
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={data.message}
                  onChange={(e) => setData('message', e.target.value)}
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-title focus:ring focus:ring-title focus:ring-opacity-50"
                  required
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-title hover:bg-title/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-title"
                >
                  {processing ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold text-text mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-title mr-2" />
                <span className="text-text">info@cordisimple.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-title mr-2" />
                <span className="text-text">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-title mr-2" />
                <span className="text-text">123 Event St, City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
