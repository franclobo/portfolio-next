import React from 'react'
import { Themes } from '@/types'


export const ThemesItems:React.FC<Themes> = ({id, color, icon:IconComponent, onClick}) => {
  return (
    <div
      key={id}
      onClick={() => onClick && onClick(color)}
      className="cursor-pointer m-1"
    >
      <IconComponent style={{ color }} className="w-6 h-6" />
    </div>
  );
}
