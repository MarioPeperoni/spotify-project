interface BruchSelectProps {
  setBrushSize: (size: number) => void;
}

const BruchSelect = ({ setBrushSize }: BruchSelectProps) => {
  const sizes = [4, 6, 10, 15];
  return (
    <div className="flex items-center justify-around gap-2 rounded-lg border-2 border-neutral-400 p-3 shadow-xl">
      {sizes.map((size) => (
        <div
          key={size}
          style={{ width: size * 4 + "px", height: size * 4 + "px" }}
          className="cursor-pointer rounded-full bg-white"
          onClick={() => setBrushSize(size)}
        />
      ))}
    </div>
  );
};

export default BruchSelect;
