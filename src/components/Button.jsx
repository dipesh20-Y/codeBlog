import React from 'react'

function Button({
    type,
    text
}) {
  return (
    <div>
      <button
      className="mt-16 border py-4 px-8 bg-gray-700 text-white rounded-2xl hover:bg-gray-900 transition-all mr-8 hover:scale-105 hover:shadow-xl"
      type={type}>{text}</button>
    </div>
  )
}

export default Button
