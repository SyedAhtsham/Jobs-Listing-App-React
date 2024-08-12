import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ bg = 'bg-gray-100', title, subtitle, btnText, btnColor = "bg-black", btnHoverColor ="hover:bg-gray-700", toLink}) => {
    return (
        <>
            <div className={`${bg} p-6 rounded-lg shadow-md `}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 mb-4">
                    {subtitle}
                </p>
                <Link
                    to={toLink}
                    className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 ${btnHoverColor}`}
                >
                    {btnText}
                </Link>
            </div>
        </>
    )
}

export default Card