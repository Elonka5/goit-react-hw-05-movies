// import { Puffloader } from 'react-spinners';
import { RevolvingDot } from 'react-loader-spinner';
import errorImg from '../../images/old-3d-glasses-svgrepo-com.png';
import { LoaderBackdrop, LoaderImage } from './LoaderStyled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RevolvingDot
        radius="68"
        strokeWidth="5"
        color="#592e3e"
        secondaryColor="#ffffff"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <LoaderImage src={errorImg} alt="cinema-glasses" />
    </LoaderBackdrop>
  );
};

<RevolvingDot
  radius="45"
  strokeWidth="5"
  color="red"
  secondaryColor="green"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>;
