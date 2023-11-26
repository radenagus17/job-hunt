import { fetcher, parsingJobs } from "@/lib/utils";
import { JobTypes } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const JOBS_PATH = "/api/jobs/filter";

const useJobs = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) return filter.join(",");
    return "";
  }, [filter]);

  const { data, isLoading, error, mutate } = useSWR(
    `${JOBS_PATH}?category=${paramsCategory}`,
    fetcher,
    {
      revalidateOnMount: false,
    }
  );

  const [jobs, setJobs] = useState<JobTypes[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error]);

  return {
    jobs,
    mutate,
    isLoading,
  };
};

export default useJobs;
