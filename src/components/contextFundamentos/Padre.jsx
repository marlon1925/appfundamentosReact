import React from 'react'
import Hijo from './Hijo'

const Padre = ({ Objdinero, setObjDinero }) => {
    return (
        <div className='flex justify-between h-full'>
            <p>C. Padre</p>
            <div className='bg-red-100 w-2/5 h-full border-2 border-slate-800'>
                <Hijo Objdinero={Objdinero} setObjDinero={setObjDinero} />
            </div>
        </div>
    )
}

export default Padre