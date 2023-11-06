import {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
    // 서버사이드에서 화면을 그릴 때는 test1이 표시되고
    // 클라이언트 사이드에서 다시 그릴 때는 undefined가 표시된다.
    console.log('process.env.TEST: ', process.env.TEST)

    // 'test2'가 표시된다
    console.log('process.env.NEXT_PUBLIC_TEST: '
    , process.env.NEXT_PUBLIC_TEST)
    
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* 서버사이드에서 화면 그릴 때는 test1이라고 표시된다.
                클라이언트 사이드에서는 시도 시 아무 것도 표시되지 않는다 */}
                <p>{process.env.TEST}</p>
                {/* test2가 표시된다 */}
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    )
}

// getStaticProps는 항상 서버 사이드에서 실행되므로 모든 환경변수 참조 가능
export const getStaticProps: GetStaticProps = async(context) => {
    // test1 표시
    console.log('process.env.TEST: ', process.env.TEST)
    // test2 표시
    console.log('NEXT_PUBLIC_TEST: '
    , process.env.NEXT_PUBLIC_TEST)

    return {
        props: {},
    }
}
export default EnvSample