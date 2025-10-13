import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toast } from "../components";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.log(err);
      return setError("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
    console.log(error);
  };

  const handleCloseToast = () => {
    setSuccess(false);
  };

  return (
    <section
      id="contact"
      className="mt-20 md:mt-0 py-16 bg-amber-50 dark:bg-emerald-950"
    >
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900 dark:text-amber-100">
          Contact Us
        </h2>
        <Card className="bg-white dark:bg-emerald-900 border-amber-200 dark:border-emerald-800 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-emerald-900 dark:text-amber-100">
              Get In Touch or Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-800 dark:text-amber-200">
                        Email
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        info@utulivutours.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.25l2.2-.22c.62-.07 1.2-.41 1.52-.98l1.68-3.29c.29-.58.25-1.26-.08-1.79l-1.6-1.73c-.2-.22-.47-.28-.72-.13l-1.95 1.05c-.49.26-1.08.03-1.35-.55l-.74-1.8c-.12-.29-.38-.48-.68-.48-.19 0-.38.07-.53.21l-1.32 1.72c-.36.47-.99.46-1.35-.02l-1.23-1.9c-.25-.38-.78-.43-1.15-.13l-1.31 1.1c-.36.3-.48.88-.26 1.35l1.2 1.74zM19 15c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-800 dark:text-amber-200">
                        Phone
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        +255 123 456 789
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <div>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        Arusha, Tanzania
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div>
                {success ? (
                  <div>
                    <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-md text-green-800 dark:text-green-200 text center">
                      Thank you! Your message has been sent successfully.
                    </div>
                    <div>
                      <Toast show={success} onClose={handleCloseToast} />
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-4"
                  >
                    <Input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="text-emerald-800 dark:text-amber-100 capitalize"
                    />
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="text-emerald-800 dark:text-amber-100"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="text-emerald-800 dark:text-amber-100 h-32"
                    />
                    {error && (
                      <div className="p-2 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-md text-red-800 dark:text-red-200 text-sm">
                        {error}
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default Contact;
