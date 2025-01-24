import { Container } from "react-bootstrap"

const MobilePlayer = () => {
    return (
        <Container className='d-flex justify-content-between d-lg-none p-2 rounded text-white align-items-center' style={{backgroundColor: '#242424', position: 'fixed', bottom: '2%', left: '3%', right: '3%   '}}>
            <img src="" className='rounded' style={{width: '4em', height: '4em'}}/>
            <div>
            <i className="bi bi-play-fill me-2 fs-1"></i>
            <i className="bi bi-skip-forward-fill me-2 fs-1"></i>
            </div>
        </Container>
    )
}

export default MobilePlayer