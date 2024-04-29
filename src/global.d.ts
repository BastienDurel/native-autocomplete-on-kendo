
type Nullable<T> = T | undefined | null;
type DataList = {
  count: number,
  data: any[]
};
interface GridStateStore {
  resizable: boolean;
  reorderable: boolean;
  sortable: boolean;
  skip: number;
  take: number;
  filters: GridFilters;
  columns?: GridColumnProps[];
  total: number;
  data?: any[];
}
type idValue = { id: String; text: String; };
type iValue = { id: number; text: String; };
interface GridFilters {
  database?: string[];
}
