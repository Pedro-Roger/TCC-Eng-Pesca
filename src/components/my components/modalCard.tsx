import { Button, Flex, Text, Input, Image } from '@chakra-ui/react';
import { useState } from 'react';

const ModalCard = ({ closeModal, addCard }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const newCard = { name, role, age, photo };
    addCard(newCard);
  };

  return (
    <Flex
      w={['90%', '400px']}
      h={'auto'}
      flexDirection={'column'}
      gap={'20px'}
      alignItems={'center'}
      bg={'linear-gradient(to bottom, #091219, #10243E)'}
      border={'1px solid aliceblue'}
      borderRadius={'8px'}
      p={'20px'}
    >
      <Text color={'aliceblue'} fontSize={'20px'}>
        Adicionar Membro
      </Text>
      <Input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Cargo"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Input
        placeholder="Idade"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && (
        <Image src={photo} alt="Preview" boxSize="100px" borderRadius="full" />
      )}
      <Flex gap={'30px'}>
        <Button
          bg={'#00000d'}
          color={'aliceblue'}
          w={'120px'}
          onClick={handleSave}
        >
          Salvar
        </Button>
        <Button
          bg={'#1d2757'}
          color={'aliceblue'}
          onClick={closeModal}
          w={'120px'}
        >
          Cancelar
        </Button>
      </Flex>
    </Flex>
  );
};

export default ModalCard;
