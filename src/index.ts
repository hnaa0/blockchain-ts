// 노드모듈에 설치된 js모듈을 어떻게 사용할까?
// myPackage.js를 노드모듈이라고 가정했을 때, ts는 myPackage의 정의 파일을 찾을 수 없음 = 이게 뭔지 모름
// => ts에게 설명해줘야 함 => myPackage.d.ts

import { init, exit } from "myPackage";

init({ url: "true" });
exit(3);
