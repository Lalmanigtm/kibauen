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
// import { prisma } from "@/lib/db";

// const page = async () => {
//   const users = await prisma.user.findMany();
//   return <div>{JSON.stringify(users, null, 2)}</div>;
// };

// export default page;

// "use client";
// import { useTRPC } from "@/trpc/client";
// import React from "react";

// const page = () => {
//   const trpc = useTRPC();
//   trpc.createdAt.queryOptions({ text: "Hello" });
//   return <div>This is the home page</div>;
// };

// export default page;

// how to get data DATA from API using @tanstack/react query and render data inside <div>....</div>. this is the simple way to fetch data. this is the experiment of tRPC with client component.
// "use client";

// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";

// const page = () => {
//   // get data DATA from API using @tanstack/react query
//   const trpc = useTRPC();
//   const { data } = useQuery(trpc.createdAt.queryOptions({ text: "Lal mani" }));
//   return (
//     <div>
//       {/* render data inside <div>....</div>. */}
//       {JSON.stringify(data)}
//     </div>
//   );
// };

// export default page;

// experiment of tRPC with Server component.

import React, { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Client } from "./client";

const page = async () => {
  const queryClient = getQueryClient();
  void queryClient.fetchQuery(
    trpc.createdAt.queryOptions({ text: "Prefetch server" }),
  );
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default page;
