import { Watch } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export default function Loader() {
  return (
    <Loading>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="grey"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Loading>
  );
}
