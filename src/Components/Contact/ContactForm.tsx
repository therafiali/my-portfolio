"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { BottomGradient } from "../ui/ButtomGradient";

export function ContactForm() {
  let server = process.env.formKey;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="rounded-md max-w-[30rem] w-full mx-auto sm:rounded-none md:rounded-2xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact me
      </h2>

      <form action={server} method="POST">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full Name</Label>
            <Input
              name="firstname"
              id="firstname"
              placeholder="Rafi Ali"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            id="email"
            placeholder="therafiali@gmail.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input
            name="phone"
            id="phone"
            placeholder="+92 319 026 9909"
            type="tel"
          />
        </LabelInputContainer>
       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>

          <Textarea
            name="message"
            placeholder="Type your message here."
            id="message"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Drop a message &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
