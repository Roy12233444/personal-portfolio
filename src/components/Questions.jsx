"use client"

import Heading from "./sub/Heading"
import Question from "./sub/Question"
import { questions } from "@/assets";

const Questions = () => {
    return (
        <div 
        id='message'
        className="min-h-screen py-20">
            <Heading text={"Messages"} />
            <div>
                <ul className="flex flex-col border-2 border-yellow-500 p-5 shadow-lg border-none rounded-lg gap-y-3">
                    {questions.map((question, i) => (
                        <Question key={i} data={question} index={i} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Questions