import { useEffect, useMemo, useState } from 'react';
import { Container, Table } from '@mantine/core';
import { get } from '@/utils/api';
import AnimalRow from '@/components/AnimalRow';

const AnimalsPage: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const rows = useMemo(() => animals.map((animal) => <AnimalRow {...animal} />), [animals]);

  useEffect(() => {
    get<Animal[]>('/animals').then((res) => setAnimals(res));

    return () => {
      setAnimals([]);
    };
  }, []);

  return (
    <Container component="main">
      <h1>Animals</h1>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Breed</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
};

export default AnimalsPage;
