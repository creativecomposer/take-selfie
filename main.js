import "./style.css";
import { drawVideo, getVideo } from "./camera";

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const selfieButton = document.querySelector("#takeSelfie");

  selfieButton.addEventListener("click", function () {
    drawVideo(video, canvas);
  });
})();
