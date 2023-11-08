// import house images
import House1 from '../public/img/houses/house1.jpg';
import House2 from '../public/img/houses/house2.jpg';
import House3 from '../public/img/houses/house3.jpg';


// import house large images
import House1Lg from '../public/img/houses/house1Lg.jpg';
import House2Lg from '../public/img/houses/house2Lg.jpg';
import House3Lg from '../public/img/houses/house3Lg.jpg';

// import apartments images
import Apartment1 from '../public/img/apartments/apartment1.jpg';
import Apartment2 from '../public/img/apartments/apartment2.jpg';
import Apartment3 from '../public/img/apartments/apartment3.jpg';

// import apartments large images
import Apartment1Lg from '../public/img/apartments/apartment1Lg.jpg';
import Apartment2Lg from '../public/img/apartments/apartment2Lg.jpg';
import Apartment3Lg from '../public/img/apartments/apartment3Lg.jpg';

// import agents images
import Agent1 from '../public/img/agents/agent1.jpg';
import Agent2 from '../public/img/agents/agent2.jpg';
import Agent3 from '../public/img/agents/agent3.jpg';
import Agent4 from '../public/img/agents/agent4.jpg';
import Agent5 from '../public/img/agents/agent5.jpg';
import Agent6 from '../public/img/agents/agent6.jpg';

export const housesData = [
    {
        id: 1,
        type: 'House',
        name: 'House 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: House1,
        imageLg: House1Lg,
        district: 'Norte',
        address: 'Rua Bela Vista, 123, Mocambinho',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 sq ft',
        year: '2016',
        price: '110000',
        agent: {
          image: Agent1,
          name: 'Pedro Tullert',
          phone: '0123 456 78910',
        },
      },
      {
        id: 2,
        type: 'House',
        name: 'House 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: House2,
        imageLg: House2Lg,
        district: 'Sul',
        address: 'Rua da Felicidade, 123,  Santo Antônio',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 sq ft',
        year: '2016',
        price: '140000',
        agent: {
          image: Agent2,
          name: 'Maria Hawker',
          phone: '0123 456 78910',
        },
      },
      {
        id: 3,
        type: 'House',
        name: 'House 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: House3,
        imageLg: House3Lg,
        district: 'Leste',
        address: 'Rua da União, 123, Ininga',
        bedrooms: '6',
        bathrooms: '3',
        surface: '4200 sq ft',
        year: '2016',
        price: '170000',
        agent: {
          image: Agent3,
          name: 'Ana Smith',
          phone: '0123 456 78910',
        },
      },

      {
        id: 4,
        type: 'Apartament',
        name: 'Apartament 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: Apartment1,
        imageLg: Apartment1Lg,
        district: 'Sudeste',
        address: 'Rua da Liberdade, 123, Lourival Parente',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1200 sq ft',
        year: '2012',
        price: '20000',
        agent: {
          image: Agent4,
          name: 'Lucas Naser',
          phone: '0123 456 78910',
        },
      },
      {
        id: 5,
        type: 'Apartament',
        name: 'Apartament 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: Apartment2,
        imageLg: Apartment2Lg,
        district: 'Centro-Norte',
        address: 'Rua 13 de Maio, 123, Centro',
        bedrooms: '3',
        bathrooms: '1',
        surface: '1000 sq ft',
        year: '2011',
        price: '30000',
        agent: {
          image: Agent5,
          name: 'Sofia Douglass',
          phone: '0123 456 78910',
        },
      },
      {
        id: 6,
        type: 'Apartament',
        name: 'Apartament 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: Apartment3,
        imageLg: Apartment3Lg,
        district: 'Centro-Sul',
        address: 'Rua da Comunidade, 123, Buenos Aires',
        bedrooms: '2',
        bathrooms: '1',
        surface: '1100 sq ft',
        year: '2011',
        price: '40000',
        agent: {
          image: Agent6,
          name: 'Isabela Schenck',
          phone: '0123 456 78910',
        },
      },


]