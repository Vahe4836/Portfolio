import AnimationComp from "./little/Animation";
import { keyframes, styled } from "styled-components";
import './CircleAnimationEffect.css';
// import '../Skills.scss';


export default function CircleAnimationEffect({ percentage, backgroundColor }) {

    // const rotate = keyframes`
    //   from {
    //     transform: rotate(0deg);
    //   }

    //   to {
    //     transform: rotate(110deg);
    //   }
    // `;

    console.log("percentage", percentage);
    console.log("backgroundColor", backgroundColor);

    // const AnimationComp = styled.div`
    //     animation: ${rotate} 2s ease-in-out,
    //     backgroundColor: ${backgroundColor},
    //     transform: rotate(110deg),
    // `;

    //     const Rotate = styled.div`
    //   display: inline-block;
    //   animation: ${rotate} 2s linear infinite;
    //   padding: 2rem 1rem;
    //   font-size: 1.2rem;
    // `;

    // console.log((percentage / 2) * 3.6);


    return (
        <>
            <div className="circle-wrap">
                <div className="circle">

                    <div className="mask full" style={{
                        // backgroundColor: `${backgroundColor}`
                        transform: `rotate(${(percentage / 2) * 3.6}deg)`
                    }}>
                        {/* <AnimationComp
                            percentage={percentage}
                            backgroundColor={backgroundColor}
                        /> */}
                        <div className="fill" style={{
                            background: `${backgroundColor}`,
                            transform: `rotate(${(percentage / 2) * 3.6}deg)`
                        }}></div>
                    </div>

                    <div className="mask half">
                        {/* <AnimationComp
                            percentage={percentage}
                            backgroundColor={backgroundColor}
                        /> */}
                        <div className="fill" style={{
                            background: `${backgroundColor}`,
                            transform: `rotate(${(percentage / 2) * 3.6}deg)`
                        }}></div>
                    </div>

                </div>
            </div>

        </>
    )
}