import React, { useRef } from "react";
// import classes from './Form.module.css';

const Form = (props) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('')
    const priceRef = useRef('')
    const sizeRef = useRef('')

    const submitHandler = (event) => {

        event.preventDefault()

        const data ={
            inputName:nameRef.current.value,
            inputDescription:descriptionRef.current.value,
            inputPrice:priceRef.current.value,
            inputSize:sizeRef.current.value,
        }

        props.addProduct(data)

        event.target.reset()
    };

    return (
        <div className = 'container'>
  <form className='form' onSubmit={submitHandler}>
    <label htmlFor="brandname"> Tshirt Name: </label>
    <input type="text"  ref={nameRef}/>
    <label htmlFor="brandname"> Description: </label>
    <input type="text" ref={descriptionRef}/>
    <label htmlFor="brandname"> Price: </label>
    <input type="number" ref={priceRef}/>
    <label htmlFor="size" ref={sizeRef}>Quantity Available: </label>
    <select name="size" id="select">
      <option value="Large"> L </option>
      <option value="Medium"> M </option>
      <option value="Small"> S </option>
    </select>

    <button>  Add Product </button>
  </form>
  </div>
    );

};

export default Form;
