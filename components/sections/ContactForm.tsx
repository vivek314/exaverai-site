"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand/40 bg-brand/10 px-6 py-12 text-center">
        <CheckCircle2 className="text-brand-lighter" size={40} />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-white/60">
          Thanks for reaching out — we&apos;ll get back to you within one business
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white hover:bg-white/10"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Doe" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <div className="mt-4">
        <Field label="Company" name="company" placeholder="Acme Inc." />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-white/50">
          How can we help?
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about the workflow you'd like to automate…"
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand/60"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-light hover:shadow-[0_0_40px_-8px_rgba(147,51,234,0.7)] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Get Started Today
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-white/50">
        {label}
        {required && <span className="text-brand-lighter"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand/60"
      />
    </div>
  );
}
