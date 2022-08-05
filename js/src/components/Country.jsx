export default function Country({ country, flag }) {
  return (
    <div className="country">
    <div className="team__flag">{flag}</div>
      <h3 className="team__country">{country}</h3>
    </div>
  );
}
