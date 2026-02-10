import SectionTitle from "../Common/SectionTitle";
import PricingCard1 from "./PricingCard1";
import mainData from '../../../data/main-data.json';

const Pricing1 = () => {
    const { pricing } = mainData.home;
    return (
        <div className="pricing sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading1">
                            <SectionTitle
                                SubTitle={pricing.subtitle}
                                Title={pricing.title}
                            ></SectionTitle>
                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">

                    {pricing.plans.map((plan, index) => (
                        <PricingCard1
                            key={index}
                            addClass={plan.addClass}
                            popularTitle={plan.popularTitle}
                            title={plan.title}
                            price={plan.price}
                            monthly={plan.monthly}
                            content={plan.content}
                            featuretitle={plan.featureTitle}
                            featurelist={plan.features}
                            btnname={plan.btnName}
                            btnUrl={plan.btnUrl}
                        ></PricingCard1>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Pricing1;