interface WaveDividerProps {
  flip?: boolean
}

export function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className="w-full overflow-hidden">
      <svg
        className={`w-full h-12 md:h-24 ${flip ? "transform rotate-180" : ""}`}
        viewBox="0 0 1440 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 24.6667L60 30.8333C120 37 240 49.3333 360 49.3333C480 49.3333 600 37 720 30.8333C840 24.6667 960 24.6667 1080 37C1200 49.3333 1320 74 1380 86.3333L1440 98.6667V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V24.6667Z"
          fill="#EFF6FF"
        />
      </svg>
    </div>
  )
}
