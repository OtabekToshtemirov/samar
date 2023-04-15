import React, {Component, useCallback, useEffect, useRef, useState} from 'react';



export  function Counter(){
    const [cardNumber, setCardNumber] = useState('')
    const [data, setData] = useState('')

    const cvcRef = useRef(null)
    const date = useRef(null)

    const handleInput = (e) =>{
        const val = e.target.value
        setCardNumber(val)
        if (val.length===16){
            cvcRef.current.focus()
        }
        console.log(val)
    }
    const handleDate = (e) =>{
        const val = e.target.value
        setData(val)
        if (val.length===3){
            date.current.focus()
        }
        console.log(val)
    }

    
        return(
            <div className="m-5">

                <input className={"form-control"} type="number" placeholder={'Card number'} onChange={handleInput} value={cardNumber}/>
                <input ref={cvcRef} className={"form-control my-2"} type="number" placeholder={'CVC'} onChange={handleDate} value={data}/>
                <input ref={date} className={"form-control"} type="number" placeholder={'Year/month'}/>


            </div>
        )
    }



