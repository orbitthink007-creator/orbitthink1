const SectionTitle2 = ({Title,SubTitle}) => {
    return (
        <div>
            <span className="span" data-aos="zoom-in-left" data-aos-duration="700" dangerouslySetInnerHTML={{__html:SubTitle}} ></span>
            <h2 className="title tg-element-title" dangerouslySetInnerHTML={{__html:Title}} ></h2>
        </div>
    );
};

export default SectionTitle2;