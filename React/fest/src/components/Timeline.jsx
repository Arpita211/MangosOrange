import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function TimelineSlider() {
  const [range, setRange] = useState([2010, 2020]);

  return (
    <div className="p-6 max-w-md mx-auto">
      
      <Slider
        value={range}
        onChange={(e, newValue) => setRange(newValue)}
        valueLabelDisplay="auto"
        min={2000}
        max={2025}
      />
      <p className="mt-3">Range: {range[0]} – {range[1]}</p>
    </div>
  );
}
