import { Flow, Props as FlowProps } from './Flow';
import { getData } from './apis/getData';

export const FlowContainer = async () => {
  const data = await getData();

  const initialNodes: FlowProps['initialNodes'] = data.map((data, i) => {
    return {
      id: String(data.id),
      type: 'customNode',
      data: { title: data.title, body: data.body },
      position: { x: 500, y: (i + 1) * 300 },
    };
  });

  const initialEdges: FlowProps['initialEdges'] = [
    { id: '1-2', source: String(data[0].id), target: String(data[1].id) },
  ];

  return <Flow initialNodes={initialNodes} initialEdges={initialEdges} />;
};
