// componentStyleApply.tsx

import { NextPage } from "next";
import styled from "styled-components";
import Link, {LinkProps} from 'next/link'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string
    children: React.ReactNode
}
// Next.js의 링크에 스타일을 적용하기 위한 헬퍼 컴포넌트.
// 이 컴포넌트를 스타일드 컴포넌트에서 적용하면
// 정의한 스타일에 대응하는 className이 props로서 전달된다.

// 이 className을 a 요소에 전달한다.
const BaseLink = (props: BaseLinkProps) => {
    const {className, children, ...rest} = props
    // Next.js 12 이후의 버전에서는 <Link> 컴포넌트 내에 <a> 
    //태그를 넣을 때, passHref prop을 <Link> 컴포넌트에 추가해야 한다
    //오류나서 legacyBehavior을 넣어서 임시로 해결
    return (
        <Link {...rest} passHref legacyBehavior>
            <a className={className}>{children}</a>
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
    color: #1e90ff;
    font-size: 2em;
`
const Page: NextPage = () => {
    return (
        <div>
            {/* 파란색 링크를 표시한다 */}
            <StyledLink href="/">Go to Index</StyledLink>
        </div>
    )
}
export default Page