"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      projectType: formData.get("projectType") as string,
      timeline: formData.get("timeline") as string,
      budget: formData.get("budget") as string,
      techStack: formData.get("techStack") as string,
      message: formData.get("message") as string,
      goals: formData.get("goals") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.error || "Failed to send message");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Let's Build Something Great"
            description="Tell us about your project and we'll help you choose the perfect technology solution for your needs."
          >
            Contact us
          </PageHeader>

          {/* Contact form */}
          <div className="relative mb-16 flex items-center justify-center gap-10 pb-3 before:h-px before:w-full before:border-b before:shadow-xs before:shadow-white/20 before:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.8),transparent)1] after:h-px after:w-full after:border-b after:shadow-xs after:shadow-white/20 after:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.8),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1]">
            <div className="mx-auto w-full max-w-lg shrink-0">
              <form className="relative" onSubmit={handleSubmit}>
                {/* Border with dots in corners */}
                <div
                  className="absolute -inset-3 -z-10 rounded-lg bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px)] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_1.5px,transparent_1.5px)] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat dark:bg-transparent dark:bg-linear-to-b dark:from-gray-700/80 dark:to-gray-700/70 dark:before:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)]"
                  aria-hidden="true"
                />
                <div className="space-y-5">
                  <div className="space-y-3">
                    {/* Name */}
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                          </svg>
                        </div>
                        <input
                          id="name"
                          name="name"
                          className="form-input w-full pr-4 pl-10 text-sm"
                          type="text"
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={14}
                          >
                            <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                          </svg>
                        </div>
                        <input
                          id="email"
                          name="email"
                          className="form-input w-full pr-4 pl-10 text-sm"
                          type="email"
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>

                    {/* Company (Optional) */}
                    <div>
                      <label className="sr-only" htmlFor="company">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z" />
                          </svg>
                        </div>
                        <input
                          id="company"
                          name="company"
                          className="form-input w-full pr-4 pl-10 text-sm"
                          type="text"
                          placeholder="Company/Organization (optional)"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="sr-only" htmlFor="projectType">
                        Project Type
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 2v6h12V5H2zm2 1h8v1H4V6zm0 2h6v1H4V8z" />
                          </svg>
                        </div>
                        <select
                          id="projectType"
                          name="projectType"
                          className="form-select w-full pl-10 text-sm"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Project Type
                          </option>
                          <option value="new-build">New Build</option>
                          <option value="redesign">Redesign</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="sr-only" htmlFor="timeline">
                        Timeline
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm1 6V4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L9 8Z" />
                          </svg>
                        </div>
                        <select
                          id="timeline"
                          name="timeline"
                          className="form-select w-full pl-10 text-sm"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Timeline
                          </option>
                          <option value="asap">ASAP</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-plus-months">6+ months</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="sr-only" htmlFor="budget">
                        Budget Range
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM6.5 4.5v7h3v-7h-3ZM8 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                          </svg>
                        </div>
                        <select
                          id="budget"
                          name="budget"
                          className="form-select w-full pl-10 text-sm"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Budget Range
                          </option>
                          <option value="under-10k">Under $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k-plus">$100k+</option>
                          <option value="lets-discuss">
                            Let&apos;s discuss
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Current Tech Stack (Optional) */}
                    <div>
                      <label className="sr-only" htmlFor="techStack">
                        Current Tech Stack
                      </label>
                      <input
                        id="techStack"
                        name="techStack"
                        className="form-input w-full text-sm"
                        type="text"
                        placeholder="Current tech stack (optional)"
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="sr-only" htmlFor="message">
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea w-full resize-none text-sm"
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                      />
                    </div>

                    {/* Project Goals */}
                    <div>
                      <label className="sr-only" htmlFor="goals">
                        Project Goals/Requirements
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        className="form-textarea w-full resize-none text-sm"
                        placeholder="What are your main goals and requirements?"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully.
                        We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                      <p className="text-sm text-red-800 dark:text-red-200">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
