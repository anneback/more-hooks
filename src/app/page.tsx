import Hero from '@/components/Hero';
import Search from '@/components/Search';

type Hero = {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
};

export default async function Page() {
  const response = await fetch('https://api.opendota.com/api/heroes');

  if (!response.ok) {
    throw new Error('failed to fetch dota heroes');
  }
  const heroes = (await response.json()) as Hero[];
  return (
    <div>
      <h1 className="text-3xl">Heroes</h1>
      <Search />
      {heroes.map((hero) => (
        <Hero
          key={hero.id}
          localized_name={hero.localized_name}
          roles={hero.roles}
        />
      ))}
    </div>
  );
}
