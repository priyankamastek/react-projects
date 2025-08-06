import { useState } from 'react';

function EventHandler() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [card, setCard] = useState("")
    const [shipping, setShipping] = useState("Home Delivery");

    // e is the event object passed to the handler function
    let handleClick = (event) => {
        console.log(event)
        console.log("Button caption = ", event.target.textContent)
        event.target.textContent = "Click Me Not"
    }

    // textboxes, textareas, radio button, checkboxes - onChange event react
    let handleNameChange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }

    let handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    let handlePaymentChange = (event) => setCard(event.target.value)

    let handleShippingChange = (event) => setShipping(event.target.value)

    return (
        <>
            <div>
                <button onClick={(event) => handleClick(event)}> Click Me</button>
                <br />
                <label>Enter text</label>
                <input type="text"
                    value={name}
                    placeholder="Enter name"
                    size="10"
                    onChange={handleNameChange} />
                <br />
                <input type="text"
                    value={age}
                    placeholder="Enter age"
                    size="10"
                    onChange={handleAgeChange} />
                <br />
                <select value={card} onChange={handlePaymentChange}>
                    <option value="">Select Payment Mode</option>
                    <option value="visa">Visa Card</option>
                    <option value="master"> Master Card</option>
                    <option value="gift"> Gift Card </option>
                </select>
                <br />

                <fieldset>
                    <legend>Please select your preferred delivery method:</legend>
                    <input type="radio"
                        name="delivery"
                        value="Home Delivery"
                        checked={shipping == "Home Delivery"}
                        onChange={handleShippingChange} />
                    <label>Home Delivery</label>

                    <input type="radio"
                        name="delivery"
                        value="Pick up"
                        checked={shipping == "Pick up"}
                        onChange={handleShippingChange} />

                    <label>Pick Up</label>
                </fieldset>
                
                <p> Name = {name}
                    &nbsp;
                    Age = {age}
                    &nbsp;
                    Payment = {card}
                    &nbsp;
                    Shipping = {shipping}
                </p>
            </div>
        </>
    );


}

export default EventHandler