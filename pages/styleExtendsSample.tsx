// pages/styleExtendsSample.tsx
import {NextPage} from 'next'
import styled from 'styled-components'

// 파란색 굵은 문자를 표시하는 컴포넌트
const Text = styled.p`
    color: blue;
    font-weight: bold;
`

// Text를 상속하고, 경계선 스타일을 추가한 컴포넌트
// 상하 8px, 좌우 16px 패딩
const BorderedText = styled(Text)`
    padding: 8px 16px; 
    border: 3px solid blue;
    border-radius: 8px;
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>Hello</Text>
            <BorderedText>World</BorderedText>
        </div>
    )
}
export default Page