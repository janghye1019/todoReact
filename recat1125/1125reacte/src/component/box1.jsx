import styles from './Box1.module.css'
// import './Box1.css'

function Box1() {
    return (
        //css 클래스 네임 두개 사용하는 방법 백팁 사용하기
        // <div className={`${styles.box} ${styles.flex}`}>
        //     Box1
        // </div>

        <>
            <div className={styles.box}>
                Box1
            </div>
            <h2 className='title'>타이틀01</h2>
        </>
    )
}

export default Box1