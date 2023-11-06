// useAsForStyle.tsx
import { NextPage } from "next";
import styled from 'styled-components'

// 파란색 텍스트를 표시하는 컴포넌트
const Text = styled.p`
    color: #1e90ff;
    font-size: 2em;
`
const Page: NextPage = () => {
    return (
        <div>
            {/* p요소에 대해서 파란색 텍스트를 표시 */}
            <Text>World</Text>
            {/* a요소로 대체:파란색 링크 표시 */}
            <Text as="a" href="/">
                Go to index
            </Text>
        </div>
    )
}
export default Page