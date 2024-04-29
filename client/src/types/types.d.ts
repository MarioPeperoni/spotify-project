type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type Message = {
  from: string;
  message: string;
};

type Point = { x: number; y: number };
