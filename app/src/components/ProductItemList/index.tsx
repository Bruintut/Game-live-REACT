import * as S from "./style";

const ProductItemList = () =>{
    return(
        <section>
            <S.ProductItemListHeader>
                <S.ProductItemListHeaderTitle>Escolha o sabor</S.ProductItemListHeaderTitle>
                <S.ProductItemListHeaderSelect>
                    <option value="default">Selecione a mesa</option>
                    <option value="">Mesa</option>
                </S.ProductItemListHeaderSelect>
            </S.ProductItemListHeader>
            <S.ProductItemList>
                
            </S.ProductItemList>
        </section>
    );
}

export default ProductItemList;