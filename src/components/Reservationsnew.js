import React, { useState } from "react";
const LOCATIONS = ["Fort Myers,FL", "New Orleans,LA", "Houston,TX", "Boston,MA"];

function ReserveATable() {
  const [values, setValues] = useState({
    name: "", location: "", numberOfGuests: "", notes: ""
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    const response = await fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert('Your registration was successfully submitted!');
      setValues({
        name: '', location: '', numberOfGuests: '', notes: '' 
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }
 
  return (
    <form onSubmit={onSubmit}> 
      <h2>Reserve a Table</h2>

      <label>Name*:</label>
      <input 
        type="text" required
        value={values.name} onChange={set("name")}
      />

      <label>Location:</label>
      <select 
        required
        value={values.location} onChange={set("location")}
      >
        <option value="">Select a location</option>
        {LOCATIONS.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>Number of guests:</label>
      <input
        type="number" required min="1" max="8"
        value={values.numberOfGuests} onChange={set("numberOfGuests")} 
      />

      <label>Habits:</label>
      <textarea value={values.notes} onChange={set("notes")} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default function Page() {
  return (
    <div className="App">
      <RegisterYourCatForm />
    </div>
  );
}