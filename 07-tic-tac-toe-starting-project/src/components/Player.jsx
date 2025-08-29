import {useState} from "react";

export default function Player({name, symbol, isActive, onNameChange}) {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)
    const [buttonCaption, setButtonCaption] = useState("Edit")
    const handleButtonClick = () => {
        setButtonCaption(isEditing ? "Edit" : "Save")
        // Don't
        // setIsEditing(!isEditing)
        // Do
        setIsEditing((prevIsEditing) => !prevIsEditing)
    }
    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
        onNameChange(symbol, playerName);
    };

    let playerNameContent = <span className="player-name" onClick={handleButtonClick}>{playerName}</span>
    if (isEditing) {
        playerNameContent = (
            <input
                type="text"
                required={true}
                value={playerName}
                onChange={handleNameChange}
            />
        )
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButtonClick}>{buttonCaption}</button>
        </li>
    )
}