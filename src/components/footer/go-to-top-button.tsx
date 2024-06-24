import { CircleArrowUp } from "lucide-react"

function GoToUp() {
  return (
    <button className="sticky bottom-4 float-right right-4" onClick={() => window.scroll({ top: 0 })}>
      <CircleArrowUp size={54} />
    </button>
  )
}

export default GoToUp
