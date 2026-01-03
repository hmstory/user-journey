# 배포 가이드

## GitHub Pages 배포 방법

### 방법 1: gh-pages 브랜치 사용 (권장)

1. 배포 스크립트 실행:
```bash
cd /Users/quokka/user-journey-map
./deploy.sh
```

2. GitHub 저장소 Settings → Pages:
   - Source: "Deploy from a branch" 선택
   - Branch: `gh-pages` 선택
   - Folder: `/ (root)` 선택
   - Save

3. 배포 URL: `https://hmstory.github.io/user-journey/`

### 방법 2: 수동 배포

```bash
npm run build
git checkout -b gh-pages
git add dist/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 참고

- Base path가 `/user-journey/`로 설정되어 있습니다.
- 배포 후 1-2분 정도 소요됩니다.
