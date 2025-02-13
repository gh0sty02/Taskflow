import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const CardItem = () => {
  return (
    <Card className="w-full">
      <CardHeader>Card 1</CardHeader>
      <CardContent>This is the Card Content</CardContent>
    </Card>
  );
};

export default CardItem;
