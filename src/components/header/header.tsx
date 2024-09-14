import { goToUpPage } from "@/lib/utils"

function Header() {
  return (
    <>
      <header className="bg-header bg-no-repeat bg-top bg-cover h-svh grid grid-rows-subgrid row-span-3 justify-center p-10">
        <div id="title" className="row-start-2 self-center flex flex-col gap-2">
          <h1 className="text-5xl font-black">Sandra Parfait</h1>
          <p id="subtitles" className="text-2xl">· Actress ·</p>
        </div>

        <nav className="row-start-3 self-end">
          <menu className="flex justify-center gap-4">
            <li>
              <a href="" onClick={goToUpPage}>Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#galleries">Galleries</a>
            </li>
          </menu>
        </nav>
      </header>

    </>
  )
}

export default Header
