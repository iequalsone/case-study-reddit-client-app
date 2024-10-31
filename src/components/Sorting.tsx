export const Sorting = ({
  onSortChange,
}: {
  onSortChange: (sort: string) => void;
}) => (
  <select onChange={(e) => onSortChange(e.target.value)}>
    <option value="hot">Hot</option>
    <option value="new">New</option>
    <option value="top">Top</option>
    <option value="rising">Rising</option>
  </select>
);
