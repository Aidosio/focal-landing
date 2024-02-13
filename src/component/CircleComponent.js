import React, {useEffect, useRef} from 'react';
import {Box, Container, styled, Typography} from "@mui/material";

const CircleGroupStyle = styled(Box)`
  width: 100%;
  border: 80px solid rgba(231, 229, 228, 0.48);
  border-radius: 100px;
  filter: blur(40px);
  background: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
  padding: 160px;
`
const CircleWrapperStyle = styled(Box)`
  width: 100%;
  border: 40px solid rgba(231, 229, 228, 0.48);
  border-radius: 100px;
  filter: blur(24px);
  background: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
  padding: 120px;
`
const CircleCenterStyle = styled(Box)`
  width: 100%;
  border: 20px solid rgba(231, 229, 228, 0.88);
  border-radius: 100px;
  filter: blur(16px);
  background: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px;
  z-index: -3;
`

const BoxGroupStyle = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 96px 0 56px 0;
`

const BoxStyle = styled(Box)`
  position: absolute;
  width: 100%;
`

const TextGroupStyle = styled(Box)`
`

const TagStyle = styled(Typography)`
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.84px;
  text-transform: uppercase;
  color: #D1462A;
  text-align: center;
`

const TitleStyle = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
  color: rgb(5, 4, 3);
  font-size: 60.9px;
  font-weight: 500;
  line-height: 76.8px;
  letter-spacing: -2.56px;
`

const IconGroupStyle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
const IconCardStyle = styled(Box)`
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 1px 29px 0 rgba(0, 0, 0, 0.1),0px 4px 5px -1px rgba(0, 0, 0, 0.25);
  background: rgb(255, 152, 152);
  width: 84px;
  height: 84px;
`

const LeftGroupStyle = styled(Box)`
  
`
const GridGroupStyle = styled(Box)`
  
`

function CircleComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Устанавливаем размеры канваса

        canvas.width = 500;
        canvas.height = 530;

        // Настраиваем стили линий
        context.strokeStyle = '#000'; // Цвет линии
        context.lineWidth = 2; // Толщина линии

        context.beginPath();
        context.moveTo(130, 50); // Начальная точка
        context.bezierCurveTo(250, 30, 130, 270, 260, 250); // Две контрольные точки и конечная точка
        context.stroke();

        context.beginPath();
        context.moveTo(10, 190); // Начальная точка
        context.bezierCurveTo(250,  180, 140, 230, 260, 250); // Две контрольные точки и конечная точка
        context.stroke();

        context.beginPath();
        context.moveTo(10, 250); // Начальная точка
        context.bezierCurveTo(250,  180, 140, 230, 260, 250); // Две контрольные точки и конечная точка
        context.stroke();


        // TODO: добавьте остальные линии согласно вашему паттерну

    }, []);

    const CanvasStyle = styled('canvas')`
      position: absolute;
      top: 0;
    `

    return (
        <Container maxWidth={'md'}>
            <BoxGroupStyle>
                <BoxStyle>
                    <TextGroupStyle>
                        <TagStyle>
                            marketing stack integrations
                        </TagStyle>
                        <TitleStyle variant={'h2'}>One central hub for your <br/> assets and team</TitleStyle>
                    </TextGroupStyle>
                    <IconGroupStyle>
                        <LeftGroupStyle>
                            <IconCardStyle className={'A'}></IconCardStyle>
                            <IconCardStyle className={'B'}></IconCardStyle>
                            <IconCardStyle className={'C'}></IconCardStyle>
                            <IconCardStyle className={'D'}></IconCardStyle>
                        </LeftGroupStyle>
                        <IconCardStyle  className={'K'}/>
                        <GridGroupStyle>
                            <IconCardStyle className={'T'}></IconCardStyle>
                            <IconCardStyle className={'Y'}></IconCardStyle>
                            <IconCardStyle className={'U'}></IconCardStyle>
                            <IconCardStyle className={'I'}></IconCardStyle>
                        </GridGroupStyle>
                        <CanvasStyle ref={canvasRef} />
                    </IconGroupStyle>

                    {/*<div style={{*/}
                    {/*    display: 'flex',*/}
                    {/*    width: '100%',*/}
                    {/*    flexDirection: 'row',*/}
                    {/*    justifyContent: 'space-between',*/}
                    {/*}}>*/}
                    {/*    <div className="A">Element A</div>*/}
                    {/*    <SteppedLineTo borderColor={'#000'} from="A" to="B" orientation="v" />*/}
                    {/*    <div className="B">Element B</div>*/}
                    {/*</div>*/}
                </BoxStyle>
                <CircleGroupStyle>
                    <CircleWrapperStyle>
                        <CircleCenterStyle>
                            231
                        </CircleCenterStyle>
                    </CircleWrapperStyle>
                </CircleGroupStyle>
            </BoxGroupStyle>
        </Container>
    );
}

export default CircleComponent;
