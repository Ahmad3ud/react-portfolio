import React from "react"

function icon({children, text, action}) {
  return (
    <div onClick={action} className="flex flex-col items-center">
      {children}
      <i className="text-sm text-[#26282b] dark:text-slate-200">{text}</i>
    </div>
  )
}
export default icon
