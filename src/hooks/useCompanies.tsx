import { fetcher, parsingCompanies } from "@/lib/utils";
import { CompanyType, JobTypes } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const COMPANY_PATH = "/api/company/filter";

const useCompanies = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) return filter.join(",");
    return "";
  }, [filter]);

  const { data, isLoading, error, mutate } = useSWR(
    `${COMPANY_PATH}?category=${paramsCategory}`,
    fetcher,
    {
      revalidateOnMount: false,
    }
  );

  const [companies, setCompanies] = useState<CompanyType[]>([]);

  // console.log(companies);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingCompanies(data, isLoading, error);
    setCompanies(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, error]);

  return {
    companies,
    mutate,
    isLoading,
  };
};

export default useCompanies;
