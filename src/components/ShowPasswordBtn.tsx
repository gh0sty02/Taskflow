import { EyeOff, EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ShowPasswordBtn = ({
  setShowPassword,
  showPassword,
}: {
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
}) => {
  return (
    <Button
      type="button"
      className="absolute right-0 hover:bg-transparent"
      onClick={() => setShowPassword(!showPassword)}
      variant="ghost"
      size="icon"
    >
      {showPassword ? (
        <EyeOff className="h-1 w-1" />
      ) : (
        <EyeIcon className="h-1 w-1" />
      )}
    </Button>
  );
};

export default ShowPasswordBtn;
