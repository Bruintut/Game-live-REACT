import ButtonToggle from "components/ButtonToggle";
import * as S from "./style";

const orderDetails = () =>{
    return(
        <S.OrderDetails>
            <S.OrderDetailsTitle>Dtalhes do Pedido</S.OrderDetailsTitle>
            <S.OrderDetailsButtonGroup>
                <ButtonToggle active={true} value="Comer no local"/>
                <ButtonToggle active={false} value="Para Viagem"/>
                <ButtonToggle active={true} value="Delivery"/>
            </S.OrderDetailsButtonGroup>
            <S.OrderDetailsList>
                
            </S.OrderDetailsList>
        </S.OrderDetails>
    );
}

export default orderDetails;