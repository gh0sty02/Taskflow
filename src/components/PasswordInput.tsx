import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PasswordInput = ({
  htmlFor,
  label,
  name,
  id,
  showHint,
}: {
  htmlFor: string;
  label: string;
  name: string;
  id: string;
  showHint: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Label htmlFor={htmlFor} className="mb-0">
          {label}
        </Label>
      </div>

      <Input name={name} type="password" id={id} />
      {showHint && (
        <p className="text-xs text-muted-foreground">
          Password may contain at least 8 characters, including letters,
          numbers, and symbols.
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
