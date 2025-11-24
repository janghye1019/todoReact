{
    todos.map((item, index) => (
        <li key={index}>
            {/* 체크 상태일때 */}
            <input type="checkbox"
                checked={item.done}
                onChange={() => onToggle(index)} />
            <del>{item.text}</del>
            {/* <조건문/ 삼항연산자 */}
            {item.done ? <del>{item.text}<del /> : {item.text}}
                {/* 클릭하면 순서가 삭제된다 */}
                <button className="delete-btn" onClick={() => Delete(index)}>X</button>
            </li>
                        ))}