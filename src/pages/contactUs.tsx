import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { TiHome } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

import DefaultLayout from "@/layouts/default";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");

      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate email sending (replace with actual email service)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real implementation, you would send the email here
      // Example with mailto (basic solution):
      const mailtoLink = `mailto:info@mansishipping.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService Type: ${formData.serviceType}\n\nMessage:\n${formData.message}`,
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        serviceType: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Contact Us", icon: <MdEmail /> },
  ];

  return (
    <DefaultLayout breadcrumbs={breadcrumbTrail}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 rounded-[10px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to streamline your logistics? Get in touch with our experts
              for reliable shipping solutions.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We&apos;re here to help you navigate your shipping needs.
                  Whether you&apos;re looking for port-side operations, freight
                  management, or end-to-end logistics solutions, our team is
                  ready to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@mansishipping.com</p>
                    <p className="text-gray-600">sales@mansishipping.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                    <p className="text-gray-600">+91 22 8765 4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Shipping Street
                      <br />
                      Mumbai Port Area
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="contact-name"
                    >
                      Full Name *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      id="contact-name"
                      name="name"
                      placeholder="Enter your full name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="contact-email"
                    >
                      Email Address *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      id="contact-email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="contact-number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      id="contact-number"
                      name="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="contact-company-name"
                    >
                      Company Name
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      id="contact-company-name"
                      name="company"
                      placeholder="Enter your company name"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="contact-service"
                  >
                    Service Type
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    id="contact-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="freight-forwarding">
                      Freight Forwarding
                    </option>
                    <option value="customs-clearance">Customs Clearance</option>
                    <option value="warehousing">
                      Warehousing & Distribution
                    </option>
                    <option value="port-operations">Port Operations</option>
                    <option value="supply-chain">
                      Supply Chain Management
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="contact-subject"
                  >
                    Subject *
                  </label>
                  <input
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    id="contact-subject"
                    name="subject"
                    placeholder="Enter the subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="contact-message"
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your shipping needs..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                  type="button"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
