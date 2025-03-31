import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const TextInput = ({
  htmlFor,
  label,
  id,
  name,
  placeholder,
}: {
  htmlFor: string;
  label: string;
  id: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Label htmlFor={htmlFor} className="mb-0">
          {label}
        </Label>
      </div>
      <Input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="p-2 placeholder:text-sm px-2"
      />
    </div>
  );
};

export default TextInput;
