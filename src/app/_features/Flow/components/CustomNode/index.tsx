import { Handle, Position, NodeProps, Node } from 'reactflow';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type NodeData = {
  title: string;
  body: string;
};

export type CustomNodeData = Node<NodeData>;

export const CustomNode = ({ data }: NodeProps<NodeData>) => {
  const { title, body } = data;
  return (
    <div className='p-3'>
      <Handle type='target' position={Position.Top} />
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{body}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Handle type='source' position={Position.Bottom} id='a' />
      <Handle type='source' position={Position.Bottom} id='b' />
    </div>
  );
};
