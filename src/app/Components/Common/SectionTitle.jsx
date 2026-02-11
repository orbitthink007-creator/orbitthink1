
const SectionTitle = ({ Title, SubTitle }) => {
    return (
        <div>
            <span className="span" ><img src="/assets/img/logo/loader.png" alt="" style={{ height: '16px', width: '18px' }} />{String(SubTitle)} </span>
            <h2 className="title tg-element-title" dangerouslySetInnerHTML={{ __html: Title }} ></h2>
        </div>
    );
};

export default SectionTitle;