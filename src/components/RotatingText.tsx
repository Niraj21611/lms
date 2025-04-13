import { TypeAnimation } from 'react-type-animation';

const TypewriterText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Build', 
        2000,       
        '',         
        500,
        'Scale',
        2000,
        '',
        500,
        'Manage',
        2000,
        '',
        500,
      ]}
      wrapper="span"
      speed={10}
      deletionSpeed={10}
      repeat={Infinity}
      cursor={true}
      className="custom-cursor"
      style={{
        backgroundColor: '#009966',
        fontSize: '3rem',
        // lineHeight: '1.1111',
        display: 'inline-block',
        whiteSpace: 'pre',
      }}
    />
  );
};

export default TypewriterText;
