import {NextPage} from 'next'
import Image from 'next/image'

// 이미지 파일 정적 임포트
import EasternPromises from '../public/images/eastern-promises.jpg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시한 경우</p>
            {/* 일반적인 img 태그를 사용해서 이미지 표시 */}
            <img src="/images/eastern-promises.jpg"/>

            <p>Image 컴포넌트로 표시한 경우</p>
            <Image 
                src={EasternPromises}
                //alt: 접근성을 위한 대체 텍스트 제공.필수
                // 정적 임포트의 경우 w, h는 생략 가능하지만 alt는 필수 입력해야 한다.
                alt="Eastern promises" 
            />
            <p>Image 컴포넌트로 표시한 경우 사전에 그리기 영역이 확보된다</p>

        </div>
       
    )
}
export default ImageSample