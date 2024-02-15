import React, { useState } from 'react'
import { items } from './data'
import { motion } from "framer-motion"

const Card = (props) => {
    return (
        <>
            <motion.img
                whileHover={{
                    scale: 1.18,
                    transition: {
                        duration: 0.1
                    }
                }}
                whileTap={{
                    scale: 1.1,
                }}
                onClick={() => {
                    props.setSelected(props.item)
                }}
                layoutId={`card-${props.item.id}`}
                aria-description='khek'
                src={props.item.url}
                className='w-100 h-100 object-cover border border-zinc-800 rounded-3xl'
            />
        </>

    )
}

const Modal = (props) => {
    return (
        <div className='text-lime-200 min-h-screen flex flex-col justify-center items-center' onClick={() => {
            props.setSelected(null)
        }} >
            <motion.img
                layoutId={`card-${props.selected.id}`}
                src={props.selected.url}
                className='max-h-[700px] object-cover border border-zinc-800 rounded-3xl'
            />
            <button className=' text-lime-200 text-2xl hover:animate-pulse hover:underline mt-10' onClick={() => {
                props.setSelected(null)
            }}
            >✕</button>
        </div>
    )
}

function Gallery() {
    const [selected, setSelected] = useState(null)
    if (selected) {
        return <Modal setSelected={setSelected} selected={selected} />
    }
    return (
        < div className="overflow-x-auto whitespace-nowrap" >
            <div className="min-h-screen flex flex-row justify-center items-center gap-16">
                {items.map(item => <Card setSelected={setSelected} selected={selected} item={item} />)}
            </div>
        </div >
    )
}

export default Gallery