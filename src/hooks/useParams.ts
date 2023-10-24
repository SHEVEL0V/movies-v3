/** @format */

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export const useParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const removeQueryParams = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  const add = (name: string, value: string) =>
    router.push(
      pathname + "?" + createQueryString(name.toLocaleLowerCase(), value)
    );

  const remove = (name: string) =>
    router.push(pathname + "?" + removeQueryParams(name.toLocaleLowerCase()));

  return { add, remove };
};
