import { goToUpPage } from "@/lib/utils"
import { CircleArrowUp } from "lucide-react"

function GoToUp() {
  return (
    <button 
    aria-label="Go to top"
    className="sticky bottom-4 float-right right-4" 
    onClick={goToUpPage}
    >
      <CircleArrowUp size={54} />
    </button>
  )
}

export default GoToUp
