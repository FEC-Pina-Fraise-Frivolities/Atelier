const Star = function () {

  return (
    <>
      {[...Array(5)].map((star, index) => (
      <span key={index}>&#9733;</span>))}
    </>
  )
}

export default Star;