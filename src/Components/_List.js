// a couple of functions from the React library
import React, { Component } from 'react';


class List extends Component{
    render(){
        return (
            <div className="list">
                
                <form className="reviewForm" action="submit" onSubmit={e => props.handleFormSubmit(e)}>

                    <label 
                        className="visuallyHidden" 
                        htmlFor="userName"
                        >
                        Please Enter Your Name!
                    </label>
                    <input
                        name="userName"
                        placeholder= "What is your name?"
                        className="nameInputField"
                        type="text"
                        id="userName"
                        onChange={props.handleChange}
                        value={props.userNameProp} // good for accessibility and screen readers, this will track the changes even if they leave and come back
                    />

                    <label 
                        className="visuallyHidden" 
                        htmlFor="userReview"
                        >
                        Please Enter Your Name!
                    </label>
                    <textarea 
                        id="userReview" 
                        name="userReview"
                        rows="10" 
                        cols="80" 
                        placeholder="Your Review:"
                        onChange={props.handleChangeTxtArea}
                        value={props.userReviewProp}
                        ></textarea>

                    <section className="radioSection">
                    {/* radio input for purchase or won't repurchase. */}
                        <p>Would You Repurchase This Item?</p>
                        <div>
                            <div className="yesInput">
                                <input 
                                    type="radio" 
                                    id="Yes" 
                                    value="yes"
                                    name="reviewForm"
                                    onChange={props.radioChange}
                                    />
                                <label htmlFor="Yes">Yes</label>
                            </div>

                            <div className="noInput">
                                <input
                                    type="radio" 
                                    id="No" 
                                    value="no"
                                    name="reviewForm"
                                    onChange={props.radioChange
                                    }
                                    />
                                <label htmlFor="No">No</label>
                            </div>
                        </div>
                    </section>
                    
                    <section className="userStarRating">
                        <span className="userSpan">How Would You Rate This Product:</span>
                        <div className="starsOnly">
                            <StarRating
                                numberOfStars="5"
                                currentRating="0"
                                onClick={props.setRating}
                                starRatingFuncProp = {props.starRatingFunc}
                                />
                        </div>
                    </section>

                    <button 
                            className="submitButton" 
                            type="submit">
                            Submit
                    </button>

                </form>
            </div>
        );
    }
}

export default List;