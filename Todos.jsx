import React from 'react'

import { useState } from "react";


export default function Todos() {
        const [text, setText] = useState("");
        const [todo, setTodo] = useState("");

        const handleClick = () => {
                setTodo([...todo, text]);
        };
        return (
                <>
                        <div className="">
                                <input type="text" onChange={(e) => setText(e.target.value)} />
                                <button onClick={handleClick}>Add Todo</button>

                                <div className="">
                                        {todo.length > 0
                                                ? todo.map((e) => {
                                                        return <p>{e}</p>;
                                                })
                                                : ""}
                                </div>
                        </div>
                </>
        )
}


