function Profile() {
  return (
    <section id='profile' className='h-screen flex flex-col text-left gap-12 p-12'>
      <h2 className="text-3xl font-semibold">Profile</h2>
      <article id='biography'>
        <h3 className='sr-only'>Biography</h3>
      </article>

      <article id='cinematography'>
        <h3 className='sr-only'>Cinematography</h3>
      </article>
    </section>
  )
}

export default Profile
