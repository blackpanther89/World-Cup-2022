import Country from './Country';

export default function Pot({ countries, title }) {
  const items = countries.map((item) => (
    <Country key={item.country} flag={item.flag} country={item.country} />
  ));

  return (
    <div className='pot'>
      <h2>{title}</h2>
      <div>{items}</div>
    </div>
  );
}
