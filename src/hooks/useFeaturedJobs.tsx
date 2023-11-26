import { fetcher, parsingJobs } from "@/lib/utils";
import { JobTypes } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/featured", fetcher);

  const [jobs, setJobs] = useState<JobTypes[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error]);

  return { jobs, isLoading, error };
};

export default useFeaturedJobs;
