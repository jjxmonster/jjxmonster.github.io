import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = props => {

    if (window.innerWidth > 1200) {
        return <span onClick={ props.onUnMountFunction } className="spanBck" >HOME</span>
    } else {
        return <FontAwesomeIcon onClick={ props.onUnMountFunction } className="backIcon" icon={ faArrowCircleLeft } />
    }
}

export default BackButton;