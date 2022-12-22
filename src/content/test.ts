import { Test } from "$components";

const overlayTargetId = "nice-crx-wrapper";

export default () => {
  const target =
    document.querySelector(`#${overlayTargetId}`) ||
    document.createElement("div");

  document.body.appendChild(target);
  target.innerHTML = "";
  target.id = overlayTargetId;
  new Test({ target });
};
