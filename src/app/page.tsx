// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// // import { Chart } from "@/components/ui/chart";

// const page = () => {
//   return (
//     <div className="text-red-600 font-extrabold text-4xl">
//       this is a page section
//       <Card />
//       <Button title="rammu" variant={"secondary"} />
//       <Calendar />

//     </div>
//   );
// };

// export default page;
import { prisma } from "@/lib/db";

const page = async () => {
  const users = await prisma.user.findMany();
  return <div>{JSON.stringify(users, null, 2)}</div>;
};

export default page;
