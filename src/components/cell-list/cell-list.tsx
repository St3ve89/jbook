import { useTypedSelector } from '../../hooks/use-typed-selector';

const CellList: React.FC = () => {
  const cellState = useTypedSelector((state) => state);

  console.log({ cellState });

  return <div>Cell List</div>;
};

export default CellList;
