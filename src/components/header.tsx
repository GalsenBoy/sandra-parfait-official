function Header() {
  return (
    <header className="bg-header bg-no-repeat bg-top h-screen flex flex-col align-middle justify-center">
      <h1 className="text-5xl">Sandra Parfait</h1>
      <p id="subtitles">Actress - Stuntwoman</p>

      <nav>
        <menu hidden>
          <li>
            <a href="#">Homepage</a>
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
  )
}

export default Header
