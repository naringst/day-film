import styled from "styled-components";
import Image from "next/image";
import tempimage from "../../public/help.png";
import Heartbutton from "@/components/common/Heartbutton";
import React, { useState } from "react";
export default function detail() {
  const [selected, setSelected] = useState(true);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "detail") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  return (
    <Wrapper>
      <InfoDiv>
        <div>
          <h1>카테고리 {`>`} 카메라</h1>
          <ProductImage></ProductImage>
        </div>
        <DetailDiv>
          <h1>언더독렌탈</h1>
          <TitleDiv>
            <Title>Canon EOS Rebel T7 18-55mm 번들 세트</Title>
            <Heartbutton />
          </TitleDiv>
          <hr />
          <Div>
            <div>10000원 / 1일</div>
            <div>예약날짜 선택</div>
            <div>가격 30000원</div>
          </Div>
          <br />
          <ButtonDiv>
            <Button color="reservation">예약하기</Button>
            <Button>장바구니</Button>
          </ButtonDiv>
        </DetailDiv>
      </InfoDiv>

      <Div>
        <TabDiv>
          <Tab name="detail" onClick={onClick} selected={selected}>
            상품 설명
          </Tab>
          <Tab name="review" onClick={onClick} selected={!selected}>
            상품 리뷰
          </Tab>
        </TabDiv>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 1000px;
  padding-left: 320px;
  padding-right: 10px;
`;
const InfoDiv = styled.div`
  display: flex;
  width: 900px;
`;

const DetailDiv = styled.div`
  margin-left: 50px;
  padding: 5px;
  width: 100%;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductImage = styled.div`
  background-color: ${(props) => props.theme.searchColor};
  width: 464px;
  height: 380px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Div = styled.div`
  padding: 30px;
`;

const Hr = styled.hr`
  color: black;
  width: 900px;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin: 30px;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color ? props.theme.pointColor : props.theme.searchColor};
  border: none;
  cursor: pointer;
  width: 145px;
  height: 54px;
  font-size: 15px;
`;
const TabDiv = styled.div`
  display: flex;
  width: 900px;
`;
const Tab = styled(Button)<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? props.theme.pointColor : props.theme.searchColor};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
