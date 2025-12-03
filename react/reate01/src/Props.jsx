
import './App.css'
import { useState } from 'react';


//props : 부모(컴포넌트) 자식의 데이터에 정보를 전달해준다

//구조분해할당 방법
// function Hello({ name, age, hoby }) {
//     return (
//         <>
//             <h2>저의 이름은 {name}, 나이는 {age}입니다. 저의 취미는 {hoby}입니다</h2>

//         </>
//     )
// }
// ---------버튼 스타일 적용----------------------------
// function Button(Props) {
//     return (
//         <>
//             {/* <button style={{ backgroundColor: 'pink', color: 'black' }} >브튼</button> */}
//             <button style={{ backgroundColor: Props.bgColor, color: Props.Color }} >{Props.text}</button>
//         </>
//     )
// }
// function Button(Props) {
//     return (
//         <>
//             {/* <button style={{ backgroundColor: 'pink', color: 'black' }} >브튼</button> */}
//             <button style={{ backgroundColor: Props.bgColor, color: Props.Color }} >{Props.text01}</button>
//             <button style={{ backgroundColor: Props.bgColor, color: Props.Color01 }} >{Props.text02}</button>
//             <button style={{ backgroundColor: Props.bgColor, color: Props.Color02 }} >{Props.text03}</button>
//         </>
//     )
// }
// -----------------------------------------------------------
// function Hello(Props) {
//     return (
//         <>
//             <h2>저의 이름은 {Props.name}, 나이는 {Props.age}입니다. 저의 취미는 {Props.hoby}입니다</h2>

//         </>
//     )
// }

// ----------------------------------------------------

//댓글이 없을 떄 '댓글이 없습다 ' 출력하게 하기
// ------헤원 작성
function Comments({ inup = true }) {
    if (inup) {
        return <p>좋아요 눌렀어요!</p>
    } else {
        return <p>댓글이 없습니다</p>
    }
}


function LikeButton({ name, bgColor, children }) {
    const [Likes, setLikes] = useState(0);

    // const Commet = ['너무 공감돼요', '좋은 하루 보내세요', '행복한 하루 되세요'];

    // 저장소 유즈스테이트 사용하기

    const [newComment, setNewComment] = useState('');

    const [Comments, setComments] = useState(
        ['정말 공감돼요',
            '커피를 마시고 싶은 아침',
            '뜨근한 국밥 땡기는 날씨']
    )



    //-------댓글 추가----onChage 함수 내용
    //해당 'e'벤트 타겟의 벨류값
    function inputChange(e) {
        setNewComment(e.target.value)
    }
    // [...기존변수, 추가할 변수] : ... 입력한거 다 가져오고, 추가한거 추가하기
    // setComments([...Comments,newComment]);

    function addComment() {
        //1112 _ trim(): 앞뒤 빈칸을 다 없애줌
        //새로운 댓글이 빈칸이면 무조건 초기화해라
        if (newComment.trim() === '') {
            return (
                setComments('')
            );
        }
        //새로운 댓글을 기존 댓글 목록에 추가하기
        setComments([...Comments, newComment]);
        //입력창 비우기
        setComments('');

    }


    // ------좋아요 버튼
    function addLike() {
        setLikes(Likes + 1);
    }

    return (

        <div
            style={{
                border: "2px solid #ddd",
                borderRadius: "10px",
                padding: "16px",
                margin: "10px 0",
                width: "250px",
                textAlign: "center",
            }}>

            <h3>{name}의 게시물</h3>
            <>
                {children}
            </>

            <p>❤️ {Likes}개</p>
            <button
                // onClick={addLike}
                style={{
                    backgroundColor: bgColor,
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "16px",
                    cursor: "pointer",
                }} >
                좋아요 👍
            </button>
            {/* <p>{Reaction}</p> */}
            {Likes >= 8 ? <p>많.관.부 땡큐</p> : <p>많.관.부</p>}

            {/* 댓글 영역, 댓글은 최소 3개 만들어주세요. */}
            {/* '너무 공감돼요','좋은 하루 보내세요','행복한 하루 되세요' */}

            <>
                <ul>
                    {
                        Comments.map((Commet, index) => (
                            <li key={index}>{index + 1}{Commet}</li>
                        ))
                    }
                </ul>
            </>

            {/* <p>{Comments ? <p>좋아요 눌렀습니다!</p> : '댓글이 없습다'}</p> */}

            <hr style={{ margin: '15px 0' }} />
            {/* 댓글 입력 인풋창 */}

            <div>
                <input type="text" placeholder='댓글을 입력하세요'
                    // value={변수}
                    // onChange={함수}
                    value={newComment}
                    onChange={inputChange}
                    style={{
                        padding: '8px 12px', width: '140px', borderRadius: '5px',
                        border: '1px solid pink',
                    }} />
                <button onClick={addComment} style={{ marginLeft: '5px', fontSize: '14px', border: '1px solid pink' }}>추가</button>
            </div>



        </div>
    )
}

