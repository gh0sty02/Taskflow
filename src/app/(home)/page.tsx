import CardItem from "@/components/CardItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <section className="flex flex-col max-w-6xl items-center mx-auto mt-8">
      <div className="flex items-center gap-4">
        <Input className="px-2 py-4 text-gray-800 font-medium focus:outline-none focus:ring-0 focus:border-gray-300" />
        <Button
          variant="ghost"
          className="font-semibold text-gray-700 uppercase text-sm"
          type="button"
        >
          Submit
        </Button>
      </div>
      <div className="p-4 mt-8 grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {[...Array(8)].map((_, index) => (
          <CardItem key={index} />
        ))}
      </div>
    </section>
  );
}
