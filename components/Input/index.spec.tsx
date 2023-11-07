// components/Input/index.spec.tsx
import {render, screen, RenderResult, fireEvent} from '@testing-library/react'
import {Input} from './index'


// describe로 처리를 모은다
describe('Input', () => {
    let renderResult: RenderResult

    // 각 테스트 케이스 전에 컴포넌트를 화면에 그리고, renderResult에 설정한다.
    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username"/>)
    })

    // 테스트 케이스 실행 후에 화면에 그려진 컴포넌트를 릴리즈한다.
    afterEach(() => {
        renderResult.unmount()
    })

    // 처음 화면에 그릴 때 input 요소가 비어있는지 테스트
    it('should empty in input on initial render', () => {
        // label이 Username인 컴포넌트에 대응하는 input요소를 얻는다.
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement

        // input요소의 표시가 비어있는지 확인한다.
        expect(inputNode).toHaveValue('')
    })

    // 문자를 입력했을 때 입력한 내용이 표시되는지 확인하는 테스트
    it('should show input text', () => {
        const inputText = "Test Input Text"
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement

        // fireEvent를 사용해 input 요소의 onChange 이벤트를 트리거한다.
        fireEvent.change(inputNode, {target: {va lue: inputText}})

        // input 요소에 입력한 텍스트가 표시되는지 확인한다.
        expect(inputNode).toHaveValue(inputText)
    })

})
