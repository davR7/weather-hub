type FlagProps = {
  country: string;
  style: 'flat' | 'shiny';
  size?: 16 | 24 | 32 | 48 | 64;
};

const CountryFlag: React.FC<FlagProps> = ({ country, style, size = 64 }) => {
  return <img src={`https://flagsapi.com/${country}/${style}/${size}.png`} alt={`flag ${country}`} />;
};

export default CountryFlag;
