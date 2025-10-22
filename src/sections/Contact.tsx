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
      className="pt-25 md:pt-0 py-16 bg-amber-50 dark:bg-emerald-950"
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
                        utulivutours@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-800 dark:text-amber-200">
                        Phone
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        +44 7446 046204
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.27396 3.94072C3.01237 2.88646 6.8401 1.00024 12 1.00024C17.1599 1.00024 20.9876 2.88646 22.726 3.94072C23.7251 4.54659 24.1355 5.69142 23.9609 6.75162L23.5032 9.531C23.2353 11.1572 21.704 12.247 20.101 11.9521L17.6354 11.4984C16.5887 11.3058 15.8888 10.2986 16.0637 9.23676L16.2935 7.84151C15.7061 7.49353 14.3714 6.90907 12 6.90907C9.62863 6.90907 8.29388 7.49353 7.70655 7.84151L7.93635 9.23676C8.11123 10.2986 7.41126 11.3058 6.36463 11.4984L3.89895 11.9521C2.29601 12.247 0.764683 11.1572 0.496841 9.531L0.0390735 6.75162C-0.135542 5.69142 0.274923 4.54659 1.27396 3.94072ZM12 2.96985C7.30768 2.96985 3.82761 4.68829 2.27451 5.63017C2.04751 5.76783 1.8986 6.06129 1.95897 6.42782L2.41674 9.2072C2.50602 9.74928 3.01646 10.1125 3.55077 10.0142L6.01645 9.56056L5.76984 8.06327C5.66906 7.45138 5.85834 6.69991 6.51793 6.26936C7.34118 5.73198 9.06148 4.93946 12 4.93946C14.9385 4.93946 16.6588 5.73198 17.4821 6.26936C18.1417 6.69991 18.3309 7.45138 18.2302 8.06327L17.9836 9.56056L20.4492 10.0142C20.9835 10.1125 21.494 9.74928 21.5833 9.2072L22.041 6.42782C22.1014 6.06129 21.9525 5.76783 21.7255 5.63017C20.1724 4.68829 16.6923 2.96985 12 2.96985Z" />
                      <path d="M4 22.0002C4 21.448 4.44772 21.0002 5 21.0002H19C19.5523 21.0002 20 21.448 20 22.0002C20 22.5525 19.5523 23.0002 19 23.0002H5C4.44772 23.0002 4 22.5525 4 22.0002Z" />
                      <path d="M2 18.0002C1.44772 18.0002 1 18.448 1 19.0002C1 19.5525 1.44772 20.0002 2 20.0002H4C4.55228 20.0002 5 19.5525 5 19.0002C5 18.448 4.55228 18.0002 4 18.0002H2Z" />
                      <path d="M19 19.0002C19 18.448 19.4477 18.0002 20 18.0002H22C22.5523 18.0002 23 18.448 23 19.0002C23 19.5525 22.5523 20.0002 22 20.0002H20C19.4477 20.0002 19 19.5525 19 19.0002Z" />
                      <path d="M17 15.0002C16.4477 15.0002 16 15.448 16 16.0002C16 16.5525 16.4477 17.0002 17 17.0002H19C19.5523 17.0002 20 16.5525 20 16.0002C20 15.448 19.5523 15.0002 19 15.0002H17Z" />
                      <path d="M7 19.0002C7 18.448 7.44771 18.0002 8 18.0002H10C10.5523 18.0002 11 18.448 11 19.0002C11 19.5525 10.5523 20.0002 10 20.0002H8C7.44771 20.0002 7 19.5525 7 19.0002Z" />
                      <path d="M5 15.0002C4.44772 15.0002 4 15.448 4 16.0002C4 16.5525 4.44772 17.0002 5 17.0002H7C7.55229 17.0002 8 16.5525 8 16.0002C8 15.448 7.55229 15.0002 7 15.0002H5Z" />
                      <path d="M13 19.0002C13 18.448 13.4477 18.0002 14 18.0002H16C16.5523 18.0002 17 18.448 17 19.0002C17 19.5525 16.5523 20.0002 16 20.0002H14C13.4477 20.0002 13 19.5525 13 19.0002Z" />
                      <path d="M11 15.0002C10.4477 15.0002 10 15.448 10 16.0002C10 16.5525 10.4477 17.0002 11 17.0002H13C13.5523 17.0002 14 16.5525 14 16.0002C14 15.448 13.5523 15.0002 13 15.0002H11Z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-800 dark:text-amber-200">
                        Local Telephone
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        +255 772 412829.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5,3.5C18.25,1.25,15.2,0,12,0C5.41,0,0,5.41,0,12c0,2.11,0.65,4.11,1.7,5.92
			                  L0,24l6.33-1.55C8.08,23.41,10,24,12,24c6.59,0,12-5.41,12-12C24,8.81,22.76,5.76,20.5,3.5z M12,22c-1.78,0-3.48-0.59-5.01-1.49
			                  l-0.36-0.22l-3.76,0.99l1-3.67l-0.24-0.38C2.64,15.65,2,13.88,2,12C2,6.52,6.52,2,12,2c2.65,0,5.2,1.05,7.08,2.93S22,9.35,22,12
			                  C22,17.48,17.47,22,12,22z M17.5,14.45c-0.3-0.15-1.77-0.87-2.04-0.97c-0.27-0.1-0.47-0.15-0.67,0.15
			                  c-0.2,0.3-0.77,0.97-0.95,1.17c-0.17,0.2-0.35,0.22-0.65,0.07c-0.3-0.15-1.26-0.46-2.4-1.48c-0.89-0.79-1.49-1.77-1.66-2.07
			                  c-0.17-0.3-0.02-0.46,0.13-0.61c0.13-0.13,0.3-0.35,0.45-0.52s0.2-0.3,0.3-0.5c0.1-0.2,0.05-0.37-0.02-0.52
			                  C9.91,9.02,9.31,7.55,9.06,6.95c-0.24-0.58-0.49-0.5-0.67-0.51C8.22,6.43,8.02,6.43,7.82,6.43S7.3,6.51,7.02,6.8
			                  C6.75,7.1,5.98,7.83,5.98,9.3c0,1.47,1.07,2.89,1.22,3.09c0.15,0.2,2.11,3.22,5.1,4.51c0.71,0.31,1.27,0.49,1.7,0.63
			                  c0.72,0.23,1.37,0.2,1.88,0.12c0.57-0.09,1.77-0.72,2.02-1.42c0.25-0.7,0.25-1.3,0.17-1.42C18,14.68,17.8,14.6,17.5,14.45z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-800 dark:text-amber-200">
                        WhatsApp
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        +971 581 603381
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 dark:text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                        stroke="oklch(35.6% 0.145 163.225)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="oklch(35.6% 0.145 163.225)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-emerald-700 dark:text-amber-300">
                        Stone Town, Zanzibar
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
                    <div className="mx-auto md:mx-0">
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
