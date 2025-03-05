/// export.js에서 개별 export한 apiKey를 import
/// React에서는 확장자 생략 가능
import { apiKey, url as kakaoUrl } from './export.js'

console.log(apiKey) // someValue
console.log(kakaoUrl) // http://www.kakao.com

/// export.js에서 default로 export한 값을 import
import defaultExport from './export.js'

console.log(defaultExport) // someValue

/// export.js에서 export된 값을 객체로 받기
import * as data from './export.js'

console.log(data.apiKey) // someValue
console.log(data.url) // http://www.kakao.com
