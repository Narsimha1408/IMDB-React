import React, {useRef} from 'react';
const AddMovie=()=>{
    //using use ref to handle form instead of use state
    const nameRef = useRef()
    const ratingRef = useRef()

    const handleSubmit=()=>{
        //using use ref to handle form instead of use state 
        console.log(nameRef.current.value)
        console.log(ratingRef.current.value)

    };
    return (
        <div className='add-Movie-Form'>
            <h1>Add Movie</h1>
            <div>
                <input ref={nameRef} placeholder="Enter your fav movie" type="text"/>
            </div>
            <div>
                <input ref={ratingRef} placeholder="Enter the rating" type="number"/>
            </div>
            <button onClick={handleSubmit}>ADD</button>
        </div>
    );
}

export default AddMovie;