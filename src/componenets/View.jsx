import React from 'react'

const View = ({meals}) => {
  return (
    <>
   <button className="btn border-none w-24 h-12 hover:bg-orange-300 hover:text-black text-white bg-orange-500 rounded-lg font-mono hover:scale-125 hover:transition-all duration-150" onClick={()=>document.getElementById('my_modal_3').showModal()}>View</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box min-w-5/6 min-h-4">

  <form method="dialog">
       <button className="btn btn-sm btn-circle btn-ghost bg-red-500 absolute right-2 top-2">✕</button>
     </form>
 <p key={meals.idMeal} className='ingredients text-lg font-serif text-white'>{meals.strInstructions}</p>

   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default View



// {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click on ✕ button to close</p>
//   </div>
// </dialog>