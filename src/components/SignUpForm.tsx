"use client";

import { Icons } from "./Icon";
import { ImageUpload } from "./ImageUpload";
import { Input } from "./Input";

export const SignUpForm = () => {
  return (
    <div className="flex-1 py-[50px] pr-[50px] pl-[75px]">
      <form className="flex w-full flex-col gap-4 rounded-2xl border border-accent bg-white p-5">
        <h2 className="text-[22px] font-bold">Upgrade Your Skills</h2>
        <ImageUpload />
        <Input
          label="Complate Name"
          placeholder="Type your full name"
          type="text"
          icon={<Icons.profile />}
        />
        <Input
          label="Occupation"
          placeholder="Type your valid email address"
          type="text"
          icon={<Icons.briefcase />}
        />
        <Input
          label="Email Address"
          placeholder="Type your valid email address"
          type="email"
          icon={<Icons.sms />}
        />
        <Input
          label="Password"
          placeholder="Type your password"
          type="password"
          icon={<Icons.shield />}
        />
        <Input
          label="Confirm Password"
          placeholder="Type your confirm password"
          type="password"
          icon={<Icons.shield />}
        />
        <button type="submit" className="btn btn-primary py-3.5">
          Create My Account
        </button>
      </form>
    </div>
  );
};
