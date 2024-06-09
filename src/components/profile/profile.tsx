import Biography from "./biography"
import WorksTabs from "./works-tabs"

function Profile() {
  return (
    <section id='profile' className='h-screen flex flex-col text-left gap-12 p-12'>
      <h2 className="text-3xl font-semibold">Profile</h2>
      <article id='biography'>
        <h3 className='sr-only'>Biography</h3>
        <Biography />
      </article>

      <article id='cinematography'>
        <h3 className='sr-only'>Works</h3>
        <WorksTabs />
      </article>
    </section>
  )
}

export default Profile
