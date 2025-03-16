import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
const CardItem = () => {
  return (
    <Card className="font-sans bg-emerald-800 border-none text-white">
      <CardHeader className="flex text-base font-semibold gap-0"></CardHeader>
      <CardContent className="text-sm"></CardContent>
    </Card>
  );
};

export default CardItem;