//------------------------좋아요 8개 이상 일때, '많은 관심 받고 있어요' 8개 미만일때 '좋아요가 힘이 됩니다'
// function Reaction({ Likes = 'addLike' }) {
//     if (addLikes >= 8) {
//         return <p>많은 관심 감사합니다</p>
//     } else {
//         return <p>좋아요가 힘이 됩니다</p>
//     }

// }

//로그인시 로그인이 됐습니다. 로그인 입력 전 로그인 전 입니다. 문구출력

//로그인 출력 조건문 방법
// function Login({ isLoggedIn = true }) {
//     if (isLoggedIn) {
//         return <p>로그인 됐습니다.</p>
//     } else {
//         return <p>로그인 전입니다.</p>
//     }
// }



//로그인 출력 01방법
// 삼학연산자 1) 조건이 참일때 결과출력 입력, 2)거짓일때 결과출력
// 형식 >>>> 조건? 참(결과) : 거짓(결과)
// function Login({ isLoggedIn = true }) {
//     return isLoggedIn ? <p>로그인이 됐습니다.</p> : <p>로그인 전입니다.</p>
// }


// map() : 배열 재배치
const fruits = ['바나나', '사과', '딸기', '메론', '망고'];

function Fruitslist() {
    return (
        <>
            <ul>
                {
                    fruits.map((fruit) => (
                        <li>{fruit}</li>
                    ))
                }
            </ul>
        </>
    )
}

//-----댓글이 없을 떄 '댓글이 없습다 ' 출력하게 하기---------썜 작성
// const comments = [];
// function CommentsList() {
//     if (comments.length === 0) {
//         return <p>아직 댓글이 없어요</p>
//     }
//     return (
//         <ul>
//             {comments.map((comments, index) => (
//                 <li key={index}>{index + 1}.{comment}</li>
//             ))}
//         </ul>
//     )
// }




function Props() {

    const isLoggedIn = true;

    return (
        <>
            {/* <Hello name='카피바라' age='1' hoby='누워있기' />
            <Hello name='고양이' age='1' hoby='누워있기' />
            <Hello name='강아쥐' age='1' hoby='누워있기' /> */}
            {/* <Hello age='1' /> */}
            {/* <Hello hoby='누워있기' /> */}

            <br />
            <br />
            <br />

            {/* <Button bgColor='blue' Color='pink' text='바로가기' />
            <Button bgColor='black' Color='pink' text='더보기' />
            <Button bgColor='Pink' Color='black' text='편의점가기' /> */}

            {/* --------------------------------------------------------- */}
            {/* 로그인 출력 01 방법 */}
            {/* <Login isLoggedIn={false}></Login> */}

            {/* 로그인 출력 03방법 */}
            {isLoggedIn ? <p>로그인이 됐습니다.</p> : <p>로그인 전입니다.</p>}

            {/* <Reaction /> */}

            {/* <Fruitslist /> */}
            {/* ------------------------------------------------- */}
            <LikeButton name="지디" bgColor="skyblue">
                <img src="./src/assets/지용.png" alt="지디" style={{ width: "100%" }} />
                <p>오늘은 바람이 많이 불어서 추워요</p>
            </LikeButton>

            {/* <LikeButton name="재용" bgColor="blue" style={{ width: "100%" }}>
                <img src="./src/assets/재용.png" alt="제이슨황" />
                <p>갤럭시가 많이 없네요 분발해야겠당</p>
                <p>{Comments = false}</p>
            </LikeButton> */}

        </>

    )
}

export default Props


