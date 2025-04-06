
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 section-padding bg-gray-50 opacity-0"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 reveal-delay-1">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 reveal-delay-1">
              Let's start a project together
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg reveal-delay-2">
              Have a project in mind? Get in touch with us to see how we can help bring your vision to life. We're always excited to collaborate on new and challenging work.
            </p>

            <div className="space-y-6 reveal-delay-3">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@vyomax.com" className="text-gray-600 hover-underline">
                    info@vyomax.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover-underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <address className="text-gray-600 not-italic">
                    123 Development Drive,<br />Techville, CA 94321
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-delay-4">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
