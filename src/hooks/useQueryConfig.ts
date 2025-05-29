import useQueryParams from "./useQueryParams";
import { omitBy, isUndefined } from "../utils/utils-func";

/**
 * Generic type-safe query config hook
 * @param defaultConfig Giá trị mặc định khi không có query
 * @returns Filtered query config theo keys có trong defaultConfig
 */
export default function useGenericQueryConfig<T extends Record<string, any>>(
  defaultConfig: T
): T {
  const queryParams = useQueryParams();

  const mergedConfig = {
    ...defaultConfig,
    ...queryParams,
  };

  return omitBy(mergedConfig, isUndefined) as T;
}
