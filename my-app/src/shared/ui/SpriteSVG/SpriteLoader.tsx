import { useEffect } from "react";

export const SpriteLoader = () => {
  useEffect(() => {
    if (document.querySelector("#sprite-container")) {
      return;
    }

    fetch("/sprite.svg")
      .then((response) => response.text())
      .then((svg) => {
        const div = document.createElement("div");
        div.innerHTML = svg;
        div.style.display = "none";
        div.id = "sprite-container";
        document.body.insertBefore(div, document.body.firstChild);
      })
      .catch((error) => console.error("Failed to load sprite:", error));
  }, []);

  return null;
};
