import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
// import { Chart } from "@/components/ui/chart";

const page = () => {
  return (
    <div className="text-red-600 font-extrabold text-4xl">
      this is a page section
      <Card />
      <Button title="rammu" variant={"secondary"} />
      <Calendar />
      {/* <Chart /> */}
    </div>
  );
};

export default page;
