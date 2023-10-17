
import { useEffect, useState } from 'react'


interface DataItem {
  [key: string]: string  ;
}

interface FilterDataHook {
  filteredData: DataItem[];
  setFilters: React.Dispatch<React.SetStateAction<any>>
  filterData: () => void;
  setFilteredData: React.Dispatch<React.SetStateAction<any>>
}

function useFilterData(data: DataItem[], filtersObj:DataItem): FilterDataHook {
  const [filters, setFilters] = useState(filtersObj);
  const [filteredData, setFilteredData] = useState(data);

  const filterData = () => {
    for (const property in filters) {
      if(filters[property]){
        
        const filtered = data.filter((item) =>  item[property].includes(filters[property])  || item[property] == filters[property]);
        setFilteredData(filtered);
      }
    }
  };

  useEffect(() => {
    filterData()
  }, [filters])

  return {
    setFilters,
    filteredData,
    filterData,
    setFilteredData
  };
}

export default useFilterData;