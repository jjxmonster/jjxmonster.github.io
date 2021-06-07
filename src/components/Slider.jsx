const Slider = ({ images }) => {

    const radioInputs = images.map((item, id) => <input key={ item } type="radio" name="slide" id={ `dot${id + 1}` } selected={ false } />)
    const sliderImages = images.map(item => <img key={ item } alt={ item } src={ item } />)
    const labels = images.map((item, id) => <label key={ item } htmlFor={ `dot${id + 1}` } />)

    return (
        <>
            <div className="slider">
                { radioInputs }
                <div className="slides">
                    <div className="overflow">
                        <div className="image">
                            { sliderImages }
                        </div>
                    </div>
                </div>
                <div className="dots">
                    { labels }
                </div>
            </div>
        </>
    );
}

export default Slider;