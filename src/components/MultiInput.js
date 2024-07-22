import React, { useState } from 'react';

// MultiInput Component
export const MultiInput = ({ label, type, name, value, onChange, options }) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'number':
    case 'password':
      return (
        <div>
          <label>{label}</label>
          <input type={type} name={name} value={value} onChange={onChange} />
        </div>
      );
    case 'textarea':
      return (
        <div>
          <label>{label}</label>
          <textarea name={name} value={value} onChange={onChange} />
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <label>
            <input type="checkbox" name={name} checked={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
    case 'radio':
      return (
        <div>
          <label>{label}</label>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
              />
              {option}
            </label>
          ))}
        </div>
      );
    case 'select':
      return (
        <div>
          <label>{label}</label>
          <select name={name} value={value} onChange={onChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

// Example Usage of MultiInput Component
// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     password: '',
//     bio: '',
//     newsletter: false,
//     gender: '',
//     country: ''
//   });

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   return (
//     <div>
//       <form>
//         <MultiInput
//           label="Name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Age"
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Bio"
//           type="textarea"
//           name="bio"
//           value={formData.bio}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Subscribe to newsletter"
//           type="checkbox"
//           name="newsletter"
//           value={formData.newsletter}
//           onChange={handleChange}
//         />
//         <MultiInput
//           label="Gender"
//           type="radio"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           options={['Male', 'Female', 'Other']}
//         />
//         <MultiInput
//           label="Country"
//           type="select"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           options={['USA', 'Canada', 'UK']}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <pre>{JSON.stringify(formData, null, 2)}</pre>
//     </div>
//   );
// };


