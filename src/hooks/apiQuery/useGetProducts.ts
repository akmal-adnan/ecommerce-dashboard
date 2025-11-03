import axiosClient from '@/lib/axiosClient';
import { queryKeys } from '@/lib/queryKeys';
import { ProductResponse } from '@/types/product';

import { useQuery } from '@tanstack/react-query';

type Props = {
  skip?: number;
  limit?: number;
};

// fetch function
const fetchApi = async ({ skip, limit }: Props): Promise<ProductResponse> => {
  const { data } = await axiosClient.get(`/products`, {
    params: {
      skip: `${skip}`,
      limit: `${limit}`,
    },
  });
  return data;
};

// query hook
export const useGetProducts = (props: Props) => {
  const { skip = 0, limit = 10 } = props;

  return useQuery({
    queryKey: queryKeys.productsList(skip, limit),
    queryFn: () => fetchApi({ skip, limit }),
  });
};
