import React, { useState, useRef, useEffect, useCallback } from 'react';

// referencing https://dev.to/ankursheel/react-component-to-fraw-on-a-page-using-hooks-and-typescript-2ahp

interface CanvasProps {
  width: number;
  height: number;
}

type Coordinate = {
  x: number;
  y: number;
};

/* global HTMLCanvasElement, MouseEvent */
/* eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": false }] */
const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIspainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );

  /* eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": false }] */
  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return undefined;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop
    };
  };

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIspainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = 'red';
      context.lineJoin = 'round';
      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIspainting(false);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    const removeListner = () => {
      canvas.removeEventListener('mousedown', startPaint);
    };
    removeListner();
  }, [startPaint]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    const removeListner = () => {
      canvas.removeEventListener('mousemove', paint);
    };
    removeListner();
  }, [paint]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    const removeListner = () => {
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
    removeListner();
  }, [exitPaint]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
};

export default Canvas;
