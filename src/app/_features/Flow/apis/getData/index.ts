type Data = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const getData = async (): Promise<Data[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
