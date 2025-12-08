
// gsap.to: 대상요소 적용하기
// x축으로 300px을 1초 동안에 밀어줘
gsap.to('.box1', {
    x: 300,//transformX
    y: 100,
    duration: 3,
});
gsap.to('.box1-1', {
    x: -300,//transformX
    y: 100,
    duration: 3,
});

// gsap.from():어디에서 중심으로 다시 이동
//중심에서 300떨어진 곳부터 0으로 이동
gsap.from('.box2', {
    x: 300,
    duration: 2,
})
gsap.from('.box2-1', {
    x: -300,
    duration: 2,
})

gsap.fromTo('.box3',
    //시작점
    {
        x: 200,
        opacity: 0.3,
        width: '100px',
        borderRadius: '0'
    },
    //목표지점
    {
        x: 500,
        opacity: 1,
        width: '250px',
        rotation: 180,
        backgroundColor: '#333',
        duration: 3,
        borderRadius: '100'
    }
)

// .gsap.Timeline()

const tl = gsap.timeline();

gsap.set('.box4,box5,box6', {
    x: 0,
    opacity: 1,
})
//순서대로 애니메이션 작동
tl.to('.box4', {
    x: 300,
    duration: 1
})
    .to('.box5', {
        x: 250,
        duration: 3,
    }, '-=0.5') // 이전 애니매이션이 끝나기 0.5초 전에 실행한다
    .to('.box6', {
        x: 200,
        duration: 2,
    }, '<')//'<' : 이전 애니메이션과 동시작동