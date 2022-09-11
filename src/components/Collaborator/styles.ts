import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
`;

export const Avatar = styled.div`
  border-radius: 10px 10px 0px 0px;

  img {
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
  }
`;

export const Name = styled.h4`
  color: #6278f7;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Office = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
`;

export const Infos = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;
