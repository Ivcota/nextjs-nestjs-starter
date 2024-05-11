"use client";

import { useQuery } from "@tanstack/react-query";

const getHealthCheck = async () => {
  return (await fetch(`${process.env.NEXT_PUBLIC_BASE_ROUTE}`).then((res) =>
    res.json()
  )) as any[];
};

const HealthCheckPage = () => {
  const { data } = useQuery<any[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getHealthCheck(),
    staleTime: 5 * 1000,
  });

  return (
    <div>
      Health Check
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HealthCheckPage;
