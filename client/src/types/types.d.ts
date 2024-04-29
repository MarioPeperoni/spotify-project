type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type Message = {
  from: string;
  message: string;
};

type Song = {
  name: string;
  imageUrl: string;
  previewAudio: HTMLAudioElement;
};

type Point = { x: number; y: number };
