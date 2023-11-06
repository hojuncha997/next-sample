// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
    name: string
}

// api/hello에서 호출될 때의 API 작동을 구현한다.
export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    // 상태 200으로 {"name" : 'John Doe'} 반환
    res.status(200).json({name: 'John Doe'})
}