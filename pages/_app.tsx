// page/_app.tsx
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import {theme} from '../theme'

const MyApp = ({Component, pageProps}: AppProps) => {
    // styled-components에서 테마를 사용하기 위해 ThemeProvider를 둔다
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
export default MyApp

/*
`_app.tsx` 파일은 Next.js 프로젝트에서 모든 페이지에 공통으로 적용되는 최상위 컴포넌트입니다. 이 파일 자체를 직접 브라우저에서 확인하는 것이 아니라, 이 파일에서 정의된 구성 요소들이 프로젝트의 모든 페이지에 적용되는 것을 볼 수 있습니다.

이 파일에 코드를 추가하거나 수정한 후에는 Next.js 개발 서버를 실행해야 변경 사항을 볼 수 있습니다. 터미널에서 Next.js 개발 서버를 실행하려면, 프로젝트의 루트 디렉토리에서 다음 명령어를 사용합니다:

```sh
npm run dev
```

또는 만약 `yarn`을 사용한다면:

```sh
yarn dev
```

이 명령을 실행하면, 보통 `http://localhost:3000` 주소에서 서버가 시작됩니다. 웹 브라우저를 열고 이 주소로 이동하면, 수정한 `_app.tsx`의 효과를 프로젝트 내의 모든 페이지에서 확인할 수 있습니다.

특정 페이지에 대한 변경 사항을 보고 싶다면, 해당 페이지의 경로로 브라우저에서 직접 이동하면 됩니다. 예를 들어, `pages/index.tsx` 파일을 수정했다면 `http://localhost:3000`으로, `pages/about.tsx` 파일을 수정했다면 `http://localhost:3000/about`으로 이동하여 확인할 수 있습니다.
*/

