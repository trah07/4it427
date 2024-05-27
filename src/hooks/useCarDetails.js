import { useParams } from 'react-router-dom';
import useCarDetails from '../hooks/useCarDetails';

const CarDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useCarDetails(id);

  return (
    <div>
      <div>{/* Carousel */}</div>
      <h2>{data.brand.name}</h2>
      <h2>{data.model.name}</h2>
    </div>
  );
};

export default CarDetails;
