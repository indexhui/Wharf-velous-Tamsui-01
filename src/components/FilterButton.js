import { Button } from '@chakra-ui/react';

const FilterButton = props => {
  const { activeMonth, setActiveMonth, value } = props;
  const isActive = value === activeMonth ? 'active' : '';

  return (
    <Button
      rounded="full"
      shadow="sm"
      borderWidth="1px"
      px={{ base: '10px', lg: '20px' }}
      fontWeight="700"
      borderColor={isActive ? '#fff' : 'gray.300'}
      color={isActive ? 'white' : 'grey.800'}
      bg={isActive ? 'umi' : 'white'}
      onClick={() => setActiveMonth(value)}
      _focus={{ border: 'gray.300', bg: '#508BAE' }}
      _active={{
        bg: '#508BAE',
        // transform: 'scale(0.98)',
        // borderColor: '#bec3c9',
      }}
      _hover={{ bg: '#508BAE', color: 'white' }}
    >
      {props.label}
    </Button>
  );
};

export default FilterButton;
