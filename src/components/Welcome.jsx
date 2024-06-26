import Alert from 'react-bootstrap/Alert';

const Welcome= (props)=>(
    <>
      {[
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center'>
         Benvenuto nel negozio Bello!
        </Alert>
      ))}
      <h2 className='text-center'>{props.sottotitolo}</h2>
    </>
  );


export default Welcome;