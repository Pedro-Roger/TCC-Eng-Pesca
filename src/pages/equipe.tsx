import { Button, Flex, Text, Image } from '@chakra-ui/react';
import ModalCard from '../components/my components/modalCard';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

interface Card {
  name: string;
  role: string;
  age: string;
  photo: string | null;
}

const Equipe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      try {
        setCards(JSON.parse(savedCards));
      } catch (error) {
        console.error('Erro ao carregar cards do localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cards', JSON.stringify(cards));
    } catch (error) {
      console.error('Erro ao salvar cards no localStorage:', error);
    }
  }, [cards]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addCard = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
    closeModal();
  };

  const removeCard = (index: number) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <Flex
      w={'100%'}
      minH={'100vh'}
      gap={'20px'}
      flexDirection={'column'}
      p={['10px', '20px', '40px']}
      overflowX="hidden"
    >
      <Text
        ml={['10px', '20px', '40px']}
        mt={['10px', '20px', '40px']}
        fontSize={['25px', '30px', '35px']}
        color={'aliceblue'}
      >
        Equipe
      </Text>

      <Flex
        wrap="wrap"
        gap="20px"
        ml={['10px', '20px', '40px']}
        display={['none', 'none', 'flex']}
      >
        {cards.map((card, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="linear-gradient(to bottom, #091219, #10243E)"
            border="1px solid aliceblue"
            borderRadius="8px"
            p="20px"
            w="200px"
          >
            {card.photo && (
              <Image
                src={card.photo}
                alt="Foto do membro"
                boxSize="100px"
                borderRadius="full"
                mb="10px"
              />
            )}
            <Text color="aliceblue" fontSize="18px">
              {card.name}
            </Text>
            <Text color="aliceblue" fontSize="14px">
              {card.role}
            </Text>
            <Text color="aliceblue" fontSize="14px">
              {card.age} anos
            </Text>
            <Button
              bg="#1d2757"
              color="aliceblue"
              mt="10px"
              w="100px"
              onClick={() => removeCard(index)}
            >
              Remover
            </Button>
          </Flex>
        ))}
      </Flex>

      <Flex
        display={['flex', 'flex', 'none']}
        w="100%"
        justifyContent="center"
        alignItems="center"
        px="20px"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ width: '100%', maxWidth: '300px' }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Flex
                direction="column"
                align="center"
                bg="linear-gradient(to bottom, #091219, #10243E)"
                border="1px solid aliceblue"
                borderRadius="8px"
                p="20px"
                w="100%"
                maxW="300px"
                mx="auto"
              >
                {card.photo && (
                  <Image
                    src={card.photo}
                    alt="Foto do membro"
                    boxSize="100px"
                    borderRadius="full"
                    mb="10px"
                  />
                )}
                <Text color="aliceblue" fontSize="18px">
                  {card.name}
                </Text>
                <Text color="aliceblue" fontSize="14px">
                  {card.role}
                </Text>
                <Text color="aliceblue" fontSize="14px">
                  {card.age} anos
                </Text>
                <Button
                  bg="#1d2757"
                  color="aliceblue"
                  mt="10px"
                  w="100px"
                  onClick={() => removeCard(index)}
                >
                  Remover
                </Button>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      <Flex gap={'20px'}>
        <Button
          bg={'#00000d'}
          color={'aliceblue'}
          boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
          ml={['10px', '20px']}
          mt={['10px', '20px']}
          w={'120px'}
          onClick={openModal}
        >
          Adicionar
        </Button>
      </Flex>

      {isModalOpen && (
        <Flex
          position={'fixed'}
          top={0}
          left={0}
          w={'100%'}
          h={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          bg={'rgba(0, 0, 0, 0.5)'}
          zIndex={1}
        >
          <ModalCard closeModal={closeModal} addCard={addCard} />
        </Flex>
      )}
    </Flex>
  );
};

export default Equipe;
