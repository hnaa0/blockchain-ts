// 정의 파일: ts가 알 수 있게 호출 시그니처(타입) 작성
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}

// 만약 npm 파일 또는 프로젝트를 다운받았는데 타입이 없어서 에러가 뜬다면? -> 타입 정의 가능!
