// 큰 규모의 프로젝트라 당장 코드 변경, 삭제는 힘들 때, 파일은 js 그대로 두고 ts의 보호 장치는 사용하고 싶다면? -> @ts-check
// '@ts-check'을 파일 상단에 작성해 ts의 보호 기능 사용 가능
// JSDoc?: JSDoc 주석을 사용해 js 파일에 타입 정보 제공 가능
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
