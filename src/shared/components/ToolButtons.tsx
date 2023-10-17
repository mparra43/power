

import { ActionData, Buttons } from "../types";

interface ToolButtonsProps {
  buttons: Buttons[]
  element: any
  onClick: (data:ActionData) => void
}

export const ToolButtons: React.FC<ToolButtonsProps> = ({ buttons, element, onClick }) => {
  return (
    <div className='d-flex'>
      {buttons.map(({ button, action }, index) => (
        <div key={index} onClick={()=> onClick({action, element})}>
          {button}
        </div>
      ))}
    </div>
  )
}
