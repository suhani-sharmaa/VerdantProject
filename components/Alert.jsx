import { useEffect, useMemo, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const colors = {
  Success: {
    bg: "#9effb4",
    text: "#0c5c1f",
  },
  Error: {
    bg: "#ff9e9e",
    text: "#5c0c0c",
  },
};

export default function Alert({ type, message, view }) {

  const dis = useMemo(view=>view===''?'none':view);
  const [display, setDisplay] = useState(dis);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setDisplay(view); // Ensure display is updated from parent state
  }, [view]);

  const color = {
    bg: type ? colors[type].bg : "#ff9e9e",
    text: type ? colors[type].text : "#5c0c0c",
  };

  const handleClick = () => {
    setOpacity(0); // Start fading out
    setTimeout(() => {
      setDisplay("none"); // Hide after fade out
    }, 2000); // Duration matches the CSS transition
  };

  useEffect(() => {
      setTimeout(() => {
        handleClick();
      }, 2500);
  }, [display]); // Watch for display changes

  return ( 
    <div
      className={`fixed top-24 right-12 rounded-md flex justify-between items-center z-50 text-md duration-700 text-md`}
      style={{
        backgroundColor: color.bg,
        color: color.text,
        opacity: opacity,
        height: "3.5rem",
        minWidth: "20rem",
        display: display, // Set display style dynamically
      }}
    >
      <p className="mx-4">{message ? message : "Something is Wrong"}</p>
      <RxCross1
        onClick={handleClick}
        className="mx-4 hover:scale-125 duration-300 cursor-pointer"
      />
    </div>
  );
}
