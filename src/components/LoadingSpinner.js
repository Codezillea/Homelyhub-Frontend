import React from 'react'

export const LoadingSpinner = () => {
  return (
    <div className='text-center ' style={{marginTop: "2rem"}}>
      <div className="spinner-border" role="status">   {/*role attribute is used to specify the purpose or meaning of the element. In this case, the role attribute is set to "status".*/}
{/*spinner-border is built-in bootstrap keypword for loading animations */}
      </div>
    </div>
  )
}
