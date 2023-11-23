import React from "react"
import MailIcon from "../assets/mail-icon.png"
import PhoneIcon from "../assets/phone-icon.png"
import './Contacts.css'


function Contact(props) {
    const {img, name, phone, email} = props
    console.log(props)
    return (
            <div className="contact-card">
                <img src= {`/images/${img}`} />
                <h3>{ name }</h3>
                <div className="info-group">
                    <img src={PhoneIcon} />
                    <p>{ phone }</p>
                </div>
                <div className="info-group">
                    <img src={MailIcon} />
                    <p>{ email }</p>
                </div>
            </div>
    )
}

export default Contact


/* ARRAY.MAP()

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.


*/

/*  PROPS

1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!

*/

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/


/* Challenge 2:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because
they always take things literally."

If you don't pass in a "question" prop, how might you make it only
show the punchline?
*/


/*

<div className="contact-card">
<img src="./images/fluffykins.png"/>
<h3>Fluffykins</h3>
<div className="info-group">
    <img src="./images/phone-icon.png" />
    <p>(212) 555-2345</p>
</div>
<div className="info-group">
    <img src="./images/mail-icon.png" />
    <p>fluff@me.com</p>
</div>
</div>

<div className="contact-card">
<img src="./images/felix.png"/>
<h3>Felix</h3>
<div className="info-group">
    <img src="./images/phone-icon.png" />
    <p>(212) 555-4567</p>
</div>
<div className="info-group">
    <img src="./images/mail-icon.png" />
    <p>thecat@hotmail.com</p>
</div>
</div>

<div className="contact-card">
<img src="./images/pumpkin.png"/>
<h3>Pumpkin</h3>
<div className="info-group">
    <img src="./images/phone-icon.png" />
    <p>(0800) CAT KING</p>
</div>
<div className="info-group">
    <img src="./images/mail-icon.png" />
    <p>pumpkin@scrimba.com</p>
</div>
</div>

*/