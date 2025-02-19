'use client'
const Button = () => {
    const handleClick = () => alert('Button di Klik');

    return(
        <>
          <button onClick={handleClick} className="bg-slate-500">Cart</button>
        </>
    )
}

export default Button