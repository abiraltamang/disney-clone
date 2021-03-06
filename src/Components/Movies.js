import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="/images/movies-1.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-2.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-3.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-4.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-5.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-6.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-7.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/movies-8.jpg" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content =  styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`
const Wrap =  styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgb(249,249,249,0.1);
    transition: all 250ms cubic-bezier(0.25,0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;

    cursor:pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    &:hover{
        transform : scale(1.05);
        border-color: rgba(249, 249,249,0.8);
    }
`