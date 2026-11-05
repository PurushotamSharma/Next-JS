"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { person } from "@/lib/person";

// Custom notification component
const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
      type === 'success' ? 'bg-accent text-primary' : 'bg-red-500 text-white'
    }`}
  >
    <div className="flex items-center gap-2">
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-80" type="button" aria-label="Close notification">×</button>
    </div>
  </motion.div>
);

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: person.emailPublic,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: person.location.label,
  },
  {
    icon: <FaGlobe />,
    title: "Profiles",
    description: "LinkedIn · GitHub · Hashnode",
  },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send the form data to your API
      // This API should handle both storing the submission and sending the WhatsApp notification
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success notification to the user
        setNotification({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setNotification({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen mt-[100px]"
    >
      <AnimatePresence>
        {notification && (
          <Notification 
            message={notification.message} 
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 glass-card backdrop-blur-sm bg-white/5">
              <h1 className="text-4xl text-accent">Let&apos;s talk</h1>
              <p className="text-white/60">
                I&apos;m a Technical Product Manager with a DevOps and cloud infrastructure
                background. Reach out about product strategy, SaaS product work, PRDs and
                roadmaps, or engineering collaboration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  type="text"
                  placeholder="First Name"
                  className="bg-white/10 border-white/10 focus:border-accent"
                  required
                />
                <Input 
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  type="text"
                  placeholder="Last Name"
                  className="bg-white/10 border-white/10 focus:border-accent"
                  required
                />
                <Input 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/10 focus:border-accent"
                  required
                />
                <Input 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  type="tel"
                  placeholder="Phone (optional)"
                  className="bg-white/10 border-white/10 focus:border-accent"
                />
              </div>
              <Select 
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="w-full bg-white/10 border-white/10">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a topic</SelectLabel>
                    <SelectItem value="product">Product strategy / TPM</SelectItem>
                    <SelectItem value="saas">SaaS / marketplace product</SelectItem>
                    <SelectItem value="prd">PRDs & roadmapping</SelectItem>
                    <SelectItem value="engineering">Engineering collaboration</SelectItem>
                    <SelectItem value="devops">DevOps / cloud background</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="h-[200px] bg-white/10 border-white/10 focus:border-accent"
                placeholder="Type your Message Here."
                required
              />
              <Button 
                type="submit"
                size="md" 
                className="max-w-40 bg-accent hover:bg-accent/90 text-primary"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="glass-card w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center hover:border-accent/50 transition-colors">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
