import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <>
       <h1>{err.status}</h1>
       <h2>{err.statusText}</h2> 
    </>
  )
}

export default Error;