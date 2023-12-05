// 블록체인?: 말 그대로 여러 개의 블록이 사슬처럼 묶인 것
// 원래는 crypto의 정의파일을 읽어올 수 없어서 에러가 나지만 ts-node를 설치할 때
// crypto.d.ts가 자동으로 node_modules/@types/node 경로에 생성됐기 때문에 에러는 안 뜸

// https://github.com/DefinitelyTyped/DefinitelyTyped
// definitelyTyped?: 굉장히 큰 레포지토리로 npm에 존재하는 거의 모든 패키지들에 대한 타입 정의로 이루어져있음
import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // 외부에서 blocks에 접근할 수 없도록 새로운 배열로 리턴
    return [...this.blocks];
  }
}

const blockchain = new BlockChain();
blockchain.addBlock("First");
blockchain.addBlock("Second");
blockchain.addBlock("Third");
blockchain.addBlock("Fourth");

console.log(blockchain.getBlocks());
