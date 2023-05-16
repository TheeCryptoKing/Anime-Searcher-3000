import { useState } from 'react'
import Navbar from "./Navbar";
import '../stylesheets/FanficsPage.css'

function FanficsPage () {
    const initialForm = {
        name: '',
        genre:'',
        image: '',
        creator: '',
        title: '',
        fanficBody:''
    }
    const [ newFanFic, setNewFanFic ] = useState(initialForm)
    
    function handleSubmit (e) {
        e.preventDefault()
        setNewFanFic(initialForm)
    }

    function handleChange (e) {
        setNewFanFic({ ...newFanFic, [e.target.name]: e.target.value });
    }
    
    return (
        <div className="FanficPage">
            <header className="nav-header">
                <Navbar />
            </header>
            <div className="FanficPage-body">
                <h1 className="page-title">Fanfictions</h1>
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <input 
                            placeholder="Name"
                            type="text"
                            className="form-input" 
                            name="name"
                            id="name"
                            value={newFanFic.name}
                            onChange={handleChange}
                        ></input>
                        <input 
                            placeholder="Genre"
                            type="text"
                            className="form-input" 
                            name="genre"
                            id="genre"
                            value={newFanFic.genre}
                            onChange={handleChange}
                        ></input>
                        <input 
                            placeholder="Image Url"
                            type="text"
                            className="form-input" 
                            name="image"
                            id="image"
                            value={newFanFic.image}
                            onChange={handleChange}
                        ></input>
                        <input 
                            placeholder="Creator"
                            type="text"
                            className="form-input" 
                            name="creator"
                            id="creator"
                            value={newFanFic.creator}
                            onChange={handleChange}
                        ></input>
                        <input 
                            placeholder="Title"
                            type="text"
                            className="form-input" 
                            name="title"
                            id="title"
                            value={newFanFic.title}
                            onChange={handleChange}
                        ></input>
                        <textarea 
                            placeholder="Write Fanfiction Here"
                            type="text"
                            className="form-input" 
                            cols="2" 
                            rows="9" 
                            name="fanficBody"
                            id="fanficBody"
                            value={newFanFic.fanficBody}
                            onChange={handleChange}
                        ></textarea>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
                <div className="fanfics-container">
                {/* put fanfics here from json */}
                </div>
            </div>
        </div>
    )
}

export default FanficsPage;