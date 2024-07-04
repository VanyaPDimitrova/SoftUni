import FeatureContentColumn from './FeatureContentColumn';
import FeatureContentContainer from './FeatureContentContainer';
import FeatureContentMediaLeftColumn from './FeatureContentMediaLeftColumn';
import FeatureContentMediaRightColumn from './FeatureContentMediaRightColumn';
import FeatureContentMobile from './FeatureContentMobile';

function FeatureContent() {
    return (
        <FeatureContentContainer>
            <FeatureContentColumn classColumn="col-md-4 col-sm-12" >
                <FeatureContentMediaLeftColumn 
                    dataWowDelay="0.2s" 
                    header="Fast Processing" 
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore"
                    classFa="fa fa-bolt"
                />
                <FeatureContentMediaLeftColumn 
                    dataWowDelay="0.4s"
                    header="Low Power Consuming" 
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore" 
                    classFa="fa fa-battery-full"
                />
                <FeatureContentMediaLeftColumn 
                    dataWowDelay="0.6s"
                    header="Wifi Compatibility" 
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore" 
                    classFa="fa fa-wifi" 
                />
            </FeatureContentColumn>

            <FeatureContentColumn classColumn="col-md-4 d-none d-md-block d-lg-block">
                <FeatureContentMobile />
            </FeatureContentColumn>

            <FeatureContentColumn classColumn="col-md-4 col-sm-12" >
                <FeatureContentMediaRightColumn 
                    dataWowDelay="0.2s"
                    classFa="fa fa-check-double"
                    header="Regular Updates"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore" 
                />
                <FeatureContentMediaRightColumn 
                    dataWowDelay="0.4s"
                    classFa="fa fa-dollar-sign"
                    header="Save Money"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labor" 
                />
                <FeatureContentMediaRightColumn 
                    dataWowDelay="0.6s"
                    classFa="fa fa-hdd"
                    header="Unlimited Storage"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore" 
                />
            </FeatureContentColumn>
        </FeatureContentContainer>
    );
}

export default FeatureContent;
