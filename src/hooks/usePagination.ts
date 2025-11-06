import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

interface UsePaginationProps {
  limit: number;
  total?: number;
}

interface UsePaginationReturn {
  page: number;
  skip: number;
  totalPages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const usePagination = ({
  limit,
  total,
}: UsePaginationProps): UsePaginationReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read page from URL query params, default to 1
  const pageParam = searchParams.get('page');
  const page = useMemo(
    () => (pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1),
    [pageParam]
  );

  // Calculate skip based on page number
  const skip = useMemo(() => (page - 1) * limit, [page, limit]);

  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      // Update URL query params without full page reload
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', value.toString());
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const totalPages = useMemo(
    () => (total ? Math.ceil(total / limit) : 0),
    [total, limit]
  );

  return {
    page,
    skip,
    totalPages,
    handlePageChange,
  };
};
