import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import gsap from 'gsap'

const animationsOnMount = () => {
    const socialIcons = document.querySelector(".socialWrapper").childNodes
    const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })

    socialIcons.forEach((item, id) => {
        if (id < 3) { timeLine.from(item, { opacity: 0, duration: 0.5, scale: 0.5, delay: `0.${id}` }, "start") }
        else { timeLine.from(item, { opacity: 0, duration: 0.5, x: 50 }, "start") }
    })

}

const SocialIcons = (props) => {

    useEffect(() => {
        animationsOnMount()
    }, [])

    const handleHideSocialIcons = () => {
        const timeLine = gsap.timeline({ defaults: { ease: 'power3.ease' } })
        timeLine.to(".backSocialIcon", { backgroundColor: "rgb(165, 165, 165)", width: '100%', duration: 0.5 }, "start")
        timeLine.to("#socialBackIcon", { opacity: 0, duration: 0.4 }, "start")
        setTimeout(() => {
            props.handleUnMountSocialIcons()
        }, 400);
    }
    return (
        <>
            <div className="socialWrapper">
                <a target="_blank" href="https://www.facebook.com/kuba.tarabasz/"><FontAwesomeIcon className="socialIcon" icon={ faFacebook } /></a>
                <a target="_blank" href="https://github.com/jjxmonster"><FontAwesomeIcon className="socialIcon" icon={ faGithub } /></a>
                <a target="_blank" href="https://www.instagram.com/jjxmonster/"><FontAwesomeIcon className="socialIcon" icon={ faInstagram } /></a>
                <div className="backSocialIcon" onClick={ handleHideSocialIcons }>
                    <FontAwesomeIcon icon={ faAngleLeft } id='socialBackIcon' />
                </div>

            </div>

        </>
    );
}




export default SocialIcons;