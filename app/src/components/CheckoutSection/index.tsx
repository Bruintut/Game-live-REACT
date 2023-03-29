import OrderConfirmation from "components/OrderConfirmation";
import * as S from "./style";

const CheckoutSection = () =>{
    return(
        <S.CheckoutSection closing={false}>
            <S.CheckoutSectionConfirmation>
                <S.BackIcon/>
                <OrderConfirmation/>
            </S.CheckoutSectionConfirmation>
            <S.CheckoutSectionPayment>
                <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
                <S.CheckoutSectionPaymentSub>
                    2 métodos de pagamento disponíveis
                </S.CheckoutSectionPaymentSub>
                <S.CheckoutSectionPaymentForm>
                    <S.CheckoutSectionPaymentFormTitle>Método de Pagamento</S.CheckoutSectionPaymentFormTitle>
                    <S.PaymentForm>
                        <S.PaymentFormCheckbox>
                          {"Componente Checbox"}
                          {"Componente Checbox"}  
                        </S.PaymentFormCheckbox>
                        <>
                            <S.PaymentFormGroup>
                                <label htmlFor="titular"> Titular do cartão</label>
                                <input type="text" name="titular" id="titular" placeholder="Seu nome"/>
                            </S.PaymentFormGroup>
                            <S.PaymentFormGroup>
                                <label htmlFor="card"> Número do cartão</label>
                                <input type="text" name="card" id="card" placeholder=" 5277 0535 7126 4658"/>
                            </S.PaymentFormGroup>
                            <S.PaymentFormHalf>
                                <S.PaymentFormHalfItem>
                                    <label htmlFor="validity">Validade</label>
                                    <input type="text" name="card" id="validity" placeholder=" 08/2030"/>
                                </S.PaymentFormHalfItem>
                                <S.PaymentFormHalfItem>
                                    <label htmlFor="cvv"> CVV</label>
                                    <input type="text" name="cvv" id="cvv" placeholder=" 527"/>
                                </S.PaymentFormHalfItem>
                            </S.PaymentFormHalf>
                        </>
                    </S.PaymentForm>
                </S.CheckoutSectionPaymentForm>
                <S.PaymentActions>
                    <S.PaymentActionsDetails>
                        <S.PaymentActionsDetailsOrderType>
                            <label htmlFor="card">Tipo de pedido</label>
                            <select
                                onChange={({ target }) => onChangeActiveOrderType(target.value as OrderType)}
                                name="order-type"
                                id="order-type"
                                value={Object.values(OrderType)
                                    .filter((option) => option === activeOrderType)
                                    .pop()}
                            >
                                {Object.values(OrderType).map((value, idx) => (
                                    <option key={`OrderType-${idx}`} value={value}>
                                        {value}
                                    </option>
                                ))}

                            </select>
                        </S.PaymentActionsDetailsOrderType>
                        <S.PaymentActionsDetailsTableNumber>
                            <label htmlFor="card">Número da mesa</label>
                            <input type="text" name="table" id="table" placeholder="07" disabled value={selectedTable} />
                        </S.PaymentActionsDetailsTableNumber>
                    </S.PaymentActionsDetails>

                    <S.PaymentActionsButtonGroup>
                        <S.PaymentActionsButtonGroupCancel onClick={handleCloseSection}>
                            Cancelar
                        </S.PaymentActionsButtonGroupCancel>
                        <S.PaymentActionsButtonGroupConfirm onClick={handlePaymentConfirm}>
                            Confirmar Pagamento
                        </S.PaymentActionsButtonGroupConfirm>
                    </S.PaymentActionsButtonGroup>
                </S.PaymentActions>
            </S.CheckoutSectionPayment>
        </S.CheckoutSection>

    );
}

export default CheckoutSection;