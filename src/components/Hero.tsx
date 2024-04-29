type HeroProps = {
  localized_name: string;
  roles: string[];
};

const Hero = (props: HeroProps) => {
  const { localized_name, roles } = props;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xxl">{localized_name}</h2>
      <h3 className="text-base">{roles}</h3>
    </div>
  );
};

export default Hero;
