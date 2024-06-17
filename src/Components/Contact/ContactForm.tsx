"use client";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { BottomGradient } from "../ui/ButtomGradient";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToasterApp } from "../ui/toaster";

export function ContactForm() {
  const [toaststatus, setToaststatus] = useState(false);
  const [toastmsg, setToastmsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [msg, setmsg] = useState("");
  let server = process.env.formKey;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const emailSend = async () => {
    try {
      const res = await fetch("/email/sen", {
        method: "POST",
        body: JSON.stringify({
          useremail: email,
          phone: phone,
          username: name,
          message: msg,
        }),
      });
      if (res.ok) {
        setToastmsg("Email sent successfully!");
        console.log("Email sent successfully!");
        // You can add additional logic here, such as showing a success message to the user.
      } else {
        setToastmsg("Email not sent");
        console.error("Error sending email:", res.status);
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="rounded-md max-w-[30rem] w-full mx-auto sm:rounded-none md:rounded-2xl p-4 md:p-6 shadow-input bg-white dark:bg-black relative">
      <div className="">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact me
        </h2>

        <form action={emailSend} method="POST">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Full Name</Label>
              <Input
                name="firstname"
                id="firstname"
                placeholder="Rafi Ali"
                type="text"
                onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              name="phone"
              id="phone"
              placeholder="+92 319 026 9909"
              type="tel"
              onChange={(e) => setphone(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>

            <Textarea
              name="message"
              placeholder="Type your message here."
              id="message"
              onChange={(e) => setmsg(e.target.value)}
            />
          </LabelInputContainer>
          <ToasterApp msg={toastmsg} />
        </form>
      </div>
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
