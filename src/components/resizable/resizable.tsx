import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizableProps = {};
  } else {
    resizableProps = {};
  }

  return (
    <ResizableBox
      minConstraints={[Infinity, 24]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      width={Infinity}
      height={300}
      resizeHandles={['s']}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
