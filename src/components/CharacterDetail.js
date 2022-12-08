import { useState, useEffect } from "react"
import { useParams } from "react-router"
import '../styles/character-detail.css'
import CLAZZ_IMAGES from "./clazzImages"

export default function CharacterDetail(props) {
    const { name } = useParams()
    const url = `https://api.open5e.com/classes/${name.toLowerCase()}/`
    const dndBeyondUrl = `https://www.dndbeyond.com/classes/${name}`
    const [clazzes, setClazzes] = useState([])
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setClazzes(json)
            })
            .catch(console.error)
    }, [name])

    if (!clazzes) {
        return <p>Loading...</p>
    }
    return (

        <div className="character-detail">
            <h1>{name}</h1>
            <img src={CLAZZ_IMAGES[name]} />
            {/* <p>{clazzes.desc}</p> */}
            <h2>Class stats</h2>
            <p>Hit Dice: {clazzes.hit_dice}</p>
            <p>Starting HP: {clazzes.hp_at_1st_level}</p>
            <p>Level up HP: {clazzes.hp_at_higher_levels}</p>
            <h3>Proficiencies</h3>
            <p>Armor: {clazzes.prof_armor}</p>
            <p>Weapon: {clazzes.prof_weapons}</p>
            <p>Tools: {clazzes.prof_tools}</p>
            <p>Saving throws: {clazzes.prof_saving_throws}</p>
            <p>Skills: {clazzes.prof_skills}</p>
            <p>Equipment: {clazzes.equipment}</p>
            {/* <p>Stat Table {clazzes.table}</p> */}
            <a href={dndBeyondUrl} target="_blank">
                Delve deeper
            </a>



        </div>
    )
}