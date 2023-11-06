// pages/ssr.tsx
import { GetServerSideProps, NextPage } from "next";
import Head from 'next/head'

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>
                    이 페이지는 SSR을 통해 접근 시 서버에서 렌더링 된 이미지이다.
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getServerSideProps는 페이지로의 요청이 있을 때마다 실행된다.
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됐다.`
    console.log(message)

    return {
        props: {
            message,
        }
    }
}
export default SSR