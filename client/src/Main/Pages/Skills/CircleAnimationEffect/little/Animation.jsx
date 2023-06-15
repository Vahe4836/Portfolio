import "../../Skills.scss";



export default function AnimationComp({backgroundColor, percentage}) {

    // const fill = keyframes`
    //         0% {
    //             transform: rotate(0deg);
    //         }

    //         100% {
    //             transform: rotate(220deg);
    //         }
    //     `;


    // const CircleAnimationEffect = styled.div`
    //     animation: ${fill} ease-in-out 3s;
    //     width: 220px;
    //     height: 220px;
    //     position: absolute;
    //     border-radius: 50%;
    // `;

    return (
        <div className="circle-wrap">
                <div className="circle">

                    <div className="mask full" style={{
                        transform: `rotate(${percentage * 3.6}deg)`
                    }}>

                        <div className="fill" style={{
                            background: `${backgroundColor}`,
                            transform: `rotate(${percentage * 3.6}deg)`
                            // keyframes
                            // `@keyframes fill {
                            //     0% {
                            //         transform: rotate(0deg);
                            //     }

                            //     100% {
                            //         transform: rotate(${item.percentage * 3.6}deg);
                            //     }
                            // }`
                        }}></div>
                    </div>

                    <div className="mask half">
                        <div className="fill" style={{ background: `${backgroundColor}` }}></div>
                    </div>

                </div>
            </div>
    )
}