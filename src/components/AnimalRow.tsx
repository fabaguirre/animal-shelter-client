import { Badge, Table } from '@mantine/core';

const AnimalRow: React.FC<Animal> = ({ age, breed, id, name, status, type }) => (
  <Table.Tr key={id}>
    <Table.Td>{name}</Table.Td>
    <Table.Td>{age}</Table.Td>
    <Table.Td>{breed}</Table.Td>
    <Table.Td>{type}</Table.Td>
    <Table.Td>
      <Badge color={status === 'available' ? 'green' : 'red'}>{status}</Badge>
    </Table.Td>
  </Table.Tr>
);

export default AnimalRow;
