import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="plasmo-z-50 plasmo-flex plasmo-rounded-lg  plasmo-fixed plasmo-top-80 plasmo-left-0">
      {/* <CountButton /> */}
    </div>
  )
}

export default PlasmoOverlay
