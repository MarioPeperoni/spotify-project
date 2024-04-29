import darkenColor from "../utils/darkenColors";

interface ColorSelectProps {
  setColor: (color: string) => void;
}

const ColorSelect = ({ setColor }: ColorSelectProps) => {
  const colors = [
    "#ffffff",
    "#c1c1c1",
    "#ef270d",
    "#ff7112",
    "#ffe32c",
    "#00cc25",
    "#0afb93",
    "#01b1fd",
    "#221fd3",
    "#a322ba",
    "#df69a8",
    "#ffac8e",
    "#a0512d",
  ];

  return (
    <div className="flex flex-col rounded-lg border-2 border-neutral-400 p-3 shadow-xl">
      <div className="flex">
        {colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="h-8 w-8 cursor-pointer"
            onClick={() => setColor(color)}
          />
        ))}
      </div>
      <div className="flex">
        {colors.map((color) => {
          let darkerColor = darkenColor(color, 40);
          return (
            <div
              key={darkerColor}
              style={{ backgroundColor: darkerColor }}
              className="h-8 w-8 cursor-pointer"
              onClick={() => setColor(darkerColor)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelect;
