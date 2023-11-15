import React from "react"

interface Props {
  open: boolean
  onClose: () => void
  size: string
  children: React.ReactNode
}

export default function Modal({ open, onClose, size, children }: Props) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-lg bg-white p-6 shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="hover:bg-gray50 absolute right-2 top-2 rounded-md border border-neutral-200 bg-white px-2 py-1 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
