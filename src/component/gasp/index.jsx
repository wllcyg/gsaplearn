import {gsap} from 'gsap';
import {useEffect} from "react";
import GsapWrapper from "./style.js";

const GsapIndex = () => {
    function baseLine() {
        gsap.to(".green", {rotation: 360, x: 100, duration: 1, delay: 1});

        gsap.from(".purple", {
            rotation: 360, x: 100, duration: 1, delay: 2,
            onComplete: (purple, otherArgs) => { // 完成时
                console.log("onComplete this is purple",'获取了新的参数'+ purple, otherArgs)
            },
            onStart: () => { // 开始时
                console.log("onStart this is blue")
            },
            onInterrupt: () => { // 中断时
            },
            onCompleteParams: ["purple",'otherArgs'],// 传递动画完成时的参数
            onUpdate: () => { // 更新时

            },
            onUpdateParams: ["purple",'otherArgs'],// 传递动画更新时的参数
        });

        gsap.fromTo(".blue", {x: 20}, {rotation: 360, x: 400, duration: 1, delay: 3});
    }
    function timeLine() {
        let tl = gsap.timeline();
        tl
            .to(".box1", {rotation: 360, x: 100, duration: 1, delay: 1})
            .to(".box2", {rotation: 360, x: 100, duration: 1, delay: 2})
            .to(".box3", {rotation: 360, x: 100, duration: 1, delay: 3},1);
    }
    useEffect(() => {
        return () => {
            // baseLine();// 使用基础的动画
            timeLine(); // 使用时间轴
        };
    }, []);

    return (
        <>
            <GsapWrapper>
                <div className="box green"></div>
                <div className="box purple"></div>
                <div className="box blue"></div>
            </GsapWrapper>
            <h3>使用时间轴</h3>
            <GsapWrapper>
                <div className="box box1 green"></div>
                <div className="box box2 purple"></div>
                <div className="box box3 blue"></div>
            </GsapWrapper>
        </>

    );
};

export default GsapIndex;
