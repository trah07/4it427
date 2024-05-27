import { useState, useEffect } from 'react';

async function fetchModels() {
  const brand = queryKey[1];
  const res = await fetch(
    `https://vse-react-basic.vercel.app/api/models?brand=${brand}`
  );
  return res.json();
}

export const useModelList = (brand) => {
  const { data, isPending } = useQuery({
    queryKey: ['models', brand],
    queryFn: fetchModels,
    enabled: !brand,
  });

  return [data, isPending];
};
