"use client";
import React, { useEffect } from "react";
import Granim from "granim";

export default function BackgroundAnimation() {
  useEffect(() => {
    new Granim({
      element: "#granim-canvas",
      name: "granim",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#2a1e3e", "#0f0b1e"],
            ["#3b2a55", "#1a132b"],
            ["#483a63", "#574a76"],
            ["#1d002c", "#574a76"],
          ],
        },
      },
    });
  }, []);

  return (
    <canvas
      id="granim-canvas"
      className="w-full h-screen fixed top-0 left-0 -z-10"
    />
  );
}
