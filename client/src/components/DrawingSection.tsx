import { useState } from "react";

import { useDraw } from "../hooks/useDraw";

import ColorSelect from "./ColorSelect";
import BruchSelect from "./BrushSelect";
import SongText from "./SongText";

import { FaTrashAlt } from "react-icons/fa";

const DrawingSection = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [brushSize, setBrushSize] = useState(2);
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = brushSize * 2;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, brushSize, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className=" flex select-none flex-col items-center gap-4">
      <SongText />
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        className="h-[800px] w-[800px] rounded-lg border-2 border-neutral-400 shadow-xl"
        width={800}
        height={800}
      />
      <section className="flex gap-2">
        <ColorSelect setColor={setColor} />
        <BruchSelect setBrushSize={setBrushSize} color={color} />
        <div className="flex items-center rounded-lg border-2 border-neutral-400 p-3 shadow-xl">
          <FaTrashAlt
            className="h-8 w-8 cursor-pointer text-red-800"
            onClick={() => clear()}
          />
        </div>
      </section>
    </div>
  );
};

export default DrawingSection;
