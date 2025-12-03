import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function FirstSection() {
    const {isDark} = useContext(ThemeContext);
    console.log('모드:', isDark);

    return (
        <div 
        className="content"
        style={
            {
                backgroundColor: isDark ? '#333' : '#f0f0f0',
                color: isDark ? '#fff' : '#333'
            }
        }
        >
            <h2>첫번째 섹션</h2>
        </div>
    )
}

export default FirstSection