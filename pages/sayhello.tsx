import {useState, useEffect} from 'react'

function SayHello() {
    // 내부에서 상태를 가지므로 useState 사용
    const [data, setData] = useState({name: ''})
    // 부가작용에 대해서 useEffect 사용하여 처리

    useEffect(() => {
        // pages/api/hello.ts로 요청
        fetch('api/hello')
            .then((res) => res.json())
            .then((profile) => {
                setData(profile)
            })
    }, [])

    return <div>hello {data.name}</div>
}
export default SayHello