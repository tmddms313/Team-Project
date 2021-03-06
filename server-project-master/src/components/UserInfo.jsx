//https://react-icons.github.io/react-icons/#/
import React from 'react'
import styled from 'styled-components'
import { BsPersonFill } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";

const UserInfo = () => {

    const Maindiv = styled.div`
        display: flex;
        white-space: nowrap;
        width: 1000px;
        height: 550px;
    `

    const User = styled.div`
        width: 20%;
        height: 100%;
        border: 1px solid #999;
        border-right: 0;
        box-sizing: border-box;
        background-color: #29b2ef;
        font-size: 100px;
        line-height: 600px;
        text-align: center;
    `

    const Info = styled.div`
        width: 80%;
        height: 100%;
        border: 1px solid #999;
        border-left: 0;
        box-sizing: border-box;
        padding: 10px 50px;
        font-size: 20px;
    `
    const Basicinfo = styled.div`
        display: flex;
        width: 100%;
        height: 10%;
        line-height: 70px;
        margin: 5px 0;
    `
    const Addinfo = styled.div`
        display: flex;
        width: 100%;
        height: 15%;
        line-height: 70px;
    `
    const License = styled.div`
        width: 600px;
        height: 180px;
        border: 1px solid #999;
        margin: 20px 0 10px;
    `
    const Licensetop = styled.div`
        display: flex;
        overflow: auto;
        width: 100%;
        height: 30px;
        border-bottom: 2px solid #999;
    `
    const LicenseNum = styled.div`
        width: 20%;
        text-align: center;
    `
    const LicenseElement = styled.div`
        width: 40%;
        text-align: center;
    `
    const LicenseMain = styled.ul`
        width: 600px;
        height: 150px; 
        padding: 0;
        margin: 0;
        overflow: auto;
    `
    const LicenseList = styled.li`
        display: flex;
        height : 40px;
        border-bottom : 1px solid #999;
        line-height: 40px;
        text-align: center;
    `
    const ContentElement = styled.div`
        width: 40%;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
    `
    const Btndiv = styled.div`
        display: flex;
        padding: 20px;
        font-size: 20px;
    `
    const Infobtn = styled.div`
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin: 0 50px;
        background-color: #29b2ef;
        color: #fff;
        line-height: 40px;
        text-align: center;
    `
    const Link = styled.a`
        color: blue;
    `

    return (
        <div>
            <Maindiv>
                <User><BsPersonFill size="200" color="white" /></User>
                <Info>
                    <Basicinfo>?????? : ?????????</Basicinfo>
                    <Basicinfo>?????? : 23</Basicinfo>
                    <Basicinfo>?????? : ?????????</Basicinfo>
                    <License>
                        <Licensetop>
                            <LicenseNum>No.</LicenseNum>
                            <LicenseElement>?????????</LicenseElement>
                            <LicenseElement>????????? ??????</LicenseElement>
                        </Licensetop>
                        <LicenseMain>
                            <LicenseList>
                                <LicenseNum>1</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>2</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>3</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>4</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>5</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                        </LicenseMain>
                    </License>
                    <Addinfo>
                        <ContentElement><div>????????????</div><GiQueenCrown size="35" style= {{ color: 'pink', marginLeft: '25px'}} /></ContentElement>
                        <ContentElement><div>????????? ??????</div><div style= {{ color: 'gray', fontSize: '20px' }}>?????? ??????????????????.</div></ContentElement>
                    </Addinfo>
                    <Addinfo>
                        <ContentElement><Link href="">????????? ??? ??????</Link></ContentElement>
                        <ContentElement><Link href="">????????? ?????? ??????</Link></ContentElement>
                    </Addinfo>
                </Info>
            </Maindiv>
            <Btndiv>
                <Infobtn>??????????????????</Infobtn>
                <Infobtn>????????????</Infobtn>
            </Btndiv>
        </div>
    )
}

export default UserInfo