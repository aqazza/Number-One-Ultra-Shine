// Fixed atmospheric background: two cyan glows + a fine grain overlay.
export function Atmos() {
  return (
    <>
      <div className="bg-atmos" aria-hidden="true">
        <div className="glow g1" />
        <div className="glow g2" />
      </div>
      <div className="bg-grain" aria-hidden="true" />
    </>
  )
}
