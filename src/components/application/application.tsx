export const Application = () =>{
    return(
        <>
            <h1>Job Application Form</h1>
            <h3>Section</h3>
            <p>All Fields are Mandatory</p>
<span title="close">
    x
</span>
            <img src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=600" alt="a guy with laptops"/>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="FullName" value="Bretton" onChange={()=>{}}/>

            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio"/>
            </div>

            <div>
                <label htmlFor="job-location">Name</label>
                <select id="job-location" >
                    <option value="">Select A Country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
               </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms and conditions
                </label>
            </div>

            <button>Submit</button>
        </form>
        </>
    )

}