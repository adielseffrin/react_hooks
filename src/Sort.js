export const SortType = {ASC : 'asc', DESC : 'desc'};

function Sort({onSort}){
  return (
    <>
      <a onClick={() => onSort(SortType.ASC)} style={{cursor: "pointer"}}><i class="far fa-arrow-alt-circle-up" style={{fontSize: "32px"}}></i></a>
      <a onClick={() => onSort(SortType.DESC)} style={{cursor: "pointer"}}><i class="far fa-arrow-alt-circle-down" style={{fontSize: "32px"}}></i></a>
    </>
  );
};

export default Sort;