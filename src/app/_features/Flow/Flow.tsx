'use client';

import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  applyNodeChanges,
  OnNodesChange,
  applyEdgeChanges,
  OnEdgesChange,
  addEdge,
  OnConnect,
  Node,
  Edge,
  Controls,
} from 'reactflow';
import { CustomNode, CustomNodeData } from './components/CustomNode';
import 'reactflow/dist/style.css';

export type Props = {
  initialNodes: CustomNodeData[];
  initialEdges: Edge[];
};

export const Flow = ({ initialNodes, initialEdges }: Props) => {
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      className='bg-slate-900'
      panOnScroll
    >
      <Controls />
    </ReactFlow>
  );
};
