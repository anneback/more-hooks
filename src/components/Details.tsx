type DetailsProps = {
  name: string;
  primary_attr: string;
  attack_type: string;
  legs: number;
};

// https://api.opendota.com/api/heroStats

const Details = (props: DetailsProps) => {
  const { name, primary_attr, attack_type, legs } = props;
  return (
    <div>
      <h2 className="text-xxl">{primary_attr}</h2>
      <h2 className="text-xxl">{attack_type}</h2>
      <h2 className="text-xxl">{legs}</h2>
      <p className="text-xs italic text-slate-500">{name}</p>
    </div>
  );
};

export default Details;
