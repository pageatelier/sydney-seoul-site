# Sydney Seoul — Cloudflare Pages

Workers 없이 Cloudflare Pages에서 정적 사이트로 배포하는 버전입니다.

## VS Code에서 미리보기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다. 한글 페이지는
`http://localhost:3000/ko`입니다. 저장하면 화면이 자동으로 갱신됩니다.

## Cloudflare Pages 설정

- Production branch: `main`
- Framework preset: `Next.js (Static HTML Export)` 또는 `None`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: 비워두기
- Node.js version: `22`

GitHub 저장소 루트에 이 폴더의 내용 전체를 올린 뒤 Pages 프로젝트와
연결하면 됩니다. 별도의 Worker, Wrangler 명령, 환경 변수는 필요하지 않습니다.

## 포함된 공개 경로

- English: `/`
- 한국어: `/ko`
- Robots: `/robots.txt`
- Sitemap: `/sitemap.xml`
