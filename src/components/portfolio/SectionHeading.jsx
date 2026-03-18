import Reveal from '../Reveal'

function SectionHeading({ label, title }) {
  return (
    <Reveal>
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </Reveal>
  )
}

export default SectionHeading
