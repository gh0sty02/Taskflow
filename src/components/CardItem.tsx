import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { IData } from "@/lib/utils";
const CardItem = ({ card }: { card: IData }) => {
  return (
    <Card className="font-sans bg-emerald-800 border-none text-white">
      <CardHeader className="flex text-base font-semibold gap-0">
        <h2 className="font-bold uppercase tracking-wide">
          {card.first_name} {card.last_name}
        </h2>
      </CardHeader>
      <CardContent className="text-sm">
        <p>{card.gender}</p>
        <p>{card.email}</p>
      </CardContent>
    </Card>
  );
};

export default CardItem;
