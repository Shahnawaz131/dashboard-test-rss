"use client"

export const Select = ({ datas, value, setValue, style = {} }) => {
  return (
    <div className="relative">
      <select
        className={`appearance-none bg-[#1A191E] border border-[#1F1E23] text-white rounded-xl px-4 py-3 pr-10 text-sm font-medium hover:border-[#2A2930] focus:border-[#2A2930] focus:outline-none transition-all duration-200 min-w-[140px] ${style}`}
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
      >
        {datas.map((item, idx) => (
          <option key={idx} value={item.value} className="bg-[#1A191E] text-white">
            {item.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-4 h-4 text-[#7E8082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
