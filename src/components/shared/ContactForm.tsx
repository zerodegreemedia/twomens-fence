import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RESEND_ENDPOINT, COMPANY } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  description: string;
  preferredContact: string;
  address: string;
}

const SERVICE_OPTIONS = [
  "Wood Fencing",
  "Vinyl Fencing",
  "Aluminum Fencing",
  "Chain Link Fencing",
  "Deck Building",
  "Tree Trimming",
  "Fence Repair",
  "Gate Installation",
  "Other",
];

export function ContactForm({ dark = false, redirectOnSuccess = true }: { dark?: boolean; redirectOnSuccess?: boolean }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
    preferredContact: "Phone",
    address: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          serviceType: data.serviceType,
          description: data.description,
          preferredContact: data.preferredContact,
          address: data.address,
          sourcePage: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      if (redirectOnSuccess) {
        navigate("/thank-you");
      }
    } catch {
      setStatus("error");
    }
  };

  const cardBg = dark
    ? "bg-white/5 backdrop-blur-md border-white/10"
    : "bg-white border-border shadow-xl";
  const labelColor = dark ? "text-white/80" : "text-foreground";
  const inputBg = dark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
    : "";

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-8 ${cardBg} border text-center`}>
        <CheckCircle className="mx-auto mb-4 text-trust" size={48} />
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : ""}`}>
          Thank You!
        </h3>
        <p className={dark ? "text-white/60" : "text-muted-foreground"}>
          We&apos;ll call you within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 md:p-8 ${cardBg} border`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex gap-2">
          <div
            className={`w-8 h-1 rounded-full ${
              step >= 1 ? "bg-action" : dark ? "bg-white/20" : "bg-border"
            }`}
          />
          <div
            className={`w-8 h-1 rounded-full ${
              step >= 2 ? "bg-action" : dark ? "bg-white/20" : "bg-border"
            }`}
          />
        </div>
        <span className={`text-xs font-medium ${dark ? "text-white/50" : "text-muted-foreground"}`}>
          Step {step} of 2
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <Label className={labelColor}>Full Name *</Label>
              <Input
                placeholder="John Smith"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className={`mt-1 ${inputBg}`}
              />
            </div>
            <div>
              <Label className={labelColor}>Phone *</Label>
              <Input
                placeholder="(610) 212-7123"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={`mt-1 ${inputBg}`}
              />
            </div>
            <div>
              <Label className={labelColor}>Email *</Label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={`mt-1 ${inputBg}`}
              />
            </div>
            <Button
              onClick={() => setStep(2)}
              disabled={!data.name || !data.phone || !data.email}
              className="w-full bg-action hover:bg-action-glow text-foreground font-semibold transition-all duration-300"
            >
              Next Step
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <Label className={labelColor}>Service Type *</Label>
              <select
                value={data.serviceType}
                onChange={(e) => update("serviceType", e.target.value)}
                className={`mt-1 flex h-10 w-full rounded-md border px-3 py-2 text-sm ${
                  dark
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-background border-input"
                }`}
              >
                <option value="" className="bg-neutral-800 text-white">Select a service...</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-neutral-800 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className={labelColor}>Project Description</Label>
              <Textarea
                placeholder="Tell us about your project..."
                value={data.description}
                onChange={(e) => update("description", e.target.value)}
                className={`mt-1 ${inputBg}`}
                rows={3}
              />
            </div>
            <div>
              <Label className={labelColor}>Preferred Contact Method</Label>
              <div className="flex gap-4 mt-2">
                {["Phone", "Email", "Text"].map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={data.preferredContact === method}
                      onChange={(e) => update("preferredContact", e.target.value)}
                      className="accent-action"
                    />
                    <span className={`text-sm ${dark ? "text-white/70" : ""}`}>{method}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Label className={labelColor}>Address / Zip Code</Label>
              <Input
                placeholder="19808"
                value={data.address}
                onChange={(e) => update("address", e.target.value)}
                className={`mt-1 ${inputBg}`}
              />
            </div>
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!data.serviceType || status === "loading"}
                className="flex-1 bg-action hover:bg-action-glow text-foreground font-semibold transition-all duration-300"
              >
                {status === "loading" ? (
                  <Loader2 size={16} className="animate-spin mr-2" />
                ) : null}
                Submit Request
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-4 text-sm text-destructive text-center">
          Something went wrong. Call{" "}
          <a href={COMPANY.phoneTel} className="underline">
            {COMPANY.phone}
          </a>{" "}
          instead.
        </p>
      )}
    </div>
  );
}
