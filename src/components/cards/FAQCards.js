// component
import Partners from "../pages/partners/Partners";
// styles
import * as S from "./FAQStyledComponents"

export default function FAQCards(props) {
  const { cardData, sectionData } = props;

  return (
    <S.CardsBackgroundForFAQ>
      <Partners />
      <S.FAQTitle>{sectionData.title}</S.FAQTitle>
      <S.FAQCardsContainer>
        <S.FAQCardsWrapper>
          {cardData.map((eachRow, index) => {
            return (
              <S.FAQCardsItem key={index}>
                {eachRow.map((eachItem, index) => {
                  return (
                    <S.FAQCardItem key={index}>
                      <S.FAQQuestion>? {eachItem.question}</S.FAQQuestion>
                      <S.FAQAnswer> {eachItem.answer}</S.FAQAnswer>
                    </S.FAQCardItem>
                  );
                })}
              </S.FAQCardsItem>
            );
          })}
        </S.FAQCardsWrapper>
      </S.FAQCardsContainer>
    </S.CardsBackgroundForFAQ>
  );
}
