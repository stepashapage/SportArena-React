import { useEffect } from "react";
import MainInformation from "../../components/ShopSection/MainInformation/MainInformation";
import PageContent from "../../components/ShopSection/PageContent/PageContent";

export default function Shop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <MainInformation>Магазины и развлечения</MainInformation>
            <PageContent />
        </>
    );
}
