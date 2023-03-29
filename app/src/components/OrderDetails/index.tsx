import ButtonLarge from "components/ButtonLarge";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
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
                <OrderItemList
                header={
                <S.OrderDetailsListTitle>
                    <h4>Item</h4>
                    <h4>Qtd</h4>
                    <h4>Preço</h4>

                </S.OrderDetailsListTitle>
                }
                list={"Lista de Itens"}
                footer={
                    <S.OrderDetailsListFooter>
                        <S.OrderDetailsListFooterRow>
                            <span>Subtotal</span>
                            <span>R$ 100,00</span>
                        </S.OrderDetailsListFooterRow>
                        <ButtonLarge value="Continue para o pagamento"/>
                    </S.OrderDetailsListFooter>
                }
                />
            </S.OrderDetailsList>
        </S.OrderDetails>
    );
}

export default orderDetails;