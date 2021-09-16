# capstone

## 필독
Front 작업은 꼭 client 디렉토리 안에서만!!
Backend 작업은 꼭 server 디렉토리 안에서만!!

capstone 디렉토리에서는 작업 금지입니다.
현재 capstone 디렉토리 package.json 코드 다음과 같은데
되도록이면 변경 안되게 해주세요
```
{
  "name": "capstone",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start" : "concurrently \"npm run start --prefix client\" \"npm run start:dev --prefix server\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^6.2.1"
  }
}
```

## 서버 구동
### 클라이언트만 구동
-> 클라이언트 디렉토리에서 npm run start (자세한건 client 디렉토리의 package.json에 적혀있는 script 볼 것)
### 서버만 구동
-> 서버 디렉토리에서 npm run start <br>
-> 서버 디렉토리에서 npm run start:dev (노드몬)
### 동시에 구동
-> 루트 디렉토리(capstone 디렉토리)에서 npm run start (그러나 클라이언트 켜지는게 맘에 안듬 자세한건 비교바람 설명이 힘드네요)

## 기타 읽어보면 좋을 것들
좋은 커밋 메시지를 남기는법 https://blog.ull.im/engineering/2019/03/10/logs-on-git.html <br>
// 귀찮으면 그냥 한국말로 남겨도 됩니다.
