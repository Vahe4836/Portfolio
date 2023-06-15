import AnimationComp from "./little/Animation";
import { keyframes, styled } from "styled-components";
import '../Skills.scss';


export default function CircleAnimationEffect({ percentage, backgroundColor }) {

    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(${percentage * 3.6}deg);
      }
    `;

    console.log("percentage", percentage);
    console.log("backgroundColor", backgroundColor);

    // const AnimationComp = styled.div`
    //         animation: ${rotate} 3s ease-in-out;
    //         transform: rotate(${percentage * 3.6}deg);
    //     `;

    //     const Rotate = styled.div`
    //   display: inline-block;
    //   animation: ${rotate} 2s linear infinite;
    //   padding: 2rem 1rem;
    //   font-size: 1.2rem;
    // `;

    console.log(rotate);

    return (
        <>
            <div className="circle-wrap">
                <div className="circle">
                    <div className="mask full" style={{
                        transform: `rotate(${percentage * 3.6}deg)`
                    }}>
                        <div className="fill" style={{
                            background: `${backgroundColor}`,
                            transform: `rotate(${percentage * 3.6}deg)`,
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
        </>
    )
}