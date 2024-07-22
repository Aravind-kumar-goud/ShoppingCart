import React,{useState} from 'react'
import { MultiInput } from './MultiInput';



function Home() {
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            age: '',
            password: '',
            bio: '',
            newsletter: false,
            gender: '',
            country: ''
          });
        
          const handleChange = (e) => {
            const { name, type, value, checked } = e.target;
            setFormData({
              ...formData,
              [name]: type === 'checkbox' ? checked : value
            });
          };
        
          return (
            <div>
              <form>
                <MultiInput
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Bio"
                  type="textarea"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Subscribe to newsletter"
                  type="checkbox"
                  name="newsletter"
                  value={formData.newsletter}
                  onChange={handleChange}
                />
                <MultiInput
                  label="Gender"
                  type="radio"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={['Male', 'Female', 'Other']}
                />
                <MultiInput
                  label="Country"
                  type="select"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  options={['USA', 'Canada', 'UK']}
                />
                <button type="submit">Submit</button>
              </form>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          );
    
    return (
        <div>
            <div className="card bg-dark text-white border-0">

                <img className="card-img-top" src={require("../Images/navy.png")} alt="Card image cap" />
                <div className="card-img-overlay d-flex flex-columns justify-content-center ">
                    <div className='container '>
                    <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
                    
                    <p className="card-text lead fs-3">CHECK OUT ALL THE TRENDS</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Home
