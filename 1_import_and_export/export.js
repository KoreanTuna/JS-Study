/// 1번 방법 : 개별 export

export let apiKey = 'someValue'
export let url = 'http://www.kakao.com'

/// 2번 방법 : default
/// export default는 한 파일에서 한 번만 사용 가능
export default 'someValue'

/// 함수도 export 가능
export function test() {
  console.log('test')
}

/// 객체도 export 가능
export const obj = {
  name: 'object',
  value: 123,
}

/// export할 때 이름을 바꿔서 export 가능
export { apiKey as key }
