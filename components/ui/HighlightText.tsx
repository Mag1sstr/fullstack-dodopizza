const HighlightText = ({
  text,
  searchValue,
}: {
  text: string;
  searchValue: string;
}) => {
  const index = text.toLowerCase().indexOf(searchValue.toLowerCase());
  if (index === -1) return text;
  return (
    <p>
      {text.slice(0, index)}
      <span className="font-bold bg-[#FFDB8B]">
        {text.slice(index, index + searchValue.length)}
      </span>
      {text.slice(index + searchValue.length, text.length)}
    </p>
  );
};

export default HighlightText;
