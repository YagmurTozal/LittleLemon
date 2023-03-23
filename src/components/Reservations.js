import React, {useState} from "react";

function Reservations() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [mailAdress,setMailAdress] = useState('')
    const [location,setLocation] = useState('')
    const [numberOfGuests,setNumberOfGuests] = useState('')
    const [reservationDate,setReservationDate] = useState('')
    const [additionalNotes,setAdditionalNotes] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(firstName,lastName,mailAdress,location,numberOfGuests,reservationDate,additionalNotes)
    }
    return (
        <section className="max-w-4xl p-6 py-10 mx-auto rounded-md shadow-md bg-llgreen mt-20">
            <h1 className="text-5xl text-center font-bold text-llyellow capitalize dark:text-llyellow">Reserve a Table</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-white dark:text-llwhite" for="username">Name</label>
                        <input onChange={e=>setFirstName(e.target.value)} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring "  required/>
                    </div>

                    <div>
                        <label className="text-white dark:text-llwhite" for="emailAddress">Surname</label>
                        <input onChange={e=>setLastName(e.target.value)} id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring" required/>
                    </div>

                    <div>
                        <label className="text-white dark:text-llwhite" for="password">E-mail adress</label>
                        <input onChange={e=>setMailAdress(e.target.value)} id="password" type="email" className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring" placeholder="examplename@gmail.com" required/>
                    </div>

                    <div>
                        <label className="text-white dark:text-llwhite" for="location">Select a Location</label>
                        <select onChange={e=>setLocation(e.target.value)} className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring" required>
                            <option>Fort Myers,FL</option>
                            <option>New Orleans,LA</option>
                            <option>Houston,TX</option>
                            <option>Boston,MA</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-white dark:text-llwhite" for="numberOfGuests">Number of Guests</label>
                        <select onChange={e=>setNumberOfGuests(e.target.value)} className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring" required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                   
                    <div>
                        <label className="text-white dark:text-llwhite" for="reservationDate">Date</label>
                        <input onChange={e=>setReservationDate(e.target.value)} id="date" type="date" className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring" required/>
                    </div>
                    <div>
                        <label className="text-white dark:text-llwhite" for="additionalNotes">Additional Notes</label>
                        <textarea onChange={e=>setAdditionalNotes(e.target.value)}id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-llblack bg-white border border-llblack rounded-md dark:bg-llyellow dark:text-llblack dark:border-llyellow focus:border-llyellow dark:focus:border-llyellow focus:outline-none focus:ring"></textarea>
                    </div>
             
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 leading-5 text-llblack hover:shadow-xl transition-colors duration-200 transform bg-llyellow rounded-md hover:bg-llred focus:outline-none focus:bg-llyellow " onClick={() => alert('Reservation Confirmed')}>Save</button>
                </div>
            </form>
        </section>

    )
}

export default Reservations;