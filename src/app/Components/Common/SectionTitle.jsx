
const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
            <span className="span" ><img src="/assets/img/icons/span1.png" alt="" />{String(SubTitle)} </span>
            <h2 className="title tg-element-title" dangerouslySetInnerHTML={{__html:Title}} ></h2>   
        </div>
    );
};

export default SectionTitle;