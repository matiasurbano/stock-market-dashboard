"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { PostFeed } from "./PostFeed";

export default function Page() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });
  return (
    <section>
      <h1>Stocks title</h1>;
      <Suspense fallback={<p>Loading FALLBACK feed...</p>}>
        <PostFeed />
      </Suspense>
    </section>
  );
}
