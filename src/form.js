import React from "react";

export default function Form(props) {
    const {movie} = props;
    return (
        <form>
            <h3>{movie.name} {Form}</h3>
            <button>-</button>
            <p>0</p>
            <button>+</button>
        </form>
    )
}
