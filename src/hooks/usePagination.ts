import { useMemo } from "react";

export type PaginationItem = number | "DOTS";

interface UsePaginationProps {
  currentPage: number;
  totalPageCount: number;
  siblingCount?: number;
}

export function usePagination({
  currentPage,
  totalPageCount,
  siblingCount = 2,
}: UsePaginationProps): PaginationItem[] {
  return useMemo(() => {
    const range: PaginationItem[] = [];
    let dotBefore = false;
    let dotAfter = false;

    for (let i = 1; i <= totalPageCount; i++) {
      if (
        currentPage <= siblingCount * 2 + 1 &&
        i > currentPage + siblingCount &&
        i < totalPageCount - siblingCount + 1
      ) {
        if (!dotAfter) {
          dotAfter = true;
          range.push("DOTS");
        }
      } else if (
        currentPage > siblingCount * 2 + 1 &&
        currentPage < totalPageCount - siblingCount * 2
      ) {
        if (i < currentPage - siblingCount && i > siblingCount) {
          if (!dotBefore) {
            dotBefore = true;
            range.push("DOTS");
          }
        } else if (
          i > currentPage + siblingCount &&
          i < totalPageCount - siblingCount + 1
        ) {
          if (!dotAfter) {
            dotAfter = true;
            range.push("DOTS");
          }
        } else {
          range.push(i);
        }
      } else if (
        currentPage >= totalPageCount - siblingCount * 2 &&
        i > siblingCount &&
        i < currentPage - siblingCount
      ) {
        if (!dotBefore) {
          dotBefore = true;
          range.push("DOTS");
        }
      } else {
        range.push(i);
      }
    }

    return range;
  }, [currentPage, totalPageCount, siblingCount]);
}
