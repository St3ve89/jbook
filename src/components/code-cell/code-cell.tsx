import { useEffect } from 'react';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { Cell } from '../../redux';
import CodeEditor from '../code-editor/code-editor';
import Preview from '../preview/preview';
import Resizable from '../resizable/resizable';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cell.content);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.content, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: 'calc(100% - 10px)', display: 'flex' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {bundle && <Preview code={bundle.code} error={bundle.error} />}
      </div>
    </Resizable>
  );
};

export default CodeCell;
