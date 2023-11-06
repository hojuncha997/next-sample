//posts/page.tsx
import {useRouter} from 'next/router' //임포트
import { useEffect } from 'react'   //부가작용 처리용

const Page = () => {
    const router = useRouter()  //useRouter 사용
        
    useEffect(() => {
        router.push('/userouter')
    })
    

    return <span>{router.pathname}</span>
}
export default Page