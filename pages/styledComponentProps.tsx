// src/pages/styledComponentProps

import {NextPage} from 'next'
import styled from 'styled-components'

type ButtonProps = {
    color: string
    backgroundColor: string
}

// 문자 색상과 배경 색상을 prop를 통해 변경할 수 있는 버튼 컴포넌트
// 타입 인수에 props 타입을 전달한다.
const Button  = styled.button<ButtonProps>`
// color, background, border-color는 props에서 전달한다.
color: ${(props) => props.color};
background: ${(props) => props.backgroundColor};
font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 8px;
cursor: pointer;
`

const Page: NextPage = () => {
    return (
        <div>
            {/* props 전달: 빨간색 문자, 투명한 배경의 버튼 표시 */}
            <Button backgroundColor="transparent" color="#FF0000">
                Hello
            </Button>
            {/* props 전달: 흰 문자, 파란색 배경의 버튼을 표시한다. */}
            <Button backgroundColor='#1E90FF' color='white'>
                World
            </Button>
        </div>
    )
}
export default Page