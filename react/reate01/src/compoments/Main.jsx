import Btn from './button'

function Main() {
    return (
        <>
            <main>
                <Btn />

                <>
                    {/* 무조건 부모 타이틀을 감싸줘야함
                    부모 태크가 안 보이게 할려면 <></>로 감싸주면 됌 */}
                    <div>
                        <div>
                            <h3 className='title'>타이틀</h3>
                        </div>
                        <div>
                            <h3>설명</h3>
                        </div>
                    </div>
                </>

                {/* (br/) 띄어쓰기도 닫힘 태그가 있어야해요*/}
                {/* <Btn></Btn> */}
            </main>
        </>
    )
}

export default Main