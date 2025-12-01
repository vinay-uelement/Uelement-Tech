import Image from 'next/image';

const Icon = ({ name, className = '', size = 30, alt = '' }) => {
  return (
    <Image
      src={`/icons/footer/${name}.svg`}
      alt={alt}
      className={className}
      width={size}
      height={size}
    />
  );
};

export default Icon;
