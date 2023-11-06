// /pages/themeApplySample.tsx
import {NextPage} from 'next'
import styled from 'styled-components'

const Text = styled.p`
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSizes[3]};
    margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>Theme에서 참조한 색상을 사용하고 있다.</Text>
        </div>
    )
}
export default Page