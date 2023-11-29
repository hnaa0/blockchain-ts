// js프로젝트에 ts를 적용할 때
// allowjs: true로 설정하면 정의 파일이 없어도 ts가 호출 시그니처를 추론하게 되고 js와 ts 섞어쓸 수 있음

import { init, exit } from "./myPackage";

init();
exit(3);
