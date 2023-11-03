import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseCategory = (category) => {
    const { data,refetch } = useQuery({
        queryKey: ['category',category],
        queryFn: () =>
          fetch(`http://localhost:5000/category?category=${category}`).then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })
  return [data, refetch];
};

export default UseCategory;