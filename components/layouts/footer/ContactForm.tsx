"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineMail, HiOutlineUser, HiOutlinePencilAlt } from "react-icons/hi";
import { FiSend, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Por favor, corrija os erros no formulário.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Email enviado com sucesso! Retornarei o contato em breve.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form after delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(data.error || 'Erro ao enviar email');
      }
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error(error instanceof Error ? error.message : "Erro ao enviar email. Tente novamente.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  if (isSubmitted) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={formVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md mx-auto"
      >
        <div className="bg-black/20 backdrop-blur-md border border-green-500/50 rounded-xl p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <FiCheck className="text-3xl text-green-400" />
          </motion.div>          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
            Mensagem Enviada!
          </h3>
          <p className="text-gray-300 text-sm">
            Sua mensagem foi enviada com sucesso! Retornarei o contato em breve.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={formVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-auto space-y-4"
    >
      <div className="bg-black/10 backdrop-blur-md border border-purple-700/30 rounded-xl p-6 shadow-lg shadow-purple-500/10">
        <div className="space-y-4">
          <Input
            name="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={<HiOutlineUser />}
            disabled={isSubmitting}
          />

          <Input
            name="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={<HiOutlineMail />}
            disabled={isSubmitting}
          />

          <Input
            name="subject"
            type="text"
            placeholder="Assunto da mensagem"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            icon={<HiOutlinePencilAlt />}
            disabled={isSubmitting}
          />

          <Textarea
            name="message"
            placeholder="Sua mensagem... Conte-me sobre seu projeto, ideia ou como posso ajudá-lo!"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            disabled={isSubmitting}
            rows={4}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            icon={isSubmitting ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <FiSend />
            )}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </div>
      </div>      <div className="text-center">
        <p className="text-xs text-gray-400">
          Sua mensagem será enviada diretamente para meu email pessoal
        </p>
      </div>
    </motion.form>
  );
};

export default ContactForm;
