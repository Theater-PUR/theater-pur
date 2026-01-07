"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface ContactFormProps {
  recipientEmail?: string;
}

export function ContactForm({ recipientEmail = "info@theaterpur-weyhe.de" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto link with form data
    const mailtoSubject = encodeURIComponent(formData.subject || "Kontaktanfrage von Website");
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <div className="bg-card p-8 rounded-lg border border-border/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ihr Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="ihre@email.de"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Betreff</Label>
          <Input
            id="subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="Worum geht es?"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Nachricht</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Ihre Nachricht an uns..."
            rows={5}
            required
          />
        </div>
        <Button type="submit" className="w-full font-semibold shadow-gold">
          <Mail className="w-4 h-4 mr-2" />
          E-Mail Senden
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Ihre E-Mail-Anwendung wird geöffnet, um die Nachricht zu senden.
        </p>
      </form>
    </div>
  );
}
